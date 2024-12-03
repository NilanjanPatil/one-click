// src/About.js
import React from 'react';

const About = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>About Us</h1>
            <p>This is the About page where you can describe your application.</p>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Back to Home Page
            </a>
        </div>
    );
};

export default About;
