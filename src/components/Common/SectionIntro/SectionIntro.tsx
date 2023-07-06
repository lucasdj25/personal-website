import React from 'react';
import './SectionIntro.css';

interface SectionIntroProps {
    title: string
    desc: string
    light: boolean
}

function SectionIntro({title, desc, light}: SectionIntroProps){

    return (
        <div className={`intro ${light ? 'light-intro' : 'dark-intro'}`} >
            <h3>{title}</h3>
            <h2>{desc}</h2>
        </div>
    )
}

export default SectionIntro