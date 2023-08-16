import React from 'react';
import './Skills.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function Skills() {

    return (
        <div id="skills-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Skills' desc='An overview of my talents.' light={false} titleColor='black'/>
                <div className='section-main-container skills-content'>
                    <img src={require("../../../assets/images/fullstacklogo.png")} alt='Full Stack Logo Engineer' />
                </div>
            </div>
        </div>
    );
}

export default Skills;