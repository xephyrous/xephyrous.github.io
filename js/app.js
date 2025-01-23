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

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

function execCommand(command) {
  // TODO(This whole thing :|)
}

/**
 * Dynamically loads in project cards from projectSettings.json
 * @param container The project table to insert into
 */
function loadProjects(container) {
  fetch('../projects/projectSettings.json')
    .then(response => response.json())
    .then(data => {
      const projects = data["projects"];
      let currProjNum = 0;

      // Create rows
      for (let i = 0; i < Math.ceil(projects.length / 2); i++) {
        const newRow = container.appendChild(document.createElement("div"));
        newRow.classList.add("row");

        if (i === Math.ceil(projects.length / 2) - 1 && projects.length % 2 !== 0) {
          newRow.classList.add("single");
        }
      }

      // Append projects to rows
      projects.forEach(currProjJSON => {
        // Get the current row (which should have two projects or one in the last row)
        const projRow = container.childNodes[Math.floor(currProjNum / 2)];
        currProjNum++;

        const newProj = projRow.appendChild(document.createElement("div"));
        newProj.classList.add("square");

        let projImage;
        if (currProjJSON.image === "NONE") { // No image, project name
          projImage = newProj.appendChild(document.createElement("p"));
          projImage.innerText = currProjJSON.name;
          projImage.style.width = "100%";
          projImage.style.height = "auto";
          projImage.style.padding = "5px";
          projImage.style.paddingTop = "15px";
        } else { // Specified image file
          projImage = newProj.appendChild(document.createElement("img"));
          projImage.src = `../img/${currProjJSON.image}`;
          projImage.alt = `${currProjJSON.name} Project Image`;
          projImage.style.width = "100%";
          projImage.style.height = "auto";
          projImage.style.maxHeight = "50%";  // Limit the height to 50% of the card
          projImage.style.objectFit = "cover"; // Ensures image aspect ratio is maintained
          projImage.style.padding = "5px";
          projImage.style.paddingTop = "15px";
        }

        const decLine = newProj.appendChild(document.createElement("div"));
        decLine.style.height = "2px";
        decLine.style.border = "2px solid #e5d37e";

        const descBox = newProj.appendChild(document.createElement("div"));
        descBox.style.flexGrow = "1";
        descBox.style.overflowY = "auto";

        const description = descBox.appendChild(document.createElement("p"));
        description.classList.add("terminalText");
        description.innerText = currProjJSON.description;
        description.style.paddingLeft = "15px";
        description.style.paddingRight = "15px";

        const wrapper = newProj.appendChild(document.createElement("div"));
        wrapper.style.textAlign = "center";

        const projBtn = wrapper.appendChild(document.createElement("input"));
        projBtn.classList.add("asciiButton", "rowButton");
        projBtn.type = "button";
        projBtn.value = `[ ${currProjJSON.name.toUpperCase()} ]`;
        projBtn.addEventListener("click", () => {
          location.href = `../projects/${currProjJSON.project}/${currProjJSON.entrypoint}`;
        });
      });
    })
    .catch(error => {
      console.error('Error Handling projectSettings.json:', error);
    });
}
