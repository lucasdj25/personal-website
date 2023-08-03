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
                    {/* <div className=''>
                        <div className='picture-div' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default About;