"use strict";

init();

function init() {
    setAge();
    document.querySelectorAll(".certificate").forEach(certificate => {
        certificate.addEventListener("click", openImage);
    });
    document.getElementById("close").addEventListener("click", off);
    document.querySelectorAll("#projects li").forEach(li => {
        li.addEventListener("mouseover", projectsEffect);
        li.addEventListener("mouseout", noProjectsEffect);
    });
    fadeIn();
    const typeWriter = new Typewriter(["student", "Full Stack Developer"]);
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
    try {
        overlay.removeChild(document.querySelector(".imgOverlay"));
    } catch (error) {}
    overlay.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.marginRight = "0";
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

function projectsEffect(e) {
    const project = e.target.parentElement;
    const img = project.firstElementChild;
    const h3 = project.lastElementChild;
    img.style.opacity = "1";
    h3.style.opacity = "0";
}

function noProjectsEffect(e) {
    const project = e.target.parentElement;
    const img = project.firstElementChild;
    const h3 = project.lastElementChild;
    img.style.opacity = "0.1";
    h3.style.opacity = "1";
}
