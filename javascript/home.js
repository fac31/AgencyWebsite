const paws = document.querySelectorAll(".fa-paw");

const loadPaws = function() {
  paws.forEach((paw, index) => {
    setTimeout(() => {
      paw.classList.remove("home--paw-hidden");
    }, (index * 200) + 1200)
  })
}

document.addEventListener("DOMContentLoaded", loadPaws);



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
