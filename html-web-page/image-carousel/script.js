const imageScroll = document.getElementById("image-scroll");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const startAutoPlay = document.getElementById("start-auto-play");

let loadImage = 1;
let maxImageSize = 5;

leftArrow.addEventListener("click", () => {
  loadImage--;
  updateImage();
});
rightArrow.addEventListener("click", () => {
  loadImage++;
  updateImage();
});

startAutoPlay.addEventListener("click", () => {
  setInterval(() => {
    loadImage++;
    updateImage();
  }, 2 * 1000);
});

function updateImage() {
  if (loadImage < 1) loadImage = maxImageSize;
  if (loadImage > maxImageSize) loadImage = 1;
  imageScroll.src = `./images/${loadImage}.jpg`;
  dotColorChange(`dot-circle-${loadImage}`);
}

function dotColorChange(id) {
  const circle = document.getElementById(id);
  const allCircle = document.getElementsByClassName("dot-circle");

  for (let i = 0; i < allCircle.length; i++) {
    allCircle[i].style.backgroundColor = "#939393";
  }

  circle.style.backgroundColor = "#3c66e5";
  imageScroll.src = `./images/${id.replace("dot-circle-", "")}.jpg`;
}
