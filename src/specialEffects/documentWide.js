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

function selectTab() {
    const options = {
        threshold: 0.5
    };
    const navbuttons = Array.from(document.querySelectorAll(".navbutton"));
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.tagName === "SECTION") {
                navbuttons.filter(navbutton => navbutton.href.includes(entry.target.id))[0].classList.add("selected");
            } else {
                navbuttons.filter(navbutton => navbutton.href.includes(entry.target.id))[0].classList.remove("selected");
            }
        });
    }, options);
    const elements = document.querySelectorAll("section");
    elements.forEach(element => observer.observe(element));
}

export {fadeIn, selectTab};