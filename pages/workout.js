// ==========================================
// NutriX - Workout System V2
// ==========================================

const workoutPlanKey = "nutrixWorkoutPlan";
const workoutHistoryKey = "nutrixWorkoutHistory";


// ==========================================
// SPLIT PLANS
// NutriX Week:
// Saturday → Friday
//
// 0 = Saturday
// 1 = Sunday
// 2 = Monday
// 3 = Tuesday
// 4 = Wednesday
// 5 = Thursday
// 6 = Friday
// ==========================================

const splitPlans = {

  beginner: {

    3: [
      "Push",
      "Rest",
      "Pull",
      "Rest",
      "Legs",
      "Rest",
      "Rest"
    ],

    4: [
      "Upper",
      "Lower",
      "Rest",
      "Upper",
      "Lower",
      "Rest",
      "Rest"
    ],

    5: [
      "Push",
      "Pull",
      "Legs",
      "Upper",
      "Lower",
      "Rest",
      "Rest"
    ],

    6: [
      "Push",
      "Pull",
      "Legs",
      "Push",
      "Pull",
      "Legs",
      "Rest"
    ]

  },


  intermediate: {

    3: [
      "Push",
      "Rest",
      "Pull",
      "Rest",
      "Legs",
      "Rest",
      "Rest"
    ],

    4: [
      "Upper",
      "Lower",
      "Rest",
      "Upper",
      "Lower",
      "Rest",
      "Rest"
    ],

    5: [
      "Push",
      "Pull",
      "Legs",
      "Rest",
      "Arnold Chest + Back",
      "Arnold Shoulders + Arms",
      "Rest"
    ],

    6: [
      "Push",
      "Pull",
      "Legs",
      "Upper",
      "Lower",
      "Upper",
      "Rest"
    ]

  },


  advanced: {

    3: [
      "Push",
      "Rest",
      "Pull",
      "Rest",
      "Legs",
      "Rest",
      "Rest"
    ],

    4: [
      "Push",
      "Pull",
      "Legs",
      "Rest",
      "Upper",
      "Rest",
      "Rest"
    ],

    5: [
      "Push",
      "Pull",
      "Legs",
      "Rest",
      "Upper",
      "Lower",
      "Rest"
    ],

    6: [
      "Push",
      "Pull",
      "Legs",
      "Push",
      "Pull",
      "Legs",
      "Rest"
    ]

  }

};


// ==========================================
// EXERCISE DATABASE
// ==========================================

