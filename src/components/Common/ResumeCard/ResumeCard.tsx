import React from 'react';
import './ResumeCard.css';
import { ResumeInfoModel } from '../../../models/ResumeInfoModel';


function ResumeCard({place, type, positions}: ResumeInfoModel) {

    return (
        <div className='resume-card'>
            <div className='resume-part-one'>
                <p>{place}</p>
            </div>
            <div className='resume-part-two'>
                {positions.map((position)=> {
                    return (
                        <><p>{position.title}</p>
                        <p>{`${position.startDate} - ${position.endDate}`}</p>
                        <p>{position.desc}</p></>
                    )
                })}
            </div>
        </div>  
    );
}

export default ResumeCard;