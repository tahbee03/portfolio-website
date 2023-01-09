// Content fade-in animation

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