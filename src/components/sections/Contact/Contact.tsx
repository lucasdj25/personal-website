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
                <SectionIntro title='Contact' desc='This is where you can find me.' light={true}/>
                <div className='section-main-container-light rounded-corners'>
                    <FontAwesomeIcon icon={faLinkedin} className='contact-icon' />
                    <FontAwesomeIcon icon={faGithub} className='contact-icon' />
                    <FontAwesomeIcon icon={faEnvelope} className='contact-icon' />
                </div>
            </div>
        </div>
    );
}

export default Contact;