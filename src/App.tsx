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
import Skills from './components/sections/Skills/Skills';
import Footer from './components/sections/Footer/Footer';

function App() {

  const [modalActive, setModalActive] = useState(false)
  const [modalProject, setModalProject] = useState<ProjectModel>()
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 700 ? true : false)

  function handleResize(){
    if(window.innerWidth <= 700){
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
    const htmlStyle = document.querySelector("html")!.style!
    const bodyStyle = document.body.style

    if (modalActive) {
      htmlStyle.removeProperty("overflow-x")
      bodyStyle.removeProperty("overflow-x")
      bodyStyle.overflowY = "hidden"
    } else {
      bodyStyle.removeProperty('overflow')
      htmlStyle.overflowX = "hidden"
      bodyStyle.overflowX = "hidden"
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
        <Skills />
        <Resume />
        <Projects setModal={setModal}/>
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
