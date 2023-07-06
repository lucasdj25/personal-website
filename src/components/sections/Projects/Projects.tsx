import React from 'react';
import './Projects.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function Projects() {
    return (
        <div id="projects-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Projects' desc='Section Description.' light={true} />
            </div>
        </div>
    );
}

export default Projects;