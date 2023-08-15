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

  // TODO - checkout out reacts-spring for animations

  // TODO - potentially add Skills Section (blue background)

  // TODO - see if app looks better without section containers (remove color/border/filter)

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
    if (modalActive) {
      document.ontouchmove = function (e) {
        e.preventDefault();
      }
      document.body.style.overflow = "hidden"
    } else {
      document.ontouchmove = function (e) {
        return true;
      }
      document.body.style.removeProperty('overflow')
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
