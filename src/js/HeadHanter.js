export default class HeadHanter {
  randomWindow(windowsList) {
    const randindex = Math.floor(Math.random() * (windowsList.length - 1));
    if (windowsList[0].parentElement.querySelector(".head")) {
      const headindex = Array.from(windowsList).findIndex((element) => element.classList.contains("head"))
      console.log(headindex)
      windowsList[headindex].classList.remove("head");
      let randindex = Math.floor(Math.random() * (windowsList.length - 1));
        while (randindex == headindex) {
          randindex = Math.floor(Math.random() * (windowsList.length - 1));
        } 
    } else {
      windowsList[randindex].classList.add("head");
    }
  }
}
