import React from 'react';
import './Contact.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function Contact() {
    return (
        <div id="contact-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Contact' desc='This is where you can find me.' light={false}/>
            </div>
        </div>
    );
}

export default Contact;