const workoutDetails = {

  Push: {

    title: "Push Day",

    focus: "Chest • Shoulders • Triceps",

    exercises: [

      {
        name: "Bench Press",
        sets: 4,
        reps: "8-12",
        muscle: "Chest"
      },

      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-12",
        muscle: "Upper Chest"
      },

      {
        name: "Shoulder Press",
        sets: 3,
        reps: "8-12",
        muscle: "Shoulders"
      },

      {
        name: "Lateral Raises",
        sets: 3,
        reps: "12-15",
        muscle: "Side Delts"
      },

      {
        name: "Triceps Pushdown",
        sets: 3,
        reps: "10-15",
        muscle: "Triceps"
      },

      {
        name: "Overhead Triceps Extension",
        sets: 3,
        reps: "10-15",
        muscle: "Triceps"
      }

    ]

  },


  Pull: {

    title: "Pull Day",

    focus: "Back • Biceps • Rear Delts",

    exercises: [

      {
        name: "Lat Pulldown",
        sets: 4,
        reps: "8-12",
        muscle: "Lats"
      },

      {
        name: "Barbell Row",
        sets: 4,
        reps: "8-12",
        muscle: "Back"
      },

      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10-12",
        muscle: "Back"
      },

      {
        name: "Face Pull",
        sets: 3,
        reps: "12-15",
        muscle: "Rear Delts"
      },

      {
        name: "Barbell Curl",
        sets: 3,
        reps: "8-12",
        muscle: "Biceps"
      },

      {
        name: "Hammer Curl",
        sets: 3,
        reps: "10-12",
        muscle: "Biceps"
      }

    ]

  },


  Legs: {

    title: "Leg Day",

    focus: "Quads • Hamstrings • Glutes • Calves",

    exercises: [

      {
        name: "Squat",
        sets: 4,
        reps: "6-10",
        muscle: "Quads"
      },

      {
        name: "Leg Press",
        sets: 3,
        reps: "10-12",
        muscle: "Quads"
      },

      {
        name: "Romanian Deadlift",
        sets: 3,
        reps: "8-12",
        muscle: "Hamstrings"
      },

      {
        name: "Leg Curl",
        sets: 3,
        reps: "10-15",
        muscle: "Hamstrings"
      },

      {
        name: "Leg Extension",
        sets: 3,
        reps: "10-15",
        muscle: "Quads"
      },

      {
        name: "Standing Calf Raises",
        sets: 4,
        reps: "12-20",
        muscle: "Calves"
      }

    ]

  },


  Upper: {

    title: "Upper Body",

    focus: "Chest • Back • Shoulders • Arms",

    exercises: [

      {
        name: "Bench Press",
        sets: 3,
        reps: "8-12",
        muscle: "Chest"
      },

      {
        name: "Lat Pulldown",
        sets: 3,
        reps: "8-12",
        muscle: "Back"
      },

      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10-12",
        muscle: "Back"
      },

      {
        name: "Shoulder Press",
        sets: 3,
        reps: "8-12",
        muscle: "Shoulders"
      },

      {
        name: "Lateral Raises",
        sets: 3,
        reps: "12-15",
        muscle: "Shoulders"
      },

      {
        name: "Barbell Curl",
        sets: 3,
        reps: "10-12",
        muscle: "Biceps"
      },

      {
        name: "Triceps Pushdown",
        sets: 3,
        reps: "10-15",
        muscle: "Triceps"
      }

    ]

  },


  Lower: {

    title: "Lower Body",

    focus: "Quads • Hamstrings • Glutes • Calves",

    exercises: [

      {
        name: "Squat",
        sets: 4,
        reps: "6-10",
        muscle: "Quads"
      },

      {
        name: "Romanian Deadlift",
        sets: 3,
        reps: "8-12",
        muscle: "Hamstrings"
      },

      {
        name: "Leg Press",
        sets: 3,
        reps: "10-12",
        muscle: "Quads"
      },

      {
        name: "Leg Curl",
        sets: 3,
        reps: "10-15",
        muscle: "Hamstrings"
      },

      {
        name: "Leg Extension",
        sets: 3,
        reps: "10-15",
        muscle: "Quads"
      },

      {
        name: "Calf Raises",
        sets: 4,
        reps: "12-20",
        muscle: "Calves"
      }

    ]

  },


  "Arnold Chest + Back": {

    title: "Arnold Chest + Back",

    focus: "Chest • Back",

    exercises: [

      {
        name: "Bench Press",
        sets: 4,
        reps: "8-12",
        muscle: "Chest"
      },

      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-12",
        muscle: "Upper Chest"
      },

      {
        name: "Lat Pulldown",
        sets: 4,
        reps: "8-12",
        muscle: "Lats"
      },

      {
        name: "Barbell Row",
        sets: 4,
        reps: "8-12",
        muscle: "Back"
      },

      {
        name: "Cable Fly",
        sets: 3,
        reps: "12-15",
        muscle: "Chest"
      },

      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10-12",
        muscle: "Back"
      }

    ]

  },


  "Arnold Shoulders + Arms": {

    title: "Arnold Shoulders + Arms",

    focus: "Shoulders • Biceps • Triceps",

    exercises: [

      {
        name: "Shoulder Press",
        sets: 4,
        reps: "8-12",
        muscle: "Shoulders"
      },

      {
        name: "Lateral Raises",
        sets: 4,
        reps: "12-15",
        muscle: "Side Delts"
      },

      {
        name: "Rear Delt Fly",
        sets: 3,
        reps: "12-15",
        muscle: "Rear Delts"
      },

      {
        name: "Barbell Curl",
        sets: 3,
        reps: "8-12",
        muscle: "Biceps"
      },

      {
        name: "Hammer Curl",
        sets: 3,
        reps: "10-12",
        muscle: "Biceps"
      },

      {
        name: "Triceps Pushdown",
        sets: 3,
        reps: "10-15",
        muscle: "Triceps"
      },

      {
        name: "Overhead Triceps Extension",
        sets: 3,
        reps: "10-15",
        muscle: "Triceps"
      }

    ]

  }

};


