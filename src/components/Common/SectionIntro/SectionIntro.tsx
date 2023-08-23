import React from 'react';
import './SectionIntro.css';
import TransitionInWrapper from '../TransitionInWrapper';

interface SectionIntroProps {
    title: string
    desc?: string
    light: boolean
    titleColor?: string
}

function SectionIntro({title, desc, light, titleColor}: SectionIntroProps){

    return (
        <TransitionInWrapper className={`intro ${light ? 'light-intro' : 'dark-intro'}`} >
            <h3 style={{ color: titleColor}}>{title}</h3>
            <h2>{desc}</h2>
        </TransitionInWrapper>
    )
}

export default SectionIntro