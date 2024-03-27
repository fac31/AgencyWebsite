// PAWS ANIMATION

const paws = document.querySelectorAll(".fa-paw");

const loadPaws = function() {
  paws.forEach((paw, index) => {
    setTimeout(() => {
      paw.classList.remove("home--paw-hidden");
    }, (index * 200) + 1200)
  })
}

document.addEventListener("DOMContentLoaded", loadPaws);



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

const toggleMenu = function() {
  burgerMenuTop.classList.toggle("mobile--nav-hamburger-top_active");
  burgerMenuMiddle.classList.toggle("mobile--nav-hamburger-middle_hidden");
  burgerMenuBottom.classList.toggle("mobile--nav-hamburger-bottom_active");
  mobileNavMenu.classList.toggle("mobile--nav-menu_hidden");
}

burgerMenu.addEventListener("click", toggleMenu);
