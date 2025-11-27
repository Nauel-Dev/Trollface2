import React from 'react';
import './StatsGrid.css';

export const StatsGrid = () => {
    const stats = [
        { label: "WIN RATE", value: "99.9%", color: "var(--accent-red)" },
        { label: "PROFIT FACTOR", value: "∞", color: "var(--accent-glow)" },
        { label: "TOTAL SUPPLY", value: "1B", color: "#fff" },
        { label: "WEAK HANDS", value: "REKT", color: "var(--accent-dark-red)" }
    ];

    return (
        <section className="stats-section">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h3 className="stat-value" style={{ color: stat.color }}>{stat.value}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
