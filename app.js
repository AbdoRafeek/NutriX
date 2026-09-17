document.addEventListener(
    "DOMContentLoaded",
    loadDashboard
);


/* =========================
   DEFAULT USER
========================= */

const defaultUser = {

    caloriesGoal: 2300,

    proteinGoal: 170,

    carbsGoal: 250,

    fatGoal: 70,

    caloriesConsumed: 0,

    proteinConsumed: 0,

    carbsConsumed: 0,

    fatConsumed: 0

};


/* =========================
   GET USER
========================= */

function getUser() {

    const saved =
        localStorage.getItem("nutrixUser");


    if (!saved) {

        localStorage.setItem(
            "nutrixUser",
            JSON.stringify(defaultUser)
        );

        return {
            ...defaultUser
        };

    }


    try {

        const user =
            JSON.parse(saved);


        return {
            ...defaultUser,
            ...user
        };

    } catch {

        return {
            ...defaultUser
        };

    }

}


/* =========================
   SAVE USER
========================= */

function saveUser(user) {

    localStorage.setItem(
        "nutrixUser",
        JSON.stringify(user)
    );

}


/* =========================
   TODAY DATE
========================= */

function getTodayString() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            now.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


/* =========================
   GET TODAY FOOD
========================= */

function getTodayFood() {

    const saved =
        localStorage.getItem(
            "nutrixFood"
        );


    if (!saved) {
        return [];
    }


    try {

        const food =
            JSON.parse(saved);


        if (!Array.isArray(food)) {
            return [];
        }


        const today =
            getTodayString();


        return food.filter(
            item =>
                item.date === today
        );

    } catch {

        return [];

    }

}


/* =========================
   CALCULATE TODAY TOTALS
========================= */

function getTodayTotals() {

    const todayFood =
        getTodayFood();


    return todayFood.reduce(
        (totals, item) => {

            totals.calories +=
                Number(item.calories) || 0;


            totals.protein +=
                Number(item.protein) || 0;


            totals.carbs +=
                Number(item.carbs) || 0;


            totals.fat +=
                Number(item.fat) || 0;


            return totals;

        },
        {
            calories: 0,
            protein: 0,
            carbs: 0,
            fat: 0
        }
    );

}

/* =========================
   UPDATE TODAY'S MEALS
========================= */

function updateTodayMeals() {

    const todayFood =
        getTodayFood();


    const meals = {

        Breakfast: {
            calories: 0,
            items: []
        },

        Lunch: {
            calories: 0,
            items: []
        },

        Snack: {
            calories: 0,
            items: []
        },

        Dinner: {
            calories: 0,
            items: []
        }

    };


    todayFood.forEach(item => {

        const meal =
            item.meal;


        if (!meals[meal]) {
            return;
        }


        meals[meal].calories +=
            Number(item.calories) || 0;


        meals[meal].items.push(
            item.name
        );

    });


    /* =====================
       BREAKFAST
    ===================== */

    setText(
        "breakfastCalories",
        `${Math.round(
            meals.Breakfast.calories
        )} kcal`
    );


    setText(
        "breakfastInfo",
        meals.Breakfast.items.length
            ? meals.Breakfast.items.join(", ")
            : "Not added yet"
    );


    /* =====================
       LUNCH
    ===================== */

    setText(
        "lunchCalories",
        `${Math.round(
            meals.Lunch.calories
        )} kcal`
    );


    setText(
        "lunchInfo",
        meals.Lunch.items.length
            ? meals.Lunch.items.join(", ")
            : "Not added yet"
    );


    /* =====================
       SNACK
    ===================== */

    setText(
        "snackCalories",
        `${Math.round(
            meals.Snack.calories
        )} kcal`
    );


    setText(
        "snackInfo",
        meals.Snack.items.length
            ? meals.Snack.items.join(", ")
            : "Not added yet"
    );


    /* =====================
       DINNER
    ===================== */

    setText(
        "dinnerCalories",
        `${Math.round(
            meals.Dinner.calories
        )} kcal`
    );


    setText(
        "dinnerInfo",
        meals.Dinner.items.length
            ? meals.Dinner.items.join(", ")
            : "Not added yet"
    );

}

/* =========================
   DASHBOARD
========================= */

function loadDashboard() {

    const user =
        getUser();


    /*
       Get today's food directly
       from nutrixFood
    */

    const totals =
        getTodayTotals();

        updateTodayMeals();
    /* =====================
       CALORIES
    ===================== */

    setText(
        "caloriesConsumed",
        Math.round(
            totals.calories
        )
    );


    setText(
        "caloriesGoal",
        Math.round(
            user.caloriesGoal
        )
    );


    const caloriePercentage =
        percentage(
            totals.calories,
            user.caloriesGoal
        );


    setText(
        "caloriePercent",
        `${caloriePercentage}%`
    );


    setWidth(
        "calorieProgress",
        caloriePercentage
    );


    /* =====================
       PROTEIN
    ===================== */

    updateMacro(

        totals.protein,

        user.proteinGoal,

        "proteinConsumed",

        "proteinGoal",

        "proteinProgress"

    );


    /* =====================
       CARBS
    ===================== */

    updateMacro(

        totals.carbs,

        user.carbsGoal,

        "carbsConsumed",

        "carbsGoal",

        "carbsProgress"

    );


    /* =====================
       FAT
    ===================== */

    updateMacro(

        totals.fat,

        user.fatGoal,

        "fatConsumed",

        "fatGoal",

        "fatProgress"

    );

}


/* =========================
   UPDATE MACRO
========================= */

function updateMacro(
    consumed,
    goal,
    consumedId,
    goalId,
    progressId
) {

    setText(
        consumedId,
        `${Math.round(consumed)}g`
    );


    setText(
        goalId,
        Math.round(goal)
    );


    setWidth(
        progressId,
        percentage(
            consumed,
            goal
        )
    );

}


/* =========================
   PERCENTAGE
========================= */

function percentage(
    value,
    goal
) {

    if (
        !goal ||
        goal <= 0
    ) {

        return 0;

    }


    return Math.min(

        Math.round(
            (value / goal) * 100
        ),

        100

    );

}


/* =========================
   SET TEXT
========================= */

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


/* =========================
   SET WIDTH
========================= */

function setWidth(
    id,
    value
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.style.width =
            `${value}%`;

    }

}


/* =========================
   UPDATE USER
========================= */

function updateUser(data) {

    const user =
        getUser();


    Object.assign(
        user,
        data
    );


    saveUser(user);


    loadDashboard();

}


/* =========================
   ADD FOOD CALORIES
========================= */

function addCalories(
    calories,
    protein,
    carbs,
    fat
) {

    /*
       Food Tracker now saves
       food inside nutrixFood.

       So we don't need to manually
       increase consumed values here.
    */

    loadDashboard();

}


/* =========================
   REFRESH DASHBOARD
   WHEN PAGE BECOMES VISIBLE
========================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "visible"
        ) {

            loadDashboard();

        }

    }
);


/* =========================
   REFRESH DASHBOARD
   WHEN STORAGE CHANGES
========================= */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key ===
            "nutrixFood"
        ) {

            loadDashboard();

        }

    }
);