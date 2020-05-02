const body = document.querySelector("body"),
  contributor = document.querySelector(".jsPhotoBy");

const IMG_NUMBER = 7;

const photoBy = [
  "📷 Photo by Jason Leung on Unsplash",
  "📷 Photo by Billy Huynh on Unsplash",
  "📷 Photo by Erol Ahmed on Unsplash",
  "📷 Photo by Brooke Lark on Unsplash",
  "📷 Photo by Kimberly Farmer on Unsplash",
  "📷 Photo by Alex on Unsplash",
  "📷 Photo by Clem Onojeghuo on Unsplashs"
];

function printImage(num) {
  // const image = new Image();
  // image.src = `images/${num}.jpg`;
  // image.classList.add("bgImage");
  // body.appendChild(image);
  body.style.backgroundImage = `url(images/${num}.jpg)`;

  console.log(photoBy[num - 1]);
  contributor.innerText = photoBy[num - 1];
}

function genRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  printImage(randomNumber);
}

init();
