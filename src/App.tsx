import React from 'react';
import './App.css';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
