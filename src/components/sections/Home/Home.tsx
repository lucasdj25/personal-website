import React from 'react';
import './Home.css';

interface HomeProps {
    homeRef: any
}

function Home({homeRef}:HomeProps) {
    return (
        <div id="home-section" className="section" ref={homeRef}>
            <h1>Home</h1>
        </div>
    );
}

export default Home;