import React, { useState, useEffect } from 'react';
import './FloatingBuyButton.css';

export const FloatingBuyButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        setShowModal(true);
        setTimeout(() => {
            window.open('https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5', '_blank');
            setShowModal(false);
        }, 1000);
    };

    return (
        <>
            <button
                className={`floating-buy ${isVisible ? 'visible' : ''}`}
                onClick={handleClick}
            >
                BUY NOW
            </button>

            {showModal && (
                <div className="redirect-modal">
                    <div className="modal-content glass-panel">
                        <div className="modal-icon">💀</div>
                        <p className="modal-text">Redirecting to Jupiter...</p>
                    </div>
                </div>
            )}
        </>
    );
};
