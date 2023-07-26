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

function App() {
 
  // TODO - Make everything look better on small screen sizes

  // TODO - Update website logos

  const [modalActive, setModalActive] = useState(false)
  const [modalProject, setModalProject] = useState<ProjectModel>()

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
        <NavBar/>
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
