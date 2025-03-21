import{c as q,b as k,g as E,u as T,d as v,A as b,e as A}from"./firebase-D0udrlzt.js";import{a as S}from"./youtube-Bniyde3c.js";q();let s=[],x=!1,r=-1,g=!1;const h={ADD:"icons/add.png",REMOVE:"icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
    <div id="main-window" class="window" style="width: 100%; height: 100%; display: none">
        <div class="title-bar" style="position: relative; z-index: 10">
            <div class="title-bar-text">mmmungh</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Restore"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <div class="center-fill" id="logo-box">
                <img id="logo" class="img-border" style="z-index: 20" src="jake_time_banner.png" alt="Log In Banner!">
            </div>
            
            <div style="margin-top: 20px; align-items: center; width: 100%; justify-content: center; display: flex; flex-direction: column">
                <div style="margin-bottom: -19px; margin-right: calc(-50% + 230px); display: none">
                    <label for="archive-filter" style="font-weight: bold">Filter</label>
                    <select id="archive-filter" style="width: 200px; color: black; padding: 5px"></select>
                </div>
                <div style="margin-bottom: -19px; margin-right: calc(-50% + 230px); z-index: 1100">
                    <label for="active-filter" style="font-weight: bold">Filter</label>
                    <select id="active-filter" style="width: 200px; color: black; padding: 5px">
                        <option>Newest to Oldest</option>
                        <option>Oldest to Newest</option>
                        <option>Favorites</option>
                    </select>
                </div>
                <section class="tabs" style="width: 50%; height: auto; z-index: 1050" id="tab-panel">
                    <menu role="tablist" aria-label="Sample Tabs">
                       <button role="tab" aria-selected="true" aria-controls="questions"><strong>New Questions</strong></button>
                       <button role="tab" aria-controls="questions-archive"><strong>Questions Archive</strong></button>
                       <button role="tab" aria-controls="production-studio"><strong>Production Studio (0)</strong></button>
                       <button role="tab" aria-controls="production-mode" style="display: none; margin-left: auto" title="Production Mode">
                          <img src="icons/play.png" alt="Production Mode" style="width: 20px; height: 20px; padding-top: 3px">
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
                 <img src="icons/previous.png" alt="Previous Button" style="width: 25px; height: 25px">
             </button>
             
             <strong style="margin-right: 6px; font-size: 14px" id="question-count">?/?</strong>
             
             <button id="next-button" class="floating-button" title="Next Question">
                 <img src="icons/next.png" alt="Next Button" style="width: 25px; height: 25px">
             </button>
          </div>
        </fieldset>
    </div>
    
    <fieldset class="control-group" id="floating-controls" style="top: 40px; left: 15px; width: 100px; height: 65px">
       <legend>Admin Controls</legend>
       <div class="field-row">
          <button id="home-button" class="floating-button" title="Home">
              <img src="icons/home.png" alt="Home Button" style="width: 25px; height: 25px">
          </button>
          
          <button id="logout-button" class="floating-button" title="Logout">
              <img src="icons/logout.png" alt="Logout Button" style="width: 25px; height: 25px">
          </button>
          
          <button id="clean-button" class="floating-button" title="Clean Questions">
              <img src="icons/clean.png" alt="Clean Questions Button" style="width: 25px; height: 25px">
          </button>
       </div>
    </fieldset>
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="index.html"});document.getElementById("logout-button").addEventListener("click",async()=>{await k(),window.location="index.html"});document.getElementById("clean-button").addEventListener("click",async()=>{const t=await E();for(let o in t)typeof t[o].value=="string"&&(t[o].value={ip:"unknown",message:t[o].value});const f=t.sort((o,a)=>new Date(a.date)-new Date(o.date)).filter((o,a,y)=>{const i=o.value.message.includes("?");return(a===0||o.value.message!==y[a-1].value.message)&&i});await T(f);const d=t.length-f.length;d===0?v("No messages to clean!",b.INFO,2e3):d===1?v("Cleaned 1 message!",b.INFO,2e3):v(`Cleaned ${d} messages`,b.INFO,2e3)});document.getElementById("previous-button").addEventListener("click",async()=>{if(x&&s.length>0&&r!==-1&&!g){r-=1,document.getElementById("question-count").innerText=r+1+"/"+s.length;const t=document.getElementById("question-card");t.style.transition="left 1s ease-in-out",g=!0,t.style.left="-645px",setTimeout(()=>{t.style.transition="",t.style.left="100vw",setTimeout(()=>{document.getElementById("question-text").innerText=s[r].value,t.style.transition="left 1s ease-in-out",t.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)},50)},1e3)}});document.getElementById("next-button").addEventListener("click",async()=>{if(x&&s.length>0&&r!==s.length-1&&!g){r+=1,document.getElementById("question-count").innerText=r+1+"/"+s.length;const t=document.getElementById("question-card");t.style.transition="left 1s ease-in-out",g=!0,t.style.left==="-645px"?(document.getElementById("question-text").innerText=s[r].value,t.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)):(t.style.left="100vw",setTimeout(()=>{t.style.transition="",t.style.left="-645px",setTimeout(()=>{document.getElementById("question-text").innerText=s[r].value,t.style.transition="left 1s ease-in-out",t.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)},50)},1e3))}});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{document.querySelector("[aria-controls='production-mode']").style.display="block";const t=document.getElementById("production-studio");t.innerHTML="",w(t,s,h.REMOVE)});document.querySelector('[aria-controls="production-mode"]').addEventListener("click",()=>{x=!0,r=-1,g=!1,document.getElementById("question-count").innerText=r+1+"/"+s.length,A("Press [Escape] to exit production mode!",b.INFO,"Production Mode Activated!","icons/information.png",1e3),document.getElementById("question-card").style.display="flex",document.getElementById("floating-controls").style.display="none",document.getElementById("tab-panel").style.display="none",document.getElementById("logo-box").style.display="none",document.getElementById("question-controls").style.display="flex"});document.addEventListener("keydown",t=>{t.key==="Escape"&&x&&(x=!1,document.getElementById("question-card").style.transition="",document.getElementById("question-card").style.left="-645px",document.getElementById("question-card").style.display="none",document.getElementById("floating-controls").style.display="flex",document.getElementById("tab-panel").style.display="block",document.getElementById("logo-box").style.display="block",document.querySelector("[aria-controls='production-studio']").click(),document.getElementById("question-controls").style.display="none")});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const t=await S(),f=/answering\syour\squestions\s\d/i,d=t.filter(e=>f.test(e.title)),o=d.reduce((e,n)=>{const l=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(n.title.trim().slice(-1),10)||0)>l?n:e},t[0]),a=document.getElementById("archive-filter");for(let e of d){const n=document.createElement("option");n.text=e.title,a.appendChild(n)}const y=await E(),i=y.filter(e=>new Date(e.date)>new Date(o.publishedAt)).sort((e,n)=>new Date(n.date)-new Date(e.date)),u=y.filter(e=>!i.some(n=>n.date===e.date)).sort((e,n)=>new Date(n.date)-new Date(e.date));w(document.getElementById("questions"),i,h.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+i.length+")",w(document.getElementById("questions-archive"),u,h.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+u.length+")";const c=document.querySelectorAll('[role="tab"]'),m=document.querySelectorAll('[role="tabpanel"]');c.forEach(e=>{e.addEventListener("click",()=>{e.innerText.includes("Production Studio")||(document.querySelector("[aria-controls='production-mode']").style.display="none"),c.forEach(l=>l.setAttribute("aria-selected","false")),m.forEach(l=>l.hidden=!0),e.setAttribute("aria-selected","true");const n=e.getAttribute("aria-controls");try{document.getElementById(n).hidden=!1}catch{}})})});function w(t,f,d){for(const o of f){const a=document.createElement("ul");a.classList.add("tree-view");const y=document.createElement("li"),i=document.createElement("div");i.style.width="100%",i.style.display="flex",i.style.flexDirection="row";const u=document.createElement("div");u.style.width="20%",u.innerText=o.date,u.style.fontWeight="bold",u.style.fontSize="12px";const c=document.createElement("div");c.style.width="80%";try{if(c.innerText=o.value.message,c.innerText===void 0||c.innerText==="undefined")throw new Error}catch{c.innerText=o.value}c.style.textAlign="left",c.style.fontSize="12px";const m=document.createElement("img");m.style.width="20px",m.style.height="20px",m.style.paddingRight="7px",m.src="icons/network.png",m.title=o.value.ip;const e=document.createElement("img");e.src="icons/star.png",e.style.width="20px",e.style.height="20px";const n=document.createElement("button");n.classList.add("small-button"),n.title="Favorite",n.onclick=()=>{},n.appendChild(e);let l;if(d!==h.NONE){const p=document.createElement("img");switch(p.src=d,p.style.width="20px",p.style.height="20px",l=document.createElement("button"),l.classList.add("small-button"),d){case h.ADD:l.title="Add to Production Studio",l.onclick=()=>{s.push(o),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+s.length+")",p.src="icons/good.png",setTimeout(()=>{p.src="icons/add.png"},500)};break;case h.REMOVE:l.title="Remove from Production Studio",l.onclick=()=>{const B=s.findIndex(I=>I===o);s.splice(B,1),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+s.length+")",a.remove()};break}l.appendChild(p)}i.appendChild(u),typeof o.value=="object"&&i.appendChild(m),i.appendChild(c),i.appendChild(n),d!==h.NONE&&i.appendChild(l),y.appendChild(i),a.appendChild(y),t.appendChild(a)}}
