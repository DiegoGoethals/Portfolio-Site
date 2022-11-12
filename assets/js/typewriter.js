"use strict";

class Typewriter {

    constructor() {
        this.index = 0;
        this.words = ["student", "Full Stack Developer"];
        this.word = 0;
        this.typeSpeed = 300;
        this.type();
    }

    type() {
        const txt = this.words[this.word];
        if (this.index < txt.length) {
            document.querySelector("#home > h3").innerHTML += txt.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.typeSpeed);
        } else {
            setTimeout(() => this.erase(), this.typeSpeed);
        }
    }

    erase() {
        const str = document.querySelector("#home > h3").innerHTML;
        if (this.index > 0) {
            document.querySelector("#home > h3").innerHTML = str.slice(0, -1);
            this.index--;
            setTimeout(() => this.erase(), 100);
        } else {
            this.changeWord();
            setTimeout(() => this.type(), this.typeSpeed);
        }
    }

    changeWord() {
        this.word++;
        this.word %= this.words.length;
    }
}