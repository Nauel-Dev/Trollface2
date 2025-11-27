import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './ComicSection.css';
import trollfaceTracksuit from '../assets/trollface_tracksuit.png';
import trollfaceCloseup from '../assets/trollface_closeup.png';

export const ComicSection = () => {
    const panelsRef = useRef([]);

    useEffect(() => {
        if (panelsRef.current.length > 0) {
            VanillaTilt.init(panelsRef.current, {
                max: 5,
                speed: 400,
                glare: true,
                "max-glare": 0.2,
            });
        }
    }, []);

    const addToRefs = (el) => {
        if (el && !panelsRef.current.includes(el)) {
            panelsRef.current.push(el);
        }
    };

    return (
        <section className="comic-section">
            <div className="container comic-container">
                <h2 className="comic-title" data-text="DOMINATION PLAN">
                    THE <span className="text-toxic">TAKEOVER</span>
                </h2>

                <div className="comic-grid">
                    <div className="comic-panel" ref={addToRefs}>
                        <div className="speech-bubble">IT BEGINS...</div>
                        <div className="comic-image-container">
                            <img src={trollfaceCloseup} alt="Trollface Planning" className="comic-image" />
                        </div>
                        <div className="comic-caption">
                            PHASE 1: THE AWAKENING
                        </div>
                    </div>

                    <div className="comic-panel" ref={addToRefs}>
                        <div className="comic-image-container">
                            {/* Placeholder for a chart or another meme if available, using closeup zoomed or styled differently for now */}
                            <div style={{ width: '100%', height: '100%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                <h3 className="text-alarm" style={{ fontSize: '3rem', transform: 'rotate(-10deg)' }}>NO SURVIVORS</h3>
                            </div>
                        </div>
                        <div className="comic-caption">
                            PHASE 2: MARKET CHAOS
                        </div>
                    </div>

                    <div className="comic-panel full-width" ref={addToRefs}>
                        <div className="speech-bubble" style={{ left: 'auto', right: '-20px', top: '-30px' }}>SUIT UP. IT'S TIME.</div>
                        <div className="comic-image-container" style={{ height: '600px' }}>
                            <img src={trollfaceTracksuit} alt="Trollface in Tracksuit" className="comic-image" style={{ objectPosition: 'center' }} />
                        </div>
                        <div className="comic-caption">
                            PHASE 3: TOTAL DOMINATION
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
