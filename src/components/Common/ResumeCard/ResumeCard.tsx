import React from 'react';
import './ResumeCard.css';
import { ResumeInfoModel } from '../../../models/ResumeInfoModel';
import ResumeImage from '../ResumeImage/ResumeImage';


function ResumeCard({ place, positions, img }: ResumeInfoModel) {

    return (
        <div className='resume-card'>
            <div className='resume-part-one'>
                <h5>{place}</h5>
                <ResumeImage img={img} place={place}/>
            </div>
            <div className='resume-part-two'>
                {positions.map((position, i) => {
                    return (
                        <div className='position-div' key={`card${i}`}>
                            <h5>{position.title}</h5>
                            <h6>{`${position.startDate} - ${position.endDate}`}</h6>
                            <p>{position.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ResumeCard;