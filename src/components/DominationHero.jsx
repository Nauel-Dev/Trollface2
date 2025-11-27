import React from 'react';
import './DominationHero.css';
import dominatorImg from '../assets/dominator.png';
import bgGlitch from '../assets/bg_glitch.png';

export const DominationHero = () => {
    return (
        <section className="domination-hero">
            <div className="hero-bg" style={{ backgroundImage: `url(${bgGlitch})` }}></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="dominator-container">
                    <img src={dominatorImg} alt="Trollface Dominator" className="dominator-img" />
                    <div className="eye-glow left"></div>
                    <div className="eye-glow right"></div>
                </div>

                <h1 className="hero-title">
                    <span className="text-outline">TOTAL</span>
                    <span className="text-red">DOMINATION</span>
                </h1>

                <p className="hero-subtitle">THE REIGN OF TROLLFACE2 HAS BEGUN</p>

                <div className="hero-cta">
                    <button className="btn-dominate">JOIN THE LEGION</button>
                    <button className="btn-chart">VIEW CHART</button>
                </div>
            </div>
        </section>
    );
};
