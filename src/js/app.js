import "../css/style.css";
import { HeadHunter } from "../components/headHanterGame/headHanterGame";

const table = new HeadHunter(".table")

let countStep = 0;
let countClick = 0
let lastTarget = HeadHunter.getRandom();

const headChange = () => {
  table.removeActiveByIndex(lastTarget);
  lastTarget = HeadHunter.getRandom();
  table.appendActiveByIndex(lastTarget);
  table.countField.textContent =  `количество пропусков: ${countStep - countClick}`;
  countStep += 1;
    if (countStep < countClick + 6) {
      timeout = setTimeout(headChange, 1000);
    } else {
      table.cells[0].parentNode.removeEventListener('click', headClick);
      table.countField.textContent = 'Стоп игра. Вы проиграли'
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

table.cells[0].parentNode.addEventListener('click', headClick);
