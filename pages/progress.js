/* =========================================================
   NutriX - Progress
   ========================================================= */

const USER_KEY = "nutrixUser";
const FOOD_KEY = "nutrixFood";
const WORKOUT_HISTORY_KEY = "nutrixWorkoutHistory";
const WORKOUT_PLAN_KEY = "nutrixWorkoutPlan";
const WEIGHT_HISTORY_KEY = "nutrixWeightHistory";


/* =========================================================
   STORAGE
   ========================================================= */

function getUser() {
  try {
    const user = JSON.parse(localStorage.getItem(USER_KEY));

    return user || {
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      activity: "",
      goal: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
  } catch {
    return {
      age: 0,
      gender: "",
      height: 0,
      weight: 0,
      activity: "",
      goal: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
  }
}


function getFoodData() {
  try {
    const data = JSON.parse(localStorage.getItem(FOOD_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}


function getWorkoutHistory() {
  try {
    const data = JSON.parse(
      localStorage.getItem(WORKOUT_HISTORY_KEY)
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}


function getWorkoutPlan() {
  try {
    const plan = JSON.parse(
      localStorage.getItem(WORKOUT_PLAN_KEY)
    );

    return plan || null;
  } catch {
    return null;
  }
}


function getWeightHistory() {
  try {
    const data = JSON.parse(
      localStorage.getItem(WEIGHT_HISTORY_KEY)
    );

    if (!Array.isArray(data)) {
      return [];
    }

    return data
      .filter(item => {
        return (
          item &&
          item.date &&
          Number.isFinite(Number(item.weight))
        );
      })
      .sort((a, b) => {
        return a.date.localeCompare(b.date);
      });

  } catch {
    return [];
  }
}


/* =========================================================
   DATE HELPERS
   ========================================================= */

function getTodayString() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function parseLocalDate(dateString) {
  if (!dateString) {
    return null;
  }

  const match = String(dateString).match(
    /^(\d{4})-(\d{2})-(\d{2})$/
  );

  if (match) {
    return new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3])
    );
  }

  const date = new Date(dateString);

  return Number.isNaN(date.getTime())
    ? null
    : date;
}


function formatShortDate(dateString) {
  const date = parseLocalDate(dateString);

  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}


function addDays(date, amount) {
  const result = new Date(date);

  result.setDate(
    result.getDate() + amount
  );

  return result;
}


function dateToString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function getLast7Days() {
  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const date = addDays(today, -i);

    days.push({
      date,
      dateString: dateToString(date)
    });
  }

  return days;
}


/* =========================================================
   WORKOUT SCHEDULE HELPERS
   =========================================================
   
   Workout schedule:
   Saturday = index 0
   Sunday   = index 1
   Monday   = index 2
   Tuesday  = index 3
   Wednesday= index 4
   Thursday = index 5
   Friday   = index 6
   ========================================================= */

function getScheduleIndex(date) {
  return (date.getDay() + 1) % 7;
}


function getWorkoutForDate(date, plan) {
  if (!plan || !Array.isArray(plan.schedule)) {
    return null;
  }

  const index = getScheduleIndex(date);

  return plan.schedule[index] || null;
}


function isRestDay(date, plan) {
  const workout = getWorkoutForDate(
    date,
    plan
  );

  if (!workout) {
    return true;
  }

  const normalized = String(workout)
    .trim()
    .toLowerCase();

  return (
    normalized === "rest" ||
    normalized === "rest day" ||
    normalized === "راحة" ||
    normalized === "راحة اليوم"
  );
}


function isScheduledWorkoutDay(date, plan) {
  if (!plan || !Array.isArray(plan.schedule)) {
    return false;
  }

  return !isRestDay(date, plan);
}


function isWorkoutCompletedOnDate(
  dateString,
  history
) {
  return history.some(item => {
    return item && item.date === dateString;
  });
}


/* =========================================================
   WORKOUT STREAK
   ========================================================= */

function calculateCurrentWorkoutStreak() {
  const history = getWorkoutHistory();
  const plan = getWorkoutPlan();

  if (!history.length || !plan) {
    return 0;
  }

  const today = new Date();

  let cursor = new Date(today);

  /*
    If today is a scheduled workout and it is not completed,
    start checking from yesterday.

    If today is a Rest day, skip today.
  */

  if (isScheduledWorkoutDay(cursor, plan)) {

    const todayString = dateToString(cursor);

    if (
      !isWorkoutCompletedOnDate(
        todayString,
        history
      )
    ) {
      cursor = addDays(cursor, -1);
    }

  } else {
    cursor = addDays(cursor, -1);
  }


  let streak = 0;

  /*
    Search backwards.

    Rest days do not break the streak.
    Only scheduled workout days matter.
  */

  for (let i = 0; i < 1000; i++) {

    if (!isScheduledWorkoutDay(cursor, plan)) {
      cursor = addDays(cursor, -1);
      continue;
    }

    const dateString = dateToString(cursor);

    if (
      isWorkoutCompletedOnDate(
        dateString,
        history
      )
    ) {
      streak++;
      cursor = addDays(cursor, -1);
      continue;
    }

    break;
  }

  return streak;
}


function calculateBestWorkoutStreak() {
  const history = getWorkoutHistory();
  const plan = getWorkoutPlan();

  if (!history.length || !plan) {
    return 0;
  }


  const completedDates = new Set(
    history
      .filter(item => item && item.date)
      .map(item => item.date)
  );


  const sortedDates = [
    ...completedDates
  ].sort();


  if (!sortedDates.length) {
    return 0;
  }


  const firstDate = parseLocalDate(
    sortedDates[0]
  );

  const lastDate = new Date();

  let cursor = new Date(firstDate);

  let current = 0;
  let best = 0;


  while (cursor <= lastDate) {

    if (
      isScheduledWorkoutDay(
        cursor,
        plan
      )
    ) {

      const dateString =
        dateToString(cursor);

      if (
        completedDates.has(
          dateString
        )
      ) {
        current++;
        best = Math.max(
          best,
          current
        );
      } else {
        current = 0;
      }

    }

    /*
      Rest days are ignored and do not reset streak.
    */

    cursor = addDays(
      cursor,
      1
    );
  }


  return best;
}


/* =========================================================
   NUTRITION CALCULATIONS
   ========================================================= */

function calculateNutrition(
  food,
  days
) {
  if (!Array.isArray(food)) {
    return {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
  }


  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;


  food.forEach(item => {

    calories += Number(
      item.calories
    ) || 0;

    protein += Number(
      item.protein
    ) || 0;

    carbs += Number(
      item.carbs
    ) || 0;

    fat += Number(
      item.fat
    ) || 0;

  });


  /*
    Average only across days where food
    was actually logged.
  */

  const loggedDays = new Set(
    food
      .filter(item => item && item.date)
      .map(item => item.date)
  ).size;


  const divisor =
    loggedDays || days || 1;


  return {
    calories: calories / divisor,
    protein: protein / divisor,
    carbs: carbs / divisor,
    fat: fat / divisor
  };
}


function getFoodForDate(
  food,
  dateString
) {
  return food.filter(item => {
    return item && item.date === dateString;
  });
}


/* =========================================================
   OVERVIEW
   ========================================================= */

function renderOverview() {

  const user = getUser();
  const food = getFoodData();
  const history = getWorkoutHistory();


  const currentWeightEl =
    document.getElementById(
      "currentWeight"
    );

  const weightStatusEl =
    document.getElementById(
      "weightStatus"
    );

  const averageCaloriesEl =
    document.getElementById(
      "averageCalories"
    );

  const totalWorkoutsEl =
    document.getElementById(
      "totalWorkouts"
    );

  const currentStreakEl =
    document.getElementById(
      "currentStreak"
    );


  /*
    Prefer the latest weight history entry.
    Fallback to calculator weight.
  */

  const weightHistory =
    getWeightHistory();


  let currentWeight =
    Number(user.weight) || 0;


  if (weightHistory.length) {
    currentWeight =
      Number(
        weightHistory[
          weightHistory.length - 1
        ].weight
      ) || currentWeight;
  }


  if (currentWeightEl) {

    currentWeight =
      currentWeight > 0
        ? currentWeight.toFixed(1)
        : "--";

    currentWeightEl.textContent =
      currentWeight;
  }


  if (weightStatusEl) {

    if (weightHistory.length >= 2) {

      const previous =
        Number(
          weightHistory[
            weightHistory.length - 2
          ].weight
        );

      const current =
        Number(
          weightHistory[
            weightHistory.length - 1
          ].weight
        );

      const change =
        current - previous;


      if (change > 0) {
        weightStatusEl.textContent =
          `+${change.toFixed(1)} kg since last entry`;
      } else if (change < 0) {
        weightStatusEl.textContent =
          `${change.toFixed(1)} kg since last entry`;
      } else {
        weightStatusEl.textContent =
          "No change since last entry";
      }

    } else if (currentWeight > 0) {

      weightStatusEl.textContent =
        "Latest weight from Calculator";

    } else {

      weightStatusEl.textContent =
        "Set your weight from Calculator";

    }

  }


  const last7Days =
    getLast7Days();


  const last7DateStrings =
    new Set(
      last7Days.map(
        day => day.dateString
      )
    );


  const recentFood =
    food.filter(item => {
      return (
        item &&
        last7DateStrings.has(
          item.date
        )
      );
    });


  const nutrition =
    calculateNutrition(
      recentFood,
      7
    );


  if (averageCaloriesEl) {

    averageCaloriesEl.textContent =
      Math.round(
        nutrition.calories
      );

  }


  if (totalWorkoutsEl) {

    totalWorkoutsEl.textContent =
      history.length;

  }


  const streak =
    calculateCurrentWorkoutStreak();


  if (currentStreakEl) {
    currentStreakEl.textContent =
      streak;
  }

}


/* =========================================================
   WEEKLY ACTIVITY
   ========================================================= */

function renderWeeklyActivity() {

  const container =
    document.getElementById(
      "weekDays"
    );


  if (!container) {
    return;
  }


  const food =
    getFoodData();

  const history =
    getWorkoutHistory();

  const plan =
    getWorkoutPlan();


  const days =
    getLast7Days();


  let foodDays = 0;
  let workoutDays = 0;
  let activeDays = 0;


  container.innerHTML = "";


  days.forEach(day => {

    const foodLogged =
      food.some(item => {
        return (
          item &&
          item.date ===
            day.dateString
        );
      });


    const workoutDone =
      isWorkoutCompletedOnDate(
        day.dateString,
        history
      );


    const scheduled =
      isScheduledWorkoutDay(
        day.date,
        plan
      );


    const rest =
      !scheduled;


    if (foodLogged) {
      foodDays++;
    }


    if (workoutDone) {
      workoutDays++;
    }


    if (
      foodLogged ||
      workoutDone
    ) {
      activeDays++;
    }


    const dayElement =
      document.createElement(
        "div"
      );


    dayElement.className =
      "week-day";


    if (foodLogged) {
      dayElement.classList.add(
        "has-food"
      );
    }


    if (workoutDone) {
      dayElement.classList.add(
        "has-workout"
      );
    }


    if (rest) {
      dayElement.classList.add(
        "rest-day"
      );
    }


    const dayName =
      day.date.toLocaleDateString(
        "en-US",
        {
          weekday: "short"
        }
      );


    const dayNumber =
      day.date.getDate();


    dayElement.innerHTML = `

      <span class="week-day-name">
        ${dayName}
      </span>

      <strong class="week-day-number">
        ${dayNumber}
      </strong>

      <div class="week-day-status">

        ${
          foodLogged
            ? '<span title="Food logged">🍎</span>'
            : ''
        }

        ${
          workoutDone
            ? '<span title="Workout completed">✓</span>'
            : ''
        }

        ${
          rest && !foodLogged
            ? '<span class="rest-dot">•</span>'
            : ''
        }

      </div>

    `;


    if (
      day.dateString ===
      getTodayString()
    ) {
      dayElement.classList.add(
        "today"
      );
    }


    container.appendChild(
      dayElement
    );

  });


  const foodDaysEl =
    document.getElementById(
      "foodDays"
    );

  const workoutDaysEl =
    document.getElementById(
      "workoutDays"
    );

  const activeDaysEl =
    document.getElementById(
      "activeDays"
    );


  if (foodDaysEl) {
    foodDaysEl.textContent =
      foodDays;
  }


  if (workoutDaysEl) {
    workoutDaysEl.textContent =
      workoutDays;
  }


  if (activeDaysEl) {
    activeDaysEl.textContent =
      activeDays;
  }

}


/* =========================================================
   WEIGHT PROGRESS
   ========================================================= */

function renderWeightChart() {

  const chart =
    document.getElementById(
      "weightChart"
    );

  const empty =
    document.getElementById(
      "weightChartEmpty"
    );

  const currentEl =
    document.getElementById(
      "weightChartCurrent"
    );

  const changeEl =
    document.getElementById(
      "weightChange"
    );


  if (!chart) {
    return;
  }


  const history =
    getWeightHistory();


  if (!history.length) {

    chart.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    if (currentEl) {
      currentEl.textContent =
        "--";
    }

    if (changeEl) {
      changeEl.textContent =
        "--";
    }

    return;
  }


  if (empty) {
    empty.hidden = true;
  }


  const points =
    history.slice(-30);


  const values =
    points.map(
      item => Number(item.weight)
    );


  const latest =
    values[values.length - 1];


  const first =
    values[0];


  const change =
    latest - first;


  if (currentEl) {

    currentEl.textContent =
      `${latest.toFixed(1)} kg`;

  }


  if (changeEl) {

    if (points.length < 2) {

      changeEl.textContent =
        "--";

    } else if (change > 0) {

      changeEl.textContent =
        `+${change.toFixed(1)} kg`;

    } else {

      changeEl.textContent =
        `${change.toFixed(1)} kg`;

    }

  }


  /*
    Chart dimensions
  */

  const width = 700;
  const height = 280;

  const paddingLeft = 48;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 42;


  const chartWidth =
    width -
    paddingLeft -
    paddingRight;


  const chartHeight =
    height -
    paddingTop -
    paddingBottom;


  let min =
    Math.min(...values);

  let max =
    Math.max(...values);


  /*
    Give the graph some breathing room.
  */

  if (min === max) {

    min -= 2;
    max += 2;

  } else {

    const padding =
      Math.max(
        1,
        (max - min) * 0.15
      );

    min -= padding;
    max += padding;

  }


  function getX(index) {

    if (values.length === 1) {
      return (
        paddingLeft +
        chartWidth / 2
      );
    }

    return (
      paddingLeft +
      (index /
        (values.length - 1)) *
        chartWidth
    );

  }


  function getY(value) {

    return (
      paddingTop +
      ((max - value) /
        (max - min)) *
        chartHeight
    );

  }


  const linePoints =
    values
      .map(
        (value, index) =>
          `${getX(index)},${getY(value)}`
      )
      .join(" ");


  const areaPoints =
    [
      `${getX(0)},${height - paddingBottom}`,
      ...values.map(
        (value, index) =>
          `${getX(index)},${getY(value)}`
      ),
      `${getX(values.length - 1)},${height - paddingBottom}`
    ].join(" ");


  const gridLines =
    [0, 0.25, 0.5, 0.75, 1]
      .map(position => {

        const y =
          paddingTop +
          position *
            chartHeight;

        const value =
          max -
          position *
            (max - min);

        return `

          <line
            x1="${paddingLeft}"
            y1="${y}"
            x2="${width - paddingRight}"
            y2="${y}"
            class="chart-grid-line"
          />

          <text
            x="${paddingLeft - 8}"
            y="${y + 4}"
            text-anchor="end"
            class="chart-axis-label"
          >
            ${value.toFixed(1)}
          </text>

        `;

      })
      .join("");


  const circles =
    values
      .map(
        (value, index) => {

          const x =
            getX(index);

          const y =
            getY(value);


          return `

            <circle
              cx="${x}"
              cy="${y}"
              r="4"
              class="weight-point"
            />

          `;

        }
      )
      .join("");


  const labels =
    points
      .map(
        (item, index) => {

          if (
            points.length > 7 &&
            index %
              Math.ceil(
                points.length / 7
              ) !== 0 &&
            index !==
              points.length - 1
          ) {
            return "";
          }


          const x =
            getX(index);


          return `

            <text
              x="${x}"
              y="${height - 14}"
              text-anchor="middle"
              class="chart-axis-label"
            >
              ${formatShortDate(
                item.date
              )}
            </text>

          `;

        }
      )
      .join("");


  chart.innerHTML = `

    <svg
      viewBox="0 0 ${width} ${height}"
      preserveAspectRatio="none"
      role="img"
      aria-label="Weight progress chart"
    >

      <defs>

        <linearGradient
          id="weightAreaGradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >

          <stop
            offset="0%"
            stop-opacity="0.35"
          />

          <stop
            offset="100%"
            stop-opacity="0"
          />

        </linearGradient>

      </defs>


      ${gridLines}


      <polygon
        points="${areaPoints}"
        class="chart-area"
      />


      <polyline
        points="${linePoints}"
        class="chart-line"
        fill="none"
      />


      ${circles}


      ${labels}

    </svg>

  `;

}


/* =========================================================
   CALORIES CHART
   ========================================================= */

function renderCaloriesChart() {

  const chart =
    document.getElementById(
      "calorieChart"
    );


  if (!chart) {
    return;
  }


  const food =
    getFoodData();

  const user =
    getUser();


  const days =
    getLast7Days();


  const values =
    days.map(day => {

      const items =
        getFoodForDate(
          food,
          day.dateString
        );


      return items.reduce(
        (total, item) => {

          return (
            total +
            (Number(
              item.calories
            ) || 0)
          );

        },
        0
      );

    });


  const loggedValues =
    values.filter(
      value => value > 0
    );


  const average =
    loggedValues.length
      ? loggedValues.reduce(
          (a, b) => a + b,
          0
        ) / loggedValues.length
      : 0;


  const averageEl =
    document.getElementById(
      "calorieChartAverage"
    );


  const goalEl =
    document.getElementById(
      "calorieChartGoal"
    );


  if (averageEl) {
    averageEl.textContent =
      Math.round(average);
  }


  const goal =
    Number(user.calories) || 0;


  if (goalEl) {
    goalEl.textContent =
      Math.round(goal);
  }


  const width = 700;
  const height = 280;

  const paddingLeft = 42;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 48;


  const chartWidth =
    width -
    paddingLeft -
    paddingRight;


  const chartHeight =
    height -
    paddingTop -
    paddingBottom;


  const highest =
    Math.max(
      ...values,
      goal,
      100
    );


  const max =
    highest * 1.15;


  function getX(index) {

    const barWidth =
      chartWidth /
      values.length;

    return (
      paddingLeft +
      index * barWidth +
      barWidth * 0.18
    );

  }


  function getBarWidth() {

    const slot =
      chartWidth /
      values.length;

    return slot * 0.64;

  }


  function getY(value) {

    return (
      paddingTop +
      chartHeight -
      (value / max) *
        chartHeight
    );

  }


  const bars =
    values
      .map(
        (value, index) => {

          const x =
            getX(index);

          const y =
            getY(value);

          const barHeight =
            value > 0
              ? height -
                paddingBottom -
                y
              : 2;


          const day =
            days[index].date;


          const dayName =
            day.toLocaleDateString(
              "en-US",
              {
                weekday: "short"
              }
            );


          return `

            <rect
              x="${x}"
              y="${y}"
              width="${getBarWidth()}"
              height="${barHeight}"
              rx="8"
              class="calorie-bar"
            />

            ${
              value > 0
                ? `
                  <text
                    x="${
                      x +
                      getBarWidth() /
                        2
                    }"
                    y="${Math.max(
                      y - 8,
                      16
                    )}"
                    text-anchor="middle"
                    class="chart-value-label"
                  >
                    ${Math.round(value)}
                  </text>
                `
                : ""
            }


            <text
              x="${
                x +
                getBarWidth() /
                  2
              }"
              y="${height - 17}"
              text-anchor="middle"
              class="chart-axis-label"
            >
              ${dayName}
            </text>

          `;

        }
      )
      .join("");


  let goalLine = "";


  if (goal > 0) {

    const goalY =
      getY(goal);


    goalLine = `

      <line
        x1="${paddingLeft}"
        y1="${goalY}"
        x2="${width - paddingRight}"
        y2="${goalY}"
        class="chart-goal-line"
      />

      <text
        x="${width - paddingRight}"
        y="${goalY - 7}"
        text-anchor="end"
        class="chart-goal-label"
      >
        Goal ${Math.round(goal)}
      </text>

    `;

  }


  chart.innerHTML = `

    <svg
      viewBox="0 0 ${width} ${height}"
      preserveAspectRatio="none"
      role="img"
      aria-label="Calories trend chart"
    >

      ${goalLine}

      ${bars}

    </svg>

  `;

}


/* =========================================================
   WORKOUT CHART
   ========================================================= */

function renderWorkoutChart() {

  const chart =
    document.getElementById(
      "workoutChart"
    );


  if (!chart) {
    return;
  }


  const history =
    getWorkoutHistory();

  const plan =
    getWorkoutPlan();


  const days =
    getLast7Days();


  const completed =
    days.map(day => {

      return isWorkoutCompletedOnDate(
        day.dateString,
        history
      )
        ? 1
        : 0;

    });


  const scheduled =
    days.map(day => {

      return isScheduledWorkoutDay(
        day.date,
        plan
      )
        ? 1
        : 0;

    });


  const completedTotal =
    completed.reduce(
      (sum, value) =>
        sum + value,
      0
    );


  const scheduledTotal =
    scheduled.reduce(
      (sum, value) =>
        sum + value,
      0
    );


  const consistency =
    scheduledTotal > 0
      ? Math.round(
          (completedTotal /
            scheduledTotal) *
            100
        )
      : 0;


  const completedEl =
    document.getElementById(
      "workoutChartCompleted"
    );


  const scheduledEl =
    document.getElementById(
      "workoutChartScheduled"
    );


  const consistencyEl =
    document.getElementById(
      "workoutConsistency"
    );


  if (completedEl) {
    completedEl.textContent =
      completedTotal;
  }


  if (scheduledEl) {
    scheduledEl.textContent =
      scheduledTotal;
  }


  if (consistencyEl) {
    consistencyEl.textContent =
      `${consistency}%`;
  }


  const width = 700;
  const height = 280;

  const paddingLeft = 42;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 48;


  const chartWidth =
    width -
    paddingLeft -
    paddingRight;


  const chartHeight =
    height -
    paddingTop -
    paddingBottom;


  const slotWidth =
    chartWidth /
    days.length;


  const barWidth =
    slotWidth * 0.58;


  const bars =
    days
      .map(
        (day, index) => {

          const x =
            paddingLeft +
            index *
              slotWidth +
            (slotWidth -
              barWidth) /
              2;


          const isScheduled =
            scheduled[index];


          const isCompleted =
            completed[index];


          const barHeight =
            isScheduled
              ? chartHeight
              : chartHeight *
                0.2;


          const y =
            height -
            paddingBottom -
            barHeight;


          const dayName =
            day.date.toLocaleDateString(
              "en-US",
              {
                weekday: "short"
              }
            );


          return `

            <rect
              x="${x}"
              y="${y}"
              width="${barWidth}"
              height="${barHeight}"
              rx="8"
              class="${
                isCompleted
                  ? "workout-bar completed"
                  : isScheduled
                  ? "workout-bar scheduled"
                  : "workout-bar rest"
              }"
            />


            ${
              isCompleted
                ? `
                  <text
                    x="${
                      x +
                      barWidth / 2
                    }"
                    y="${Math.max(
                      y - 8,
                      18
                    )}"
                    text-anchor="middle"
                    class="chart-value-label"
                  >
                    ✓
                  </text>
                `
                : ""
            }


            <text
              x="${
                x +
                barWidth / 2
              }"
              y="${height - 17}"
              text-anchor="middle"
              class="chart-axis-label"
            >
              ${dayName}
            </text>

          `;

        }
      )
      .join("");


  chart.innerHTML = `

    <svg
      viewBox="0 0 ${width} ${height}"
      preserveAspectRatio="none"
      role="img"
      aria-label="Workout activity chart"
    >

      ${bars}

    </svg>

  `;

}


