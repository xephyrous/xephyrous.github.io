import{a as y}from"./firebase-D4KhxNe_.js";document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("elevenlabs-convai").shadowRoot,a={attributes:!0,childList:!0,subtree:!0};new MutationObserver(u).observe(e,a)});function u(){const a=document.querySelector("elevenlabs-convai").shadowRoot;let l=null,t=null;try{l=a.querySelector("div"),l.querySelector("._poweredBy_me40k_322").remove()}catch{}try{l=a.querySelector("div"),l.querySelector("._feedback_me40k_425").remove()}catch{}try{l=a.querySelector("._customContent_me40k_66"),t=l.querySelector("._box_me40k_37"),t.style.margin="10px";try{const n=t.querySelector("._terms_me40k_351"),o=n.querySelector("form"),r=o.querySelector("h4"),i=o.querySelector("p");r.style.fontFamily="Pixelated MS Sans Serif",i.style.fontFamily="Pixelated MS Sans Serif",n.querySelector("._termsFooter_me40k_414").querySelectorAll("button").forEach(c=>{c.style.fontFamily="Pixelated MS Sans Serif",c.style.fontWeight="bold",c.style.border="2px outset",c.style.backgroundColor="#c0c0c0"})}catch{}}catch{}try{l=a.querySelector("div"),t=l.querySelector("._box_me40k_37"),t.style.margin="10px";let n=!1;try{const o=t.querySelector("._inlineFeedback_me40k_455"),r=o.querySelector("span");r.style.fontFamily="Pixelated MS Sans Serif",o.querySelectorAll("button").forEach(d=>{d.style.border="2px outset",d.style.backgroundColor="#c0c0c0"})}catch{}t.style.backgroundColor="#c0c0c0",t.style.border="2px outset",t.style.position="absolute",t.style.bottom="-15px",t.style.right="-15px";try{const o=t.querySelector("._actions_me40k_119"),r=o.querySelector("p");r.style.color="black",r.style.fontFamily="Pixelated MS Sans Serif";const i=o.querySelector("button");i.style.fontFamily="Pixelated MS Sans Serif",i.style.border="2px outset"}catch{}try{const r=t.querySelector("._actionButtons_me40k_137").querySelector("button");r.style.fontFamily="Pixelated MS Sans Serif",r.style.backgroundColor="#c0c0c0",r.style.border="2px outset"}catch{}return}catch{}}let s=0;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("ask-jake-button");e.addEventListener("mouseover",()=>{s===0&&(e.src="button_hover.png",s=1)}),e.addEventListener("mousedown",()=>{s===1&&(e.src="button_press.png",s=2,b(),setTimeout(()=>{s===2&&(e.src="button_hover.png",s=1)},500))}),e.addEventListener("mouseout",()=>{s===2?setTimeout(()=>{e.src="button_n.png",s=0},500):s===1&&(e.src="button_n.png",s=0)})});function b(){const e=document.getElementById("jake-text").value;console.log(e),e!==""&&y(e)}document.querySelector("#app").innerHTML=`
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
            
            <div class="window" id="ask-jake-window">
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
            
            <img src="icons/msagent.png" alt="Login Gentleman" id="login-gentleman">
            
            <elevenlabs-convai agent-id="5pnMP6M3rGgecFTd8oIJ"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"><\/script>
        </div>
    </div>
`;document.addEventListener("DOMContentLoaded",()=>{u()});document.getElementById("login-gentleman").addEventListener("click",()=>{if(document.getElementById("login-gentleman").getBoundingClientRect().left<229){console.log(document.getElementById("login-gentleman").getBoundingClientRect().left);return}setTimeout(()=>{window.location.href="/projects/answers-time/login/index.html"},500)});
