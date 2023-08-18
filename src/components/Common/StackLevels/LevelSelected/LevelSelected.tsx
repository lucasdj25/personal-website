import React from 'react';
import './LevelSelected.css';
import { SkillModel } from '../../../../models/SkillModel';

interface LevelSelectedProps {
    skills: SkillModel[]
    title: string
}

function LevelSelected({skills, title}: LevelSelectedProps){

    return (
        <>
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
        </>
    )
}

export default LevelSelected