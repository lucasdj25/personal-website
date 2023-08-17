import React, { useState } from 'react';
import './Skills.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import NoneSelected from '../../Common/StackLevels/NoneSelected/NoneSelected';

enum SelectedLevel {
    NONE = 'white',
    TOP = 'top',
    MIDDLE = 'middle',
    BOTTOM = 'bottom',
}

function Skills() {

    const handleClick = ((selectedLevel: SelectedLevel) : void => {
        setSelectedLevel(selectedLevel)
        allowHover && setAllowHover(false)
    })

    const [selectedLevel, setSelectedLevel] = useState<SelectedLevel>(SelectedLevel.NONE)
    const [allowHover, setAllowHover] = useState(true)

    return (
        <div id="skills-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='Skills' desc='An overview of my talents.' light={false} titleColor='black'/>
                <div className='section-main-container skills-content'>
                    <div className='stack-flex-wrapper'>
                        <div className='temp'>
                            <div className='stack-wrapper'>
                                <div className='stack-overlay'>
                                    <div className='stack-top' onClick={()=>{handleClick(SelectedLevel.TOP)}} onMouseEnter={()=>{allowHover && setSelectedLevel(SelectedLevel.TOP)}}></div>
                                    <div className='stack-middle' onClick={()=>{handleClick(SelectedLevel.MIDDLE)}} onMouseEnter={()=>{allowHover && setSelectedLevel(SelectedLevel.MIDDLE)}}></div>
                                    <div className='stack-bottom' onClick={()=>{handleClick(SelectedLevel.BOTTOM)}} onMouseEnter={()=>{allowHover && setSelectedLevel(SelectedLevel.BOTTOM)}}></div>
                                </div>
                                <div className='stack-image-wrapper'>
                                    <img src={require(`../../../assets/images/full-stack-images/full-stack-logo-${selectedLevel}.png`)} alt='Full Stack Logo Engineer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='display-skills-container'>
                        {selectedLevel === SelectedLevel.NONE ? <NoneSelected /> : <p>{selectedLevel}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;