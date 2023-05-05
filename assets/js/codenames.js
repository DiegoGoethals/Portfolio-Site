"use strict";

let image = 0;
init();

function init() {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", changeImage);
    });
    showImage();
}

function mod(a, n) {
    return a - (n * Math.floor(a/n));
}

function changeImage(e) {
    if (e.target.parentElement.id === "next") {
        image++;
    } else {
        image--;
    }
    image = mod(image, 3);
    showImage();
}

function showImage() {
    document.getElementById("screenshot").src = `assets/images/screenshots codenames/${image}.png`;
}