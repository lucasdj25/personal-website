import React from 'react';
import "./ResumeImage.css"

interface ResumeImageProps{
    img?: string
    place: string
}

function ResumeImage({img, place}: ResumeImageProps){
    // TODO - Weird size issue on mobile screens
    return (
        <div className='resume-img'>
            {img && <img src={img} alt={`${place} Logo`} />}
        </div>
    )
}

export default ResumeImage