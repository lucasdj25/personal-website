import React from 'react';
import './App.css';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import NavBar from './components/Navigation/NavBar';

function App() {
 

  return (
    <div className="App">
      <NavBar/>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
