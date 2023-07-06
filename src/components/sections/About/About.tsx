import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function About() {
    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='Section Description.' light={false} />
            </div>
        </div>
    );
}

export default About;