document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    setTimeout(() => {
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 500); // Retraso de animación
});