// ==========================================
// DOM ELEMENTS
// ==========================================

const workoutGoal =
  document.getElementById("workoutGoal");

const workoutLevel =
  document.getElementById("workoutLevel");

const workoutDays =
  document.getElementById("workoutDays");

const generatePlanButton =
  document.getElementById("generatePlan");

const todayWorkout =
  document.getElementById("todayWorkout");

const todayWorkoutSubtitle =
  document.getElementById("todayWorkoutSubtitle");

const exerciseList =
  document.getElementById("exerciseList");

const completeWorkoutButton =
  document.getElementById("completeWorkout");

const weeklyPlanList =
  document.getElementById("weeklyPlanList");

const workoutStreak =
  document.getElementById("workoutStreak");

const completedWorkouts =
  document.getElementById("completedWorkouts");

const weeklyWorkouts =
  document.getElementById("weeklyWorkouts");


// ==========================================
// WEEK DAYS
// Saturday → Friday
// ==========================================

const weekDays = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];


// ==========================================
// LOCAL STORAGE
// ==========================================

function getSavedPlan() {

  const data =
    localStorage.getItem(workoutPlanKey);

  if (!data) {
    return null;
  }

  try {

    return JSON.parse(data);

  } catch (error) {

    console.error(
      "Error reading workout plan:",
      error
    );

    return null;
  }

}


function savePlan(plan) {

  localStorage.setItem(
    workoutPlanKey,
    JSON.stringify(plan)
  );

}


function getHistory() {

  const data =
    localStorage.getItem(workoutHistoryKey);

  if (!data) {
    return [];
  }

  try {

    const parsed = JSON.parse(data);

    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    console.error(
      "Error reading workout history:",
      error
    );

    return [];
  }

}


function saveHistory(history) {

  localStorage.setItem(
    workoutHistoryKey,
    JSON.stringify(history)
  );

}


// ==========================================
// GET TODAY INDEX
// ==========================================

function getTodayScheduleIndex() {

  const jsDay =
    new Date().getDay();

  return (jsDay + 1) % 7;

}


// ==========================================
// GET TODAY WORKOUT
// ==========================================

function getTodayWorkout(plan) {

  if (
    !plan ||
    !Array.isArray(plan.schedule)
  ) {
    return null;
  }

  const todayIndex =
    getTodayScheduleIndex();

  return plan.schedule[todayIndex] || null;

}


// ==========================================
// CREATE PLAN
// ==========================================

function createPlan() {

  const level =
    workoutLevel?.value || "";

  const days =
    Number(workoutDays?.value);

  const goal =
    workoutGoal?.value || "";


  if (!goal) {

    alert(
      "Please select your goal."
    );

    workoutGoal?.focus();

    return;
  }


  if (!level) {

    alert(
      "Please select your experience level."
    );

    workoutLevel?.focus();

    return;
  }


  if (!days) {

    alert(
      "Please select your training days."
    );

    workoutDays?.focus();

    return;
  }


  const selectedPlan =
    splitPlans[level]?.[days];


  if (!selectedPlan) {

    alert(
      "No workout plan available for these options."
    );

    return;
  }


  const plan = {

    level,

    days,

    goal,

    schedule: [
      ...selectedPlan
    ],

    createdAt:
      new Date().toISOString()

  };


  savePlan(plan);

  renderWorkout();

  updateStats();


  setTimeout(() => {

    todayWorkout?.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }, 100);

}


