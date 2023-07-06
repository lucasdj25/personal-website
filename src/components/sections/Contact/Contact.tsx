import React from 'react';
import './Contact.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div id="contact-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Contact' desc='This is where you can find me.' light={false}/>
                    <div className='logo-container'>
                        <div className='logo'>
                            <a href="https://www.linkedin.com/in/lucasdj25" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faLinkedin} className='contact-icon' />
                                <h4>LinkedIn</h4>
                            </a>
                        </div>
                        <div className='logo'>
                            <a href="https://github.com/lucasdj25" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faGithub} className='contact-icon' />
                                <h4>GitHub</h4>
                            </a>
                        </div>
                        <div className='logo'>
                            <a href="mailto:lucasjmax@gmail.com" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                                <h4>Email me</h4>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;