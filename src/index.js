import "./css/style.css"
import HeadHanter from "./js/HeadHanter.js";
const windows = document.querySelectorAll(".window");
document.addEventListener("DOMContentLoaded", () => {
  const headChange = setInterval(() => {
    HeadHanter.prototype.randomWindow(windows);
  }, 1000);
});
