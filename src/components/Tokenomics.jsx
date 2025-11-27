import React from 'react';
import './Tokenomics.css';

const TOKENOMICS_DATA = [
    { label: 'Liquidity Pool', percentage: 90, color: '#00ff6a' },
    { label: 'Marketing', percentage: 5, color: '#ffd400' },
    { label: 'Team', percentage: 5, color: '#b30000' },
];

const ROADMAP_PHASES = [
    { phase: 'PHASE 1', title: 'LAUNCH', status: 'complete', items: ['Token deployment', 'Initial liquidity', 'Website launch'] },
    { phase: 'PHASE 2', title: 'GROWTH', status: 'active', items: ['CEX listings', 'Marketing blitz', 'Community raids'] },
    { phase: 'PHASE 3', title: 'DOMINATION', status: 'upcoming', items: ['Major partnerships', 'Ecosystem expansion', 'Total market control'] },
];

export const Tokenomics = () => {
    return (
        <section className="tokenomics">
            <div className="container">
                <h2 className="section-title">
                    <span className="text-alarm">TOKENOMICS</span> & ROADMAP
                </h2>

                <div className="tokenomics-grid">
                    <div className="tokenomics-chart glass-panel">
                        <h3 className="subsection-title">Distribution</h3>
                        <div className="pie-chart">
                            {TOKENOMICS_DATA.map((item, index) => {
                                const rotation = TOKENOMICS_DATA.slice(0, index).reduce((acc, curr) => acc + (curr.percentage * 3.6), 0);
                                return (
                                    <div
                                        key={item.label}
                                        className="pie-segment"
                                        style={{
                                            '--rotation': `${rotation}deg`,
                                            '--percentage': item.percentage,
                                            '--color': item.color,
                                        }}
                                        title={`${item.label}: ${item.percentage}%`}
                                    >
                                        <div className="segment-tooltip">
                                            <strong>{item.label}</strong>
                                            <span>{item.percentage}%</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="legend">
                            {TOKENOMICS_DATA.map(item => (
                                <div key={item.label} className="legend-item">
                                    <span className="legend-color" style={{ backgroundColor: item.color }} />
                                    <span className="legend-label">{item.label}</span>
                                    <span className="legend-value">{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="roadmap glass-panel">
                        <h3 className="subsection-title">Roadmap to Supremacy</h3>
                        <div className="roadmap-timeline">
                            {ROADMAP_PHASES.map((phase, index) => (
                                <div key={phase.phase} className={`roadmap-phase ${phase.status}`}>
                                    <div className="phase-header">
                                        <span className="phase-number">{phase.phase}</span>
                                        <h4 className="phase-title">{phase.title}</h4>
                                        <span className="threat-meter">💀</span>
                                    </div>
                                    <ul className="phase-items">
                                        {phase.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="backtest glass-panel" style={{ gridColumn: '1 / -1', marginTop: '20px', textAlign: 'center' }}>
                        <h3 className="subsection-title text-glow">SIMULATED BACKTEST RESULTS</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <div className="text-secondary">WIN RATE</div>
                                <div className="text-toxic" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>99.9%</div>
                            </div>
                            <div>
                                <div className="text-secondary">PROFIT FACTOR</div>
                                <div className="text-alarm" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>∞</div>
                            </div>
                            <div>
                                <div className="text-secondary">PAPER HANDS REKT</div>
                                <div className="text-glow" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>ALL OF THEM</div>
                            </div>
                        </div>
                        <p className="text-secondary" style={{ marginTop: '15px', fontStyle: 'italic' }}>* Past performance is not indicative of future results, but we are TROLLFACE2.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
