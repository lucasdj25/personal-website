import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { animated, useSpring } from '@react-spring/web';

function Home() {

    const [startTransition, setStartTransition] = useState(false)

    useEffect(()=> {
        setStartTransition(true)
    }, [])

    const headerRef = useRef(null)
    const linksRef = useRef(null)

    const headerProps = useSpring({
        opacity: startTransition ? 1 : 0,
        x: startTransition ? 0 : 50,
        y: startTransition ? 0 : 0,
        config: { tension: 280, friction: 120 },
        delay: 800,
    });

    const linksProps = useSpring({
        opacity: startTransition ? 1 : 0,
        x: startTransition ? 0 : 50,
        y: startTransition ? 0 : 0,
        config: { tension: 280, friction: 120 },
        delay: 1200,
    });


    return (
        <div id="home-section" className="section">
            <div className='centered'>
                    <div className='main-home-content'>
                        <animated.div ref={headerRef} style={headerProps}>
                            <h1>Lucas Johnson</h1>
                            <div className='home-spacer-line'/>
                        </animated.div>
                        <animated.div ref={linksRef} style={linksProps}>
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
                        </animated.div>
                    </div>
            </div>
        </div>
    );
}

export default Home;  