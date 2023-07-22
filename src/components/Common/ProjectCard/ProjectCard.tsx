import React from 'react';
import "./ProjectCard.css"
import { ProjectModel } from '../../../models/ProjectModel';

interface ProjectCardProps{
    project: ProjectModel
    setModal(bool: boolean, project: ProjectModel): void;
}

function ProjectCard({project, setModal}: ProjectCardProps){

    return (
        <div className='project-card' onClick={() => setModal(true, project)}>
            <div className='img-div' style={{backgroundImage: `url(${project.image})`}}/>
            <h4>{project.title}</h4>
        </div>
    )
}

export default ProjectCard