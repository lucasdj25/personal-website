import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import NavBar from './components/Navigation/NavBar';
import { ProjectModel } from './models/ProjectModel';
import ProjectModal from './components/Common/ProjectModal/ProjectModal';
import MobileNavigationBar from './components/Navigation/MobileNavigationBar';

function App() {

  const [modalActive, setModalActive] = useState(false)
  const [modalProject, setModalProject] = useState<ProjectModel>()
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 630 ? true : false)

  function handleResize(){
    if(window.innerWidth <= 630){
        setSmallScreen(true)
    }else{
        setSmallScreen(false)
    }
}

  useEffect(()=> {
      window.addEventListener("resize", handleResize)

      return () => {
          window.removeEventListener("resize", handleResize)
      }
  }, [])

  useEffect(()=> {
    const body = document.querySelector("body");
    if (modalActive) {
      if(body) body.style.overflow = "hidden";
    } else {
      if(body) body.style.overflow = "auto";
    }
  }, [modalActive])

  function setModal(backGroundActive: boolean, project: ProjectModel): void {
    setModalActive(backGroundActive)
    setModalProject(project)
  }

  return (
    <div className={`App`} >
        {modalActive && <ProjectModal setModalActive={setModalActive} project={modalProject}/>}
        {smallScreen ? <MobileNavigationBar/> :<NavBar/>}
        <Home />
        <About />
        <Resume />
        <Projects setModal={setModal}/>
        <Contact />
        <footer className='footer'></footer>
      </div>
  );
}

export default App;
