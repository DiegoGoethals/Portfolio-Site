import { useEffect, useState } from "react";
import Home from "./Home";
import {fadeIn} from "./specialEffects/documentWide";
import {selectTab} from "./specialEffects/documentWide";
import TypeWriter from "./specialEffects/TypeWriter";
import About from "./About";
import { off, openImage } from "./specialEffects/About"
import Resume from "./Resume";
import Projects from "./Projects";

function Portfolio() {

    const [typewriter, setTypewriter] = useState(null);

    useEffect(() => {
        fadeIn();
        selectTab();
        if (typewriter === null && document.querySelector("#home")) {
            setTypewriter(new TypeWriter(["student", "full stack developer"]));
        }
        document.querySelectorAll(".certificate").forEach(certificate => certificate.addEventListener("click", openImage));
    
        return () => {
            document.querySelectorAll(".certificate").forEach(certificate => certificate.removeEventListener("click", openImage));
        };
    }, [typewriter]);

    return (
        <div>
            <div id="overlay"><button id="close" onClick={off}>x</button></div>
            <Home/>
            <About/>
            <Resume/>
            <Projects setTypewriter={setTypewriter}/>
        </div>
    );
}

export default Portfolio;