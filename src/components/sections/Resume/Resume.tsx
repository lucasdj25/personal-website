import React from 'react';
import './Resume.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import { resumeWorkInfo, resumeEducationInfo } from './ResumeInfo';
import ResumeCard from '../../Common/ResumeCard/ResumeCard';

// TODO - Try out different Resume section style (Roadmap style where hovering over a particular node displays the description)

function Resume() {
    return (
        <div id="resume-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Resume' desc='My work and education experience.' light={true} />
                <a className='button' target="_blank" href={require("../../../assets/files/resume.pdf")} rel="noreferrer">Download CV</a>
                <div className='section-main-container grey rounded-corners'>
                    <div className='work-section'>
                        <h4>Work</h4>
                        {resumeWorkInfo.map((item, i) => {
                            return <ResumeCard place={item.place} positions={item.positions} img={item.img} key={`work${i}`}/>
                        })}
                    </div>
                    <div className='education-section'>
                        <h4>Education</h4>
                        {resumeEducationInfo.map((item, i) => {
                            return <ResumeCard place={item.place} positions={item.positions} img={item.img} key={`education${i}`}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;