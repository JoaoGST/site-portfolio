// FADE IN
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// TYPING EFFECT
const text = "Hello, World!";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML =
      text.slice(0, index + 1) + '<span class="cursor">_</span>';
    index++;
    setTimeout(typeEffect, 120);
  } else {
    typingElement.innerHTML =
      text + '<span class="cursor">_</span>';
  }
}

typeEffect();