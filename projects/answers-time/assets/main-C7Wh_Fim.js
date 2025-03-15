import{a as y}from"./firebase-Gcfcfmnw.js";document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("elevenlabs-convai").shadowRoot,r={attributes:!0,childList:!0,subtree:!0};new MutationObserver(u).observe(e,r)});function u(){const r=document.querySelector("elevenlabs-convai").shadowRoot;let n=null,t=null;try{n=r.querySelector("div"),n.querySelector("._poweredBy_me40k_322").remove()}catch{}try{n=r.querySelector("div"),n.querySelector("._feedback_me40k_425").remove()}catch{}try{n=r.querySelector("._customContent_me40k_66"),t=n.querySelector("._box_me40k_37"),t.style.margin="10px";try{const o=t.querySelector("._terms_me40k_351"),s=o.querySelector("form"),i=s.querySelector("h4"),a=s.querySelector("p");i.style.fontFamily="Pixelated MS Sans Serif",a.style.fontFamily="Pixelated MS Sans Serif",o.querySelector("._termsFooter_me40k_414").querySelectorAll("button").forEach(c=>{c.style.fontFamily="Pixelated MS Sans Serif",c.style.fontWeight="bold",c.style.border="2px outset",c.style.backgroundColor="#c0c0c0"})}catch{}}catch{}try{n=r.querySelector("div"),t=n.querySelector("._box_me40k_37"),t.style.margin="10px";let o=!1;try{const s=t.querySelector("._inlineFeedback_me40k_455"),i=s.querySelector("span");i.style.fontFamily="Pixelated MS Sans Serif",s.querySelectorAll("button").forEach(d=>{d.style.border="2px outset",d.style.backgroundColor="#c0c0c0"})}catch{}t.style.backgroundColor="#c0c0c0",t.style.border="2px outset",t.style.position="absolute",t.style.bottom="-15px",t.style.right="-15px";try{const s=t.querySelector("._actions_me40k_119"),i=s.querySelector("p");i.style.color="black",i.style.fontFamily="Pixelated MS Sans Serif";const a=s.querySelector("button");a.style.fontFamily="Pixelated MS Sans Serif",a.style.border="2px outset"}catch{}try{const i=t.querySelector("._actionButtons_me40k_137").querySelector("button");i.style.fontFamily="Pixelated MS Sans Serif",i.style.backgroundColor="#c0c0c0",i.style.border="2px outset"}catch{}return}catch{}}let l=0;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("ask-jake-button");e.addEventListener("mouseover",()=>{l===0&&(e.src="button_hover.png",l=1)}),e.addEventListener("mousedown",()=>{l===1&&(e.src="button_press.png",l=2,b(),setTimeout(()=>{l===2&&(e.src="button_hover.png",l=1)},500))}),e.addEventListener("mouseout",()=>{l===2?setTimeout(()=>{e.src="button_n.png",l=0},500):l===1&&(e.src="button_n.png",l=0)})});function b(){const e=document.getElementById("jake-text").value;console.log(e),e!==""&&y(e)}const v="UCzKoLhscfASe-lt8vTOnPxQ",m="AIzaSyB_FjyFRQt-MKw-FwWCi2M4lwdOLGWn5rA";async function g(){const e=`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${v}&key=${m}`,n=await(await fetch(e)).json();return"error"in n?(console.log("YouTube API Error : "+n.error.message),null):n.items.length>0?n.items[0].contentDetails.relatedPlaylists.uploads:null}async function p(){const r=`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${await g()}&maxResults=1&key=${m}`,t=await(await fetch(r)).json();if(!t.items||t.items.length===0)throw new Error("No videos found.");const o=t.items[0].snippet;return{title:o.title,videoId:o.resourceId.videoId,thumbnail:o.thumbnails.high.url,publishedAt:o.publishedAt}}document.querySelector("#app").innerHTML=`
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
                <div class="window" style="width: 50%; max-height: 70vh; height: auto">
                    <div class="title-bar" style="position: relative; z-index: 10">
                        <div class="title-bar-text" id="video-title"></div>
                    </div>
                    <div class="window-body" id="message-window" style="max-height: 65vh; height: auto; overflow-y: hidden">
                        <img id="video-thumbnail" src="" alt="Video Thumbnail">
                    </div>
                </div>
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
`;document.addEventListener("DOMContentLoaded",async()=>{u();const e=await p();document.getElementById("video-title").innerText=e.title,document.getElementById("video-thumbnail").src=e.thumbnail,document.getElementById("video-thumbnail").setAttribute("data-video-id",e.videoId)});document.getElementById("video-thumbnail").addEventListener("click",()=>{const e=document.getElementById("video-thumbnail").getAttribute("data-video-id");window.open(`https://www.youtube.com/watch?v=${e}`,"_blank")});document.getElementById("login-gentleman").addEventListener("click",async()=>{if(document.getElementById("login-gentleman").getBoundingClientRect().left<229){console.log(document.getElementById("login-gentleman").getBoundingClientRect().left);return}setTimeout(()=>{window.location.href="/projects/answers-time/login/index.html"},500)});
