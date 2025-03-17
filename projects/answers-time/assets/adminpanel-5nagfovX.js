import{c as b,b as v,g as y}from"./firebase-C6diCsfn.js";import{a as w}from"./youtube-Bniyde3c.js";b();let u=[];const d={ADD:"../icons/add.png",REMOVE:"../icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
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
                <img id="logo" class="img-border" style="z-index: 20" src="../jake_time_banner.png" alt="Log In Banner!">
            </div>
            
            <div style="margin-top: 20px; align-items: center; width: 100%; justify-content: center; display: flex">
                <section class="tabs" style="width: 50%; height: auto; z-index: 1050">
                    <menu role="tablist" aria-label="Sample Tabs">
                       <button role="tab" aria-selected="true" aria-controls="questions"><strong>New Questions</strong></button>
                       <button role="tab" aria-controls="questions-archive"><strong>Questions Archive</strong></button>
                       <button role="tab" aria-controls="production-studio"><strong>Production Studio (0)</strong></button>
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
    
    <fieldset class="control-group" style="top: 40px; left: 15px; width: 100px; height: 65px">
       <legend>User Controls</legend>
       <div class="field-row">
          <button id="home-button" class="floating-button" title="Home">
              <img src="../icons/home.png" alt="Home Button" style="width: 25px; height: 25px">
          </button>
          
          <button id="logout-button" class="floating-button" title="Logout">
              <img src="../icons/logout.png" alt="Logout Button" style="width: 25px; height: 25px">
          </button>
       </div>
    </fieldset>
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="/projects/answers-time/index.html"});document.getElementById("logout-button").addEventListener("click",async()=>{await v(),window.location="/projects/answers-time/index.html"});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{const n=document.getElementById("production-studio");n.innerHTML="",g(n,u,d.REMOVE)});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const n=await w(),h=/answering\syour\squestions\s\d/i,r=n.filter(t=>h.test(t.title)).reduce((t,e)=>{const a=parseInt(t.title.trim().slice(-1),10)||0;return(parseInt(e.title.trim().slice(-1),10)||0)>a?e:t},n[0]),s=await y(),c=s.filter(t=>new Date(t.date)>new Date(r.publishedAt)).sort((t,e)=>new Date(e.date)-new Date(t.date)),i=s.filter(t=>!c.some(e=>e.date===t.date)).sort((t,e)=>new Date(e.date)-new Date(t.date));g(document.getElementById("questions"),c,d.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+c.length+")",g(document.getElementById("questions-archive"),i,d.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+i.length+")";const o=document.querySelectorAll('[role="tab"]'),l=document.querySelectorAll('[role="tabpanel"]');o.forEach(t=>{t.addEventListener("click",()=>{o.forEach(a=>a.setAttribute("aria-selected","false")),l.forEach(a=>a.hidden=!0),t.setAttribute("aria-selected","true");const e=t.getAttribute("aria-controls");document.getElementById(e).hidden=!1})})});function g(n,h,m){for(const r of h){const s=document.createElement("ul");s.classList.add("tree-view");const c=document.createElement("li"),i=document.createElement("div");i.style.width="100%",i.style.display="flex",i.style.flexDirection="row";const o=document.createElement("div");o.style.width="20%",o.innerText=r.date,o.style.fontWeight="bold",o.style.fontSize="12px";const l=document.createElement("div");l.style.width="80%",l.innerText=r.value,l.style.textAlign="left",l.style.fontSize="12px";let t;if(m!==d.NONE){const e=document.createElement("img");switch(e.src=m,e.style.width="20px",e.style.height="20px",t=document.createElement("button"),t.classList.add("small-button"),m){case d.ADD:t.onclick=()=>{u.push(r),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+u.length+")",e.src="../icons/good.png",setTimeout(()=>{e.src="../icons/add.png"},500)};break;case d.REMOVE:t.onclick=()=>{const a=u.findIndex(p=>p===r);u.splice(a,1),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+u.length+")",s.remove()};break}t.appendChild(e)}i.appendChild(o),i.appendChild(l),m!==d.NONE&&i.appendChild(t),c.appendChild(i),s.appendChild(c),n.appendChild(s)}}
