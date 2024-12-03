// src/Home.js
import React from 'react';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of your React app.</p>
            <a href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go to About Page
            </a>
        </div>
    );
};

export default Home;
