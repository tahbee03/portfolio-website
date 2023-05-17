// Content fade-in animation
// Sources can be found in /static/js/about_me.js

let elements = document.querySelectorAll(".row");

window.addEventListener('load', () => {
    const pictures = document.querySelectorAll(".img-fluid");
    if(window.innerWidth < 768) {
        for(let i = 0; i < pictures.length; i++) pictures[i].style.padding = "15px";
    } else {
        for(let i = 0; i < pictures.length; i++) pictures[i].style.padding = "0px";
    }

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
    const pictures = document.querySelectorAll(".img-fluid");
    if(window.innerWidth < 768) {
        for(let i = 0; i < pictures.length; i++) pictures[i].style.padding = "15px";
    } else {
        for(let i = 0; i < pictures.length; i++) pictures[i].style.padding = "0px";
    }
});