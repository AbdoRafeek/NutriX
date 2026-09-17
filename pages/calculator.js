/* =========================
   ELEMENTS
========================= */

const calculatorForm =
    document.getElementById("calculatorForm");

const results =
    document.getElementById("results");

const bmrResult =
    document.getElementById("bmrResult");

const tdeeResult =
    document.getElementById("tdeeResult");

const caloriesResult =
    document.getElementById("caloriesResult");

const proteinResult =
    document.getElementById("proteinResult");

const carbsResult =
    document.getElementById("carbsResult");

const fatResult =
    document.getElementById("fatResult");

const saveMessage =
    document.getElementById("saveMessage");


/* =========================
   STORAGE
========================= */

const userStorageKey =
    "nutrixUser";

const weightHistoryKey =
    "nutrixWeightHistory";


/* =========================
   DEFAULT USER
========================= */

const defaultUser = {

    name: "",

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
        localStorage.getItem(
            userStorageKey
        );


    if (!saved) {

        return {
            ...defaultUser
        };

    }


    try {

        return {

            ...defaultUser,

            ...JSON.parse(saved)

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

        userStorageKey,

        JSON.stringify(user)

    );

}


/* =========================
   GET TODAY STRING
========================= */

function getTodayString() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${year}-${month}-${day}`;

}


/* =========================
   GET WEIGHT HISTORY
========================= */

function getWeightHistory() {

    try {

        const saved =
            localStorage.getItem(
                weightHistoryKey
            );


        if (!saved) {

            return [];

        }


        const parsed =
            JSON.parse(saved);


        return Array.isArray(parsed)
            ? parsed
            : [];


    } catch (error) {

        console.warn(
            "NutriX: Could not read weight history",
            error
        );


        return [];

    }

}


/* =========================
   SAVE WEIGHT HISTORY
========================= */

function saveWeightHistory(weight) {

    try {

        const numericWeight =
            Number(weight);


        if (
            !Number.isFinite(
                numericWeight
            ) ||
            numericWeight <= 0
        ) {

            return;

        }


        const history =
            getWeightHistory();


        const today =
            getTodayString();


        const entry = {

            date:
                today,

            weight:
                numericWeight,

            recordedAt:
                new Date().toISOString()

        };


        /*
           If the user already
           saved a weight today,
           update today's entry.
        */

        const existingIndex =
            history.findIndex(
                item =>
                    item &&
                    item.date === today
            );


        if (
            existingIndex >= 0
        ) {

            history[
                existingIndex
            ] = entry;

        } else {

            history.push(
                entry
            );

        }


        /*
           Keep history sorted
           from oldest to newest.
        */

        history.sort(
            (a, b) =>
                String(a.date)
                    .localeCompare(
                        String(b.date)
                    )
        );


        localStorage.setItem(

            weightHistoryKey,

            JSON.stringify(
                history
            )

        );


    } catch (error) {

        console.warn(
            "NutriX: Could not save weight history",
            error
        );

    }

}


/* =========================
   CALCULATE BMR
========================= */

function calculateBMR(
    weight,
    height,
    age,
    gender
) {

    let bmr;


    if (
        gender === "male"
    ) {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;

    } else {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;

    }


    return bmr;

}


/* =========================
   CALCULATE TDEE
========================= */

function calculateTDEE(
    bmr,
    activity
) {

    return bmr * activity;

}


/* =========================
   CALCULATE TARGET CALORIES
========================= */

function calculateTargetCalories(
    tdee,
    goal
) {

    let calories;


    switch (goal) {

        case "loss":

            calories =
                tdee - 400;

            break;


        case "gain":

            calories =
                tdee + 300;

            break;


        case "maintain":

        default:

            calories =
                tdee;

            break;

    }


    /*
       Keep calories at a
       reasonable minimum.
    */

    return Math.max(
        1200,
        calories
    );

}


/* =========================
   CALCULATE MACROS
========================= */

function calculateMacros(
    calories,
    weight,
    goal
) {

    /*
       Protein:

       Gain = 2g/kg

       Other goals =
       1.8g/kg
    */

    const protein =
        weight *
        (
            goal === "gain"
                ? 2
                : 1.8
        );


    /*
       Fat:
       0.8g/kg
    */

    const fat =
        weight * 0.8;


    /*
       Remaining calories
       are assigned to carbs.
    */

    const proteinCalories =
        protein * 4;


    const fatCalories =
        fat * 9;


    const remainingCalories =
        calories -
        proteinCalories -
        fatCalories;


    const carbs =
        Math.max(
            0,
            remainingCalories / 4
        );


    return {

        protein,

        carbs,

        fat

    };

}


/* =========================
   FORMAT NUMBER
========================= */

function formatNumber(
    value
) {

    return Math.round(
        Number(value) || 0
    );

}


/* =========================
   SHOW RESULTS
========================= */

function showResults(
    bmr,
    tdee,
    calories,
    macros
) {

    bmrResult.textContent =
        formatNumber(
            bmr
        );


    tdeeResult.textContent =
        formatNumber(
            tdee
        );


    caloriesResult.textContent =
        formatNumber(
            calories
        );


    proteinResult.textContent =
        `${formatNumber(
            macros.protein
        )}g`;


    carbsResult.textContent =
        `${formatNumber(
            macros.carbs
        )}g`;


    fatResult.textContent =
        `${formatNumber(
            macros.fat
        )}g`;


    results.hidden =
        false;


    /*
       Smooth scroll to results
    */

    setTimeout(() => {

        results.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }, 100);

}


/* =========================
   SAVE RESULTS
========================= */

function saveResults(
    calories,
    macros,
    name,
    age,
    gender,
    height,
    weight,
    activity,
    goal
) {

    const user =
        getUser();


    /* =========================
       Save Nutrition Goals
    ========================= */

    user.caloriesGoal =
        Math.round(
            calories
        );


    user.proteinGoal =
        Math.round(
            macros.protein
        );


    user.carbsGoal =
        Math.round(
            macros.carbs
        );


    user.fatGoal =
        Math.round(
            macros.fat
        );


    /* =========================
       Save User Information
    ========================= */

    user.name =
        name;

    user.age =
        age;

    user.gender =
        gender;

    user.height =
        height;

    user.weight =
        weight;

    user.activity =
        activity;

    user.goal =
        goal;


    /* =========================
       Save Calculation Date
    ========================= */

    user.calculatedAt =
        new Date().toISOString();


    /*
       Save current user
    */

    saveUser(
        user
    );


    /* =========================
       SAVE WEIGHT HISTORY
    ========================= */

    saveWeightHistory(
        weight
    );


    /* =========================
       Show Confirmation
    ========================= */

    if (saveMessage) {

        saveMessage.classList.add(
            "show"
        );


        setTimeout(() => {

            saveMessage.classList.remove(
                "show"
            );

        }, 3000);

    }

}


/* =========================
   FORM SUBMIT
========================= */

if (calculatorForm) {

    calculatorForm.addEventListener(

        "submit",

        event => {

            event.preventDefault();


            /* =========================
               Get Values
            ========================= */

            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const age =
                Number(
                    document.getElementById(
                        "age"
                    ).value
                );


            const gender =
                document.getElementById(
                    "gender"
                ).value;


            const height =
                Number(
                    document.getElementById(
                        "height"
                    ).value
                );


            const weight =
                Number(
                    document.getElementById(
                        "weight"
                    ).value
                );


            const activity =
                Number(
                    document.getElementById(
                        "activity"
                    ).value
                );


            const goal =
                document.getElementById(
                    "goal"
                ).value;


            /* =========================
               Validation
            ========================= */

            if (

                !name ||

                !age ||

                !gender ||

                !height ||

                !weight ||

                !activity ||

                !goal

            ) {

                return;

            }


            /* =========================
               Calculate BMR
            ========================= */

            const bmr =
                calculateBMR(

                    weight,

                    height,

                    age,

                    gender

                );


            /* =========================
               Calculate TDEE
            ========================= */

            const tdee =
                calculateTDEE(

                    bmr,

                    activity

                );


            /* =========================
               Calculate Calories
            ========================= */

            const calories =
                calculateTargetCalories(

                    tdee,

                    goal

                );


            /* =========================
               Calculate Macros
            ========================= */

            const macros =
                calculateMacros(

                    calories,

                    weight,

                    goal

                );


            /* =========================
               Display Results
            ========================= */

            showResults(

                bmr,

                tdee,

                calories,

                macros

            );


            /* =========================
               Save Everything
            ========================= */

            saveResults(

                calories,

                macros,

                name,

                age,

                gender,

                height,

                weight,

                activity,

                goal

            );

        }

    );

}


/* =========================
   LOAD SAVED DATA
========================= */

function loadSavedData() {

    const user =
        getUser();


    const nameInput =
        document.getElementById(
            "name"
        );


    const ageInput =
        document.getElementById(
            "age"
        );


    const genderInput =
        document.getElementById(
            "gender"
        );


    const heightInput =
        document.getElementById(
            "height"
        );


    const weightInput =
        document.getElementById(
            "weight"
        );


    const activityInput =
        document.getElementById(
            "activity"
        );


    const goalInput =
        document.getElementById(
            "goal"
        );


    /*
       Load saved name
    */

    if (nameInput) {

        nameInput.value =
            user.name || "";

    }


    /*
       If profile data is incomplete,
       stop here.
    */

    if (

        !user.age ||

        !user.gender ||

        !user.height ||

        !user.weight ||

        !user.activity ||

        !user.goal

    ) {

        return;

    }


    ageInput.value =
        user.age;


    genderInput.value =
        user.gender;


    heightInput.value =
        user.height;


    weightInput.value =
        user.weight;


    activityInput.value =
        user.activity;


    goalInput.value =
        user.goal;

}


/* =========================
   INITIALIZE
========================= */

document.addEventListener(

    "DOMContentLoaded",

    loadSavedData

);