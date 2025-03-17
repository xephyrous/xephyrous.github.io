import{c as f,b as v,d as w,A as E,g as q}from"./firebase-DpQf9T_I.js";import{a as B}from"./youtube-Bniyde3c.js";f();let o=[],p=!1,i=-1,a=!1;const u={ADD:"../icons/add.png",REMOVE:"../icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
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
            <div class="center-fill" id="logo-box">
                <img id="logo" class="img-border" style="z-index: 20" src="../jake_time_banner.png" alt="Log In Banner!">
            </div>
            
            <div style="margin-top: 20px; align-items: center; width: 100%; justify-content: center; display: flex">
                <section class="tabs" style="width: 50%; height: auto; z-index: 1050" id="tab-panel">
                    <menu role="tablist" aria-label="Sample Tabs">
                       <button role="tab" aria-selected="true" aria-controls="questions"><strong>New Questions</strong></button>
                       <button role="tab" aria-controls="questions-archive"><strong>Questions Archive</strong></button>
                       <button role="tab" aria-controls="production-studio"><strong>Production Studio (0)</strong></button>
                       <button role="tab" aria-controls="production-mode" style="display: none; margin-left: auto" title="Production Mode">
                          <img src="../icons/play.png" alt="Production Mode" style="width: 20px; height: 20px; padding-top: 3px">
                       </button>
                    </menu>
                    
                    <!-- Questions Panel -->
                    <article role="tabpanel" id="questions" style="max-height: 67vh; overflow-y: scroll"></article>
                    
                    <!-- Questions archive -->
                    <article role="tabpanel" hidden id="questions-archive" style="max-height: 67vh; overflow-y: scroll"></article>
                    
                    <!-- Production Studio -->
                    <article role="tabpanel" hidden id="production-studio" style="max-height: 67vh; overflow-y: scroll"></article>
                </section>
            </div>
            
            <div id="question-card" class="question-card" style="left: -645px">
                <p id="question-text"></p>
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
    
    <div class="center-fill" >
        <fieldset class="control-group" id="question-controls" style="bottom: 20px; width: 120px; height: 65px; display: none">
          <legend>Question Controls</legend>
          <div class="field-row">
             <button id="previous-button" class="floating-button" title="Previous Question">
                 <img src="../icons/previous.png" alt="Previous Button" style="width: 25px; height: 25px">
             </button>
             
             <strong style="margin-right: 6px; font-size: 14px" id="question-count">?/?</strong>
             
             <button id="next-button" class="floating-button" title="Next Question">
                 <img src="../icons/next.png" alt="Next Button" style="width: 25px; height: 25px">
             </button>
          </div>
        </fieldset>
    </div>
    
    <fieldset class="control-group" id="floating-controls" style="top: 40px; left: 15px; width: 100px; height: 65px">
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
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="/projects/answers-time/index.html"});document.getElementById("logout-button").addEventListener("click",async()=>{await v(),window.location="/projects/answers-time/index.html"});document.getElementById("previous-button").addEventListener("click",async()=>{if(p&&o.length>0&&i!==0&&!a){i-=1,document.getElementById("question-count").innerText=i+1+"/"+o.length;const t=document.getElementById("question-card");t.style.transition="left 1s ease-in-out",a=!0,t.style.left="-645px",setTimeout(()=>{t.style.transition="",t.style.left="100vw",setTimeout(()=>{document.getElementById("question-text").innerText=o[i].value,t.style.transition="left 1s ease-in-out",t.style.left="calc(50% - 320px)",setTimeout(()=>{a=!1},1e3)},50)},1e3)}});document.getElementById("next-button").addEventListener("click",async()=>{if(p&&o.length>0&&i!==o.length-1&&!a){i+=1,document.getElementById("question-count").innerText=i+1+"/"+o.length;const t=document.getElementById("question-card");t.style.transition="left 1s ease-in-out",a=!0,t.style.left==="-645px"?(document.getElementById("question-text").innerText=o[i].value,t.style.left="calc(50% - 320px)",setTimeout(()=>{a=!1},1e3)):(t.style.left="100vw",setTimeout(()=>{t.style.transition="",t.style.left="-645px",setTimeout(()=>{document.getElementById("question-text").innerText=o[i].value,t.style.transition="left 1s ease-in-out",t.style.left="calc(50% - 320px)",setTimeout(()=>{a=!1},1e3)},50)},1e3))}});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{document.querySelector("[aria-controls='production-mode']").style.display="block";const t=document.getElementById("production-studio");t.innerHTML="",x(t,o,u.REMOVE)});document.querySelector('[aria-controls="production-mode"]').addEventListener("click",()=>{p=!0,i=-1,a=!1,document.getElementById("question-count").innerText=i+1+"/"+o.length,w("Press [Escape] to exit production mode!",E.INFO,"Production Mode Activated!","../icons/information.png",1e3),document.getElementById("question-card").style.display="flex",document.getElementById("floating-controls").style.display="none",document.getElementById("tab-panel").style.display="none",document.getElementById("logo-box").style.display="none",document.getElementById("question-controls").style.display="flex"});document.addEventListener("keydown",t=>{t.key==="Escape"&&p&&(p=!1,document.getElementById("question-card").style.display="none",document.getElementById("floating-controls").style.display="flex",document.getElementById("tab-panel").style.display="block",document.getElementById("logo-box").style.display="block",document.querySelector("[aria-controls='production-studio']").click(),document.getElementById("question-controls").style.display="none")});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const t=await B(),h=/answering\syour\squestions\s\d/i,m=t.filter(e=>h.test(e.title)).reduce((e,n)=>{const d=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(n.title.trim().slice(-1),10)||0)>d?n:e},t[0]),r=await q(),y=r.filter(e=>new Date(e.date)>new Date(m.publishedAt)).sort((e,n)=>new Date(n.date)-new Date(e.date)),s=r.filter(e=>!y.some(n=>n.date===e.date)).sort((e,n)=>new Date(n.date)-new Date(e.date));x(document.getElementById("questions"),y,u.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+y.length+")",x(document.getElementById("questions-archive"),s,u.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+s.length+")";const l=document.querySelectorAll('[role="tab"]'),c=document.querySelectorAll('[role="tabpanel"]');l.forEach(e=>{e.addEventListener("click",()=>{e.innerText.includes("Production Studio")||(document.querySelector("[aria-controls='production-mode']").style.display="none"),l.forEach(d=>d.setAttribute("aria-selected","false")),c.forEach(d=>d.hidden=!0),e.setAttribute("aria-selected","true");const n=e.getAttribute("aria-controls");try{document.getElementById(n).hidden=!1}catch{}})})});function x(t,h,g){for(const m of h){const r=document.createElement("ul");r.classList.add("tree-view");const y=document.createElement("li"),s=document.createElement("div");s.style.width="100%",s.style.display="flex",s.style.flexDirection="row";const l=document.createElement("div");l.style.width="20%",l.innerText=m.date,l.style.fontWeight="bold",l.style.fontSize="12px";const c=document.createElement("div");c.style.width="80%",c.innerText=m.value,c.style.textAlign="left",c.style.fontSize="12px";let e;if(g!==u.NONE){const n=document.createElement("img");switch(n.src=g,n.style.width="20px",n.style.height="20px",e=document.createElement("button"),e.classList.add("small-button"),g){case u.ADD:e.onclick=()=>{o.push(m),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+o.length+")",n.src="../icons/good.png",setTimeout(()=>{n.src="../icons/add.png"},500)};break;case u.REMOVE:e.onclick=()=>{const d=o.findIndex(b=>b===m);o.splice(d,1),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+o.length+")",r.remove()};break}e.appendChild(n)}s.appendChild(l),s.appendChild(c),g!==u.NONE&&s.appendChild(e),y.appendChild(s),r.appendChild(y),t.appendChild(r)}}
