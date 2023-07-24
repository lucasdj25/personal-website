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
                <div className='project-modal-grid-container'>
                    <div className='modal-image' style={{backgroundImage: `url(${project?.image})`}}></div>
                    <div className='modal-content'>
                        <span className='exit-button' onClick={()=>setModalActive(false)}>X</span>
                        <h1>{project?.title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}