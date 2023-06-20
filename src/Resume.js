import './Resume.css';
import ResumeContent from './ResumeContent';
import { useState, useEffect } from 'react';
import { getDocs, collection } from '@firebase/firestore';
import { firestore } from './firebase/firebase_setup/firebase';

function Resume() {

  const [resume, setResume] = useState([]);

  useEffect(() => {
    getDocs(collection(firestore, "resume")).then((querySnapshot) => {
      let data =  querySnapshot.docs.map((doc) => {
          return doc.data();
      });
      data.sort((a, b) => {
        return a.years - b.years;
      });
      setResume(data);
  });
  }, [])

  return (
    <section id="resume">
        <h1>My Resume</h1>
        <p className="titleText">My entire journey as a software developer</p>
        <ul id="timeline">
            {resume && resume.map(item => {
              return (
                <ResumeContent years={item.years} title={item.title} text={item.text} learned={item.learned} key={Math.random() * 5000}/>
              )
            })}
        </ul>
    </section>
  );
}

export default Resume;