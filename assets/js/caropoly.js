"use strict";

init();

function init() {
    document.getElementById("screenshots").addEventListener("click", showScreenshots);
}

function showScreenshots() {
    if (document.getElementById("images").style.display === "none") {
        document.getElementById("images").style.display = "grid";
        document.getElementById("screenshots").innerHTML = "Hide screenshots";
    } else {
        document.getElementById("images").style.display = "none";
        document.getElementById("screenshots").innerHTML = "Show screenshots";
    }
}