// =============================
// FADE IN (melhor performance)
// =============================
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// =============================
// TYPING EFFECT (mais suave)
// =============================
const text = "Hello, World!";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (!typingElement) return;

  if (index < text.length) {
    typingElement.innerHTML =
      text.slice(0, index + 1) + '<span class="cursor">_</span>';
    index++;
    setTimeout(typeEffect, 90);
  } else {
    typingElement.innerHTML =
      text + '<span class="cursor">_</span>';
  }
}

typeEffect();


// =============================
// NAVBAR INTELIGENTE
// =============================
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// =============================
// MENU MOBILE PROFISSIONAL (SEM BUG)
// =============================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

let isOpen = false;

// ABRIR / FECHAR MENU
function openMenu() {
  navLinks.style.display = "flex";
  navLinks.offsetHeight; // força reflow

  navLinks.classList.add("active");
  toggle.classList.add("active");
  isOpen = true;
}

function closeMenu() {
  navLinks.classList.remove("active");
  toggle.classList.remove("active");

  // remove display depois da animação
  setTimeout(() => {
    navLinks.style.display = "none";
  }, 300);

  isOpen = false;
}

// CLICK NO BOTÃO
toggle.addEventListener("click", () => {
  isOpen ? closeMenu() : openMenu();
});


// =============================
// CLICK NOS LINKS (CORREÇÃO REAL DO BUG)
// =============================
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    closeMenu();
  });
});


// =============================
// FECHAR AO CLICAR FORA (UX TOP)
// =============================
document.addEventListener("click", (e) => {
  if (
    isOpen &&
    !navLinks.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    closeMenu();
  }
});


// =============================
// HERO RESPONSIVO (AJUSTE FINO)
// =============================
const hero = document.querySelector('.hero-vignelli');
const heroBg = document.querySelector('.hero-bg');

function adjustHero() {
  if (!hero || !heroBg) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width <= 768) {
    hero.style.minHeight = (height * 0.78) + "px";
    heroBg.style.objectPosition = "center top";
  } 
  else if (width <= 1024) {
    hero.style.minHeight = (height * 0.85) + "px";
    heroBg.style.objectPosition = "center";
  } 
  else {
    hero.style.minHeight = "100vh";
    heroBg.style.objectPosition = "center";
  }
}

adjustHero();
window.addEventListener("resize", adjustHero);
