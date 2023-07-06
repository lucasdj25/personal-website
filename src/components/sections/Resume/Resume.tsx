import React from 'react';
import './Resume.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function Resume() {
    return (
        <div id="resume-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Resume' desc='Section Description.' light={true} />
            </div>
        </div>
    );
}

export default Resume;