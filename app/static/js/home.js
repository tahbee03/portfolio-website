let elements = document.querySelectorAll(".row");

window.addEventListener('load', () => {
    for(var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var dist = elem.getBoundingClientRect().top - window.innerHeight + 25;

        if(dist < 0) elem.classList.add("in-view");
        else elem.classList.remove("in-view");
    }
})

window.addEventListener('scroll', () => {
    for(var i = 0; i < elements.length; i++) {
        var elem = elements[i];
        var dist = elem.getBoundingClientRect().top - window.innerHeight + 50;

        if(dist < 0) elem.classList.add("in-view");
        else elem.classList.remove("in-view");
    }
})