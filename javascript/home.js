import { PicturesInfo } from "../info/pictures-info.js";

// INITIALISE PAGE

export function initHomePage() {
  // Add and animate paws
  const pawsContainer = document.querySelector('.home--paws-container');
  const pawsNum = 9;
  createPaws(pawsContainer, pawsNum);
  const paws = document.querySelectorAll(".fa-paw");
  loadPaws(paws);

  // Add dog images
  const imagesGrid = document.querySelector(".home--images-grid");
  createDogImages(imagesGrid, PicturesInfo);
}



// CREATE PAWS

function createPaws(container, num) {
  for (let i = 1; i <= num; i++) {
    const paw = document.createElement("i");
    paw.classList.add("fa-solid", "fa-paw", "home--paw-header", `home--paw-${i}`, "home--paw-hidden");
    container.appendChild(paw);
  }
}



// PAWS ANIMATION

function loadPaws(paws) {
  paws.forEach((paw, index) => {
    setTimeout(() => {
      paw.classList.remove("home--paw-hidden");
    }, (index * 200) + 1200)
  })
}



// CREATE DOG IMAGES

function createDogImages(container, images) {
  images.forEach(image => {
    const imageBox = document.createElement("div");
    const dogImg = document.createElement("img");
    dogImg.setAttribute("src", image.src);
    dogImg.setAttribute("alt", image.alt);

    imageBox.classList.add("home--dog-image__container");
    dogImg.classList.add("home--dog-image");

    imageBox.append(dogImg)
    container.append(imageBox);
  })
}
