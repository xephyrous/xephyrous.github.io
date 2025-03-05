import './elevenlabsWidget.js'
import {restyle} from "./elevenlabsWidget.js";

let askButtonState = 0;

document.addEventListener("DOMContentLoaded", () => {
    const askJakeButton = document.getElementById("ask-jake-button");

    askJakeButton.addEventListener("mouseover", () => {
        if (askButtonState === 0) {
            askJakeButton.src = "../public/button_hover.png";
            askButtonState = 1;
        }
    });

    askJakeButton.addEventListener("mousedown", () => {
        if (askButtonState === 1) {
            askJakeButton.src = "../public/button_press.png";
            askButtonState = 2;
            askJake();

            setTimeout(() => {
                if (askButtonState === 2) {
                    askJakeButton.src = "../public/button_hover.png";
                    askButtonState = 1;
                }
            }, 500);
        }
    });

    askJakeButton.addEventListener("mouseout", () => {
        if (askButtonState === 2) {
            setTimeout(() => {
                askJakeButton.src = "../public/button_n.png";
                askButtonState = 0;
            }, 500);
        } else if (askButtonState === 1) {
            askJakeButton.src = "../public/button_n.png";
            askButtonState = 0;
        }
    });
});

function askJake() {
    // TODO:
}
