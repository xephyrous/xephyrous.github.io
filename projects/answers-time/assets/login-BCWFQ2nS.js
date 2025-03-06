import{l as i}from"./firebase-CzOzUED8.js";document.querySelector("#app").innerHTML=`
    <div id="main-window" class="window" style="width: 100%; height: 100%">
        <div class="title-bar" style="position: relative; z-index: 10">
            <div class="title-bar-text">Login!</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Restore"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            <div class="center-fill">
                <img id="logo" style="z-index: 20" src="log_in.gif" alt="Log In Banner!">
            </div>
            
            <div class="center-fill">
                <div class="window" style="pos">
                    <div class="title-bar" style="position: relative; z-index: 10">
                        <div class="title-bar-text" style="width: 100%; text-align: center">ᓚᘏᗢ</div>
                    </div>
                    <div class="window-body">
                        <div class="field-row-stacked" style="width: 30vw">
                          <label for="username_field" style="font-weight: bold">Email</label>
                          <input id="username_field" type="text" style="color: black; font-weight: bold"/>
                        </div>
                        <div class="field-row-stacked" style="width: 30vw">
                          <label for="password_field" style="font-weight: bold">Password</label>
                          <input id="password_field" type="password" style="color: black; font-weight: bold"/>
                        </div>
                        <div class="field-row-stacked" style="width: 30vw">
                            <button id="login-button" style="color: black; font-weight: bold">Steal My Information!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;document.getElementById("login-button").addEventListener("click",()=>{i(document.getElementById("username_field").value,document.getElementById("password_field").value).then(t=>{t&&(window.location="/projects/answers-time/admin-panel/index.html")})});
