import "./headHunterGame.css";

export class HeadHunter {
  static countStep = 0;
  static countClick = 0;

  static getRandom() {
    return Math.floor(1 + Math.random() * 15); 
   }

  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this.cells = element.children;
    this.countField = element.querySelector(".count") 
  }

  removeActiveByIndex(index) {
    this.cells[index].classList.remove("active");
  };

  appendActiveByIndex(index) {
    this.cells[index].classList.add("active");
  };
}

