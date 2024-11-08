import { buttons } from "./content.js";

buttons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
        btnElement.addEventListener("click", function() {
            window.location.href = button.url;
        });
    }
});

//Wireframes
const wireframeContainer = document.querySelector(".wireframe-container");

import { wireframeImages } from "./content.js";
import { wireframeSections } from "./content.js";

function addSection(index){
  const section = document.createElement('section');
  section.classList.add('wireframe-container');

  section.innerHTML = `
     <h3 class="wireframe-title">${wireframeSections[index].title}</h3>
        <p class="wireframe-content">${wireframeSections[index].paragraph}</p>
        <section class="img-btn-container">
          <button class="arrow-btn left-btn">
            <img
              class="arrow-btn-img-left"
              src="/Exam-Commercial-Website/images/32213.png"
              alt=""
            />
          </button>
          <img src="${wireframeImages[index].image1}" alt="" class="dynamic-img" />
          <button class="arrow-btn right-btn">
            <img
              class="arrow-btn-img"
              src="/Exam-Commercial-Website/images/32213.png"
              alt=""
            />
          </button>
        </section>
  `;
  wireframeContainer.appendChild(section);

  //swap through images
  let currentImageIndex = 0;
  const images = Object.values(wireframeImages[index]);
console.log(images);
  const leftBtn = section.querySelector('.left-btn');
  const rightBtn = section.querySelector('.right-btn');

  const imgElement = section.querySelector('.dynamic-img');
 
  leftBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
      imgElement.src = images[currentImageIndex];

      console.log(currentImageIndex);
    });
  
    rightBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imgElement.src = images[currentImageIndex];

      console.log(currentImageIndex);
    });
}

for(let i = 0; i < wireframeSections.length; i++){
  addSection(i);
}

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