"use strict";

init();

function init() {
    setHeader();
}

function setHeader() {
    document.querySelector("header").insertAdjacentHTML("beforeend", `
        <div>
            <img src="assets/images/Pic_Of_me.jpg" alt="Picture of my face"/>
            <h2>Diego Goethals</h2>
        </div>
        <nav>
            <a class="navbutton" type="button" href="#home">Home</a>
            <a class="navbutton" type="button" href="#about">About me</a>
            <a class="navbutton" type="button" href="#projects">Projects</a>
        </nav>
    `);
}