import{d as c,a as m}from"./firebase-DBQn7Dzu.js";import{g as b}from"./youtube-Bniyde3c.js";document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("elevenlabs-convai").shadowRoot,a={attributes:!0,childList:!0,subtree:!0};new MutationObserver(y).observe(e,a)});function y(){const a=document.querySelector("elevenlabs-convai").shadowRoot;let s=null,t=null;try{s=a.querySelector("div"),s.querySelector("._poweredBy_me40k_322").remove()}catch{}try{s=a.querySelector("div"),s.querySelector("._feedback_me40k_425").remove()}catch{}try{s=a.querySelector("._customContent_me40k_66"),t=s.querySelector("._box_me40k_37"),t.style.margin="10px";try{const i=t.querySelector("._terms_me40k_351"),o=i.querySelector("form"),n=o.querySelector("h4"),r=o.querySelector("p");n.style.fontFamily="Pixelated MS Sans Serif",r.style.fontFamily="Pixelated MS Sans Serif",i.querySelector("._termsFooter_me40k_414").querySelectorAll("button").forEach(d=>{d.style.fontFamily="Pixelated MS Sans Serif",d.style.fontWeight="bold",d.style.border="2px outset",d.style.backgroundColor="#c0c0c0"})}catch{}}catch{}try{s=a.querySelector("div"),t=s.querySelector("._box_me40k_37"),t.style.margin="10px";let i=!1;try{const o=t.querySelector("._inlineFeedback_me40k_455"),n=o.querySelector("span");n.style.fontFamily="Pixelated MS Sans Serif",o.querySelectorAll("button").forEach(u=>{u.style.border="2px outset",u.style.backgroundColor="#c0c0c0"})}catch{}t.style.backgroundColor="#c0c0c0",t.style.border="2px outset",t.style.position="absolute",t.style.bottom="-15px",t.style.right="-15px";try{const o=t.querySelector("._actions_me40k_119"),n=o.querySelector("p");n.style.color="black",n.style.fontFamily="Pixelated MS Sans Serif";const r=o.querySelector("button");r.style.fontFamily="Pixelated MS Sans Serif",r.style.border="2px outset"}catch{}try{const n=t.querySelector("._actionButtons_me40k_137").querySelector("button");n.style.fontFamily="Pixelated MS Sans Serif",n.style.backgroundColor="#c0c0c0",n.style.border="2px outset"}catch{}return}catch{}}let l=0;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("ask-jake-button");e.addEventListener("mouseover",()=>{l===0&&(e.src="button_hover.png",l=1)}),e.addEventListener("mousedown",()=>{l===1&&(e.src="button_press.png",l=2,v(),setTimeout(()=>{l===2&&(e.src="button_hover.png",l=1)},500))}),e.addEventListener("mouseout",()=>{l===2?setTimeout(()=>{e.src="button_n.png",l=0},500):l===1&&(e.src="button_n.png",l=0)})});function v(){const e=document.getElementById("jake-text").value;if(document.getElementById("jake-text").innerText="",e===""){c("Why don't you start by typing something in the box first?");return}else if(e==="undefined"){c("Nice try nerd 🤓");return}else if(e.includes("?")){if(e[0]!==e[0].toUpperCase()){c("Remember to start with a capital letter!");return}}else{c("Questions only!");return}m(e)}document.querySelector("#app").innerHTML=`
    <div id="main-window" class="window-full" style="width: 100%; height: 100%">
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
                <img id="logo" class="img-border" style="z-index: 20" src="answers_time_banner.png" alt="Answers Time Banner!">
            </div>
            
            <div style="margin-top: 20px; align-items: center; width: 100%; justify-content: center; display: flex">
                <div class="window" style="width: 50%; max-height: 70vh; height: auto; z-index: 1050">
                    <div class="title-bar" style="position: relative; z-index: 10">
                        <div class="title-bar-text" id="video-title"></div>
                    </div>
                    <div class="window-body" id="message-window" style="max-height: 65vh; height: auto; overflow-y: hidden">
                        <img id="video-thumbnail" src="" alt="Video Thumbnail">
                    </div>
                </div>
            </div>
            
            <div class="window" id="ask-jake-window" style="z-index: 1050">
                <div class="title-bar">
                    <div class="title-bar-text">Ask Jake</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Restore"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body" style="display: flex; flex-direction: row">
                    <img id="ask-jake-button" src="button_n.png" alt="Ask Jake Button">
                    <textarea id="jake-text" style="margin: 10px; color: black"></textarea>
                </div>
            </div>
            
            <img src="icons/msagent.png" alt="Login Gentleman" style="z-index: 1025" id="login-gentleman">
            
            <div class="center-fill alert-container" style="height: 100%">
                <div class="window alert-modal" id="alert-window" style="max-width: 30vw; max-height: 30vh; display: none">
                    <div class="title-bar">
                        <div class="title-bar-text" id="alert-title"></div>
                        <div class="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Restore"></button>
                            <button aria-label="Close" onclick="document.getElementById('alert-window').style.display = 'none'"></bu tton>
                        </div>
                    </div>
                    <div class="window-body" style="display: flex; flex-direction: row; overflow-y: auto; max-height: 23vh">
                        <img src="" alt="Alert Icon" id="alert-icon" style="width: 25px; height: 25px; margin-left: 5px; position: fixed">
                        <p id="alert-text" style="margin-left: 35px; font-weight: bold"></p>
                    </div>
                </div>
            </div>
            
            <elevenlabs-convai agent-id="5pnMP6M3rGgecFTd8oIJ"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"><\/script>
        </div>
    </div>
`;document.addEventListener("DOMContentLoaded",async()=>{y();const e=await b();document.getElementById("video-title").innerText=e.title,document.getElementById("video-thumbnail").src=e.thumbnail,document.getElementById("video-thumbnail").setAttribute("data-video-id",e.videoId)});document.getElementById("video-thumbnail").addEventListener("click",()=>{const e=document.getElementById("video-thumbnail").getAttribute("data-video-id");window.open(`https://www.youtube.com/watch?v=${e}`,"_blank")});document.getElementById("login-gentleman").addEventListener("click",async()=>{if(document.getElementById("login-gentleman").getBoundingClientRect().left<229){console.log(document.getElementById("login-gentleman").getBoundingClientRect().left);return}setTimeout(()=>{window.location.href="login.html"},500)});
