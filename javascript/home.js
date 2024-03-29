// CREATE PAWS

export function createPaws(container, num) {
  for (let i = 1; i <= num; i++) {
    const paw = document.createElement("i");
    paw.classList.add("fa-solid", "fa-paw", "home--paw-header", `home--paw-${i}`, "home--paw-hidden");
    container.appendChild(paw);
  }
}



// PAWS ANIMATION

export function loadPaws(paws) {
  paws.forEach((paw, index) => {
    setTimeout(() => {
      paw.classList.remove("home--paw-hidden");
    }, (index * 200) + 1200)
  })
}



// CREATE DOG IMAGES

export function createDogImages(container, images) {
  images.forEach(image => {
    const imageBox = document.createElement("div");
    const dogImg = document.createElement("img");
    dogImg.setAttribute("src", image)

    imageBox.classList.add("home--dog-image__container");
    dogImg.classList.add("home--dog-image");

    imageBox.append(dogImg)
    container.append(imageBox);
  })
}
