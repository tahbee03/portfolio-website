const picture = document.getElementById("bio-pic");
const cards = [...document.querySelectorAll(".card"), ...document.querySelectorAll(".expanded-card")];

// Changes the size of the elements based on the window width
function resize() {
    const bioCont = document.getElementById("bio");
    const bioDesc = document.getElementById("bio-desc");
    if (window.innerWidth < 992) { // Bootstrap lg breakpoint (>= 992px)
        bioCont.style.marginTop = "20px";
        bioCont.style.marginBottom = "20px";
        picture.style.maxWidth = "70%";
        bioDesc.style.fontSize = "1.25rem";
        for (const c of cards) c.style.padding = "10px";
    } else {
        bioCont.style.marginTop = "75px";
        bioCont.style.marginBottom = "75px";
        picture.style.maxWidth = "50%";
        bioDesc.style.fontSize = "1rem";
        for (const c of cards) c.style.padding = "25px";
    }
}

function excol(section) {
    const toggler = document.getElementById(`${section}-excol`);
    const sectionDiv = document.getElementById(`${section}-div`);

    toggler.classList.add("shrunken");

    setTimeout(() => {
        if (toggler.getAttribute("src") == "/static/img/expand.png") {
            // Expand content
            toggler.src = "/static/img/collapse.png";
            toggler.style.filter = "invert(0%)";

            for (const child of sectionDiv.children) {
                if ([...child.classList].includes("card")) {
                    child.classList.remove("hide");
                }
            }

            sectionDiv.classList.remove("card");
            sectionDiv.classList.remove("semi-dark-cont");
            sectionDiv.classList.add("expanded-card");

            // Apply appropriate class to card based on set mode
            if (sessionStorage.mode == "light") sectionDiv.classList.add("semi-light-cont");
            else sectionDiv.classList.add("dark-cont");
        } else {
            // Collapse content
            toggler.src = "/static/img/expand.png";
            toggler.style.filter = "invert(100%)";

            for (const child of sectionDiv.children) {
                if ([...child.classList].includes("card")) {
                    child.classList.add("hide");
                }
            }

            // Remove appropriate class from card based on set mode
            if (sessionStorage.mode == "light") sectionDiv.classList.remove("semi-light-cont");
            else sectionDiv.classList.remove("dark-cont");

            sectionDiv.classList.remove("expanded-card");
            sectionDiv.classList.add("card");
            sectionDiv.classList.add("semi-dark-cont");
        }

        toggler.classList.remove("shrunken");
    }, 500);
}

// Content fade-in animation + more

/*
HELPFUL RESOURCE(S):
https://codepen.io/bstonedev/pen/MWWZgKz
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
https://www.w3schools.com/jsref/prop_win_innerheight.asp
https://www.w3schools.com/jsref/prop_element_classlist.asp
*/

window.addEventListener('load', () => {
    resize();

    for (const c of cards) {
        const dist = c.getBoundingClientRect().top - window.innerHeight + 25;

        if (dist < 0) c.classList.add("in-view");
        else c.classList.remove("in-view");
    }
});

window.addEventListener('scroll', () => {
    for (const c of cards) {
        const dist = c.getBoundingClientRect().top - window.innerHeight + 25;

        if (dist < 0) c.classList.add("in-view");
        else c.classList.remove("in-view");
    }
});

window.addEventListener('resize', () => {
    resize();
});

// Flip-and-change animation for bio picture

/*
HELPFUL RESOURCE(S):
https://stackoverflow.com/questions/19799846/javascript-rotate-img-on-click
https://stackoverflow.com/questions/7882356/javascript-get-img-src-and-set-as-variable
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY
*/

picture.addEventListener('click', () => {

    picture.classList.add("rotated-image"); // Add class to class list of picture to apply effect

    setTimeout(() => {
        // Change picture source accordingly
        if (picture.getAttribute("src") == "/static/img/talike2.jpg") {
            picture.src = "/static/img/code_pfp.png";
        } else {
            picture.src = "/static/img/talike2.jpg";
        }
        picture.classList.remove("rotated-image"); // Remove class from class list of picture to remove effect 
    }, 500);

    /*
    NOTE: Since the picture's transition is set to 0.5 sec, that means it will take 0.5 sec for the effect
    to be applied. Setting the time interval in setTimeout() to the same value gives the illusion
    that the website "waits" for the transition to finish before changing the picture. Removing
    the rotated-image class inside of setTimeout() also allows a clean transition back to the
    original rotation of the picture instead of not showing a transition at all.
    */

    // FIXME: Picture takes a while to change on the first click

});