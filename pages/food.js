// ========================================
// NutriX Food Tracker
// ========================================


// ========================================
// Food Database
// Nutrition values are per 100g
// Juices are per 100ml
// ========================================

const foods = {

  // ======================================
  // PROTEIN
  // ======================================

  chicken_breast: {
    name: "Chicken Breast",
    category: "Protein",
    emoji: "🍗",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6
  },

  chicken_thigh: {
    name: "Chicken Thigh",
    category: "Protein",
    emoji: "🍗",
    calories: 209,
    protein: 26,
    carbs: 0,
    fat: 10.9
  },

  turkey: {
    name: "Turkey Breast",
    category: "Protein",
    emoji: "🦃",
    calories: 135,
    protein: 29,
    carbs: 0,
    fat: 1.6
  },

  lean_beef: {
    name: "Lean Beef",
    category: "Protein",
    emoji: "🥩",
    calories: 217,
    protein: 26,
    carbs: 0,
    fat: 12
  },

  steak: {
    name: "Steak",
    category: "Protein",
    emoji: "🥩",
    calories: 271,
    protein: 25,
    carbs: 0,
    fat: 19
  },

  ground_beef: {
    name: "Ground Beef",
    category: "Protein",
    emoji: "🥩",
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 17
  },

  lamb: {
    name: "Lamb",
    category: "Protein",
    emoji: "🍖",
    calories: 294,
    protein: 25,
    carbs: 0,
    fat: 21
  },

  tuna: {
    name: "Tuna",
    category: "Protein",
    emoji: "🐟",
    calories: 132,
    protein: 28,
    carbs: 0,
    fat: 1
  },

  salmon: {
    name: "Salmon",
    category: "Protein",
    emoji: "🐟",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13
  },

  sardines: {
    name: "Sardines",
    category: "Protein",
    emoji: "🐟",
    calories: 208,
    protein: 25,
    carbs: 0,
    fat: 11
  },

  shrimp: {
    name: "Shrimp",
    category: "Protein",
    emoji: "🦐",
    calories: 99,
    protein: 24,
    carbs: 0.2,
    fat: 0.3
  },

  tilapia: {
    name: "Tilapia",
    category: "Protein",
    emoji: "🐟",
    calories: 128,
    protein: 26,
    carbs: 0,
    fat: 2.7
  },

  cod: {
    name: "Cod",
    category: "Protein",
    emoji: "🐟",
    calories: 82,
    protein: 18,
    carbs: 0,
    fat: 0.7
  },

  whole_egg: {
    name: "Whole Egg",
    category: "Protein",
    emoji: "🥚",
    calories: 143,
    protein: 12.6,
    carbs: 0.7,
    fat: 9.5
  },

  egg_whites: {
    name: "Egg Whites",
    category: "Protein",
    emoji: "🥚",
    calories: 52,
    protein: 10.9,
    carbs: 0.7,
    fat: 0.2
  },


  // ======================================
  // GRAINS & CARBS
  // ======================================

  white_rice: {
    name: "White Rice",
    category: "Grains & Carbs",
    emoji: "🍚",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3
  },

  brown_rice: {
    name: "Brown Rice",
    category: "Grains & Carbs",
    emoji: "🍚",
    calories: 123,
    protein: 2.7,
    carbs: 25.6,
    fat: 1
  },

  basmati_rice: {
    name: "Basmati Rice",
    category: "Grains & Carbs",
    emoji: "🍚",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3
  },

  pasta: {
    name: "Pasta",
    category: "Grains & Carbs",
    emoji: "🍝",
    calories: 131,
    protein: 5,
    carbs: 25,
    fat: 1.1
  },

  whole_wheat_pasta: {
    name: "Whole Wheat Pasta",
    category: "Grains & Carbs",
    emoji: "🍝",
    calories: 124,
    protein: 5.3,
    carbs: 27,
    fat: 0.5
  },

  oats: {
    name: "Oats",
    category: "Grains & Carbs",
    emoji: "🥣",
    calories: 389,
    protein: 16.9,
    carbs: 66.3,
    fat: 6.9
  },

  quinoa: {
    name: "Quinoa",
    category: "Grains & Carbs",
    emoji: "🌾",
    calories: 120,
    protein: 4.4,
    carbs: 21.3,
    fat: 1.9
  },

  couscous: {
    name: "Couscous",
    category: "Grains & Carbs",
    emoji: "🍚",
    calories: 112,
    protein: 3.8,
    carbs: 23.2,
    fat: 0.2
  },

  bulgur: {
    name: "Bulgur",
    category: "Grains & Carbs",
    emoji: "🌾",
    calories: 83,
    protein: 3.1,
    carbs: 18.6,
    fat: 0.2
  },


  // ======================================
  // BREAD
  // ======================================

  white_bread: {
    name: "White Bread",
    category: "Bread",
    emoji: "🍞",
    calories: 266,
    protein: 8.9,
    carbs: 49,
    fat: 3.2
  },

  whole_wheat_bread: {
    name: "Whole Wheat Bread",
    category: "Bread",
    emoji: "🍞",
    calories: 247,
    protein: 13,
    carbs: 41,
    fat: 4.2
  },

  toast: {
    name: "Toast",
    category: "Bread",
    emoji: "🍞",
    calories: 260,
    protein: 9,
    carbs: 49,
    fat: 3
  },

  pita: {
    name: "Pita Bread",
    category: "Bread",
    emoji: "🫓",
    calories: 275,
    protein: 9,
    carbs: 56,
    fat: 1.2
  },

  tortilla: {
    name: "Tortilla",
    category: "Bread",
    emoji: "🌯",
    calories: 310,
    protein: 8,
    carbs: 52,
    fat: 8
  },


  // ======================================
  // POTATOES
  // ======================================

  potato: {
    name: "Potato",
    category: "Potatoes",
    emoji: "🥔",
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1
  },

  sweet_potato: {
    name: "Sweet Potato",
    category: "Potatoes",
    emoji: "🍠",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1
  },

  baked_potato: {
    name: "Baked Potato",
    category: "Potatoes",
    emoji: "🥔",
    calories: 93,
    protein: 2.5,
    carbs: 21,
    fat: 0.1
  },


  // ======================================
  // DAIRY
  // ======================================

  whole_milk: {
    name: "Whole Milk",
    category: "Dairy",
    emoji: "🥛",
    calories: 61,
    protein: 3.2,
    carbs: 4.8,
    fat: 3.3
  },

  low_fat_milk: {
    name: "Low Fat Milk",
    category: "Dairy",
    emoji: "🥛",
    calories: 50,
    protein: 3.4,
    carbs: 5,
    fat: 1.8
  },

  skim_milk: {
    name: "Skim Milk",
    category: "Dairy",
    emoji: "🥛",
    calories: 34,
    protein: 3.4,
    carbs: 5,
    fat: 0.1
  },

  greek_yogurt: {
    name: "Greek Yogurt",
    category: "Dairy",
    emoji: "🥛",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4
  },

  plain_yogurt: {
    name: "Plain Yogurt",
    category: "Dairy",
    emoji: "🥛",
    calories: 61,
    protein: 3.5,
    carbs: 4.7,
    fat: 3.3
  },

  cottage_cheese: {
    name: "Cottage Cheese",
    category: "Dairy",
    emoji: "🧀",
    calories: 98,
    protein: 11,
    carbs: 3.4,
    fat: 4.3
  },

  cheddar: {
    name: "Cheddar Cheese",
    category: "Dairy",
    emoji: "🧀",
    calories: 403,
    protein: 25,
    carbs: 1.3,
    fat: 33
  },

  mozzarella: {
    name: "Mozzarella",
    category: "Dairy",
    emoji: "🧀",
    calories: 280,
    protein: 28,
    carbs: 3,
    fat: 17
  },


  // ======================================
  // FRUITS
  // ======================================

  banana: {
    name: "Banana",
    category: "Fruits",
    emoji: "🍌",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3
  },

  apple: {
    name: "Apple",
    category: "Fruits",
    emoji: "🍎",
    calories: 52,
    protein: 0.3,
    carbs: 13.8,
    fat: 0.2
  },

  orange: {
    name: "Orange",
    category: "Fruits",
    emoji: "🍊",
    calories: 47,
    protein: 0.9,
    carbs: 11.8,
    fat: 0.1
  },

  grapes: {
    name: "Grapes",
    category: "Fruits",
    emoji: "🍇",
    calories: 69,
    protein: 0.7,
    carbs: 18,
    fat: 0.2
  },

  strawberry: {
    name: "Strawberry",
    category: "Fruits",
    emoji: "🍓",
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fat: 0.3
  },

  blueberry: {
    name: "Blueberry",
    category: "Fruits",
    emoji: "🫐",
    calories: 57,
    protein: 0.7,
    carbs: 14.5,
    fat: 0.3
  },

  watermelon: {
    name: "Watermelon",
    category: "Fruits",
    emoji: "🍉",
    calories: 30,
    protein: 0.6,
    carbs: 7.6,
    fat: 0.2
  },

  mango: {
    name: "Mango",
    category: "Fruits",
    emoji: "🥭",
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4
  },

  pineapple: {
    name: "Pineapple",
    category: "Fruits",
    emoji: "🍍",
    calories: 50,
    protein: 0.5,
    carbs: 13,
    fat: 0.1
  },

  dates: {
    name: "Dates",
    category: "Fruits",
    emoji: "🌴",
    calories: 282,
    protein: 2.5,
    carbs: 75,
    fat: 0.4
  },

  avocado: {
    name: "Avocado",
    category: "Fruits",
    emoji: "🥑",
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7
  },


  // ======================================
  // VEGETABLES
  // ======================================

  tomato: {
    name: "Tomato",
    category: "Vegetables",
    emoji: "🍅",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2
  },

  cucumber: {
    name: "Cucumber",
    category: "Vegetables",
    emoji: "🥒",
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1
  },

  lettuce: {
    name: "Lettuce",
    category: "Vegetables",
    emoji: "🥬",
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2
  },

  spinach: {
    name: "Spinach",
    category: "Vegetables",
    emoji: "🥬",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4
  },

  broccoli: {
    name: "Broccoli",
    category: "Vegetables",
    emoji: "🥦",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4
  },

  cauliflower: {
    name: "Cauliflower",
    category: "Vegetables",
    emoji: "🥦",
    calories: 25,
    protein: 1.9,
    carbs: 5,
    fat: 0.3
  },

  carrot: {
    name: "Carrot",
    category: "Vegetables",
    emoji: "🥕",
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2
  },

  bell_pepper: {
    name: "Bell Pepper",
    category: "Vegetables",
    emoji: "🫑",
    calories: 31,
    protein: 1,
    carbs: 6,
    fat: 0.3
  },

  onion: {
    name: "Onion",
    category: "Vegetables",
    emoji: "🧅",
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1
  },

  green_beans: {
    name: "Green Beans",
    category: "Vegetables",
    emoji: "🫘",
    calories: 31,
    protein: 1.8,
    carbs: 7,
    fat: 0.2
  },

  peas: {
    name: "Peas",
    category: "Vegetables",
    emoji: "🫛",
    calories: 81,
    protein: 5.4,
    carbs: 14.5,
    fat: 0.4
  },


  // ======================================
  // LEGUMES
  // ======================================

  lentils: {
    name: "Lentils",
    category: "Legumes",
    emoji: "🫘",
    calories: 116,
    protein: 9,
    carbs: 20,
    fat: 0.4
  },

  chickpeas: {
    name: "Chickpeas",
    category: "Legumes",
    emoji: "🫘",
    calories: 164,
    protein: 8.9,
    carbs: 27.4,
    fat: 2.6
  },

  kidney_beans: {
    name: "Kidney Beans",
    category: "Legumes",
    emoji: "🫘",
    calories: 127,
    protein: 8.7,
    carbs: 22.8,
    fat: 0.5
  },

  black_beans: {
    name: "Black Beans",
    category: "Legumes",
    emoji: "🫘",
    calories: 132,
    protein: 8.9,
    carbs: 23.7,
    fat: 0.5
  },

  fava_beans: {
    name: "Fava Beans",
    category: "Legumes",
    emoji: "🫘",
    calories: 110,
    protein: 7.6,
    carbs: 19.7,
    fat: 0.4
  },


  // ======================================
  // NUTS
  // ======================================

  almonds: {
    name: "Almonds",
    category: "Nuts",
    emoji: "🌰",
    calories: 579,
    protein: 21.2,
    carbs: 21.6,
    fat: 49.9
  },

  walnuts: {
    name: "Walnuts",
    category: "Nuts",
    emoji: "🌰",
    calories: 654,
    protein: 15.2,
    carbs: 13.7,
    fat: 65.2
  },

  peanuts: {
    name: "Peanuts",
    category: "Nuts",
    emoji: "🥜",
    calories: 567,
    protein: 25.8,
    carbs: 16.1,
    fat: 49.2
  },

  cashews: {
    name: "Cashews",
    category: "Nuts",
    emoji: "🥜",
    calories: 553,
    protein: 18.2,
    carbs: 30.2,
    fat: 43.8
  },

  pistachios: {
    name: "Pistachios",
    category: "Nuts",
    emoji: "🥜",
    calories: 562,
    protein: 20.2,
    carbs: 27.2,
    fat: 45.3
  },


  // ======================================
  // NUT BUTTERS
  // ======================================

  peanut_butter: {
    name: "Peanut Butter",
    category: "Nut Butters",
    emoji: "🥜",
    calories: 588,
    protein: 25,
    carbs: 20,
    fat: 50
  },

  almond_butter: {
    name: "Almond Butter",
    category: "Nut Butters",
    emoji: "🥜",
    calories: 614,
    protein: 21,
    carbs: 19,
    fat: 56
  },


  // ======================================
  // OILS & FATS
  // ======================================

  olive_oil: {
    name: "Olive Oil",
    category: "Oils & Fats",
    emoji: "🫒",
    calories: 884,
    protein: 0,
    carbs: 0,
    fat: 100
  },

  coconut_oil: {
    name: "Coconut Oil",
    category: "Oils & Fats",
    emoji: "🥥",
    calories: 892,
    protein: 0,
    carbs: 0,
    fat: 100
  },

  butter: {
    name: "Butter",
    category: "Oils & Fats",
    emoji: "🧈",
    calories: 717,
    protein: 0.9,
    carbs: 0.1,
    fat: 81
  },


  // ======================================
  // COMMON FOODS
  // ======================================

  hummus: {
    name: "Hummus",
    category: "Common Foods",
    emoji: "🥣",
    calories: 166,
    protein: 7.9,
    carbs: 14.3,
    fat: 9.6
  },

  popcorn: {
    name: "Popcorn",
    category: "Common Foods",
    emoji: "🍿",
    calories: 375,
    protein: 11,
    carbs: 74,
    fat: 4.5
  },

  dark_chocolate: {
    name: "Dark Chocolate",
    category: "Common Foods",
    emoji: "🍫",
    calories: 598,
    protein: 7.8,
    carbs: 45.9,
    fat: 42.6
  },

  honey: {
    name: "Honey",
    category: "Common Foods",
    emoji: "🍯",
    calories: 304,
    protein: 0.3,
    carbs: 82.4,
    fat: 0
  },

  sugar: {
    name: "Sugar",
    category: "Common Foods",
    emoji: "🍬",
    calories: 387,
    protein: 0,
    carbs: 100,
    fat: 0
  },


  // ======================================
  // 🇪🇬 EGYPTIAN FOODS
  // ======================================

  ful_medames: {
    name: "Ful Medames",
    category: "Egyptian Foods",
    emoji: "🫘",
    calories: 110,
    protein: 7.6,
    carbs: 19.7,
    fat: 0.4
  },

  taameya: {
    name: "Ta'meya (Egyptian Falafel)",
    category: "Egyptian Foods",
    emoji: "🧆",
    calories: 330,
    protein: 13,
    carbs: 32,
    fat: 17
  },

  koshari: {
    name: "Koshari",
    category: "Egyptian Foods",
    emoji: "🍲",
    calories: 155,
    protein: 5,
    carbs: 27,
    fat: 3
  },

  molokhia: {
    name: "Molokhia",
    category: "Egyptian Foods",
    emoji: "🥬",
    calories: 55,
    protein: 3,
    carbs: 6,
    fat: 2
  },

  mahshi: {
    name: "Mahshi",
    category: "Egyptian Foods",
    emoji: "🥒",
    calories: 150,
    protein: 3,
    carbs: 24,
    fat: 5
  },

  warak_enab: {
    name: "Stuffed Grape Leaves",
    category: "Egyptian Foods",
    emoji: "🍃",
    calories: 160,
    protein: 3,
    carbs: 23,
    fat: 6
  },

  mahshi_kromb: {
    name: "Stuffed Cabbage",
    category: "Egyptian Foods",
    emoji: "🥬",
    calories: 145,
    protein: 3,
    carbs: 22,
    fat: 5
  },

  mahshi_kousa: {
    name: "Stuffed Zucchini",
    category: "Egyptian Foods",
    emoji: "🥒",
    calories: 135,
    protein: 3,
    carbs: 20,
    fat: 4
  },

  mahshi_betenjan: {
    name: "Stuffed Eggplant",
    category: "Egyptian Foods",
    emoji: "🍆",
    calories: 145,
    protein: 3,
    carbs: 20,
    fat: 5
  },

  kofta: {
    name: "Egyptian Kofta",
    category: "Egyptian Foods",
    emoji: "🥩",
    calories: 250,
    protein: 20,
    carbs: 5,
    fat: 17
  },

  grilled_kofta: {
    name: "Grilled Kofta",
    category: "Egyptian Foods",
    emoji: "🍢",
    calories: 240,
    protein: 21,
    carbs: 3,
    fat: 16
  },

  kebab: {
    name: "Kebab",
    category: "Egyptian Foods",
    emoji: "🥩",
    calories: 220,
    protein: 26,
    carbs: 2,
    fat: 12
  },

  egyptian_fatta: {
    name: "Egyptian Fatta",
    category: "Egyptian Foods",
    emoji: "🍚",
    calories: 180,
    protein: 7,
    carbs: 25,
    fat: 6
  },

  chicken_shawerma: {
    name: "Chicken Shawerma",
    category: "Egyptian Foods",
    emoji: "🌯",
    calories: 190,
    protein: 22,
    carbs: 4,
    fat: 10
  },

  beef_shawerma: {
    name: "Beef Shawerma",
    category: "Egyptian Foods",
    emoji: "🌯",
    calories: 230,
    protein: 21,
    carbs: 4,
    fat: 15
  },

  baladi_bread: {
    name: "Baladi Bread",
    category: "Egyptian Foods",
    emoji: "🫓",
    calories: 260,
    protein: 9,
    carbs: 52,
    fat: 2
  },

  feteer: {
    name: "Feteer Meshaltet",
    category: "Egyptian Foods",
    emoji: "🥐",
    calories: 390,
    protein: 7,
    carbs: 48,
    fat: 19
  },

  shakshuka: {
    name: "Shakshuka",
    category: "Egyptian Foods",
    emoji: "🍳",
    calories: 105,
    protein: 6,
    carbs: 5,
    fat: 7
  },

  eggplant_moussaka: {
    name: "Eggplant Moussaka",
    category: "Egyptian Foods",
    emoji: "🍆",
    calories: 130,
    protein: 4,
    carbs: 12,
    fat: 8
  },

  bamia: {
    name: "Bamia",
    category: "Egyptian Foods",
    emoji: "🥘",
    calories: 85,
    protein: 3,
    carbs: 10,
    fat: 4
  },

  peas_carrots: {
    name: "Peas & Carrots",
    category: "Egyptian Foods",
    emoji: "🥕",
    calories: 80,
    protein: 3,
    carbs: 12,
    fat: 2
  },

  lentil_soup: {
    name: "Egyptian Lentil Soup",
    category: "Egyptian Foods",
    emoji: "🍲",
    calories: 90,
    protein: 5,
    carbs: 14,
    fat: 2
  },

  orzo_soup: {
    name: "Orzo Soup",
    category: "Egyptian Foods",
    emoji: "🍲",
    calories: 75,
    protein: 2,
    carbs: 12,
    fat: 2
  },

  rice_vermicelli: {
    name: "Egyptian Rice with Vermicelli",
    category: "Egyptian Foods",
    emoji: "🍚",
    calories: 170,
    protein: 3,
    carbs: 31,
    fat: 4
  },

  macaroni_bechamel: {
    name: "Macaroni Bechamel",
    category: "Egyptian Foods",
    emoji: "🍝",
    calories: 190,
    protein: 8,
    carbs: 22,
    fat: 8
  },

  grilled_chicken_egyptian: {
    name: "Egyptian Grilled Chicken",
    category: "Egyptian Foods",
    emoji: "🍗",
    calories: 190,
    protein: 29,
    carbs: 0,
    fat: 8
  },

  grilled_fish_egyptian: {
    name: "Egyptian Grilled Fish",
    category: "Egyptian Foods",
    emoji: "🐟",
    calories: 150,
    protein: 25,
    carbs: 0,
    fat: 5
  },

  fried_fish_egyptian: {
    name: "Egyptian Fried Fish",
    category: "Egyptian Foods",
    emoji: "🐟",
    calories: 220,
    protein: 20,
    carbs: 8,
    fat: 12
  },


  // ======================================
  // 🇪🇬 EGYPTIAN DESSERTS
  // ======================================

  basbousa: {
    name: "Basbousa",
    category: "Egyptian Desserts",
    emoji: "🍰",
    calories: 350,
    protein: 4,
    carbs: 55,
    fat: 13
  },

  konafa: {
    name: "Konafa",
    category: "Egyptian Desserts",
    emoji: "🍮",
    calories: 360,
    protein: 6,
    carbs: 48,
    fat: 17
  },

  rice_pudding: {
    name: "Rice Pudding",
    category: "Egyptian Desserts",
    emoji: "🍚",
    calories: 130,
    protein: 3,
    carbs: 22,
    fat: 3
  },

  om_ali: {
    name: "Om Ali",
    category: "Egyptian Desserts",
    emoji: "🥛",
    calories: 230,
    protein: 6,
    carbs: 27,
    fat: 11
  },

  qamar_el_din: {
    name: "Qamar El Din",
    category: "Egyptian Desserts",
    emoji: "🥭",
    calories: 80,
    protein: 1,
    carbs: 20,
    fat: 0
  },

  halawa: {
    name: "Halawa",
    category: "Egyptian Desserts",
    emoji: "🍯",
    calories: 500,
    protein: 12,
    carbs: 55,
    fat: 28
  },

  baklava: {
    name: "Baklava",
    category: "Egyptian Desserts",
    emoji: "🥮",
    calories: 430,
    protein: 7,
    carbs: 45,
    fat: 25
  },

  zalabya: {
    name: "Zalabya",
    category: "Egyptian Desserts",
    emoji: "🍩",
    calories: 330,
    protein: 5,
    carbs: 48,
    fat: 13
  },


  // ======================================
  // 🥤 FRESH JUICES
  // ======================================

  fresh_orange_juice: {
    name: "Fresh Orange Juice",
    category: "Fresh Juices",
    emoji: "🍊",
    calories: 45,
    protein: 0.7,
    carbs: 10.4,
    fat: 0.2
  },

  fresh_mango_juice: {
    name: "Fresh Mango Juice",
    category: "Fresh Juices",
    emoji: "🥭",
    calories: 60,
    protein: 0.4,
    carbs: 15,
    fat: 0.2
  },

  fresh_strawberry_juice: {
    name: "Fresh Strawberry Juice",
    category: "Fresh Juices",
    emoji: "🍓",
    calories: 35,
    protein: 0.7,
    carbs: 8,
    fat: 0.2
  },

  fresh_guava_juice: {
    name: "Fresh Guava Juice",
    category: "Fresh Juices",
    emoji: "🍐",
    calories: 50,
    protein: 0.8,
    carbs: 12,
    fat: 0.3
  },

  fresh_banana_milk: {
    name: "Fresh Banana Milk",
    category: "Fresh Juices",
    emoji: "🍌",
    calories: 75,
    protein: 2.5,
    carbs: 12,
    fat: 2
  },

  fresh_lemon_juice: {
    name: "Fresh Lemon Juice",
    category: "Fresh Juices",
    emoji: "🍋",
    calories: 22,
    protein: 0.4,
    carbs: 6.9,
    fat: 0.2
  },

  fresh_lemon_mint: {
    name: "Fresh Lemon Mint",
    category: "Fresh Juices",
    emoji: "🌿",
    calories: 25,
    protein: 0.4,
    carbs: 7,
    fat: 0.2
  },

  fresh_watermelon_juice: {
    name: "Fresh Watermelon Juice",
    category: "Fresh Juices",
    emoji: "🍉",
    calories: 30,
    protein: 0.6,
    carbs: 7.5,
    fat: 0.2
  },

  fresh_pineapple_juice: {
    name: "Fresh Pineapple Juice",
    category: "Fresh Juices",
    emoji: "🍍",
    calories: 53,
    protein: 0.4,
    carbs: 13,
    fat: 0.1
  },

  fresh_apple_juice: {
    name: "Fresh Apple Juice",
    category: "Fresh Juices",
    emoji: "🍎",
    calories: 46,
    protein: 0.1,
    carbs: 11.3,
    fat: 0.1
  },

  fresh_grape_juice: {
    name: "Fresh Grape Juice",
    category: "Fresh Juices",
    emoji: "🍇",
    calories: 69,
    protein: 0.3,
    carbs: 18,
    fat: 0.1
  },

  fresh_carrot_juice: {
    name: "Fresh Carrot Juice",
    category: "Fresh Juices",
    emoji: "🥕",
    calories: 40,
    protein: 0.9,
    carbs: 9.3,
    fat: 0.2
  },

  fresh_beetroot_juice: {
    name: "Fresh Beetroot Juice",
    category: "Fresh Juices",
    emoji: "🧃",
    calories: 43,
    protein: 1.6,
    carbs: 10,
    fat: 0.2
  },

  fresh_pomegranate_juice: {
    name: "Fresh Pomegranate Juice",
    category: "Fresh Juices",
    emoji: "❤️",
    calories: 54,
    protein: 0.2,
    carbs: 13,
    fat: 0.1
  },

  fresh_cantaloupe_juice: {
    name: "Fresh Cantaloupe Juice",
    category: "Fresh Juices",
    emoji: "🍈",
    calories: 34,
    protein: 0.8,
    carbs: 8,
    fat: 0.2
  },

  fresh_peach_juice: {
    name: "Fresh Peach Juice",
    category: "Fresh Juices",
    emoji: "🍑",
    calories: 39,
    protein: 0.9,
    carbs: 9.5,
    fat: 0.3
  },

  fresh_tamarind_drink: {
    name: "Tamarind Drink",
    category: "Fresh Juices",
    emoji: "🥤",
    calories: 55,
    protein: 0.5,
    carbs: 14,
    fat: 0.1
  },

  karkade: {
    name: "Karkade",
    category: "Fresh Juices",
    emoji: "🌺",
    calories: 25,
    protein: 0,
    carbs: 6,
    fat: 0
  }

};


