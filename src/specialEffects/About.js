function calculateAge(birthday) {
    return new Date(new Date() - birthday).getFullYear() - 1970;
}

function openImage(e) {
    const skill = e.target.innerText;
    const overlay = document.getElementById("overlay");
    overlay.insertAdjacentHTML("beforeend", `
        <img id="imgOverlay"
        src="/certificates/${skill}.jpg" alt="${skill} certificate"</img>`);
    overlay.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.marginRight = "17px";
}

function off() {
    const overlay = document.getElementById("overlay")
    try {
        overlay.removeChild(document.querySelector("#imgOverlay"));
    } catch (error) {
        console.log(error);
    }
    overlay.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.marginRight = "0";
}

export {calculateAge, openImage, off};