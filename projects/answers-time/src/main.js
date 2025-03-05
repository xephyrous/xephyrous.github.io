import './baseStyle.css'
import './style.css'
import 'xp.css/dist/XP.css'

import './askJakeButton.js'
import './elevenlabsWidget.js'
import {restyle} from "./elevenlabsWidget.js";

// Main page layout
document.querySelector('#app').innerHTML = `
    <div id="main-window" class="window" style="width: 100%; height: 100%">
        <div class="title-bar" style="position: relative; z-index: 10">
            <div class="title-bar-text">Answers Time!</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Restore"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <div class="center-fill">
                <img id="logo" class="img-border" style="z-index: 20" src="../public/ANSWERS_TIME_BANNER.png" alt="Answers Time Banner!">
            </div>
            
            <div class="window" id="ask-jake-window">
                <div class="title-bar">
                    <div class="title-bar-text">Ask Jake</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Restore"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <img id="ask-jake-button" src="../public/button_n.png" alt="Ask Jake Button">
                </div>
            </div>
            
            <elevenlabs-convai agent-id="5pnMP6M3rGgecFTd8oIJ"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
        </div>
    </div>
`

document.addEventListener("DOMContentLoaded", () => {
    restyle();
});