// ========================================
// Elements
// ========================================

const foodForm = document.getElementById("foodForm");
const foodSelect = document.getElementById("food");
const foodSearch = document.getElementById("foodSearch");
const mealSelect = document.getElementById("meal");
const quantityInput = document.getElementById("quantity");

const foodPreview = document.getElementById("foodPreview");

const foodList = document.getElementById("foodList");

const totalCalories = document.getElementById("totalCalories");
const totalProtein = document.getElementById("totalProtein");
const totalCarbs = document.getElementById("totalCarbs");
const totalFat = document.getElementById("totalFat");

const calorieGoal = document.getElementById("calorieGoal");
const proteinGoal = document.getElementById("proteinGoal");
const carbsGoal = document.getElementById("carbsGoal");
const fatGoal = document.getElementById("fatGoal");

const calorieProgress =
  document.getElementById("calorieProgress");

const proteinProgress =
  document.getElementById("proteinProgress");

const carbsProgress =
  document.getElementById("carbsProgress");

const fatProgress =
  document.getElementById("fatProgress");

const caloriePercentage =
  document.getElementById("caloriePercentage");

const foodCount =
  document.getElementById("foodCount");

const clearToday =
  document.getElementById("clearToday");

const quantityUnit =
  document.getElementById("quantityUnit");


