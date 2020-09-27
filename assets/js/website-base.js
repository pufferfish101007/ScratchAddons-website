/* =============================================================
                         INSTALL BUTTON
============================================================= */

window.addEventListener('load', () => {

	let browser; // "chrome", "firefox", null
	const bowserResult = bowser.getParser(navigator.userAgent).parsedResult;
	switch (bowserResult.engine.name) {
		case "Blink":
			browser = "chrome"
			break
		case "Gecko":
			browser = "firefox"
			break
		default:
			browser = "unsupported"
			break
	}

	const storeLinks = {
		"chrome": "https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco",
		"firefox": "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",
		"unsupported": "/#install"
	}

	const url = storeLinks[browser]

	if (document.querySelector("#install-intro")) {
		switch (browser) {
			case "chrome":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:googlechrome"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Chrome"
				break
			case "firefox":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:firefoxbrowser"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Firefox"
				break
			default:
				document.querySelector("#install-browser-icon").innerHTML = ""
				document.querySelector("#install-browser").innerHTML = "Install"
				break;
		}
	}

	for (const element of document.querySelectorAll(".install-btn")) {
		element.href = url
		element.classList.add(`install-${browser}`)
		if (location.pathname !== "/" && browser !== "unsupported") element.target = "_blank"
	}

})

/* =============================================================
                           DARK THEME
============================================================= */

window.addEventListener('load', () => {

	let darkTheme = false
	let extensionStyledTheme = false
	let toggle = document.querySelector("#dark-toggle")
	let soraAdded = false

	const updateExtensionStyledTheme = () => {
		document.body.classList.toggle("extension-styled")
		extensionStyledTheme = !extensionStyledTheme
		localStorage.setItem("extensionStyledTheme", extensionStyledTheme)
		if (!soraAdded) {
			soraAdded = true
			var linkEl = document.createElement('link')
			linkEl.href = "https://fonts.googleapis.com/css2?family=Sora&amp;display=swap"
			linkEl.rel = "stylesheet"
			document.head.appendChild(linkEl)
		}
	}

	const updateDarkTheme = (shiftPressed = false) => {
		document.body.classList.toggle("no-animation")

		if (shiftPressed || [...document.body.classList].indexOf(".extension-styled") + 1) {
			updateExtensionStyledTheme()
		} 

		document.body.classList.toggle("dark")
		setTimeout(() => document.body.classList.toggle("no-animation"), 200)
		darkTheme = !darkTheme
		localStorage.setItem("darkTheme", darkTheme)
		if (darkTheme) {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
		} else {
			toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
		}
	}
	
	if (darkTheme) {
		toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
	} else {
		toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
	}

	if (localStorage.getItem("extensionStyledTheme")) {
		updateExtensionStyledTheme()
	} else {
		localStorage.setItem("extensionStyledTheme", false)
	}
	
	if (localStorage.getItem("darkTheme")) {
		updateDarkTheme()
	} else {
		localStorage.setItem("darkTheme", false)
	}	
	
	toggle.addEventListener("click", event => {
		if (event && event.shiftKey) updateExtensionStyledTheme()
		updateDarkTheme()
	})

})

/* =============================================================
                       CONSOLE EASTER EGG
============================================================= */

window.addEventListener('load', () => {
	console.log(
`%cHello, console log readers!
%c
It seems that you wanted to know what happened behind the scenes. Well, there is not much happening here because the is quite simple.
This site is built using Bootstrap 4 as the main theme, Jekyll as the site generator, and GitHub Pages as the hosting provider. Also, this site has been compressed before it reaches to you, so if you want to see the uncompressed source code, then go to https://github.com/ScratchAddons/website.

If you wanted to report issues or wanted to suggest something about the website, please create an issue on https://github.com/ScratchAddons/website/issues (GitHub account required) or tell us on https://scratchaddons.com/feedback.

We thank you for visiting the website, and enjoy using the extension if you do!
-Hans5958

%cBy the way, here's a little secret: You can toggle the similar style to the extension if you click the dark theme switch button while holding SHIFT. Keep in mind that the secret theme is made seperate because the current theme minds readability and accessibility better than the secret.`, 
	"font-size: 1.5rem; font-weight: 500", 
	"",
	"font-style: italic; font-size: 0.75rem")
})