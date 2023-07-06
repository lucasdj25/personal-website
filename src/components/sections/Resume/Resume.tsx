import React from 'react';
import './Resume.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function Resume() {
    return (
        <div id="resume-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Resume' desc='My work and education experience.' light={true} />
                <div className='section-main-container grey rounded-corners'>
                    
                </div>
            </div>
        </div>
    );
}

export default Resume;