document.addEventListener("DOMContentLoaded", function () {
    const openingsButtons = document.querySelectorAll(".Photo");
    
    openingsButtons.forEach(button => {
        button.style.cursor = "pointer";
        button.addEventListener("click", function () {
            window.location.href = "https://www.docplanner.com/careers";
        });
    });
});
