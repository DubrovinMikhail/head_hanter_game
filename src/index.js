import "./css/style.css";

const table = document.querySelector(".table");
const cells = table.children;
const countField = document.querySelector(".count");

const getRandom = () => Math.floor(1 + Math.random() * 15);

let countStep = 0;
let countClick = 0
let lastTarget = getRandom();

const removeActiveByIndex = (index) => cells[index].classList.remove("active");
const appendActiveByIndex = (index) => cells[index].classList.add("active");


const headChange = () => {
      removeActiveByIndex(lastTarget);
      lastTarget = getRandom();
      appendActiveByIndex(lastTarget);
      countField.textContent =  `количество пропусков: ${countStep - countClick}`;
      countStep += 1;
      if (countStep < countClick + 6) {
        timeout = setTimeout(headChange, 1000);
      } else {
        table.removeEventListener('click', headClick);
        countField.textContent = 'Стоп игра. Вы проиграли'
      }
};

let timeout = setTimeout(headChange, 1000);

const headClick = ({target}) => { 
  if (target.classList.contains("active")) {
    target.classList.remove("active")
    countClick += 1;
    clearTimeout(timeout);
    timeout = setTimeout(headChange, 1000);
  };
}

table.addEventListener('click', headClick);


const cursor = document.querySelector(".cursor")
const mouseMove = (element) => {
  let x = element.clientX;
  let y = element.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

document.addEventListener('mousemove', mouseMove);

document.addEventListener('mousedown', () => {cursor.children[0].classList.add("cursorDown")})
document.addEventListener('mouseup', () => {cursor.children[0].classList.remove("cursorDown")})