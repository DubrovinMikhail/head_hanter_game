import "./cursor.css"

export class Cursor {
  constructor (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    };
    let x = element.clientX;
    let y = element.clientY;
    this.style.left = x + "px";
    this.style.top = y + "px";
  };

  mouseBtnDown() {
    this.children[0].classList.add("cursorDown");
  };

  mouseBtnUp() {
  this.children[0].classList.remove("cursorDown");
  };
}
