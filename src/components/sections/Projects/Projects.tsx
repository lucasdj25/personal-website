import React from 'react';
import './Projects.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import ProjectCard from '../../Common/ProjectCard/ProjectCard';
import GridContainer from '../../Common/GridContainer/GridContainer';
import { ProjectModel } from '../../../models/ProjectModel';

interface ProjectsProps {
    setModal(bool: boolean, project: ProjectModel): void;
}

function Projects({setModal}: ProjectsProps) {   
    
    return (
        <div id="projects-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Projects' desc="Here's what I have been working on." light={true} />
                <div className='section-main-container white rounded-corners'>
                    <GridContainer>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                        <ProjectCard project={{title:"Personal Website", image:require("../../../assets/images/projects/personal-website.png"), skills:["React", "Typescript", "CSS"]}} setModal={setModal}/>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}

export default Projects;
