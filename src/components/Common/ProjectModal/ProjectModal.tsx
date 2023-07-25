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
                        <table>
                            <tbody>
                                <tr>
                                    <td><span className='exit-button' onClick={()=>setModalActive(false)}>X</span></td>
                                </tr>
                                <tr>
                                    <td><h1>{project?.title}</h1></td>
                                </tr>
                                <tr>
                                    <td className='project-modal-description'><p>{project?.description ?? ""}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {project?.links && (<div className='project-modal-footer'>
                    <ul>
                        {project.links.map((p, i)=> {
                            return <li><a href={p.url} target='_blank' rel="noreferrer" key={`projectlink${i}`}>{p.name}</a></li>
                        })}
                    </ul>
                </div>)}
            </div>
        </>
    )
}