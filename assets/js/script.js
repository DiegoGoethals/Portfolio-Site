"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    setAge();
    document.querySelectorAll(".certificate").forEach(certificate => {
        certificate.addEventListener("click", openPDF);
    });
    document.getElementById("close").addEventListener("click", off);
}

function setAge() {
    document.getElementById("age").innerText = calculateAge(new Date(2000, 11, 14));
}

function calculateAge(birthday) {
    return new Date(new Date() - birthday).getFullYear() - 1970;
}

function openPDF(e) {
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