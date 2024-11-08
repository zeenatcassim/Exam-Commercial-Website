import { homeButtons } from "./content.js";

homeButtons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
        btnElement.addEventListener("click", function() {
            window.location.href = button.url;
        });
    }
});