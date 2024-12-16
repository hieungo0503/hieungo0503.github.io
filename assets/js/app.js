
/*Intro animation*/
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

/*Show menu*/
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Auto write text*/

var app = document.getElementById("autoWrite");

var typewriter = new Typewriter(app, {
  strings: ["R&D Developer", "Hardware Developer", "Firmware Developer", "Mobile Developer"],
  loop: true,
  autoStart: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home_img", { delay: 400 });
sr.reveal(".home_social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 400 });
sr.reveal(".about_text_container", { delay: 400 });
// Add these new animations for the education/experience cards
sr.reveal(".col-md-4", {
  interval: 200,   // Cards appear one after another
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  scale: 0.85
});

// Animate elements inside each card
sr.reveal(".icon-large", {
  delay: 200,
  distance: "30px",
  origin: "top"
});

sr.reveal(".custom-underline", {
  delay: 300,
  distance: "30px",
  origin: "left"
});

sr.reveal(".mb-0", {
  delay: 400,
  distance: "20px",
  origin: "bottom",
  interval: 200
});


/*SCROLL SKILLS*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", {});
sr.reveal(".skills_data", { interval: 200 });
sr.reveal(".skills_img", { delay: 600 });

/*SCROLL Projects*/
sr.reveal("._card", {
  interval: 200,
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  scale: 0.85
});
// For elements inside cards
sr.reveal("._card-title", {
  delay: 200,
  distance: "30px",
  origin: "left"
});

sr.reveal(".project_commnent", {
  delay: 300,
  distance: "30px",
  origin: "right"
});

sr.reveal(".price-section", {
  delay: 400,
  distance: "30px",
  origin: "bottom"
});

/*SCROLL CONTACT*/
sr.reveal(".contact_input", { interval: 200 });

/*Toggle dark mode*/
const toggleDarkMode = document.getElementById("toggle");

toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("head").classList.toggle("dark");
});
document.body.classList.toggle("dark");
document.getElementById("head").classList.toggle("dark");

/*Particles.js*/
particlesJS.load("particles-js", "assets/particles.json");
