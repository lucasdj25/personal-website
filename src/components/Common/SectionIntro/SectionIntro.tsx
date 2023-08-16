import React from 'react';
import './SectionIntro.css';

interface SectionIntroProps {
    title: string
    desc?: string
    light: boolean
    titleColor?: string
}

function SectionIntro({title, desc, light, titleColor}: SectionIntroProps){

    return (
        <div className={`intro ${light ? 'light-intro' : 'dark-intro'}`} >
            <h3 style={{ color: titleColor}}>{title}</h3>
            <h2>{desc}</h2>
        </div>
    )
}

export default SectionIntro