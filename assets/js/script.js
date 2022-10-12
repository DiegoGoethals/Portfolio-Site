"use strict";

init();

function init() {
    setAge();
    document.querySelectorAll(".certificate").forEach(certificate => {
        certificate.addEventListener("click", openImage);
    });
    document.getElementById("close").addEventListener("click", off);
    fadeIn();
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
}

function off() {
    const overlay = document.getElementById("overlay")
    overlay.style.display = "none";
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