// ========================================
// Storage Keys
// ========================================

const foodStorageKey = "nutrixFood";
const userStorageKey = "nutrixUser";


// ========================================
// User Data
// ========================================

function getUser() {

  const defaultUser = {
    caloriesGoal: 2300,
    proteinGoal: 170,
    carbsGoal: 250,
    fatGoal: 70
  };

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(userStorageKey)
      );

    return {
      ...defaultUser,
      ...(saved || {})
    };

  } catch (error) {

    console.error(
      "NutriX: Failed to read user data",
      error
    );

    return defaultUser;
  }
}


// ========================================
// Local Date
// ========================================

function getTodayString() {

  const now = new Date();

  const year =
    now.getFullYear();

  const month =
    String(now.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(now.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}


// ========================================
// Today's Food
// ========================================

function getAllFood() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(foodStorageKey)
      );

    return Array.isArray(saved)
      ? saved
      : [];

  } catch (error) {

    console.error(
      "NutriX: Failed to read food data",
      error
    );

    return [];
  }
}


function getTodayFood() {

  const today =
    getTodayString();

  return getAllFood().filter(
    item => item.date === today
  );
}


// ========================================
// Save Food
// ========================================

function saveAllFood(food) {

  localStorage.setItem(
    foodStorageKey,
    JSON.stringify(food)
  );

}


