import { initHomePage } from "./home.js";
import { initTeamPage } from "./team.js";
import { initContactPage } from "./contact.js";

document.addEventListener("DOMContentLoaded", function() {
  // Initialise home page
  if (window.location.pathname === '/') {
    initHomePage();
  }

  // Initialise team page
  if (window.location.pathname === '/team.html') {
    initTeamPage();
  }

  // Initialise contact page
  if (window.location.pathname === '/contact.html') {
    initContactPage();
  }
});



// SECTION SLIDE INTO VIEW

const SlideInSections = document.querySelectorAll(".slide-in-section");

function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  sectionObserver.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

SlideInSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
})



// BURGER MENU

const burgerMenu = document.querySelector(".mobile--nav-hamburger");
const burgerMenuTop = document.querySelector(".mobile--nav-hamburger-top");
const burgerMenuMiddle = document.querySelector(".mobile--nav-hamburger-middle");
const burgerMenuBottom = document.querySelector(".mobile--nav-hamburger-bottom");
const mobileNavMenu = document.querySelector(".mobile--nav-menu");
const mobileButtonHome = document.querySelector(".mobile--nav-button_home");
const mobileButtonMeet = document.querySelector(".mobile--nav-button_meet");
const mobileButtonContact = document.querySelector(".mobile--nav-button_contact");
const aboutButton = document.querySelector(".about--button");

const toggleMenu = function() {
  burgerMenuTop.classList.toggle("mobile--nav-hamburger-top_active");
  burgerMenuMiddle.classList.toggle("mobile--nav-hamburger-middle_hidden");
  burgerMenuBottom.classList.toggle("mobile--nav-hamburger-bottom_active");
  mobileNavMenu.classList.toggle("mobile--nav-menu_active");
  burgerMenu.classList.add("mobile--nav-hamburger_active");

  const isMobileMenuOpen = mobileNavMenu.classList.contains("mobile--nav-menu_active");
  burgerMenu.setAttribute("aria-expanded", isMobileMenuOpen);
  mobileNavMenu.setAttribute("aria-hidden", !isMobileMenuOpen);
  mobileButtonHome.setAttribute("tabindex", isMobileMenuOpen ? "2" : "-1");
  mobileButtonMeet.setAttribute("tabindex", isMobileMenuOpen ? "3" : "-1");
  mobileButtonContact.setAttribute("tabindex", isMobileMenuOpen ? "4" : "-1");
  if (aboutButton) aboutButton.setAttribute("tabindex", isMobileMenuOpen ? "-1" : "2")
}

burgerMenu.addEventListener("click", toggleMenu);
