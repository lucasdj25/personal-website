import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function About() {

    // TODO - Finish About section

    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='This is me.' light={false} />
                <div className='section-main-container rounded-corners'>
                    <div className='introduction'>
                        <div className='picture-div' />
                        <p>Hello, I'm Lucas Johnson! I am a software developer who recently graduated from Grand Valley State University with a Bachelor's degree in Computer science
                            and I'm looking to further grow my technical and soft skills. I am extremely passionate about web development, however I am always eager to learn about new branches of
                            software development whenever possible! Feel free to contact me if you would like to learn more about me.</p>
                    </div>
                    <a className='button' href={"#contact-section"}>Contact me</a>
                </div>
            </div>
        </div>
    );
}

export default About;