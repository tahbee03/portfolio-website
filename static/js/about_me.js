// Changes the margin of the bio container based on the window width
function changeBioMargins() {
    var bioCont = document.getElementById("bio");
    if(window.innerWidth < 992) { // Bootstrap lg breakpoint (>= 992px)
        bioCont.style.marginTop = "20px";
        bioCont.style.marginBottom = "20px";
    } else {
        bioCont.style.marginTop = "75px";
        bioCont.style.marginBottom = "75px";
    }
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

let elements = document.querySelectorAll(".card");

window.addEventListener('load', () => {
    changeBioMargins();

    for(var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var dist = elem.getBoundingClientRect().top - window.innerHeight + 25;

        if(dist < 0) elem.classList.add("in-view");
        else elem.classList.remove("in-view");
    }
});

window.addEventListener('scroll', () => {
    for(var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var dist = elem.getBoundingClientRect().top - window.innerHeight + 25;

        if(dist < 0) elem.classList.add("in-view");
        else elem.classList.remove("in-view");
    }
});

window.addEventListener('resize', () => {
    changeBioMargins();
})

// Flip-and-change animation for bio picture

/*
HELPFUL RESOURCE(S):
https://stackoverflow.com/questions/19799846/javascript-rotate-img-on-click
https://stackoverflow.com/questions/7882356/javascript-get-img-src-and-set-as-variable
https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY
*/

var picture = document.getElementById("bio-pic");

picture.addEventListener('click', () => {

    picture.classList.add("rotated-image"); // Add class to class list of picture to apply effect

    setTimeout(() => {
        // Change picture source accordingly
        if(picture.getAttribute("src") == "/static/img/talike7.jpg") {
            picture.src = "/static/img/code_pfp.png";
        } else {
            picture.src = "/static/img/talike7.jpg";
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

})