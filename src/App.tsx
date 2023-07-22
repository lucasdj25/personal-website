import React, { useState } from 'react';
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
 
  const [modalActive, setModalActive] = useState(false)
  const [modalProject, setModalProject] = useState<ProjectModel>()

  function setModal(backGroundActive: boolean, project: ProjectModel): void {
    setModalActive(backGroundActive)
    setModalProject(project)
  }

  return (
    <div className='App'>
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
