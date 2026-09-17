export default async function handler(req, res) {
  // ==========================================
  // CORS
  // ==========================================

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ==========================================
  // Only POST
  // ==========================================

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed"
    });
  }

  // ==========================================
  // Check API Key
  // ==========================================

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing");

    return res.status(500).json({
      success: false,
      error: "Gemini API key is not configured"
    });
  }

  try {
    // ==========================================
    // Read request body
    // ==========================================

    const { image, mimeType } = req.body || {};

    if (!image) {
      return res.status(400).json({
        success: false,
        error: "No image was provided"
      });
    }

    // ==========================================
    // Validate image type
    // ==========================================

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    const finalMimeType = allowedTypes.includes(mimeType)
      ? mimeType
      : "image/jpeg";

    // ==========================================
    // Remove Data URL prefix if present
    // ==========================================

    let base64Image = image;

    if (image.includes(",")) {
      base64Image = image.split(",")[1];
    }

    if (!base64Image) {
      return res.status(400).json({
        success: false,
        error: "Invalid image data"
      });
    }

    // ==========================================
    // Gemini Prompt
    // ==========================================

    const prompt = `
You are a nutrition estimation assistant inside a fitness app called NutriX.

Analyze the food shown in the image.

Your job is to:

1. Identify the visible foods.
2. Estimate the portion size in grams.
3. Estimate calories.
4. Estimate protein in grams.
5. Estimate carbohydrates in grams.
6. Estimate fat in grams.
7. Calculate the total nutrition for the whole meal.

IMPORTANT:

- These are estimates, not laboratory measurements.
- Do not claim exact nutritional values.
- If the portion size is unclear, make a reasonable visual estimate.
- Consider visible cooking methods and ingredients when possible.
- Do not invent ingredients that cannot reasonably be inferred.
- If sauces, oils, cheese, or other additions are visible, consider them.
- If the image does not contain food, return an empty foods array.
- Use English names for food items.
- Return ONLY valid JSON.
`;

    // ==========================================
    // Gemini API Request
    // ==========================================

    const geminiResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inline_data: {
                    mime_type: finalMimeType,
                    data: base64Image
                  }
                },
                {
                  text: prompt
                }
              ]
            }
          ],

          generationConfig: {
            responseMimeType: "application/json",

            responseSchema: {
              type: "object",

              properties: {
                foods: {
                  type: "array",

                  items: {
                    type: "object",

                    properties: {
                      name: {
                        type: "string"
                      },

                      estimatedGrams: {
                        type: "number"
                      },

                      calories: {
                        type: "number"
                      },

                      protein: {
                        type: "number"
                      },

                      carbs: {
                        type: "number"
                      },

                      fat: {
                        type: "number"
                      }
                    },

                    required: [
                      "name",
                      "estimatedGrams",
                      "calories",
                      "protein",
                      "carbs",
                      "fat"
                    ]
                  }
                },

                total: {
                  type: "object",

                  properties: {
                    calories: {
                      type: "number"
                    },

                    protein: {
                      type: "number"
                    },

                    carbs: {
                      type: "number"
                    },

                    fat: {
                      type: "number"
                    }
                  },

                  required: [
                    "calories",
                    "protein",
                    "carbs",
                    "fat"
                  ]
                },

                confidence: {
                  type: "number"
                },

                note: {
                  type: "string"
                }
              },

              required: [
                "foods",
                "total",
                "confidence",
                "note"
              ]
            }
          }
        })
      }
    );

    // ==========================================
    // Gemini Error
    // ==========================================

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();

      console.error(
        "Gemini API Error:",
        errorText
      );

      return res.status(geminiResponse.status).json({
        success: false,
        error: `Gemini API Error: ${errorText}`
      });
    }

    // ==========================================
    // Parse Gemini Response
    // ==========================================

    const data = await geminiResponse.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error(
        "Unexpected Gemini response:",
        JSON.stringify(data)
      );

      return res.status(500).json({
        success: false,
        error: "No analysis result returned"
      });
    }

    // ==========================================
    // Parse JSON
    // ==========================================

    let result;

    try {
      result = JSON.parse(text);
    } catch (error) {
      console.error(
        "Invalid JSON from Gemini:",
        text
      );

      return res.status(500).json({
        success: false,
        error: "Gemini returned invalid JSON"
      });
    }

    // ==========================================
    // Final Response
    // ==========================================

    return res.status(200).json({
      success: true,
      result
    });

  } catch (error) {

    console.error(
      "Analyze food error:",
      error
    );

    return res.status(500).json({
      success: false,
      error: "Failed to analyze food image"
    });
  }
}