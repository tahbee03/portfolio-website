/*
SOURCES:
https://www.w3schools.com/jsref/met_element_remove.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
https://stackoverflow.com/questions/15876964/why-is-my-android-device-width-980px
*/

window.addEventListener('load', () => {

    const links = document.getElementById("links");
    const dropdown = document.getElementById("dropdown");

    if(window.innerWidth < 650) links.remove();
    else dropdown.remove();

});