import{c as k,b as D,g as E,d as w,A as b,u as A,e as T,r as S,f as L}from"./firebase-CB8_1hNP.js";import{a as I}from"./youtube-Bniyde3c.js";k();let s=[],f=!1,d=-1,g=!1;const y={ADD:"icons/add.png",REMOVE:"icons/remove.png",NONE:""};document.querySelector("#app").innerHTML=`
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
                <div style="margin-bottom: -19px; margin-right: calc(-50% + 230px); z-index: 1100; display: none" id="archive-filter-box">
                    <label for="archive-filter" style="font-weight: bold">Filter</label>
                    <select id="archive-filter" data-last-filter="" style="width: 200px; color: black; padding: 5px"></select>
                </div>
                <div style="margin-bottom: -19px; margin-right: calc(-50% + 230px); z-index: 1100" id="filter-box">
                    <label for="active-filter" style="font-weight: bold">Filter</label>
                    <select id="active-filter" data-last-filter="Newest to Oldest" style="width: 200px; color: black; padding: 5px">
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
                       <button role="tab" aria-controls="production-mode" style="display: none; margin-left: 10px" title="Production Mode">
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
`;document.getElementById("home-button").addEventListener("click",()=>{window.location="index.html"});document.getElementById("logout-button").addEventListener("click",async()=>{await D(),window.location="index.html"});document.querySelector("[aria-controls='questions-archive']").addEventListener("click",()=>{document.getElementById("filter-box").style.display="none",document.getElementById("archive-filter-box").style.display="block"});document.querySelector("[aria-controls='questions']").addEventListener("click",()=>{document.getElementById("filter-box").style.display="block",document.getElementById("archive-filter-box").style.display="none"});document.getElementById("clean-button").addEventListener("click",async()=>{const n=await E(),h=n.sort((e,t)=>new Date(t.value.date)-new Date(e.value.date)).filter((e,t,o)=>{const m=e.value.message.includes("?");return(t===0||e.value.message!==o[t-1].value.message)&&m}),c=n.length-h.length;if(c===0){w("No messages to clean!",b.INFO,2e3);return}const a=await I(),p=/answering\syour\squestions\s\d/i,i=a.filter(e=>p.test(e.title)).reduce((e,t)=>{const o=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(t.title.trim().slice(-1),10)||0)>o?t:e},a[0]),r=await E(),l=r.filter(e=>new Date(e.value.date)>new Date(i.publishedAt)).sort((e,t)=>new Date(t.value.date)-new Date(e.value.date)),u=r.filter(e=>!l.some(t=>t.value.date===e.value.date)).sort((e,t)=>new Date(t.value.date)-new Date(e.value.date));x(document.getElementById("questions"),l,y.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+l.length+")",x(document.getElementById("questions-archive"),u,y.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+u.length+")",await A(h),c===1?w("Cleaned 1 message!",b.INFO,2e3):w(`Cleaned ${c} messages`,b.INFO,2e3)});document.getElementById("previous-button").addEventListener("click",async()=>{if(f&&s.length>0&&d!==-1&&!g){d-=1,document.getElementById("question-count").innerText=d+1+"/"+s.length;const n=document.getElementById("question-card");n.style.transition="left 1s ease-in-out",g=!0,n.style.left="-645px",setTimeout(d!==-1?()=>{n.style.transition="",n.style.left="100vw",setTimeout(()=>{document.getElementById("question-text").innerText=s[d].value.message,n.style.transition="left 1s ease-in-out",n.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)},50)}:()=>{g=!1},1e3)}});document.getElementById("next-button").addEventListener("click",async()=>{if(f&&s.length>0&&d!==s.length-1&&!g){d+=1,document.getElementById("question-count").innerText=d+1+"/"+s.length;const n=document.getElementById("question-card");n.style.transition="left 1s ease-in-out",g=!0,n.style.left==="-645px"?(document.getElementById("question-text").innerText=s[d].value.message,n.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)):(n.style.left="100vw",setTimeout(()=>{n.style.transition="",n.style.left="-645px",setTimeout(()=>{document.getElementById("question-text").innerText=s[d].value.message,n.style.transition="left 1s ease-in-out",n.style.left="calc(50% - 320px)",setTimeout(()=>{g=!1},1e3)},50)},1e3))}});document.querySelector('[aria-controls="production-studio"]').addEventListener("click",()=>{document.querySelector("[aria-controls='production-mode']").style.display="block",document.getElementById("filter-box").style.display="block",document.getElementById("archive-filter-box").style.display="none";const n=document.getElementById("production-studio");n.innerHTML="",x(n,s,y.REMOVE)});document.querySelector('[aria-controls="production-mode"]').addEventListener("click",()=>{f=!0,d=-1,g=!1,document.getElementById("question-count").innerText=d+1+"/"+s.length,T("Press [Escape] to exit production mode!",b.INFO,"Production Mode Activated!","icons/information.png",1e3),document.getElementById("question-card").style.display="flex",document.getElementById("floating-controls").style.display="none",document.getElementById("tab-panel").style.display="none",document.getElementById("logo-box").style.display="none",document.getElementById("question-controls").style.display="flex",document.getElementById("filter-box").style.display="none",document.getElementById("archive-filter-box").style.display="none"});document.addEventListener("keydown",n=>{n.key==="Escape"&&f&&(f=!1,document.getElementById("question-card").style.transition="",document.getElementById("question-card").style.left="-645px",document.getElementById("question-card").style.display="none",document.getElementById("floating-controls").style.display="flex",document.getElementById("tab-panel").style.display="block",document.getElementById("logo-box").style.display="block",document.querySelector("[aria-controls='production-studio']").click(),document.getElementById("question-controls").style.display="none",document.getElementById("filter-box").style.display="block")});document.addEventListener("DOMContentLoaded",async()=>{document.getElementById("main-window").style.display="block";const n=await I(),h=/answering\syour\squestions\s\d/i,c=n.filter(e=>h.test(e.title)),a=c.reduce((e,t)=>{const o=parseInt(e.title.trim().slice(-1),10)||0;return(parseInt(t.title.trim().slice(-1),10)||0)>o?t:e},n[0]),p=document.getElementById("archive-filter");for(let e of c){const t=document.createElement("option");t.text=e.title,p.appendChild(t)}const v=await E(),i=v.filter(e=>new Date(e.value.date)>new Date(a.publishedAt)).sort((e,t)=>new Date(t.value.date)-new Date(e.value.date)),r=v.filter(e=>!i.some(t=>t.value.date===e.value.date)).sort((e,t)=>new Date(t.value.date)-new Date(e.value.date));x(document.getElementById("questions"),i,y.ADD),document.querySelector("[aria-controls='questions']").children[0].innerText="Questions ("+i.length+")",x(document.getElementById("questions-archive"),r,y.ADD),document.querySelector("[aria-controls='questions-archive']").children[0].innerText="Questions Archive ("+r.length+")";const l=document.querySelectorAll('[role="tab"]'),u=document.querySelectorAll('[role="tabpanel"]');l.forEach(e=>{e.addEventListener("click",()=>{e.innerText.includes("Production Studio")||(document.querySelector("[aria-controls='production-mode']").style.display="none"),l.forEach(o=>o.setAttribute("aria-selected","false")),u.forEach(o=>o.hidden=!0),e.setAttribute("aria-selected","true");const t=e.getAttribute("aria-controls");try{document.getElementById(t).hidden=!1}catch{}})})});function x(n,h,c){for(const a of h){const p=document.createElement("ul");p.classList.add("tree-view");const v=document.createElement("li"),i=document.createElement("div");i.style.width="100%",i.style.display="flex",i.style.flexDirection="row";const r=document.createElement("div");r.style.width="20%",r.innerText=a.value.date,r.style.fontWeight="bold",r.style.fontSize="12px";const l=document.createElement("div");l.style.width="80%";try{if(l.innerText=a.value.message,l.innerText===void 0||l.innerText==="undefined")throw new Error}catch{l.innerText=a.value}l.style.textAlign="left",l.style.fontSize="12px";const u=document.createElement("img");u.style.width="20px",u.style.height="20px",u.style.paddingRight="7px",u.src="icons/network.png",u.title=a.value.ip;const e=document.createElement("img");e.src="icons/star.png",e.style.width="20px",e.style.height="20px";const t=document.createElement("button");t.classList.add("small-button"),t.title="Favorite",t.onclick=async()=>{switch(e.src.substring(e.src.lastIndexOf("/")+1)){case"star.png":await L(a),e.src="icons/good.png";break;case"good.png":await S(a),e.src="icons/star.png";break}},t.appendChild(e);let o;if(c!==y.NONE){const m=document.createElement("img");switch(m.src=c,m.style.width="20px",m.style.height="20px",o=document.createElement("button"),o.classList.add("small-button"),c){case y.ADD:o.title="Add to Production Studio",o.onclick=()=>{s.push(a),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+s.length+")",m.src="icons/good.png",setTimeout(()=>{m.src="icons/add.png"},500)};break;case y.REMOVE:o.title="Remove from Production Studio",o.onclick=()=>{const B=s.findIndex(q=>q===a);s.splice(B,1),document.querySelector("[aria-controls='production-studio']").children[0].innerText="Production Studio ("+s.length+")",p.remove()};break}o.appendChild(m)}i.appendChild(r),typeof a.value=="object"&&i.appendChild(u),i.appendChild(l),i.appendChild(t),c!==y.NONE&&i.appendChild(o),v.appendChild(i),p.appendChild(v),n.appendChild(p)}}
