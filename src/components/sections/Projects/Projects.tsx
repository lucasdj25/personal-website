import React from 'react';
import './Projects.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import ProjectCard from '../../Common/ProjectCard/ProjectCard';
import GridContainer from '../../Common/GridContainer/GridContainer';
import { ProjectModel } from '../../../models/ProjectModel';
import { projectInfo } from './ProjectInfo';

interface ProjectsProps {
    setModal(bool: boolean, project: ProjectModel): void;
}

function Projects({setModal}: ProjectsProps) {   
    
    return (
        <div id="projects-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Projects' desc="Here's what I have been working on." light={true} />
                <div className='section-main-container'>
                    <GridContainer>
                        {projectInfo.map((project, i) => {
                            return <ProjectCard project={project} setModal={setModal} key={`project${i}`}/>
                        })}
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}

export default Projects;
