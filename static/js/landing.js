// Constants and initializations
let i = 0;
let txt = " a quiz web application which auto-fetches questions from IndiaBIX . . .";  
let speed = 50;

// DOM element selections
let textContainer = document.querySelector('.welcome-text p');
let buttonContainer = document.querySelector('.button-container');
let hrLine = document.querySelector('hr');
let aboutContent = document.querySelector('#about');
let featureHeader = document.querySelector('#feature-header');
let modesContainer = document.querySelector('.modes-container');

// Animation function
function animateElement(element, animation) {
  element.style.animation = animation;
  element.style.opacity = '1';
}

// Typewriter effect function
function typeWriter() {
  if (i < txt.length) {
    textContainer.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    hrLine.style.opacity = '1';
    hrLine.style.width = '100%';
  }
}

// Attach event to window's load event
window.onload = function() {
  typeWriter();

  // Create observer instance
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "style" && hrLine.style.opacity === '1') {
        setTimeout(() => {
          animateElement(buttonContainer, "fadeIn 0.5s ease-in");
        }, 500);
      } 
      if (mutation.attributeName === "style" && buttonContainer.style.opacity === '1') {
        setTimeout(() => {
          animateElement(aboutContent, "fadeIn 0.5s ease");
          animateElement(featureHeader, "fadeIn 0.5s ease");
          animateElement(modesContainer, "fadeIn 0.5s ease");
        }, 500);
      } 
      if (mutation.attributeName === "style" && modesContainer.style.opacity === '1') {
        let features = document.querySelectorAll('.features li');
        for (let i = 0; i < features.length; i++) {
          setTimeout(() => {
            animateElement(features[i], "sweep 0.5s ease forwards");
          }, 500 * i);
        }
      }
    });
  });

  // Observer setup for monitoring style changes
  observer.observe(hrLine, { attributes: true });
  observer.observe(buttonContainer, { attributes: true });
  observer.observe(modesContainer, { attributes: true });
};