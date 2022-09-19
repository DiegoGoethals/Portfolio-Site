"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("nav").insertAdjacentHTML("beforeend",
        `<a class="navbutton" type="button" href="#home">Home</a>
        <a class="navbutton" type="button" href="#about">About me</a>
        <a class="navbutton" type="button" href="projects.html">Projects</a>
        <a href="index.html#contact" class="navbutton">Contact</a>`);
    document.querySelector("header").insertAdjacentHTML("afterbegin", `<h2>Diego Goethals</h2>`);
}