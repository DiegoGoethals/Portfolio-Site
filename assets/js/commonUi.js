"use strict";

init();

function init() {
    setHeader();
    setFooter();
}

function setHeader() {
    let nav = "";
    if (document.querySelector("title").innerHTML === "Diego Goethals") {
        nav = `
            <nav>
                <a class="navbutton" type="button" href="#home">Home</a>
                <a class="navbutton" type="button" href="#about">About me</a>
                <a class="navbutton" type="button" href="#resume">Resume</a>
                <a class="navbutton" type="button" href="#projects">Projects</a>
            </nav>`;
    } else {
        nav = `
            <nav>
                <a class="navbutton" type="button" href="index.html#home">Home</a>
                <a class="navbutton" type="button" href="index.html#about">About me</a>
                <a class="navbutton" type="button" href="index.html#resume">Resume</a>
                <a class="navbutton" type="button" href="index.html#projects">Projects</a>
            </nav>
        `;
    }
    document.querySelector("header").insertAdjacentHTML("beforeend", `
        <div>
            <img src="assets/images/Pic_Of_me.jpg" alt="Picture of my face"/>
            <h2>Diego Goethals</h2>
        </div>
        ${nav}
    `);
}

function setFooter() {
    document.querySelector("footer").insertAdjacentHTML("afterbegin", `
        <ul id="contact">
        <li id="email"><a href="mailto:goethalsdiego@gmail.com?SUBJECT=Site">goethalsdiego@gmail.com</a></li>
        <li>
            <ul class="socials">
                <li class="social"><a href="https://github.com/DiegoGoethals" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                <li class="social"><a href="https://www.linkedin.com/in/diego-goethals-9a17aa23a/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </li>
        <li><p>&#169;Copyright 2022, Made by <a href="index.html">Diego Goethals</a></p></li>
    </ul>
    `);
}