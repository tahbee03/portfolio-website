/*
HELPFUL RESOURCE(S):
https://www.w3schools.com/jsref/met_element_remove.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
https://stackoverflow.com/questions/15876964/why-is-my-android-device-width-980px
*/

// Self-defined navbar "collapser" (since Bootstrap was not cooperating)
window.addEventListener('load', () => {

    scrollTo(0, 0); // Start at the top of the page when loaded

    const links = document.getElementById("links");
    const dropdown = document.getElementById("dropdown");

    if(window.innerWidth < 650) links.remove();
    else dropdown.remove();

});