import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import NavBar from './components/Navigation/NavBar';

function App() {
 


    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const resumeRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const [currentSection, setCurrentSection] = useState("home-section")

    useEffect(()=> {
      const options = {
        root: null,
        rootMargin: "15px",
        threshold:1.0
      }

      const observer = new IntersectionObserver((entries)=>{
        const [entry] = entries
        setCurrentSection(entry.target.getAttribute("id")!)
      }, options)
      if(homeRef.current) observer.observe(homeRef.current)
      if(aboutRef.current) observer.observe(aboutRef.current)
      if(resumeRef.current) observer.observe(resumeRef.current)
      if(projectsRef.current) observer.observe(projectsRef.current)
      if(contactRef.current) observer.observe(contactRef.current)

    },[homeRef, aboutRef, resumeRef, projectsRef, contactRef])

  return (
    <div className="App">
      <NavBar currentSection={currentSection}/>
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Resume resumeRef={resumeRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
