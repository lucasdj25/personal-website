import React from 'react';
import './NoneSelected.css';
import TransitionInWrapper from '../../TransitionInWrapper';

function NoneSelected(){

    return (
        <TransitionInWrapper xTo={50} className='skills-nothing-selected'>
            <h3>Hover over or click a layer of the stack to view my skills for each level</h3>
        </TransitionInWrapper>
    )
}

export default NoneSelected