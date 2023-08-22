import React from 'react';
import './Resume.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import { resumeWorkInfo, resumeEducationInfo } from './ResumeInfo';
import ResumeCard from '../../Common/ResumeCard/ResumeCard';
import TransitionInWrapper from '../../Common/TransitionInWrapper';

function Resume() {
    return (
        <div id="resume-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Resume' desc='My work and education experience.' light={true} />
                <TransitionInWrapper rootMargin='25' className='resume-button-transition-wrapper'>
                    <a className='button' target="_blank" href={require("../../../assets/files/resume.pdf")} rel="noreferrer">Download Resume</a>
                </TransitionInWrapper>
                <div className='section-main-container'>
                    <div className='work-section'>
                        <TransitionInWrapper rootMargin='25'>
                            <h4>Work</h4>
                        </TransitionInWrapper>
                        {resumeWorkInfo.map((item, i) => {
                            return <ResumeCard place={item.place} positions={item.positions} img={item.img} key={`work${i}`}/>
                        })}
                    </div>
                    <div className='education-section'>
                        <TransitionInWrapper rootMargin='25'>
                            <h4>Education</h4>
                        </TransitionInWrapper>
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