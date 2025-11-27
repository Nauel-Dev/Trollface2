import React from 'react';
import './RoadmapLite.css';

export const RoadmapLite = () => {
    const phases = [
        { title: "PHASE 1: AWAKENING", desc: "Launch, Community Building, Meme Warfare" },
        { title: "PHASE 2: TAKEOVER", desc: "CEX Listings, Viral Campaigns, Market Chaos" },
        { title: "PHASE 3: DOMINATION", desc: "Total Market Control, Ecosystem Expansion" }
    ];

    return (
        <section className="roadmap-section">
            <h2 className="section-header">THE PLAN</h2>
            <div className="roadmap-container">
                {phases.map((phase, index) => (
                    <div key={index} className="roadmap-item">
                        <div className="roadmap-number">0{index + 1}</div>
                        <div className="roadmap-content">
                            <h3>{phase.title}</h3>
                            <p>{phase.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
