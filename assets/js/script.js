"use strict";

// global variables to make typewriter work as it should
let _i = 0;
const _sentences = ["I'm a student", "I'm a Full Stack Developer"];
let _sentence = 0;

init();

function init() {
    setAge();
    document.querySelectorAll(".certificate").forEach(certificate => {
        certificate.addEventListener("click", openImage);
    });
    document.getElementById("close").addEventListener("click", off);
    fadeIn();
    typeWriter();
}

function setAge() {
    document.getElementById("age").innerText = calculateAge(new Date(2000, 11, 14));
}

function calculateAge(birthday) {
    return new Date(new Date() - birthday).getFullYear() - 1970;
}

function openImage(e) {
    const skill = e.target.innerText;
    const overlay = document.getElementById("overlay");
    overlay.insertAdjacentHTML("beforeend", `
        <img class="imgOverlay"
        src="assets/certificates/${skill}.jpg" alt="${skill} certificate"</img>`);
    overlay.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.marginRight = "17px";
}

function off() {
    const overlay = document.getElementById("overlay")
    overlay.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.marginRight = "0";
    overlay.removeChild(document.querySelector(".imgOverlay"));
}

function fadeIn() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });
    const elements = document.querySelectorAll("section");
    elements.forEach(element => observer.observe(element));
}

function typeWriter() {
    const txt = _sentences[_sentence];
    if (_i < txt.length) {
        document.querySelector("#home > h3").innerHTML += txt.charAt(_i);
        _i++;
        setTimeout(typeWriter, 300);
    } else {
        setTimeout(eraseWriter, 300);
    }
}

function eraseWriter() {
    const str = document.querySelector("#home > h3").innerHTML;
    if (_i > 0) {
        document.querySelector("#home > h3").innerHTML = str.slice(0, -1);
        _i--;
        setTimeout(eraseWriter, 100);
    } else {
        _sentence++;
        _sentence %= _sentences.length;
        setTimeout(typeWriter, 100);
    }
}