// ==========================================
// RENDER WORKOUT
// ==========================================

function renderWorkout() {

  const plan =
    getSavedPlan();


  if (!plan) {

    renderEmptyWorkout();

    renderWeeklyPlan();

    return;
  }


  const todayType =
    getTodayWorkout(plan);


  if (!todayType) {

    renderEmptyWorkout();

    renderWeeklyPlan();

    return;
  }


  const todayIndex =
    getTodayScheduleIndex();


  highlightSelectedDay(
    todayIndex
  );


  if (
    todayType === "Rest"
  ) {

    renderRestDay(

      "Today is a Rest Day",

      "Give your body time to recover and come back stronger."

    );

    renderWeeklyPlan();

    return;
  }


  const details =
    workoutDetails[todayType];


  if (!details) {

    renderEmptyWorkout();

    renderWeeklyPlan();

    return;
  }


  todayWorkout.innerHTML = `

    <div class="workout-day-header">

      <div>

        <span class="workout-day-badge">
          TODAY
        </span>

        <h2>
          ${details.title}
        </h2>

        <p>
          ${details.focus}
        </p>

      </div>

      <div class="workout-day-icon">
        🏋️
      </div>

    </div>

  `;


  if (todayWorkoutSubtitle) {

    todayWorkoutSubtitle.textContent =
      `${formatGoal(plan.goal)} • ${formatLevel(plan.level)} • ${plan.days} days/week`;

  }


  renderExercises(
    details.exercises
  );


  const todayCompleted =
    isWorkoutCompletedToday(plan);


  if (completeWorkoutButton) {

    completeWorkoutButton.disabled =
      todayCompleted;

    completeWorkoutButton.textContent =
      todayCompleted
        ? "✓ Workout Completed"
        : "✓ Complete Workout";

  }


  renderWeeklyPlan();

}


// ==========================================
// FORMAT GOAL
// ==========================================

function formatGoal(goal) {

  if (!goal) {
    return "";
  }


  const goalMap = {

    "muscle":
      "Build Muscle",

    "build-muscle":
      "Build Muscle",

    "Build Muscle":
      "Build Muscle",


    "weight-loss":
      "Lose Weight",

    "lose-weight":
      "Lose Weight",

    "Lose Weight":
      "Lose Weight",


    "maintain":
      "Maintain Fitness",

    "maintain-fitness":
      "Maintain Fitness",

    "Maintain Fitness":
      "Maintain Fitness"

  };


  return (
    goalMap[goal] ||
    goal
  );

}


// ==========================================
// FORMAT LEVEL
// ==========================================

function formatLevel(level) {

  if (!level) {
    return "";
  }


  const levelMap = {

    beginner:
      "Beginner",

    intermediate:
      "Intermediate",

    advanced:
      "Advanced"

  };


  return (
    levelMap[level] ||
    level
  );

}


// ==========================================
// RENDER REST DAY
// ==========================================

function renderRestDay(
  title,
  message
) {

  if (!todayWorkout) {
    return;
  }


  todayWorkout.innerHTML = `

    <div class="rest-day-card">

      <div class="rest-icon">
        🛌
      </div>

      <h2>
        ${title}
      </h2>

      <p>
        ${message}
      </p>

      <div class="rest-tips">

        <span>
          💧 Stay Hydrated
        </span>

        <span>
          😴 Get Enough Sleep
        </span>

        <span>
          🥗 Eat Well
        </span>

      </div>

    </div>

  `;


  if (todayWorkoutSubtitle) {

    todayWorkoutSubtitle.textContent =
      "Recovery is part of your progress";

  }


  if (exerciseList) {

    exerciseList.innerHTML = "";

  }


  if (completeWorkoutButton) {

    completeWorkoutButton.disabled =
      true;

    completeWorkoutButton.textContent =
      "Rest Day";

  }

}


