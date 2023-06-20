import './Projects.css';
import Project from './Project';
import { useEffect, useState } from "react";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "./firebase/firebase_setup/firebase";

function Projects({setTypewriter}) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getDocs(collection(firestore, "projects")).then((querySnapshot) => {
            let data =  querySnapshot.docs.map((doc) => {
                return doc.data();
            });
            data.sort((a, b) => {
                return a.made - b.made;
            });
            setProjects(data);
        });
    }, []);

    return (
        <section id="projects">
            <h1>Projects</h1>
            <p className="titleText">Here you can find some projects I have made for school or in my spare time, ordered by the time
            in which I made them during my career, so you can see my evolution in style, efficiency and just my overall evolution
            as a developer.</p>
            <ul>
                {projects.map(project => {
                    return <Project name={project.name} displayName={project.displayName} key={Math.random() * 5000} setTypewriter={setTypewriter}/>
                }
                )}
            </ul>
        </section>
    );
}

export default Projects;