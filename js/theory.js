import { buttons } from "./content.js";

buttons.forEach(button => {
    const btnElement = document.getElementById(button.id);
    if (btnElement) {
        btnElement.addEventListener("click", function() {
            window.location.href = button.url;
        });
    }
});

//Essay

import { essayContents } from "./content.js";

const essayContainer = document.querySelector('.essay-container');

//need to loop through essayContents
essayContents.forEach(content => {
    //creating a new section for each part
    const section = document.createElement('section');
    section.classList.add('essay-section');

    //creating and adding the title
    const title = document.createElement('h3');
    title.textContent = content.title;
    section.appendChild(title);

    //creating and adding the paragraphs
    for (let i = 1; i < Object.keys(content).length; i++) {
        if (content [`p${i}`]) {
            const paragraph = document.createElement('p');
            paragraph.textContent = content[`p${i}`];
            section.appendChild(paragraph);
        }

      //images
      if(content[`img${i}`]){
        const img = document.createElement('img');
        img.src = content[`img${i}`];

        if (i === 1) {
            img.classList.add('img1');
        } else if(i === 2){
           img.classList.add('img2'); 
        }else if(i === 6){
            img.classList.add('img6'); 
         }else if(i === 7){
            img.classList.add('img7'); 
         }
             
        

        section.appendChild(img);
      }
    }

    //adding section to essay container
    essayContainer.appendChild(section);
});

//Critical Essay
/*
import { criticalEssayContents } from "./content.js";

const criticalEssayContainer = document.querySelector('.critical-essay');

//need to loop through essayContents
criticalEssayContents.forEach(content => {
    //creating a new section for each part
    const section = document.createElement('section');
    section.classList.add('essay-section');

    //creating and adding the title
    const title = document.createElement('h3');
    title.textContent = content.title;
    section.appendChild(title);

    //creating and adding the paragraphs
    for (let i = 1; i < Object.keys(content).length; i++) {
        if (content [`p${i}`]) {
            const paragraph = document.createElement('p');
            paragraph.textContent = content[`p${i}`];
            section.appendChild(paragraph);
        }

        console.log(i);
      //images
      if(content[`img${i}`]){
        const img = document.createElement('img');
        img.src = content[`img${i}`];

        if (i === 1) {
            img.classList.add('img1');
        } else if(i === 2){
           img.classList.add('img2'); 
        }else if(i === 6){
            img.classList.add('img6'); 
         }else if(i === 7){
            img.classList.add('img7'); 
         }
             
        

        section.appendChild(img);
      }
    }

    //adding section to essay container
    criticalEssayContainer.appendChild(section);
});*/

//Workflow

import { workFlow } from "./content.js";

const workflowContainer = document.querySelector('.workflow-container');

workFlow.forEach(item => {
    const h3 = document.createElement('h3');
    h3.textContent = item.h3;

    const pElement = document.createElement('p');
    pElement.textContent = item.p;

    workflowContainer.appendChild(h3);
    workflowContainer.appendChild(pElement);
})