// ==========================================
// EMPTY WORKOUT
// ==========================================

function renderEmptyWorkout() {

  if (!todayWorkout) {
    return;
  }


  todayWorkout.innerHTML = `

    <div class="empty-workout">

      <div class="empty-workout-icon">
        🏋️
      </div>

      <h2>
        No Workout Plan Yet
      </h2>

      <p>
        Choose your goal, level and training days
        to generate your personalized plan.
      </p>

    </div>

  `;


  if (todayWorkoutSubtitle) {

    todayWorkoutSubtitle.textContent =
      "Create your plan to get started";

  }


  if (exerciseList) {

    exerciseList.innerHTML = "";

  }


  if (completeWorkoutButton) {

    completeWorkoutButton.disabled =
      true;

    completeWorkoutButton.textContent =
      "Complete Workout";

  }

}


// ==========================================
// RENDER EXERCISES
// ==========================================

function renderExercises(
  exercises
) {

  if (!exerciseList) {
    return;
  }


  exerciseList.innerHTML = "";


  if (
    !Array.isArray(exercises)
  ) {
    return;
  }


  exercises.forEach(
    (exercise, index) => {

      const card =
        document.createElement("div");


      card.className =
        "exercise-card";


      card.innerHTML = `

        <div class="exercise-number">
          ${index + 1}
        </div>

        <div class="exercise-info">

          <h3>
            ${exercise.name}
          </h3>

          <span>
            ${exercise.muscle}
          </span>

        </div>

        <div class="exercise-meta">

          <strong>
            ${exercise.sets} Sets
          </strong>

          <small>
            ${exercise.reps} Reps
          </small>

        </div>

      `;


      exerciseList.appendChild(
        card
      );

    }
  );

}


// ==========================================
// RENDER WEEKLY PLAN
// ==========================================

function renderWeeklyPlan() {

  if (!weeklyPlanList) {
    return;
  }


  const plan =
    getSavedPlan();


  if (
    !plan ||
    !Array.isArray(plan.schedule)
  ) {

    weeklyPlanList.innerHTML = `

      <div class="weekly-empty">
        Generate a workout plan first.
      </div>

    `;

    return;
  }


  const todayIndex =
    getTodayScheduleIndex();


  weeklyPlanList.innerHTML = "";


  plan.schedule.forEach(
    (workoutType, index) => {

      const dayName =
        weekDays[index];


      const isToday =
        index === todayIndex;


      const isRest =
        workoutType === "Rest";


      const button =
        document.createElement("button");


      button.type =
        "button";


      button.className =
        "weekly-day";


      if (isToday) {

        button.classList.add(
          "current-day"
        );

        button.classList.add(
          "selected-day"
        );

      }


      if (isRest) {

        button.classList.add(
          "rest-day"
        );

      }


      const completed =
        isWorkoutCompletedForDay(
          index,
          plan
        );


      if (completed) {

        button.classList.add(
          "completed-day"
        );

      }


      button.innerHTML = `

        <div class="weekly-day-left">

          <div class="weekly-day-name">

            ${dayName}

            ${
              isToday
                ? `
                  <span class="today-label">
                    TODAY
                  </span>
                `
                : ""
            }

          </div>

          <div class="weekly-day-workout">

            ${
              isRest
                ? "Rest & Recovery"
                : workoutType
            }

          </div>

        </div>

        <div class="weekly-day-right">

          ${
            completed

              ? `
                <span class="completed-icon">
                  ✓
                </span>
              `

              : isRest

                ? `
                  <span class="rest-icon-small">
                    😴
                  </span>
                `

                : `
                  <span class="arrow">
                    ›
                  </span>
                `
          }

        </div>

      `;


      button.addEventListener(
        "click",
        () => {

          showWorkoutDay(

            workoutType,

            dayName,

            index,

            plan

          );

        }
      );


      weeklyPlanList.appendChild(
        button
      );

    }
  );

}


