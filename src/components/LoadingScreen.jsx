import React, { useState } from 'react';
import './LoadingScreen.css';

export const LoadingScreen = ({ onEnter }) => {
    console.log('LoadingScreen rendering');
    const [isExiting, setIsExiting] = useState(false);

    const handleEnter = () => {
        setIsExiting(true);
        setTimeout(() => {
            onEnter();
        }, 1000); // Wait for exit animation
    };

    return (
        <div className={`loading-screen ${isExiting ? 'exiting' : ''}`}>
            <div className="loading-content">
                <h1 className="warning-title">WARNING</h1>
                <p className="warning-text">
                    THIS WEBSITE CONTAINS FLASHING LIGHTS, HIGH-SPEED TROLLING, AND UNCONTROLLABLE CHAOS.
                </p>
                <p className="warning-sub">
                    VIEWER DISCRETION IS ADVISED.
                </p>
                <button className="enter-btn" onClick={handleEnter}>
                    ENTER THE TROLLVERSE
                </button>
            </div>
        </div>
    );
};
