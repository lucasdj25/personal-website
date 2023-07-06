import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function About() {

    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='This is me.' light={false} />
                <div className='about-content rounded-corners'>
                    
                </div>
            </div>
        </div>
    );
}

export default About;