import React from 'react';
import './PsychoLayout.css';
import trollFace from '../assets/trollface_closeup.png';
import coin3d from '../assets/coin_3d.png';
import { TrollRain } from './TrollRain';
import { TrollMaker } from './TrollMaker';
import { TrollClicker } from './TrollClicker';

const CA = "6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const BUY_LINK = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const COMMUNITY_LINK = "https://x.com/i/communities/1993830723472503135";

export const PsychoLayout = () => {
    const copyCA = () => {
        navigator.clipboard.writeText(CA);
        alert("COPIED! NOW BUY!");
    };

    return (
        <div className="psycho-body">
            <TrollRain />

            {/* Navigation */}
            <nav className="psycho-nav">
                <div className="psycho-logo">
                    <img src={trollFace} alt="Trollface" className="nav-troll-spin" />
                    <span>TROLLFACE2</span>
                </div>
                <div className="psycho-links">
                    <a href="#about">LORE</a>
                    <a href="#tokenomics">STATS</a>
                    <a href="#maker">MAKER</a>
                    <a href={BUY_LINK} className="buy-btn-nav" target="_blank" rel="noreferrer">BUY NOW</a>
                </div>
            </nav>

            {/* Hero Section with Game */}
            <header className="psycho-hero">
                <div className="hero-content-psycho">
                    <h1 className="psycho-title" data-text="TROLLFACE2">TROLLFACE2</h1>
                    <p className="psycho-sub">PLAY THE GAME. BUY THE COIN.</p>

                    <div className="game-wrapper">
                        <TrollClicker />
                    </div>

                    <div className="hero-buttons">
                        <a href={BUY_LINK} target="_blank" rel="noreferrer" className="btn-psycho shake-on-hover">
                            BUY $TROLLFACE2
                        </a>
                        <a href={COMMUNITY_LINK} target="_blank" rel="noreferrer" className="btn-cult shake-on-hover">
                            JOIN THE CULT
                        </a>
                    </div>
                    <div className="ca-container" onClick={copyCA}>
                        <span className="ca-label">CA:</span>
                        <span className="ca-address">{CA}</span>
                        <span className="copy-emoji">📋</span>
                    </div>
                </div>
            </header>

            {/* Lore Section */}
            <section id="about" className="psycho-section">
                <div className="section-container">
                    <h2>THE LORE</h2>
                    <div className="lore-grid">
                        <div className="lore-text-box">
                            <h3>WE ARE SO BACK.</h3>
                            <p>
                                The market has been boring. Too many dogs. Too many cats.
                                It's time for the <strong>OG</strong> to return.
                            </p>
                            <p>
                                Trollface2 isn't just a coin. It's a movement. We are here to
                                <strong>MAKE MEMES GREAT AGAIN</strong>. We are here to bring back the Bull Run.
                                Get in or get rekt. The choice is yours.
                            </p>
                        </div>
                        <div className="lore-img-box">
                            <img src={trollFace} alt="Problem?" className="spin-troll" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chart / Market */}
            <section className="psycho-section">
                <div className="section-container">
                    <h2>LIVE CHART</h2>
                    <div className="chart-frame-psycho">
                        <div id="dexscreener-embed">
                            <iframe src="https://dexscreener.com/solana/BiJFxUePx91tzBMxrkp3TVYQEqSLEm2prxwmB9Gfsbi9?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="psycho-section">
                <div className="section-container">
                    <h2>TROLLNOMICS</h2>
                    <div className="stats-psycho-grid">
                        <div className="stat-psycho-card">
                            <h3>SUPPLY</h3>
                            <p>1 BILLION</p>
                        </div>
                        <div className="stat-psycho-card">
                            <h3>TAX</h3>
                            <p>0% / 0%</p>
                        </div>
                        <div className="stat-psycho-card">
                            <h3>LIQUIDITY</h3>
                            <p>BURNED 🔥</p>
                        </div>
                        <div className="stat-psycho-card">
                            <h3>VIBES</h3>
                            <p>IMMACULATE</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troll Maker */}
            <section id="maker" className="psycho-section">
                <div className="section-container">
                    <TrollMaker />
                </div>
            </section>

            {/* How to Buy */}
            <section id="howtobuy" className="psycho-section">
                <div className="section-container">
                    <h2>HOW TO BUY</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-num">1</div>
                            <h3>GET PHANTOM</h3>
                            <p>Download Phantom Wallet.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-num">2</div>
                            <h3>GET SOL</h3>
                            <p>Buy SOL from an exchange.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-num">3</div>
                            <h3>SWAP ON JUPITER</h3>
                            <p>Use the link below to swap SOL for TROLLFACE2.</p>
                        </div>
                    </div>
                    <a href={BUY_LINK} target="_blank" rel="noreferrer" className="btn-psycho btn-center">
                        LAUNCH JUPITER
                    </a>
                </div>
            </section>

            <footer className="psycho-footer">
                <p>TROLLFACE2 © 2025. NO ROADMAP. JUST MEMES.</p>
                <img src={coin3d} alt="Coin" className="footer-coin" />
            </footer>
        </div>
    );
};
