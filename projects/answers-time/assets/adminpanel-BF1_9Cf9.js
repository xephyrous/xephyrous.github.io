import{c as a,g as c}from"./firebase-Gcfcfmnw.js";a();document.querySelector("#app").innerHTML=`
    <div id="main-window" class="window" style="width: 100%; height: 100%; display: none">
        <div class="title-bar" style="position: relative; z-index: 10">
            <div class="title-bar-text">Mr Answers Himself!</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Restore"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <div class="center-fill">
                <img id="logo" style="z-index: 20" src="../jake_time_banner.png" alt="Log In Banner!">
            </div>
            
            <div style="margin-top: 20px; align-items: center; width: 100%; justify-content: center; display: flex">
                <div class="window" style="width: 50%; max-height: 70vh; height: auto">
                    <div class="title-bar" style="position: relative; z-index: 10">
                        <div class="title-bar-text">Questions for you!</div>
                    </div>
                    <div class="window-body" id="message-window" style="max-height: 65vh; height: auto; overflow-y: scroll"></div>
                </div>
            </div>
        </div>
    </div>
    
    <button id="home-button">
        <img src="../icons/home.png" alt="Home Button" style="width: 25px; height: 25px">
    </button>
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="/projects/answers-time/index.html"});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const l=document.getElementById("message-window"),s=await c();s.sort((d,t)=>new Date(t.date)-new Date(d.date));for(const d of s){const t=document.createElement("ul");t.classList.add("tree-view");const o=document.createElement("li"),e=document.createElement("div");e.style.width="100%",e.style.display="flex",e.style.flexDirection="row";const i=document.createElement("div");i.style.width="20%",i.innerText=d.date,i.style.fontWeight="bold",i.style.fontSize="12px";const n=document.createElement("div");n.style.width="80%",n.innerText=d.value,n.style.textAlign="left",n.style.fontSize="12px",e.appendChild(i),e.appendChild(n),o.appendChild(e),t.appendChild(o),l.appendChild(t)}});
