async function createModal(num) {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = ""; // Removes any existing images from the modal

    const picture = document.createElement("img");
    picture.classList.add("d-block", "w-100");
    picture.src = `./static/img/comic${num}.png`;
    picture.alt = `comic${num}`;
    picture.id = `comic-${num}`;
    modalBody.appendChild(picture); // Adds image to the modal
}