/* =========================================================
   NUTRITION MACROS
   ========================================================= */

function renderNutrition() {

  const user =
    getUser();

  const food =
    getFoodData();


  const days =
    getLast7Days();


  const recentFood =
    food.filter(item => {

      return days.some(day => {
        return (
          day.dateString ===
          item.date
        );
      });

    });


  const nutrition =
    calculateNutrition(
      recentFood,
      7
    );


  const proteinGoal =
    Number(user.protein) || 0;

  const carbsGoal =
    Number(user.carbs) || 0;

  const fatGoal =
    Number(user.fat) || 0;

  const caloriesGoal =
    Number(user.calories) || 0;


  setText(
    "proteinCurrent",
    Math.round(
      nutrition.protein
    )
  );

  setText(
    "proteinGoal",
    Math.round(
      proteinGoal
    )
  );


  setText(
    "carbsCurrent",
    Math.round(
      nutrition.carbs
    )
  );

  setText(
    "carbsGoal",
    Math.round(
      carbsGoal
    )
  );


  setText(
    "fatCurrent",
    Math.round(
      nutrition.fat
    )
  );

  setText(
    "fatGoal",
    Math.round(
      fatGoal
    )
  );


  setText(
    "nutritionCalories",
    Math.round(
      nutrition.calories
    )
  );


  setText(
    "calorieGoal",
    Math.round(
      caloriesGoal
    )
  );


  setProgressBar(
    "proteinBar",
    nutrition.protein,
    proteinGoal
  );


  setProgressBar(
    "carbsBar",
    nutrition.carbs,
    carbsGoal
  );


  setProgressBar(
    "fatBar",
    nutrition.fat,
    fatGoal
  );

}


