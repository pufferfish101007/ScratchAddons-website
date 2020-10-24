const waitForElement=e=>new Promise(t=>{if(document.querySelector(e))return t(document.querySelector(e));const o=new MutationObserver(()=>{document.querySelector(e)&&(t(document.querySelector(e)),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})});window.addEventListener("load",()=>{let e;switch(bowser.getParser(navigator.userAgent).parsedResult.engine.name){case"Blink":e="chrome";break;case"Gecko":e="firefox";break;default:e="unsupported"}const t={chrome:"https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco",firefox:"https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",unsupported:"/#install"}[e];if(document.querySelector("#install-intro")){switch(e){case"chrome":document.querySelector("#install-browser-icon").innerHTML='<span class="iconify" data-icon="simple-icons:googlechrome"></span>',document.querySelector("#install-browser").innerHTML="Install for Chrome";break;case"firefox":document.querySelector("#install-browser-icon").innerHTML='<span class="iconify" data-icon="simple-icons:firefoxbrowser"></span>',document.querySelector("#install-browser").innerHTML="Install for Firefox";break;default:document.querySelector("#install-browser-icon").innerHTML="",document.querySelector("#install-browser").innerHTML="Install"}document.querySelector("#install-intro").classList.toggle("disabled")}for(const o of document.querySelectorAll(".install-btn"))o.href=t,o.classList.add(`install-${e}`),"/"!==location.pathname&&"unsupported"!==e&&(o.target="_blank",o.rel="noopener")});let toggle,darkTheme=!1,extensionStyledTheme=!1,soraAdded=!1;const updateExtensionStyledTheme=()=>{if(document.body.classList.toggle("extension-styled"),extensionStyledTheme=!extensionStyledTheme,localStorage.setItem("extensionStyledTheme",extensionStyledTheme),!soraAdded){soraAdded=!0;var e=document.createElement("link");e.href="https://fonts.googleapis.com/css2?family=Sora&amp;display=swap",e.rel="stylesheet",document.head.appendChild(e)}},updateDarkTheme=(e=!1)=>{document.body.classList.toggle("no-animation"),(e||[...document.body.classList].indexOf(".extension-styled")+1)&&updateExtensionStyledTheme(),document.body.classList.toggle("dark"),setTimeout(()=>document.body.classList.toggle("no-animation"),200),darkTheme=!darkTheme,localStorage.setItem("darkTheme",darkTheme)};"true"===localStorage.getItem("extensionStyledTheme")?updateExtensionStyledTheme():localStorage.setItem("extensionStyledTheme",!1),"true"===localStorage.getItem("darkTheme")?updateDarkTheme():localStorage.setItem("darkTheme",!1),document.body.dataset.themeLoaded=!0,waitForElement("#dark-toggle").then(()=>{(toggle=document.querySelector("#dark-toggle")).innerHTML=darkTheme?'<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>':'<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>',toggle.addEventListener("click",e=>{e&&e.shiftKey&&updateExtensionStyledTheme(),updateDarkTheme(),toggle.innerHTML=darkTheme?'<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>':'<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'})}),window.addEventListener("load",()=>{$(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()});let lastTooltipsAmount=0;var tooltipsObserver=new MutationObserver(()=>{currentTooltipsAmount=document.querySelectorAll('[data-toggle="tooltip"]').length,lastTooltipsAmount!==currentTooltipsAmount&&(lastTooltipsAmount=currentTooltipsAmount,$(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip())});tooltipsObserver.observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("load",()=>{console.log("%cHello, console log readers!\n%c\nIt seems that you wanted to know what happened behind the scenes. Well, there is not much happening here because the is quite simple.\nThis site is built using Bootstrap 4 as the main theme, Jekyll as the site generator, and GitHub Pages as the hosting provider. Also, this site has been compressed before it reaches to you, so if you want to see the uncompressed source code, then go to https://github.com/ScratchAddons/website.\n\nIf you wanted to report issues or wanted to suggest something about the website, please create an issue on https://github.com/ScratchAddons/website/issues (GitHub account required) or tell us on https://scratchaddons.com/feedback.\n\nWe thank you for visiting the website, and enjoy using the extension if you do!\n-Hans5958\n\n%cBy the way, here's a little secret: You can toggle the similar style to the extension if you click the dark theme switch button while holding SHIFT. Keep in mind that the secret theme is made seperate because the current theme minds readability and accessibility better than the secret.","font-size: 1.5rem; font-weight: 500","","font-style: italic; font-size: 0.75rem")});