import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


function Footer(){
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/lucasdj25" target='_blank' rel='noreferrer' className="footer-logo">
                <FontAwesomeIcon icon={faLinkedin} className='contact-icon' />
            </a>
            <a href="https://github.com/lucasdj25" target='_blank' rel='noreferrer' className="footer-logo">
                <FontAwesomeIcon icon={faGithub} className='contact-icon' />
            </a>
            <a href="mailto:lucasjmax@gmail.com" target='_blank' rel='noreferrer' className="footer-logo"> 
                 <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
            </a>
        </div>
    )
}

export default Footer