import React from 'react';
import './ResumeCard.css';
import { ResumeInfoModel } from '../../../models/ResumeInfoModel';
import ResumeImage from '../ResumeImage/ResumeImage';
import TransitionInWrapper from '../TransitionInWrapper';


function ResumeCard({ place, positions, img }: ResumeInfoModel) {

    return (
        <div className='resume-card'>
            <TransitionInWrapper xTo={-50} yTo={0} delay={0} className='resume-part-one' rootMargin='25'>  
                <h5>{place}</h5>
                <ResumeImage img={img} place={place}/>
            </TransitionInWrapper>
            <TransitionInWrapper xTo={50} yTo={0} delay={0} className='resume-part-two' rootMargin='25'>
                {positions.map((position, i) => {
                    return (
                        <div className='position-div' key={`card${i}`}>
                            <h5>{position.title}</h5>
                            <h6>{`${position.startDate} - ${position.endDate}`}</h6>
                            <p>{position.desc}</p>
                        </div>
                    )
                })}
            </TransitionInWrapper>
        </div>
    );
}

export default ResumeCard;