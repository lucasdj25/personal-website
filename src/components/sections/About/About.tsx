import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function About() {

    // TODO - Add the About section

    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='This is me.' light={false} />
                <div className='section-main-container dark rounded-corners'>
                    {/* <div className='picture-div' /> */}
                </div>
            </div>
        </div>
    );
}

export default About;