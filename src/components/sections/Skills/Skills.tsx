import React, { useState } from 'react';
import './Skills.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import NoneSelected from '../../Common/StackLevels/NoneSelected/NoneSelected';
import { FrontEndSkills, ToolsSkills, BackEndSkills } from './SkillInfo';
import { SkillModel } from '../../../models/SkillModel';
import LevelSelected from '../../Common/StackLevels/LevelSelected/LevelSelected';

export enum SelectedLevel {
    NONE = 'white',
    TOP = 'top',
    MIDDLE = 'middle',
    BOTTOM = 'bottom',
}

function Skills() {

    const handleClick = ((selectedLevel: SelectedLevel) : void => {
        setSelectedLevel(selectedLevel)
        allowHover && setAllowHover(false)
        switch (selectedLevel){
            case SelectedLevel.TOP:
                setSelectedSkills(FrontEndSkills)
            break
            case SelectedLevel.MIDDLE:
                setSelectedSkills(ToolsSkills)
            break
            case SelectedLevel.BOTTOM:
                setSelectedSkills(BackEndSkills)
            break
        }
    })
    
    const handleHover = ((selectedLevel: SelectedLevel): void=> {
        allowHover && setSelectedLevel(selectedLevel)
        if(allowHover){
            switch (selectedLevel){
                case SelectedLevel.TOP:
                    setSelectedSkills(FrontEndSkills)
                break
                case SelectedLevel.MIDDLE:
                    setSelectedSkills(ToolsSkills)
                break
                case SelectedLevel.BOTTOM:
                    setSelectedSkills(BackEndSkills)
                break
            }
        }
    })

    const getSkillsTitle = ((): string => {
        let rtn = ""
        switch (selectedLevel){
            case SelectedLevel.TOP:
                rtn = "Front End"
            break
            case SelectedLevel.MIDDLE:
                rtn = "Tools"
            break
            case SelectedLevel.BOTTOM:
                rtn = "Back End"
            break
        }
        return rtn
    })

    const [selectedLevel, setSelectedLevel] = useState<SelectedLevel>(SelectedLevel.NONE)
    const [allowHover, setAllowHover] = useState(true)
    const [selectedSkills, setSelectedSkills] = useState<SkillModel[]>([])

    return (
        <div id="skills-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Skills' desc='An overview of my talents.' light={false} titleColor='black'/>
                <div className='section-main-container skills-content'>
                    <div className='stack-flex-wrapper'>
                        <div className='temp'>
                            <div className='stack-wrapper'>
                                <div className='stack-overlay'>
                                    <div className='stack-top' onClick={()=>{handleClick(SelectedLevel.TOP)}} onMouseEnter={()=>{handleHover(SelectedLevel.TOP)}} onMouseLeave={()=>{handleHover(SelectedLevel.NONE)}}></div>
                                    <div className='stack-middle' onClick={()=>{handleClick(SelectedLevel.MIDDLE)}} onMouseEnter={()=>{handleHover(SelectedLevel.MIDDLE)}} onMouseLeave={()=>{handleHover(SelectedLevel.NONE)}}></div>
                                    <div className='stack-bottom' onClick={()=>{handleClick(SelectedLevel.BOTTOM)}} onMouseEnter={()=>{handleHover(SelectedLevel.BOTTOM)}} onMouseLeave={()=>{handleHover(SelectedLevel.NONE)}}></div>
                                </div>
                                <div className='stack-image-wrapper'>
                                    <img src={require(`../../../assets/images/full-stack-images/full-stack-logo-${selectedLevel}.png`)} alt='Full Stack Logo Engineer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='display-skills-container'>
                        {selectedLevel === SelectedLevel.NONE ? <NoneSelected /> : <LevelSelected skills={selectedSkills} title={getSkillsTitle()}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;