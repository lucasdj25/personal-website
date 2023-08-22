import React from 'react';
import './About.css';
import SectionIntro from '../../Common/SectionIntro/SectionIntro';
import TransitionInWrapper from '../../Common/TransitionInWrapper';

function About() {

    return (
        <div id="about-section" className="section content-section">
            <div className='centered'>
                <SectionIntro title='About' desc='This is me.' light={false} />
                <div className='section-main-container'>
                    <div className='introduction'>
                        <TransitionInWrapper delay={200} xTo={-50}>
                            <div className='picture-div' />
                        </TransitionInWrapper>
                        <TransitionInWrapper className='intro-paragraph' delay={400} xTo={50}>
                            <p>Hello, I'm Lucas Johnson! I am a software developer who recently graduated from Grand Valley State University with a Bachelor's degree in Computer science
                                and I'm looking to further grow my technical and soft skills. I am extremely passionate about web development, however I am always eager to learn about new branches of
                                software development whenever possible! Feel free to contact me if you would like to learn more about me.</p>
                        </TransitionInWrapper>
                    </div>
                    <TransitionInWrapper yTo={50} delay={600} rootMargin='1'>
                        <a className='button' href={"#contact-section"}>Contact me</a>
                    </TransitionInWrapper>
                </div>
            </div>
        </div>
    );
}

export default About;