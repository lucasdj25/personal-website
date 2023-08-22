import React from 'react';
import './LevelSelected.css';
import { SkillModel } from '../../../../models/SkillModel';
import TransitionInWrapper from '../../TransitionInWrapper';

interface LevelSelectedProps {
    skills: SkillModel[]
    title: string
}

function LevelSelected({skills, title}: LevelSelectedProps){
    
    // TODO - fire on every hover/click event
    
    return (
        <TransitionInWrapper xTo={50} once={false}>
            <h3>{title}</h3>
            <div className='skills-level-selected'>
                {skills.map((skill, i) => {
                    return (
                        <div className='skill' key={i}>
                            <img src={skill.img} alt={`${skill.skill} Logo`}/>
                            <h4>{skill.skill}</h4>
                        </div>
                    );
                })}
            </div>
        </ TransitionInWrapper>
    )
}

export default LevelSelected