// ==========================================
// SHOW ANY WORKOUT DAY
// ==========================================

function showWorkoutDay(

  workoutType,

  dayName,

  index,

  plan

) {

  if (!plan) {
    plan = getSavedPlan();
  }


  if (!plan) {
    return;
  }


  highlightSelectedDay(
    index
  );


  if (!todayWorkout) {
    return;
  }


  todayWorkout.scrollIntoView({

    behavior: "smooth",

    block: "start"

  });


  const todayIndex =
    getTodayScheduleIndex();


  const isToday =
    index === todayIndex;


  // ========================================
  // REST DAY
  // ========================================

  if (
    workoutType === "Rest"
  ) {

    renderRestDay(

      `${dayName} — Rest Day`,

      isToday

        ? "Today is your recovery day."

        : "Recovery helps your muscles recover and grow."

    );


    return;
  }


  // ========================================
  // WORKOUT
  // ========================================

  const details =
    workoutDetails[workoutType];


  if (!details) {
    return;
  }


  todayWorkout.innerHTML = `

    <div class="workout-day-header">

      <div>

        <span class="workout-day-badge">

          ${
            isToday
              ? "TODAY"
              : dayName.toUpperCase()
          }

        </span>

        <h2>
          ${details.title}
        </h2>

        <p>
          ${details.focus}
        </p>

      </div>

      <div class="workout-day-icon">
        🏋️
      </div>

    </div>

  `;


  if (todayWorkoutSubtitle) {

    todayWorkoutSubtitle.textContent =
      `${dayName} • ${formatGoal(plan.goal)} • ${formatLevel(plan.level)}`;

  }


  renderExercises(
    details.exercises
  );


  // ========================================
  // COMPLETE BUTTON
  // Only today can be completed
  // ========================================

  if (completeWorkoutButton) {

    if (!isToday) {

      completeWorkoutButton.disabled =
        true;

      completeWorkoutButton.textContent =
        "📋 View Only";

    }

    else {

      const completed =
        isWorkoutCompletedToday(plan);


      completeWorkoutButton.disabled =
        completed;


      completeWorkoutButton.textContent =
        completed

          ? "✓ Workout Completed"

          : "✓ Complete Workout";

    }

  }

}


// ==========================================
// HIGHLIGHT SELECTED DAY
// ==========================================

function highlightSelectedDay(
  index
) {

  const allDays =
    document.querySelectorAll(
      ".weekly-day"
    );


  allDays.forEach(
    (day, dayIndex) => {

      day.classList.toggle(

        "selected-day",

        dayIndex === index

      );

    }
  );

}


// ==========================================
// COMPLETE TODAY WORKOUT
// ==========================================

function completeCurrentWorkout() {

  const plan =
    getSavedPlan();


  if (!plan) {
    return;
  }


  const todayType =
    getTodayWorkout(plan);


  if (
    !todayType ||
    todayType === "Rest"
  ) {

    return;

  }


  if (
    isWorkoutCompletedToday(plan)
  ) {

    return;

  }


  const history =
    getHistory();


  const workoutRecord = {

    date:
      getTodayString(),

    weekIndex:
      getTodayScheduleIndex(),

    workout:
      todayType,

    level:
      plan.level,

    goal:
      plan.goal,

    planCreatedAt:
      plan.createdAt || null,

    completedAt:
      new Date().toISOString()

  };


  history.push(
    workoutRecord
  );


  saveHistory(
    history
  );


  renderWorkout();

  updateStats();

}


// ==========================================
// TODAY DATE
// ==========================================

function getTodayString() {

  return dateToString(
    new Date()
  );

}


// ==========================================
// DATE TO STRING
// ==========================================

function dateToString(
  date
) {

  const year =
    date.getFullYear();


  const month =
    String(
      date.getMonth() + 1
    ).padStart(
      2,
      "0"
    );


  const day =
    String(
      date.getDate()
    ).padStart(
      2,
      "0"
    );


  return `${year}-${month}-${day}`;

}


