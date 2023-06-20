import "./ProjectDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getDocs, collection } from "@firebase/firestore";
import { firestore } from "./firebase/firebase_setup/firebase";

function mod(a, n) {
    return a - (n * Math.floor(a/n));
}

function ProjectDetails() {

    const name = useParams().project;

    const [project, setProject] = useState(null);
    const [screenshotIndex, setScreenshotIndex] = useState(0);

    const changeImage = (e) => {
        let newIndex;
        if (e.target.parentElement.id === "next") {
            newIndex = screenshotIndex + 1;
        } else {
            newIndex = screenshotIndex - 1;
        }
        setScreenshotIndex(mod(newIndex, project.images.length));
    }

    useEffect(() => {
        getDocs(collection(firestore, "projects")).then((querySnapshot) => {
            let data =  querySnapshot.docs.map((doc) => {
                return doc.data();
            });
            setProject(data.filter(project => project.name === name)[0]);
        });
    }, [name]);

    return (
        <section className="projectDetails">
            {project && <h1>{project.displayName}</h1>}
            {project && project.images.length > 0 && <div id="screenshotWrapper">
                <div id="buttons">
                    <button id="previous" onClick={changeImage}><i className="fa-solid fa-circle-left"></i></button>
                    <button id="next" onClick={changeImage}><i className="fa-solid fa-circle-right"></i></button>
                </div>
                <img src={project.images[screenshotIndex]} alt={`${name} screenshot`} id="screenshot"/>
            </div>}
            <div>
                {project && <p>{project.detailText}</p>}
            </div>
            {project && project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <button>Test out the app here</button>
            </a>}
            <div id="links">
                <h2>Links</h2>
                <ul>
                    {project && project.links.map(link => {
                        return (
                            <li key={link.name}><a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></li>
                        )
                        })
                    }
                </ul>
            </div>
            <div id="skills">
                <h2>Skills used</h2>
                <ul>
                {project && project.technologies.map(skill => {
                    return <li key={skill}>{skill}</li>
                    })
                }                   
                </ul>
            </div>
        </section>
    )
}

export default ProjectDetails;