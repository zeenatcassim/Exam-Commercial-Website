import { homeButtons } from "./content.js";

homeButtons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
        btnElement.addEventListener("click", function() {
            window.location.href = button.url;
        });
    }
});

const dataVizOneBtn = document.querySelector('.data-viz-one');
const dataVizTwoBtn = document.querySelector('.data-viz-two');
const dataVizThreeBtn = document.querySelector('.data-viz-three')
const designInterBtn = document.querySelector('.design-inter-btn');
const theoryInterBtn = document.querySelector('.theory-inter-btn');
const apiInterBtn = document.querySelector('.api-inter-btn');

dataVizOneBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
})

dataVizTwoBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
})

dataVizThreeBtn.addEventListener("click", function(){
    window.location.href = "html/data viz.html";
})

designInterBtn.addEventListener("click", function(){
    window.location.href = "html/design.html";
})

theoryInterBtn.addEventListener("click", function(){
    window.location.href = "html/theory.html";
})
apiInterBtn.addEventListener("click", function(){
    window.location.href = "html/about.html";
})