import React, { useState } from 'react';
import './App.css';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import NavBar from './components/Navigation/NavBar';
import { ProjectModel } from './models/ProjectModel';

function App() {
 
  const [modalBackgroundActive, setModalBackgroundActive] = useState(false)
  const [modalProject, setModalProject] = useState<ProjectModel>()

  function setModal(backGroundActive: boolean, project: ProjectModel): void {
    setModalBackgroundActive(backGroundActive)
    setModalProject(project)
  }

  return (
    <div className='App'>
      {modalBackgroundActive && <div className="modal-background" onClick={()=>{setModalBackgroundActive(false)}}></div>}
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
