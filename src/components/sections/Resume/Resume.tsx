import React from 'react';
import './Resume.css';

interface ResumeProps {
    resumeRef: any
}

function Resume({resumeRef}:ResumeProps) {
    return (
        <div id="resume-section" className="section" ref={resumeRef}>
            <h1>Resume</h1>
        </div>
    );
}

export default Resume;