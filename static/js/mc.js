function createIndicators(data) {
    const indicators = document.getElementById("indicators");
    while(indicators.firstChild) indicators.removeChild(indicators.firstChild); // Removes all the existing children from the indicators container

    for(var j = 1; j <= data.length; j++) {
        const btn = document.createElement("button");
        btn.setAttribute("id", `btn-${j}`);
        btn.setAttribute("type", "button");
        btn.setAttribute("data-bs-target", "#mc-carousel");
        btn.setAttribute("data-bs-slide-to", `${j - 1}`);
        btn.style.backgroundColor = "black";
        indicators.appendChild(btn); // Adds each button to the indicator container
    }
    
    document.getElementById("btn-1").classList.add("active");
}

function createImages(data) {
    const images = document.getElementById("images");
    while(images.firstChild) images.removeChild(images.firstChild); // Removes all the existing children from the images container

    for(var j = 1; j <= data.length; j++) {
        const block = document.createElement("div");
        block.classList.add("carousel-item");
        block.id = `block-${j}`;
        images.appendChild(block); // Adds each block to the images container

        const picture = document.createElement("img");
        picture.classList.add("d-block", "w-100");
        picture.src = `./static/img/${data[j - 1]}`;
        picture.alt = `${data[j - 1].split(".")}`;
        picture.id = `picture-${j}`;
        document.getElementById(block.id).appendChild(picture); // Adds each image to their respective block container
    }

    document.getElementById("block-1").classList.add("active");
}

/*
HELPFUL RESOURCES:
fetch, await, and async: https://stackoverflow.com/questions/67955033/async-await-with-fetch-js
Location Values: https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
JS Response Object: https://developer.mozilla.org/en-US/docs/Web/API/Response
*/
async function createModal(num) {
    const url = `${window.location.origin}/mc_list/${num}`;
    const response = await fetch(url);
    const data = await response.json();

    createIndicators(data);
    createImages(data);
}

window.addEventListener('load', () => {
    const modalDialog = document.getElementById('modal-dialog');
    (window.innerWidth < 992) ? modalDialog.style.maxWidth = "90%" : modalDialog.style.maxWidth = "65%";
});

window.addEventListener('resize', () => {
    const modalDialog = document.getElementById('modal-dialog');
    (window.innerWidth < 992) ? modalDialog.style.maxWidth = "90%" : modalDialog.style.maxWidth = "65%";
});