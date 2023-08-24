import React from 'react';
import './Projects.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import ProjectCard from '../../Common/ProjectCard/ProjectCard';
import GridContainer from '../../Common/GridContainer/GridContainer';
import { ProjectModel } from '../../../models/ProjectModel';
import { projectInfo } from './ProjectInfo';
import TransitionInWrapper from '../../Common/TransitionInWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                <p>See all of my projects... </p>
                <TransitionInWrapper rootMargin='1' className='projects-button-transition-wrapper'>
                        <a className='button with-logo' target='_blank' href={"https://github.com/lucasdj25"} rel="noreferrer">GitHub<FontAwesomeIcon icon={faGithub}/></a>
                </TransitionInWrapper>
            </div>
        </div>
    );
}

export default Projects;