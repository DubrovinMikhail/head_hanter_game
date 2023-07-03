import "./css/style.css";

const windows = document.querySelectorAll(".window");
const getRandom = () => Math.floor(1 + Math.random() * 15);

let lastTarget = getRandom();

const removeActiveByIndex = (index) => windows[index].classList.remove("head");
const appendActiveByIndex = (index) => windows[index].classList.add("head");

document.addEventListener("DOMContentLoaded", () => {
  const headChange = setInterval(() => {
    removeActiveByIndex(lastTarget);
    lastTarget = getRandom();
    console.log(lastTarget)
    appendActiveByIndex(lastTarget);
  }, 1000);
});
