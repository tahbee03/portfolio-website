/*
HELPFUL RESOURCE(S):
https://www.w3schools.com/jsref/met_element_remove.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
https://stackoverflow.com/questions/15876964/why-is-my-android-device-width-980px
*/

// Self-defined navbar "collapser" (since Bootstrap was not cooperating)
function toggleCollapse() {
    const links = document.getElementById("links");
    const dropdown = document.getElementById("dropdown");

    if (window.innerWidth < 650) { // Window size where nav links seem to almost collide with website name
        links.style.display = "none";
        dropdown.style.display = "block";
    } else {
        links.style.display = "flex";
        dropdown.style.display = "none";
    }
}

window.addEventListener('load', () => {
    scrollTo(0, 0); // Start at the top of the page when loaded
    toggleCollapse();

    document.querySelector("body").style.transition = "0.5s"; // Apply transition to body after load to (1) avoid flash bang and (2) show smooth transition afterwards

    /*
    NOTE: Before, I called toggleDarkMode() here to automatically set the appropriate colors when 
    each page loaded. However, there was a brief delay with applying the classes which 
    resulted in a "flash bang" if sessionStorage.mode = "dark". I realized this was because
    main.js was only being executed once everything else loaded since it is placed at the 
    end of the <body> element. After inspecting the w3schools website, I realized that I 
    can create smaller scripts within the respective HTML files to apply the classes
    to the elements as soon as they were loaded. Thus, no more flash bangs!
    */
});

window.addEventListener('resize', () => {
    toggleCollapse();
});

let icon = document.getElementById("dark-mode-icon"); // Dark mode icon
icon.addEventListener('click', () => {
    icon.classList.add("shrunken");

    setTimeout(() => {
        if (icon.getAttribute("src") == "../static/img/sun_icon.png") {
            icon.src = "../static/img/moon_icon.png";
            sessionStorage.mode = "dark";
        } else {
            icon.src = "../static/img/sun_icon.png";
            sessionStorage.mode = "light";
        }
        icon.classList.remove("shrunken");
        toggleDarkMode(sessionStorage.mode);
    }, 500);

    // NOTE: Anything executed here will be called before setTimeout() is executed
    // FIXME: Picture takes a while to change on the first click
});

// Dark mode toggler
function toggleDarkMode(mode) {
    const body = document.querySelector("body");

    if (mode == "light") {
        body.classList.replace("dark-cont", "semi-light-cont");
        if (location.pathname == "/about-me") {
            document.getElementById("linked-in-icon").style.removeProperty("filter");
            document.getElementById("github-icon").style.removeProperty("filter");
            document.getElementById("bio-desc").classList.replace("light-text", "dark-text");

            const educationDiv = document.getElementById("education-div");
            if (educationDiv.classList.contains("expanded-card")) educationDiv.classList.replace("dark-cont", "semi-light-cont");

            const experienceDiv = document.getElementById("experience-div");
            if (experienceDiv.classList.contains("expanded-card")) experienceDiv.classList.replace("dark-cont", "semi-light-cont");
        }
    } else {
        body.classList.replace("semi-light-cont", "dark-cont");
        if (location.pathname == "/about-me") {
            document.getElementById("linked-in-icon").style.filter = "invert(100%)";
            document.getElementById("bio-desc").classList.replace("dark-text", "light-text");
            document.getElementById("github-icon").style.filter = "invert(100%)";

            const educationDiv = document.getElementById("education-div");
            if (educationDiv.classList.contains("expanded-card")) educationDiv.classList.replace("semi-light-cont", "dark-cont");

            const experienceDiv = document.getElementById("experience-div");
            if (experienceDiv.classList.contains("expanded-card")) experienceDiv.classList.replace("semi-light-cont", "dark-cont");
        }
    }
}