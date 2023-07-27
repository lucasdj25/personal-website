import React, { useEffect, useState } from 'react'
import { ProjectModel } from '../../../models/ProjectModel'
import "./ProjectModal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

interface ProjectModalProps{
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
    project: ProjectModel | undefined
}

export default function ProjectModal({setModalActive, project}: ProjectModalProps) {

    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 1000 ? true : false)

    function handleResize(){
        if(window.innerWidth <= 1000){
            setSmallScreen(true)
        }else{
            setSmallScreen(false)
        }
    }

    useEffect(()=> {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
        
    return (
        <>
            <span className="modal-background" onClick={() => { setModalActive(false) } } />
            <div className='project-modal'>
                <div className='project-modal-grid-container'>
                    <div className='modal-image' style={{backgroundImage: `url(${project?.image})`}}></div>
                    <div className='modal-content'>
                        <table>
                            <tbody>
                                {!smallScreen && (
                                    <tr>
                                        <td><span className='exit-button' onClick={()=>setModalActive(false)}>X</span></td>
                                    </tr>
                                )}
                                <tr className='space-under'>
                                    <td><h1>{project?.title}</h1></td>
                                </tr>
                                <tr>
                                    <td className='project-modal-description'><p>{project?.description ?? ""}</p></td>
                                </tr>
                                {(project && project.skills.length > 0) && (
                                    <tr className='space-above '>
                                        <td className='project-modal-skills'>
                                            <FontAwesomeIcon icon={faTag} className='tag-icon' />    
                                            {project.skills.reduce((skillString, skill)=> {
                                                return `${skillString}, ${skill}`
                                            })}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {(project?.links || smallScreen) && (<div className='project-modal-footer'>
                    <ul >
                        {project?.links && project.links.map((p, i)=> {
                            return <li key={`projectlink${i}`}><a href={p.url} className='footer-button' target='_blank' rel="noreferrer">{p.name}</a></li>
                        })}
                        {smallScreen && <li className='footer-button' onClick={()=>setModalActive(false)}>Close</li>}
                    </ul>
                </div>)}
            </div>
        </>
    )
}