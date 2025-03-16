import{c as b,g as y}from"./firebase-CpPwWOzo.js";import{a as v}from"./youtube-Bniyde3c.js";b();let m=[];const d={ADD:"../icons/add.png",REMOVE:"../icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
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
                <section class="tabs" style="width: 50%; height: auto">
                    <menu role="tablist" aria-label="Sample Tabs">
                       <button role="tab" aria-selected="true" aria-controls="questions"><strong>New Questions</strong></button>
                       <button role="tab" aria-controls="questions-archive"><strong>Questions Archive</strong></button>
                       <button role="tab" aria-controls="production-studio"><strong>Production Studio</strong></button>
                    </menu>
                    
                    <!-- Questions Panel -->
                    <article role="tabpanel" id="questions" style="max-height: 67vh; overflow-y: scroll"></article>
                    
                    <!-- Questions archive -->
                    <article role="tabpanel" hidden id="questions-archive" style="max-height: 67vh; overflow-y: scroll"></article>
                    
                    <!-- Production Studio -->
                    <article role="tabpanel" hidden id="production-studio" style="max-height: 67vh; overflow-y: scroll"></article>
                </section>
            </div>
        </div>
    </div>
    
    <button id="home-button">
        <img src="../icons/home.png" alt="Home Button" style="width: 25px; height: 25px">
    </button>
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="/projects/answers-time/index.html"});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{const o=document.getElementById("production-studio");o.innerHTML="",p(o,m,d.REMOVE)});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const o=await v(),h=/answering\syour\squestions\s\d/i,r=o.filter(e=>h.test(e.title)).reduce((e,t)=>{const l=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(t.title.trim().slice(-1),10)||0)>l?t:e},o[0]),i=await y(),u=i.filter(e=>new Date(e.date)>new Date(r.publishedAt)).sort((e,t)=>new Date(t.date)-new Date(e.date)),n=i.filter(e=>!u.some(t=>t.date===e.date)).sort((e,t)=>new Date(t.date)-new Date(e.date));p(document.getElementById("questions"),u,d.ADD),p(document.getElementById("questions-archive"),n,d.ADD);const s=document.querySelectorAll('[role="tab"]'),a=document.querySelectorAll('[role="tabpanel"]');s.forEach(e=>{e.addEventListener("click",()=>{s.forEach(l=>l.setAttribute("aria-selected","false")),a.forEach(l=>l.hidden=!0),e.setAttribute("aria-selected","true");const t=e.getAttribute("aria-controls");document.getElementById(t).hidden=!1})})});function p(o,h,c){for(const r of h){const i=document.createElement("ul");i.classList.add("tree-view");const u=document.createElement("li"),n=document.createElement("div");n.style.width="100%",n.style.display="flex",n.style.flexDirection="row";const s=document.createElement("div");s.style.width="20%",s.innerText=r.date,s.style.fontWeight="bold",s.style.fontSize="12px";const a=document.createElement("div");a.style.width="80%",a.innerText=r.value,a.style.textAlign="left",a.style.fontSize="12px";let e;if(c!==d.NONE){const t=document.createElement("img");switch(t.src=c,t.style.width="20px",t.style.height="20px",e=document.createElement("button"),e.classList.add("small-button"),c){case d.ADD:e.onclick=()=>{m.push(r),t.src="../icons/good.png",setTimeout(()=>{t.src="../icons/add.png"},500)};break;case d.REMOVE:e.onclick=()=>{const l=m.findIndex(g=>g===r);m.splice(l,1),i.remove()};break}e.appendChild(t)}n.appendChild(s),n.appendChild(a),c!==d.NONE&&n.appendChild(e),u.appendChild(n),i.appendChild(u),o.appendChild(i)}}
