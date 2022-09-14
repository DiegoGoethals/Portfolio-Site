"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("nav").insertAdjacentHTML("beforeend",
        `<a class="navbutton" type="button" href="index.html">Home</a>
        <a class="navbutton" type="button" href="about.html">About me</a>
        <a class="navbutton" type="button" href="projects.html">Projects</a>
        <a href="index.html#contact" class="navbutton">Contact</a>`);
    document.querySelector("header").insertAdjacentHTML("afterbegin", `<h1>Diego Goethals</h1>`);
}