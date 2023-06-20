import './About.css';
import {calculateAge} from "./specialEffects/About";

function About() {

    const age = calculateAge(new Date(2000, 11, 14));
    const programmingYears = calculateAge(new Date(2019, 8, 1));

    return (
        <section id="about">
            <h1>About Me</h1>
            <p className="titleText">Here you can find a bit of info about myself and see what skills I already learned.<br/>
            I have gotten a certificate for some of my skills on <a href="https://www.codecademy.com/learn" target="_blank" rel='noreferrer'>Codecademy</a>.
                To see those certificates you can click some skills.</p>
            <div id="info">
            <div id="me">
                <h2>A bit about myself</h2>
                <p>My name is Diego Goethals, I'm a {age}-year-old <b>student in Computer Science</b> at Howest Brugge in Belgium. I am doing
                    a lot of everything when it comes to programming, so you could say I am a real <b>Full Stack Developer</b>.
                    I started this study because I am very interested in computers and programming and everything that comes with it.
                    I have been studying computer science for {programmingYears} years now, so I would say I have some experience now. <b>I am always
                        open to learn new things.</b> To see what projects I made in the past, click the <b>Projects</b> button in the top bar to get a
                    link to my GitHub and links to some of my projects to experience them by yourself. If you wish to contact me
                    scroll down to get my contact credentials.</p>
            </div>
            <div id="skills">
                <h2>My Skills</h2>
                <ul id="skillCards">
                    <li className="skill certificate">HTML</li>
                    <li className="skill certificate">CSS</li>
                    <li className="skill certificate">JavaScript</li>
                    <li className="skill certificate">Java</li>
                    <li className="skill">JavaFX</li>
                    <li className="skill">Python</li>
                    <li className="skill">PHP</li>
                    <li className="skill">MySQL</li>
                    <li className="skill">PostgreSQL</li>
                    <li className="skill">GIT</li>
                    <li className="skill">GitHub</li>
                    <li className="skill certificate">CLI</li>
                    <li className="skill">Laravel</li>
                    <li className="skill certificate">React</li>
                    <li className="skill certificate">Redux</li>
                    <li className="skill certificate">Express</li>
                    <li className="skill">Angular</li>
                    <li className="skill">Firebase</li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default About;