class ASCIIButton {
  constructor(element) {
    this.button = element;

    this.button.addEventListener("mouseover", () => this.highlightText());
    this.button.addEventListener("mouseleave", () => this.resetText());
    this.button.addEventListener("mousedown", () => this.clickText());
    this.button.addEventListener("mouseup", () => this.highlightText());
  }

  highlightText() {
    this.button.style.backgroundColor = "#e5d37e";
    this.button.style.color = "#2d2a2e";
  }

  resetText() {
    this.button.style.backgroundColor = "rgba(255, 255, 255, 0)";
    this.button.style.color = "#e5d37e";
  }

  clickText() {
    this.button.style.backgroundColor = "#e5d37e";
    this.button.style.color = "#ffffff";
  }
}

class Star {
  constructor(container, x, y, star) {
    this.container = container;
    this.element = document.createElement("p")

    this.element.innerText = " ";
    this.element.style.position = "absolute";
    this.element.style.left = x.toString() + "px";
    this.element.style.top = y.toString() + "px";
    this.element.style.color = starColors[Math.floor(Math.random() * starColors.length)];
    this.element.style.zIndex = "0";
    this.element.style.pointerEvents = "none";

    this.container.appendChild(this.element);

    this.x = x;
    this.y = y;
    this.star = star;

    this.show();
  }

  async show() {
    for (let i = 0; i < starPop.length; i++) {
      this.element.innerText = starPop[i];
      await delay(50);
    }

    this.element.innerText = this.star;
    await delay(1000)

    for (let i = starPop.length - 1; i >= 0; i--) {
      this.element.innerText = starPop[i];
      await delay(50);
    }

    this.container.removeChild(this.element);
  }
}

function initASCIIButtons() {
  const buttons = document.querySelectorAll(".asciiButton");
  buttons.forEach(button => new ASCIIButton(button));
}

const starPop = ["·", "•", "*"];
const stars = ["★", "☆", "✫", "✦", "✧", "✬", "✭", "✮", "✯", "✰", "✴", "✵", "✶", "✷", "✸", "✹", "⭑", "⭒", "*"];
const starColors = [
  "#FFFFFF", "#F0FFFF", "#00FFFF", "#89CFF0", "#FFFFFF",
  "#FFFFFF", "#7393B3", "#088F8F", "#A7C7E7", "#CCCCFF",
  "#96DED1", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#87CEEB",
]

const starContainer = document.querySelector(".starryBackground");

function initStars() {
  setInterval(
    () => {
      new Star(
        starContainer,
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * window.innerHeight),
        stars[Math.floor(Math.random() * stars.length)]
      )
    }, 200
  )
}

window.onload = function () {
  initASCIIButtons();
  initStars();
};

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

function execCommand(command) {
  // TODO(This whole thing :|)
}
