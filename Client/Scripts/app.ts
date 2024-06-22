// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start(): void
    {
        console.log("Application started... ")
    }
    window.addEventListener("load", Start);
})();