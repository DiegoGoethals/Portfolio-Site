"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    setAge();
}

function setAge() {
    document.getElementById("age").innerText = calculateAge(new Date(2000, 11, 14));
}

function calculateAge(birthday) {
    return new Date(new Date() - birthday).getFullYear() - 1970;
}