function saveTodayFood(todayFood) {

  const allFood =
    getAllFood();

  const today =
    getTodayString();

  const oldFood =
    allFood.filter(
      item => item.date !== today
    );

  const updatedFood =
    [...oldFood, ...todayFood];

  saveAllFood(updatedFood);
}


// ========================================
// Populate Food Select
// ========================================

function populateFoodSelect(list = foods) {

  if (!foodSelect) {
    return;
  }

  foodSelect.innerHTML = `
    <option value="">
      Select food
    </option>
  `;

  const categories = {};

  Object.entries(list).forEach(
    ([key, food]) => {

      if (!categories[food.category]) {
        categories[food.category] = [];
      }

      categories[food.category].push({
        key,
        ...food
      });

    }
  );


  Object.entries(categories).forEach(
    ([category, items]) => {

      const group =
        document.createElement("optgroup");

      group.label =
        category;


      items.forEach(food => {

        const option =
          document.createElement("option");

        option.value =
          food.key;

        option.textContent =
          `${food.emoji} ${food.name}`;

        group.appendChild(
          option
        );

      });


      foodSelect.appendChild(
        group
      );

    }
  );

}


// ========================================
// Calculate Nutrition
// ========================================

function calculateFood(food, quantity) {

  const amount =
    Number(quantity);

  if (
    !food ||
    !Number.isFinite(amount) ||
    amount <= 0
  ) {

    return {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
  }


  const multiplier =
    amount / 100;


  return {

    calories:
      food.calories * multiplier,

    protein:
      food.protein * multiplier,

    carbs:
      food.carbs * multiplier,

    fat:
      food.fat * multiplier

  };

}


// ========================================
// Format Number
// ========================================

function formatNumber(number) {

  const value =
    Number(number);

  if (!Number.isFinite(value)) {
    return "0.0";
  }

  return value.toFixed(1);
}


// ========================================
// Check if Food is Juice
// ========================================

function isJuice(food) {

  return (
    food &&
    food.category === "Fresh Juices"
  );

}


// ========================================
// Update Quantity Unit
// ========================================

function updateQuantityUnit() {

  if (
    !foodSelect ||
    !quantityUnit
  ) {
    return;
  }


  const selectedFood =
    foodSelect.value;


  if (
    selectedFood &&
    foods[selectedFood] &&
    isJuice(foods[selectedFood])
  ) {

    quantityUnit.textContent =
      "(ml)";

  } else {

    quantityUnit.textContent =
      "(grams)";
  }

}


// ========================================
// Update Preview
// ========================================

function updatePreview() {

  if (
    !foodSelect ||
    !quantityInput ||
    !foodPreview
  ) {
    return;
  }


  const selectedFood =
    foodSelect.value;


  const quantity =
    Number(quantityInput.value);


  if (
    !selectedFood ||
    !foods[selectedFood] ||
    !Number.isFinite(quantity) ||
    quantity <= 0
  ) {

    foodPreview.style.display =
      "none";

    return;
  }


  const food =
    foods[selectedFood];


  const nutrition =
    calculateFood(
      food,
      quantity
    );


  const previewEmoji =
    document.getElementById(
      "previewEmoji"
    );

  const previewName =
    document.getElementById(
      "previewName"
    );

  const previewQuantity =
    document.getElementById(
      "previewQuantity"
    );

  const previewCalories =
    document.getElementById(
      "previewCalories"
    );

  const previewProtein =
    document.getElementById(
      "previewProtein"
    );

  const previewCarbs =
    document.getElementById(
      "previewCarbs"
    );

  const previewFat =
    document.getElementById(
      "previewFat"
    );


  if (previewEmoji) {
    previewEmoji.textContent =
      food.emoji;
  }


  if (previewName) {
    previewName.textContent =
      food.name;
  }


  if (previewQuantity) {

    previewQuantity.textContent =
      `${quantity}${isJuice(food) ? "ml" : "g"}`;

  }


  if (previewCalories) {

    previewCalories.textContent =
      Math.round(
        nutrition.calories
      );

  }


  if (previewProtein) {

    previewProtein.textContent =
      `${formatNumber(
        nutrition.protein
      )}g`;

  }


  if (previewCarbs) {

    previewCarbs.textContent =
      `${formatNumber(
        nutrition.carbs
      )}g`;

  }


  if (previewFat) {

    previewFat.textContent =
      `${formatNumber(
        nutrition.fat
      )}g`;

  }


  foodPreview.style.display =
    "block";

}


// ========================================
// Search Food
// ========================================

function searchFood() {

  if (!foodSearch) {
    return;
  }


  const search =
    foodSearch.value
      .trim()
      .toLowerCase();


  if (!search) {

    populateFoodSelect();

    return;
  }


  const filtered = {};


  Object.entries(foods).forEach(
    ([key, food]) => {

      const text =
        `${food.name} ${food.category}`
          .toLowerCase();


      if (
        text.includes(search)
      ) {

        filtered[key] =
          food;

      }

    }
  );


  populateFoodSelect(
    filtered
  );

}


// ========================================
// Add Food
// ========================================

function addFood(event) {

  event.preventDefault();


  if (
    !foodSelect ||
    !quantityInput ||
    !mealSelect
  ) {
    return;
  }


  const selectedFood =
    foodSelect.value;


  const quantity =
    Number(quantityInput.value);


  const meal =
    mealSelect.value;


  if (
    !selectedFood ||
    !foods[selectedFood]
  ) {

    alert(
      "Please select a food."
    );

    return;
  }


  if (
    !Number.isFinite(quantity) ||
    quantity <= 0
  ) {

    alert(
      "Please enter a valid quantity."
    );

    return;
  }


  if (!meal) {

    alert(
      "Please select a meal."
    );

    return;
  }


  const food =
    foods[selectedFood];


  const nutrition =
    calculateFood(
      food,
      quantity
    );


  const todayFood =
    getTodayFood();


  const newFood = {

    id:
      `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,

    date:
      getTodayString(),

    meal,

    foodId:
      selectedFood,

    name:
      food.name,

    emoji:
      food.emoji,

    category:
      food.category,

    quantity,

    unit:
      isJuice(food)
        ? "ml"
        : "g",

    calories:
      nutrition.calories,

    protein:
      nutrition.protein,

    carbs:
      nutrition.carbs,

    fat:
      nutrition.fat

  };


  todayFood.push(
    newFood
  );


  saveTodayFood(
    todayFood
  );


  foodForm.reset();


  if (mealSelect) {
    mealSelect.value =
      "Breakfast";
  }


  if (quantityInput) {
    quantityInput.value =
      100;
  }


  if (foodPreview) {
    foodPreview.style.display =
      "none";
  }


  updateQuantityUnit();

  loadFoodPage();

}


// ========================================
// Update Summary
// ========================================

function updateSummary() {

  const todayFood =
    getTodayFood();


  const totals = {

    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0

  };


  todayFood.forEach(
    item => {

      totals.calories +=
        Number(item.calories) || 0;

      totals.protein +=
        Number(item.protein) || 0;

      totals.carbs +=
        Number(item.carbs) || 0;

      totals.fat +=
        Number(item.fat) || 0;

    }
  );


  const user =
    getUser();


  const calorieTarget =
    Number(user.caloriesGoal) ||
    2300;

  const proteinTarget =
    Number(user.proteinGoal) ||
    170;

  const carbsTarget =
    Number(user.carbsGoal) ||
    250;

  const fatTarget =
    Number(user.fatGoal) ||
    70;


  if (totalCalories) {

    totalCalories.textContent =
      Math.round(
        totals.calories
      );

  }


  if (totalProtein) {

    totalProtein.textContent =
      formatNumber(
        totals.protein
      );

  }


  if (totalCarbs) {

    totalCarbs.textContent =
      formatNumber(
        totals.carbs
      );

  }


  if (totalFat) {

    totalFat.textContent =
      formatNumber(
        totals.fat
      );

  }


  if (calorieGoal) {

    calorieGoal.textContent =
      Math.round(
        calorieTarget
      );

  }


  if (proteinGoal) {

    proteinGoal.textContent =
      Math.round(
        proteinTarget
      );

  }


  if (carbsGoal) {

    carbsGoal.textContent =
      Math.round(
        carbsTarget
      );

  }


  if (fatGoal) {

    fatGoal.textContent =
      Math.round(
        fatTarget
      );

  }


  const caloriePercent =
    calorieTarget > 0
      ? Math.min(
          100,
          (totals.calories /
            calorieTarget) * 100
        )
      : 0;


  const proteinPercent =
    proteinTarget > 0
      ? Math.min(
          100,
          (totals.protein /
            proteinTarget) * 100
        )
      : 0;


  const carbsPercent =
    carbsTarget > 0
      ? Math.min(
          100,
          (totals.carbs /
            carbsTarget) * 100
        )
      : 0;


  const fatPercent =
    fatTarget > 0
      ? Math.min(
          100,
          (totals.fat /
            fatTarget) * 100
        )
      : 0;


  if (calorieProgress) {

    calorieProgress.style.width =
      `${caloriePercent}%`;

  }


  if (proteinProgress) {

    proteinProgress.style.width =
      `${proteinPercent}%`;

  }


  if (carbsProgress) {

    carbsProgress.style.width =
      `${carbsPercent}%`;

  }


  if (fatProgress) {

    fatProgress.style.width =
      `${fatPercent}%`;

  }


  if (caloriePercentage) {

    caloriePercentage.textContent =
      `${Math.round(caloriePercent)}%`;

  }


  if (foodCount) {

    foodCount.textContent =
      todayFood.length;

  }

}


// ========================================
// Render Food List
// ========================================

function renderFoodList() {

  if (!foodList) {
    return;
  }


  const todayFood =
    getTodayFood();


  if (!todayFood.length) {

    foodList.innerHTML = `
      <div class="empty-food-state">
        <div class="empty-food-icon">🍽️</div>
        <h3>No food logged yet</h3>
        <p>Add your first meal for today.</p>
      </div>
    `;

    return;
  }


  foodList.innerHTML =
    todayFood.map(
      item => `

        <div
          class="food-item"
          data-id="${item.id}"
        >

          <div class="food-item-icon">
            ${item.emoji || "🍽️"}
          </div>

          <div class="food-item-info">

            <h3>
              ${escapeHtml(item.name)}
            </h3>

            <span>
              ${escapeHtml(item.meal)}
              •
              ${item.quantity}${item.unit}
            </span>

          </div>

          <div class="food-item-macros">

            <strong>
              ${Math.round(
                Number(item.calories) || 0
              )} kcal
            </strong>

            <small>
              P ${formatNumber(item.protein)}g
              •
              C ${formatNumber(item.carbs)}g
              •
              F ${formatNumber(item.fat)}g
            </small>

          </div>

          <button
    type="button"
    class="delete-food-btn"
    data-id="${item.id}"
    aria-label="Delete food"
    title="Delete food"
>
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path
            d="M3 6h18"
        />
        <path
            d="M8 6V4h8v2"
        />
        <path
            d="M19 6l-1 15H6L5 6"
        />
        <path
            d="M10 11v6"
        />
        <path
            d="M14 11v6"
        />
    </svg>
</button>

        </div>

      `
    ).join("");


  foodList
    .querySelectorAll(".delete-food-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          deleteFood(
            button.dataset.id
          );

        }
      );

    });

}


// ========================================
// Escape HTML
// ========================================

function escapeHtml(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


// ========================================
// Delete Food
// ========================================

function deleteFood(id) {

  const todayFood =
    getTodayFood()
      .filter(
        item => item.id !== id
      );


  saveTodayFood(
    todayFood
  );


  loadFoodPage();

}


// ========================================
// Clear Today
// ========================================

function clearTodayFood() {

  const todayFood =
    getTodayFood();


  if (!todayFood.length) {
    return;
  }


  const confirmed =
    confirm(
      "Clear all food logged today?"
    );


  if (!confirmed) {
    return;
  }


  saveTodayFood([]);


  loadFoodPage();

}


// ========================================
// Load Food Page
// ========================================

function loadFoodPage() {

  updateSummary();

  renderFoodList();

  updateQuantityUnit();

}


// ========================================
// AI FOOD SCANNER
// ========================================

const foodImageInput =
  document.getElementById(
    "foodImageInput"
  );

const scannerUpload =
  document.getElementById(
    "scannerUpload"
  );

const scanFoodBtn =
  document.getElementById(
    "scanFoodBtn"
  );

const scannerPreview =
  document.getElementById(
    "scannerPreview"
  );

const foodPreviewImage =
  document.getElementById(
    "foodPreviewImage"
  );

const removeScanBtn =
  document.getElementById(
    "removeScanBtn"
  );

const scannerLoading =
  document.getElementById(
    "scannerLoading"
  );

const scannerResult =
  document.getElementById(
    "scannerResult"
  );

const aiFoodItems =
  document.getElementById(
    "aiFoodItems"
  );

const aiCalories =
  document.getElementById(
    "aiCalories"
  );

const aiProtein =
  document.getElementById(
    "aiProtein"
  );

const aiCarbs =
  document.getElementById(
    "aiCarbs"
  );

const aiFat =
  document.getElementById(
    "aiFat"
  );

const aiConfidence =
  document.getElementById(
    "aiConfidence"
  );

const aiNote =
  document.getElementById(
    "aiNote"
  );

const addAiFoodBtn =
  document.getElementById(
    "addAiFoodBtn"
  );

const scanAgainBtn =
  document.getElementById(
    "scanAgainBtn"
  );


// ========================================
// AI Scanner State
// ========================================

let aiScanResult = null;


// ========================================
// Open Image Picker
// ========================================

function openFoodScanner() {

  if (!foodImageInput) {
    return;
  }

  foodImageInput.click();

}


// ========================================
// File To Data URL
// ========================================

function fileToDataURL(file) {

  return new Promise(
    (resolve, reject) => {

      const reader =
        new FileReader();

      reader.onload =
        () => resolve(
          reader.result
        );

      reader.onerror =
        () => reject(
          new Error(
            "Failed to read image"
          )
        );

      reader.readAsDataURL(file);

    }
  );

}


// ========================================
// Compress Image
// ========================================

function compressFoodImage(
  file,
  maxSize = 1600,
  quality = 0.82
) {

  return new Promise(
    (resolve, reject) => {

      const reader =
        new FileReader();


      reader.onload = event => {

        const image =
          new Image();


        image.onload = () => {

          let width =
            image.width;

          let height =
            image.height;


          if (
            width > maxSize ||
            height > maxSize
          ) {

            const ratio =
              Math.min(
                maxSize / width,
                maxSize / height
              );

            width =
              Math.round(
                width * ratio
              );

            height =
              Math.round(
                height * ratio
              );

          }


          const canvas =
            document.createElement(
              "canvas"
            );


          canvas.width =
            width;

          canvas.height =
            height;


          const ctx =
            canvas.getContext(
              "2d"
            );


          if (!ctx) {

            reject(
              new Error(
                "Canvas is not supported"
              )
            );

            return;
          }


          ctx.drawImage(
            image,
            0,
            0,
            width,
            height
          );


          canvas.toBlob(
            blob => {

              if (!blob) {

                reject(
                  new Error(
                    "Failed to compress image"
                  )
                );

                return;
              }


              resolve(blob);

            },
            "image/jpeg",
            quality
          );

        };


        image.onerror =
          () => reject(
            new Error(
              "Invalid image"
            )
          );


        image.src =
          event.target.result;

      };


      reader.onerror =
        () => reject(
          new Error(
            "Failed to read image"
          )
        );


      reader.readAsDataURL(file);

    }
  );

}


// ========================================
// Show Scanner Preview
// ========================================

async function showScannerImage(file) {

  if (
    !scannerUpload ||
    !scannerPreview ||
    !foodPreviewImage
  ) {
    return;
  }


  try {

    const dataURL =
      await fileToDataURL(file);


    foodPreviewImage.src =
      dataURL;


    scannerUpload.hidden =
      true;

    scannerPreview.hidden =
      false;

    scannerResult.hidden =
      true;

  } catch (error) {

    console.error(
      "Preview error:",
      error
    );

    alert(
      "Could not preview this image."
    );

  }

}


// ========================================
// Reset Scanner
// ========================================

function resetScanner() {

  aiScanResult =
    null;


  if (foodImageInput) {
    foodImageInput.value =
      "";
  }


  if (scannerUpload) {
    scannerUpload.hidden =
      false;
  }


  if (scannerPreview) {
    scannerPreview.hidden =
      true;
  }


  if (scannerLoading) {
    scannerLoading.hidden =
      true;
  }


  if (scannerResult) {
    scannerResult.hidden =
      true;
  }


  if (foodPreviewImage) {
    foodPreviewImage.src =
      "";
  }

}


// ========================================
// Scan Food Image
// ========================================

async function scanFoodImage(file) {

  if (!file) {
    return;
  }


  if (
    !file.type.startsWith(
      "image/"
    )
  ) {

    alert(
      "Please select an image."
    );

    return;
  }


  if (scannerLoading) {
    scannerLoading.hidden =
      false;
  }


  if (scannerResult) {
    scannerResult.hidden =
      true;
  }


  try {

    const compressedBlob =
      await compressFoodImage(
        file
      );


    const base64 =
      await fileToDataURL(
        compressedBlob
      );


    const response =
      await fetch(
        "/api/analyze-food",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({
              image: base64,
              mimeType:
                "image/jpeg"
            })

        }
      );


    let data;

    try {

      data =
        await response.json();

    } catch {

      throw new Error(
        "Invalid server response"
      );

    }


    if (
      !response.ok ||
      !data.success
    ) {

      throw new Error(
        data.error ||
        "Food analysis failed"
      );

    }


    if (
      !data.result ||
      !Array.isArray(
        data.result.foods
      )
    ) {

      throw new Error(
        "Invalid AI result"
      );

    }


    aiScanResult =
      data.result;


    displayAIResult(
      aiScanResult
    );


  } catch (error) {

    console.error(
      "AI Food Scanner Error:",
      error
    );


    alert(
      error.message ||
      "Could not analyze the food image."
    );


    if (scannerLoading) {
      scannerLoading.hidden =
        true;
    }

  }

}


// ========================================
// Display AI Result
// ========================================

function displayAIResult(result) {

  if (scannerLoading) {
    scannerLoading.hidden =
      true;
  }


  if (scannerResult) {
    scannerResult.hidden =
      false;
  }


  const foodsResult =
    Array.isArray(result.foods)
      ? result.foods
      : [];


  if (aiFoodItems) {

    if (!foodsResult.length) {

      aiFoodItems.innerHTML = `
        <div class="ai-empty-result">
          <span>🍽️</span>
          <p>No food could be identified.</p>
        </div>
      `;

    } else {

      aiFoodItems.innerHTML =
        foodsResult
          .map(
            food => `

              <div class="ai-food-item">

                <div class="ai-food-item-info">

                  <span class="ai-food-name">
                    ${escapeHtml(
                      food.name ||
                      "Unknown food"
                    )}
                  </span>

                  <small>
                    ~${Math.round(
                      Number(
                        food.estimatedGrams
                      ) || 0
                    )}g
                  </small>

                </div>

                <div class="ai-food-item-nutrition">

                  <strong>
                    ${Math.round(
                      Number(
                        food.calories
                      ) || 0
                    )} kcal
                  </strong>

                  <small>
                    P ${formatNumber(food.protein)}g
                    •
                    C ${formatNumber(food.carbs)}g
                    •
                    F ${formatNumber(food.fat)}g
                  </small>

                </div>

              </div>

            `
          )
          .join("");

    }

  }


  const total =
    result.total || {};


  if (aiCalories) {

    aiCalories.textContent =
      Math.round(
        Number(
          total.calories
        ) || 0
      );

  }


  if (aiProtein) {

    aiProtein.textContent =
      formatNumber(
        total.protein
      );

  }


  if (aiCarbs) {

    aiCarbs.textContent =
      formatNumber(
        total.carbs
      );

  }


  if (aiFat) {

    aiFat.textContent =
      formatNumber(
        total.fat
      );

  }


  if (aiConfidence) {

    const confidence =
      Number(
        result.confidence
      );


    if (
      Number.isFinite(
        confidence
      )
    ) {

      const percentage =
        Math.round(
          Math.max(
            0,
            Math.min(
              1,
              confidence
            )
          ) * 100
        );


      aiConfidence.textContent =
        `${percentage}% confidence`;

    } else {

      aiConfidence.textContent =
        "Estimated";

    }

  }


  if (aiNote) {

    const note =
      result.note ||
      "Nutrition values are estimates.";

    aiNote.textContent =
      note;

  }

}


// ========================================
// Add AI Result To Today's Food
// ========================================

function addAIResultToFood() {

  if (
    !aiScanResult ||
    !Array.isArray(
      aiScanResult.foods
    ) ||
    !aiScanResult.foods.length
  ) {

    alert(
      "No food result is available."
    );

    return;
  }


  const meal =
    mealSelect?.value ||
    "Breakfast";


  const todayFood =
    getTodayFood();


  aiScanResult.foods.forEach(
    food => {

      const calories =
        Number(
          food.calories
        ) || 0;

      const protein =
        Number(
          food.protein
        ) || 0;

      const carbs =
        Number(
          food.carbs
        ) || 0;

      const fat =
        Number(
          food.fat
        ) || 0;

      const grams =
        Number(
          food.estimatedGrams
        ) || 0;


      const newFood = {

        id:
          `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2, 8)}`,

        date:
          getTodayString(),

        meal,

        foodId:
          "ai_scanned",

        name:
          food.name ||
          "AI Scanned Food",

        emoji:
          "🤖",

        category:
          "AI Food",

        quantity:
          grams,

        unit:
          "g",

        calories,

        protein,

        carbs,

        fat

      };


      todayFood.push(
        newFood
      );

    }
  );


  saveTodayFood(
    todayFood
  );


  loadFoodPage();


  resetScanner();


  alert(
    "Meal added to today's food!"
  );

}


// ========================================
// AI Scanner Events
// ========================================

if (scanFoodBtn) {

  scanFoodBtn.addEventListener(
    "click",
    openFoodScanner
  );

}


if (foodImageInput) {

  foodImageInput.addEventListener(
    "change",
    async event => {

      const file =
        event.target.files?.[0];


      if (!file) {
        return;
      }


      await showScannerImage(
        file
      );


      await scanFoodImage(
        file
      );

    }
  );

}


if (removeScanBtn) {

  removeScanBtn.addEventListener(
    "click",
    resetScanner
  );

}


if (scanAgainBtn) {

  scanAgainBtn.addEventListener(
    "click",
    resetScanner
  );

}


if (addAiFoodBtn) {

  addAiFoodBtn.addEventListener(
    "click",
    addAIResultToFood
  );

}


// ========================================
// Regular Events
// ========================================

if (foodForm) {

  foodForm.addEventListener(
    "submit",
    addFood
  );

}


if (foodSelect) {

  foodSelect.addEventListener(
    "change",
    () => {

      updateQuantityUnit();
      updatePreview();

    }
  );

}


if (quantityInput) {

  quantityInput.addEventListener(
    "input",
    updatePreview
  );

}


if (foodSearch) {

  foodSearch.addEventListener(
    "input",
    searchFood
  );

}


if (clearToday) {

  clearToday.addEventListener(
    "click",
    clearTodayFood
  );

}


// ========================================
// Initial Load
// ========================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    populateFoodSelect();

    loadFoodPage();

    updateQuantityUnit();

  }
);