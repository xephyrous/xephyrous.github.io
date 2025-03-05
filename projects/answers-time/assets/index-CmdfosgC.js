(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{let s=document.querySelector("elevenlabs-convai").shadowRoot,i={attributes:!0,childList:!0,subtree:!0};new MutationObserver(u).observe(s,i)});function u(){const i=document.querySelector("elevenlabs-convai").shadowRoot;let l=null,o=null;try{l=i.querySelector("div"),l.querySelector("._poweredBy_me40k_322").remove()}catch{}try{l=i.querySelector("._customContent_me40k_66"),o=l.querySelector("._box_me40k_37"),o.style.margin="10px";try{const e=o.querySelector("._terms_me40k_351"),t=e.querySelector("form"),r=t.querySelector("h4"),c=t.querySelector("p");r.style.fontFamily="Pixelated MS Sans Serif",c.style.fontFamily="Pixelated MS Sans Serif",e.querySelector("._termsFooter_me40k_414").querySelectorAll("button").forEach(a=>{a.style.fontFamily="Pixelated MS Sans Serif",a.style.fontWeight="bold",a.style.border="2px outset",a.style.backgroundColor="#c0c0c0"})}catch{}}catch{}try{l=i.querySelector("div"),o=l.querySelector("._box_me40k_37"),o.style.margin="10px";let e=!1;try{const t=o.querySelector("._inlineFeedback_me40k_455"),r=t.querySelector("span");r.style.fontFamily="Pixelated MS Sans Serif",t.querySelectorAll("button").forEach(d=>{d.style.border="2px outset",d.style.backgroundColor="#c0c0c0"})}catch{}o.style.backgroundColor="#c0c0c0",o.style.border="2px outset",o.style.position="absolute",o.style.bottom="-15px",o.style.right="-15px";try{const t=o.querySelector("._actions_me40k_119"),r=t.querySelector("p");r.style.color="black",r.style.fontFamily="Pixelated MS Sans Serif";const c=t.querySelector("button");c.style.fontFamily="Pixelated MS Sans Serif",c.style.border="2px outset"}catch{}try{const r=o.querySelector("._actionButtons_me40k_137").querySelector("button");r.style.fontFamily="Pixelated MS Sans Serif",r.style.backgroundColor="#c0c0c0",r.style.border="2px outset"}catch{}return}catch{}}let n=0;document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("ask-jake-button");s.addEventListener("mouseover",()=>{n===0&&(s.src="button_hover.png",n=1)}),s.addEventListener("mousedown",()=>{n===1&&(s.src="button_press.png",n=2,setTimeout(()=>{n===2&&(s.src="button_hover.png",n=1)},500))}),s.addEventListener("mouseout",()=>{n===2?setTimeout(()=>{s.src="button_n.png",n=0},500):n===1&&(s.src="button_n.png",n=0)})});document.querySelector("#app").innerHTML=`
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
                <img id="logo" class="img-border" style="z-index: 20" src="ANSWERS_TIME_BANNER.png" alt="Answers Time Banner!">
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
                    <img id="ask-jake-button" src="button_n.png" alt="Ask Jake Button">
                </div>
            </div>
            
            <elevenlabs-convai agent-id="5pnMP6M3rGgecFTd8oIJ"></elevenlabs-convai><script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"><\/script>
        </div>
    </div>
`;document.addEventListener("DOMContentLoaded",()=>{u()});
