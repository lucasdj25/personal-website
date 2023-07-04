import React from 'react';
import './About.css';

interface AboutProps {
    aboutRef: any
}

function About({aboutRef}:AboutProps) {
    return (
        <div id="about-section" className="section" ref={aboutRef}>
            <h1>About</h1>
        </div>
    );
}

export default About;