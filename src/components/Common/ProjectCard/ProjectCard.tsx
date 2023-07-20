import React from 'react';
import "./ProjectCard.css"

interface ProjectCardProps{
    title: string;
    image: string;
    description?: string;
    skills: string[]
}

function ProjectCard({title, image, description, skills}: ProjectCardProps){

    return (
        <div className='project-card'>
            <img src={image} alt={`${title }Project Card`}/>
            <h4>{title}</h4>
        </div>
    )
}

export default ProjectCard