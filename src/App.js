import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Define routes */}
                    <Route path="/" element={<Login />} />
                    
                    {/* This is the NotFound route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