// ==========================================
// IS TODAY COMPLETED
// V2
//
// Matches today's scheduled workout.
// ==========================================

function isWorkoutCompletedToday(
  plan = getSavedPlan()
) {

  if (
    !plan ||
    !Array.isArray(plan.schedule)
  ) {

    return false;

  }


  const today =
    getTodayString();


  const todayIndex =
    getTodayScheduleIndex();


  const todayWorkoutType =
    plan.schedule[todayIndex];


  if (
    !todayWorkoutType ||
    todayWorkoutType === "Rest"
  ) {

    return false;

  }


  const history =
    getHistory();


  return history.some(
    item => {

      if (
        item.date !== today
      ) {

        return false;

      }


      // V2:
      // New records have workout type.
      // Legacy records without workout
      // remain compatible.

      return (
        !item.workout ||
        item.workout === todayWorkoutType
      );

    }
  );

}


// ==========================================
// GET DATE FOR SCHEDULE INDEX
//
// Saturday = 0
// Sunday   = 1
// Monday   = 2
// Tuesday  = 3
// Wednesday = 4
// Thursday = 5
// Friday   = 6
// ==========================================

function getDateForScheduleIndex(
  index
) {

  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  const todayIndex =
    getTodayScheduleIndex();


  const weekStart =
    new Date(today);


  weekStart.setDate(

    today.getDate() -
    todayIndex

  );


  const targetDate =
    new Date(weekStart);


  targetDate.setDate(

    weekStart.getDate() +
    index

  );


  return targetDate;

}


// ==========================================
// IS SPECIFIC DAY COMPLETED
// V2
//
// Uses the real Saturday → Friday dates.
// Handles week boundaries correctly.
// ==========================================

function isWorkoutCompletedForDay(

  index,

  plan = getSavedPlan()

) {

  if (
    !plan ||
    !Array.isArray(plan.schedule)
  ) {

    return false;

  }


  const todayIndex =
    getTodayScheduleIndex();


  // Future days cannot be completed.

  if (
    index > todayIndex
  ) {

    return false;

  }


  const workoutType =
    plan.schedule[index];


  // Rest days are not completed workouts.

  if (
    !workoutType ||
    workoutType === "Rest"
  ) {

    return false;

  }


  const targetDate =
    getDateForScheduleIndex(
      index
    );


  const dateString =
    dateToString(
      targetDate
    );


  const history =
    getHistory();


  return history.some(
    item => {

      if (
        item.date !== dateString
      ) {

        return false;

      }


      return (
        !item.workout ||
        item.workout === workoutType
      );

    }
  );

}


// ==========================================
// CHECK CURRENT NUTRIX WEEK
// Saturday → Friday
// ==========================================

function isThisWeek(
  dateString
) {

  if (!dateString) {
    return false;
  }


  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  const date =
    new Date(
      `${dateString}T00:00:00`
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return false;

  }


  const todayIndex =
    getTodayScheduleIndex();


  const weekStart =
    new Date(today);


  weekStart.setDate(

    today.getDate() -
    todayIndex

  );


  const weekEnd =
    new Date(weekStart);


  weekEnd.setDate(

    weekStart.getDate() +
    6

  );


  weekEnd.setHours(
    23,
    59,
    59,
    999
  );


  return (

    date >= weekStart &&
    date <= weekEnd

  );

}


// ==========================================
// UPDATE STATS
// ==========================================

function updateStats() {

  const history =
    getHistory();


  // ========================================
  // TOTAL COMPLETED
  // ========================================

  if (completedWorkouts) {

    completedWorkouts.textContent =
      history.length;

  }


  // ========================================
  // THIS WEEK
  // ========================================

  const weeklyCount =
    history.filter(
      item =>
        isThisWeek(
          item.date
        )
    ).length;


  if (weeklyWorkouts) {

    weeklyWorkouts.textContent =
      weeklyCount;

  }


  // ========================================
  // STREAK
  // ========================================

  const streak =
    calculateStreak(
      getSavedPlan()
    );


  if (workoutStreak) {

    workoutStreak.textContent =
      streak;

  }

}


