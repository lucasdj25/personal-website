import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';

function About() {

    // TODO - Finish About section

    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='This is me.' light={false} />
                <div className='section-main-container dark rounded-corners'>
                    <div className='introduction'>
                        <div className='picture-div' />
                        <p>Hello, I'm Lucas Johnson! I am a software developer who recently graduated from Grand Valley State University with a Bachelor's degree in Computer science
                            and I'm looking to further grow my technical and soft skills. I am extremely passionate about web development, however I am always eager to learn about new branches of 
                            software development whenever possible! Feel free to contact me if you would like to learn more about me.</p>
                    </div>
                    <a className='button' href={"#contact-section"}>Contact me</a>
                    <div className='about-content'>
                        <div className='skills about-content-section'>
                            <h4>SKILLS</h4>
                            <p>
                                Here are some highlights of my technical skills, check out the <a href='#resume-section'>resume</a> and 
                                <a href='#projects-section'> projects</a> sections to see more of my programming skills and experience.
                            </p>
                            
                        </div>
                        <div className='interests about-content-section'>
                            <h4>INTERESTS</h4>
                            <p>
                                These are some of my other programming interests and topics I'm interested in learning about.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;