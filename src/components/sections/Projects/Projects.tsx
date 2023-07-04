import React from 'react';
import './Projects.css';

interface ProjectsProps {
    projectsRef: any
}

function Projects({projectsRef}:ProjectsProps) {
    return (
        <div id="projects-section" className="section" ref={projectsRef}>
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;