// ==========================================
// CALCULATE STREAK
//
// V2:
// Rest days DO NOT break the streak.
//
// Example:
//
// Saturday  Workout ✓
// Sunday    Rest
// Monday    Workout ✓
//
// Streak = 2
// ==========================================

function calculateStreak(
  plan = getSavedPlan()
) {

  const history =
    getHistory();


  if (
    !history.length ||
    !plan ||
    !Array.isArray(plan.schedule)
  ) {

    return 0;

  }


  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  let cursor =
    new Date(today);


  let streak = 0;


  // Prevent infinite loops.

  for (
    let i = 0;
    i < 3700;
    i++
  ) {

    const scheduleIndex =
      (cursor.getDay() + 1) % 7;


    const workoutType =
      plan.schedule[
        scheduleIndex
      ];


    // --------------------------------------
    // REST DAY
    // --------------------------------------

    if (
      workoutType === "Rest"
    ) {

      cursor.setDate(
        cursor.getDate() - 1
      );

      continue;

    }


    const dateString =
      dateToString(
        cursor
      );


    const completed =
      history.some(
        item => {

          if (
            item.date !== dateString
          ) {

            return false;

          }


          return (
            !item.workout ||
            item.workout === workoutType
          );

        }
      );


    // --------------------------------------
    // TODAY
    //
    // If today's workout isn't completed,
    // don't immediately destroy the streak.
    // Look at the previous scheduled workout.
    // --------------------------------------

    if (
      !completed &&
      dateString === getTodayString()
    ) {

      cursor.setDate(
        cursor.getDate() - 1
      );

      continue;

    }


    // --------------------------------------
    // MISSED WORKOUT
    // --------------------------------------

    if (!completed) {

      break;

    }


    streak++;


    cursor.setDate(
      cursor.getDate() - 1
    );

  }


  return streak;

}


// ==========================================
// LOAD SAVED SELECTIONS
// ==========================================
//
// Supports old saved values:
//
// "muscle"
// "weight-loss"
// "maintain"
// ==========================================

function loadSavedSelections() {

  const plan =
    getSavedPlan();


  if (!plan) {
    return;
  }


  // ========================================
  // GOAL
  // ========================================

  if (workoutGoal) {

    const savedGoal =
      plan.goal || "";


    const formattedGoal =
      formatGoal(
        savedGoal
      );


    const goalOptions =
      Array.from(
        workoutGoal.options || []
      );


    const exactGoal =
      goalOptions.find(
        option =>
          option.value === savedGoal
      );


    const formattedOption =
      goalOptions.find(
        option =>

          option.value ===
            formattedGoal ||

          option.textContent.trim() ===
            formattedGoal
      );


    workoutGoal.value =

      exactGoal?.value ||

      formattedOption?.value ||

      savedGoal;

  }


  // ========================================
  // LEVEL
  // ========================================

  if (workoutLevel) {

    workoutLevel.value =
      plan.level || "";

  }


  // ========================================
  // DAYS
  // ========================================

  if (workoutDays) {

    workoutDays.value =
      String(
        plan.days || ""
      );

  }

}


// ==========================================
// GENERATE BUTTON
// ==========================================

if (
  generatePlanButton
) {

  generatePlanButton.addEventListener(

    "click",

    createPlan

  );

}


// ==========================================
// COMPLETE BUTTON
// ==========================================

if (
  completeWorkoutButton
) {

  completeWorkoutButton.addEventListener(

    "click",

    completeCurrentWorkout

  );

}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener(

  "DOMContentLoaded",

  () => {

    loadSavedSelections();

    renderWorkout();

    updateStats();

  }

);