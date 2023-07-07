import React from 'react';
import './ResumeCard.css';
import { ResumeInfoModel } from '../../../models/ResumeInfoModel';


function ResumeCard({title, startDate, endDate, place, desc, type}: ResumeInfoModel) {

    return (
        <div className='resume-card'>
            <p>{title}</p>
            <p>{`${startDate} - ${endDate}`}</p>
            <p>{place}</p>
            <p>{desc}</p>
        </div>  
    );
}

export default ResumeCard;