import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TransitionInWrapper from '../../Common/TransitionInWrapper';

function Home() {
    return (
        <div id="home-section" className="section">
            <div className='centered'>
                <TransitionInWrapper>
                    <div className='main-home-content'>
                            <h1>Lucas Johnson</h1>
                        <div className='home-spacer-line'/>
                        <ul className='home-logo-list'>
                            <li>
                                <a href="https://www.linkedin.com/in/lucasdj25" target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faLinkedin} className='home-logo'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/lucasdj25" target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faGithub} className='home-logo'/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:lucasjmax@gmail.com" target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faEnvelope} className='home-logo'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </TransitionInWrapper>
            </div>
        </div>
    );
}

export default Home;  