const windows = document.querySelectorAll(".window");
document.addEventListener("DOMContentLoaded", () => {
  const headChange = setInterval(() => {
    if (document.querySelector(".head")) {
      document.querySelector(".head").classList.remove("head");
    }
    const rand = Math.floor(Math.random() * windows.length);
    windows[rand].classList.add("head");
  }, 1000);
});