/* =========================================================
   WORKOUT PROGRESS
   ========================================================= */

function renderWorkout() {

  const currentStreak =
    calculateCurrentWorkoutStreak();


  const bestStreak =
    calculateBestWorkoutStreak();


  const history =
    getWorkoutHistory();


  setText(
    "workoutCurrentStreak",
    currentStreak
  );


  setText(
    "bestStreak",
    bestStreak
  );


  setText(
    "completedWorkouts",
    history.length
  );

}


/* =========================================================
   GOAL
   ========================================================= */

function renderGoal() {

  const user =
    getUser();


  const goal =
    String(
      user.goal || ""
    ).toLowerCase();


  const goalIcon =
    document.getElementById(
      "goalIcon"
    );

  const goalName =
    document.getElementById(
      "goalName"
    );

  const goalMessage =
    document.getElementById(
      "goalMessage"
    );


  let icon = "🎯";
  let name = "Not set yet";
  let message =
    "Complete your Calculator setup to start tracking your nutrition targets.";


  if (
    goal.includes("loss") ||
    goal.includes("lose") ||
    goal.includes("cut") ||
    goal.includes("weight loss") ||
    goal.includes("خسارة") ||
    goal.includes("تنشيف")
  ) {

    icon = "🔥";

    name = "Weight Loss";

    message =
      "Stay consistent with your calorie target, protein intake, workouts, and daily activity.";

  } else if (
    goal.includes("gain") ||
    goal.includes("bulk") ||
    goal.includes("muscle") ||
    goal.includes("زيادة") ||
    goal.includes("عضل")
  ) {

    icon = "💪";

    name = "Muscle Gain";

    message =
      "Focus on your calorie target, enough protein, progressive training, and consistent recovery.";

  } else if (
    goal.includes("maintain") ||
    goal.includes("maintenance") ||
    goal.includes("حفاظ") ||
    goal.includes("ثبات")
  ) {

    icon = "⚖️";

    name = "Maintain Weight";

    message =
      "Keep your nutrition and training consistent while maintaining your current body weight.";

  }


  if (goalIcon) {
    goalIcon.textContent =
      icon;
  }


  if (goalName) {
    goalName.textContent =
      name;
  }


  if (goalMessage) {
    goalMessage.textContent =
      message;
  }

}


