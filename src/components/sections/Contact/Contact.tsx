import React from 'react';
import './Contact.css';

interface ContactProps {
    contactRef: any
}

function Contact({contactRef}:ContactProps) {
    return (
        <div id="contact-section" className="section" ref={contactRef}>
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;