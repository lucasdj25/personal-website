import React from 'react'
import { ProjectModel } from '../../../models/ProjectModel'
import "./ProjectModal.css"

interface ProjectModalProps{
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
    project: ProjectModel | undefined
}

export default function ProjectModal({setModalActive, project}: ProjectModalProps) {
    return (
        <>
            <span className="modal-background" onClick={() => { setModalActive(false) } } />
            <div className='project-modal'>
                <h1>{project?.title}</h1>
            </div>
        </>
    )
}