/* =========================================================
   HELPERS
   ========================================================= */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(id);


  if (element) {
    element.textContent =
      value;
  }

}


function setProgressBar(
  id,
  current,
  goal
) {

  const element =
    document.getElementById(id);


  if (!element) {
    return;
  }


  if (
    !goal ||
    goal <= 0
  ) {

    element.style.width =
      "0%";

    return;
  }


  const percentage =
    Math.min(
      Math.max(
        (current / goal) *
          100,
        0
      ),
      100
    );


  element.style.width =
    `${percentage}%`;

}


/* =========================================================
   REFRESH
   ========================================================= */

function renderAll() {

  renderOverview();

  renderWeeklyActivity();

  renderWeightChart();

  renderCaloriesChart();

  renderNutrition();

  renderWorkoutChart();

  renderWorkout();

  renderGoal();

}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAll();

  }
);


/* =========================================================
   AUTO REFRESH
   ========================================================= */

window.addEventListener(
  "storage",
  event => {

    const watchedKeys = [
      USER_KEY,
      FOOD_KEY,
      WORKOUT_HISTORY_KEY,
      WORKOUT_PLAN_KEY,
      WEIGHT_HISTORY_KEY
    ];


    if (
      watchedKeys.includes(
        event.key
      )
    ) {
      renderAll();
    }

  }
);


document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.visibilityState ===
      "visible"
    ) {
      renderAll();
    }

  }
);