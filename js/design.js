import { buttons } from "./content.js";

buttons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
        btnElement.addEventListener("click", function() {
            window.location.href = button.url;
        });
    }
});



//Style Guide

const styleGuideContainer = document.querySelector('.style-guide-container');

import { styleGuide } from "./content.js";

function populateStyleGuide(styleGuide){
    styleGuide.forEach((sectionData, index) => {
      const container = document.createElement('section');
      container.classList.add('style-guide-section'); // Use a more specific class if needed
  
      container.innerHTML = `
        <h3 class="style-guide-title p-title">${sectionData.title}</h3>
      ${sectionData.paragraphs ? sectionData.paragraphs.map(p => `<p class= "style-guide-content p-summary"> ${p} </p>`).join('') : '<p> No Description Available.</p>'}
   
      `;
    styleGuideContainer.appendChild(container);
  }
  )}

populateStyleGuide(styleGuide);

//${index === 1 ? `<img src="${sectionData.img || " alt="${sectionData.h3} image" class="style-guide-image" />` : ''}