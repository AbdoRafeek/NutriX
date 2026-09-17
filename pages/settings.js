/* =========================================================
   NutriX Settings
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       Storage Keys
       ===================================================== */

    const STORAGE_KEYS = [
        "nutrixUser",
        "nutrixFood",
        "nutrixWorkoutPlan",
        "nutrixWorkoutHistory",
        "nutrixWeightHistory"
    ];


    /* =====================================================
       Elements
       ===================================================== */

    const languageOptions = document.querySelectorAll(".language-option");

    const resetDataBtn = document.getElementById("resetDataBtn");

    const resetModal = document.getElementById("resetModal");

    const cancelResetBtn = document.getElementById("cancelResetBtn");

    const confirmResetBtn = document.getElementById("confirmResetBtn");

    const resetModalOverlay = document.querySelector(
        ".reset-modal-overlay"
    );


    /* =====================================================
       Language
       ===================================================== */

    function getSavedLanguage() {

        return localStorage.getItem("nutrixLanguage") || "en";

    }


    function setLanguage(language) {

        localStorage.setItem(
            "nutrixLanguage",
            language
        );

        updateLanguageUI(language);

    }


    function updateLanguageUI(language) {

        languageOptions.forEach(option => {

            const optionLanguage =
                option.dataset.language;

            option.classList.toggle(
                "active",
                optionLanguage === language
            );

        });

    }


    languageOptions.forEach(option => {

        option.addEventListener("click", () => {

            const language =
                option.dataset.language;

            setLanguage(language);

        });

    });


    /* =====================================================
       Reset Modal
       ===================================================== */

    function openResetModal() {

        if (!resetModal) return;

        resetModal.classList.remove("hidden");

        resetModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function closeResetModal() {

        if (!resetModal) return;

        resetModal.classList.add("hidden");

        resetModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    /* =====================================================
       Reset All NutriX Data
       ===================================================== */

    function resetAllData() {

        STORAGE_KEYS.forEach(key => {

            localStorage.removeItem(key);

        });


        /*
         * Keep the language setting.
         * This means resetting the app does not
         * unexpectedly change the selected language.
         */

        closeResetModal();


        /*
         * Small delay so the modal closes smoothly
         * before showing the confirmation.
         */

        setTimeout(() => {

            alert(
                "All NutriX data has been reset successfully."
            );

            window.location.href = "../index.html";

        }, 150);

    }


    /* =====================================================
       Event Listeners
       ===================================================== */

    if (resetDataBtn) {

        resetDataBtn.addEventListener(
            "click",
            openResetModal
        );

    }


    if (cancelResetBtn) {

        cancelResetBtn.addEventListener(
            "click",
            closeResetModal
        );

    }


    if (confirmResetBtn) {

        confirmResetBtn.addEventListener(
            "click",
            resetAllData
        );

    }


    if (resetModalOverlay) {

        resetModalOverlay.addEventListener(
            "click",
            closeResetModal
        );

    }


    /* =====================================================
       ESC → Close Modal
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            resetModal &&
            !resetModal.classList.contains("hidden")
        ) {

            closeResetModal();

        }

    });


    /* =====================================================
       Initial State
       ===================================================== */

    updateLanguageUI(
        getSavedLanguage()
    );

});