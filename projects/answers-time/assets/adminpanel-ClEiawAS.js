import{c as b,g as v}from"./firebase-BMkLKdpF.js";import{a as y}from"./youtube-Bniyde3c.js";b();let m=[];const d={ADD:"../icons/add.png",REMOVE:"../icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
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
                <section class="tabs" style="width: 50%; height: auto; z-index: 1050">
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
        </div>
    </div>
    
    <button id="home-button">
        <img src="../icons/home.png" alt="Home Button" style="width: 25px; height: 25px">
    </button>
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="/projects/answers-time/index.html"});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{const o=document.getElementById("production-studio");o.innerHTML="",g(o,m,d.REMOVE)});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const o=await y(),h=/answering\syour\squestions\s\d/i,r=o.filter(e=>h.test(e.title)).reduce((e,t)=>{const a=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(t.title.trim().slice(-1),10)||0)>a?t:e},o[0]),s=await v(),c=s.filter(e=>new Date(e.date)>new Date(r.publishedAt)).sort((e,t)=>new Date(t.date)-new Date(e.date)),i=s.filter(e=>!c.some(t=>t.date===e.date)).sort((e,t)=>new Date(t.date)-new Date(e.date));g(document.getElementById("questions"),c,d.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+c.length+")",g(document.getElementById("questions-archive"),i,d.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+i.length+")";const n=document.querySelectorAll('[role="tab"]'),l=document.querySelectorAll('[role="tabpanel"]');n.forEach(e=>{e.addEventListener("click",()=>{n.forEach(a=>a.setAttribute("aria-selected","false")),l.forEach(a=>a.hidden=!0),e.setAttribute("aria-selected","true");const t=e.getAttribute("aria-controls");document.getElementById(t).hidden=!1})})});function g(o,h,u){for(const r of h){const s=document.createElement("ul");s.classList.add("tree-view");const c=document.createElement("li"),i=document.createElement("div");i.style.width="100%",i.style.display="flex",i.style.flexDirection="row";const n=document.createElement("div");n.style.width="20%",n.innerText=r.date,n.style.fontWeight="bold",n.style.fontSize="12px";const l=document.createElement("div");l.style.width="80%",l.innerText=r.value,l.style.textAlign="left",l.style.fontSize="12px";let e;if(u!==d.NONE){const t=document.createElement("img");switch(t.src=u,t.style.width="20px",t.style.height="20px",e=document.createElement("button"),e.classList.add("small-button"),u){case d.ADD:e.onclick=()=>{m.push(r),t.src="../icons/good.png",setTimeout(()=>{t.src="../icons/add.png"},500)};break;case d.REMOVE:e.onclick=()=>{const a=m.findIndex(p=>p===r);m.splice(a,1),s.remove()};break}e.appendChild(t)}i.appendChild(n),i.appendChild(l),u!==d.NONE&&i.appendChild(e),c.appendChild(i),s.appendChild(c),o.appendChild(s)}}
