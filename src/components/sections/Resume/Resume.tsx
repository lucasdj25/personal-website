import React from 'react';
import './Resume.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import { resumeWorkInfo, resumeEducationInfo } from './ResumeInfo';
import ResumeCard from '../../Common/ResumeCard/ResumeCard';

function Resume() {
    return (
        <div id="resume-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Resume' desc='My work and education experience.' light={true} />
                <div className='section-main-container grey rounded-corners'>
                    <div className='work-section'>
                        <h4>Work</h4>
                        {resumeWorkInfo.map((item)=> {
                            return <ResumeCard place={item.place} type={item.type} positions={item.positions}/>
                        })}
                    </div>
                    <div className='education-section'>
                        <h4>Education</h4>
                        {resumeEducationInfo.map((item)=> {
                            return <ResumeCard  place={item.place} type={item.type} positions={item.positions}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;