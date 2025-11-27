import React, { useState, useEffect } from 'react';
import './MemeLayout.css';
import trollFace from '../assets/trollface_closeup.png';
import trollTracksuit from '../assets/trollface_tracksuit.png';
import coin3d from '../assets/coin_3d.png';
import { TrollRain } from './TrollRain';
import { TrollMaker } from './TrollMaker';

const CA = "6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const BUY_LINK = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const COMMUNITY_LINK = "https://x.com/i/communities/1993830723472503135";

export const MemeLayout = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const copyCA = () => {
        navigator.clipboard.writeText(CA);
        alert("COPIED! NOW BUY!");
    };

    return (
        <div className="meme-body">
            <TrollRain />

            {/* Navigation */}
            <nav className="meme-nav">
                <div className="meme-logo">
                    <img src={trollFace} alt="Trollface" className="nav-troll-spin" />
                    <span>TROLLFACE2</span>
                </div>
                <div className="meme-links">
                    <a href="#about">LORE</a>
                    <a href="#tokenomics">STATS</a>
                    <a href="#howtobuy">HOW TO BUY</a>
                    <a href={BUY_LINK} className="buy-btn-nav" target="_blank" rel="noreferrer">BUY NOW</a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="meme-hero">
                <div className="hero-content-meme">
                    <h1 className="glitch-title" data-text="PROBLEM?">PROBLEM?</h1>
                    <p className="hero-sub">THE KING OF MEMES IS BACK.</p>
                    <div className="hero-buttons">
                        <a href={BUY_LINK} target="_blank" rel="noreferrer" className="btn-mega shake-on-hover">
                            BUY $TROLLFACE2
                        </a>
                        <a href={COMMUNITY_LINK} target="_blank" rel="noreferrer" className="btn-community shake-on-hover">
                            JOIN THE CULT
                        </a>
                    </div>
                    <div className="ca-container" onClick={copyCA}>
                        <span className="ca-label">CA:</span>
                        <span className="ca-address">{CA}</span>
                        <span className="copy-emoji">📋</span>
                    </div>
                </div>
                <div className="hero-image-container" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
                    <img src={trollTracksuit} alt="Trollface Boss" className="hero-troll" />
                </div>
            </header>


            {/* Lore Section */}
            <section id="about" className="meme-section white-bg">
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
            <section className="meme-section black-bg">
                <div className="section-container">
                    <h2>LIVE CHART</h2>
                    <div className="chart-frame-meme">
                        <div id="dexscreener-embed">
                            <iframe src="https://dexscreener.com/solana/BiJFxUePx91tzBMxrkp3TVYQEqSLEm2prxwmB9Gfsbi9?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="meme-section green-bg">
                <div className="section-container">
                    <h2>TROLLNOMICS</h2>
                    <div className="stats-meme-grid">
                        <div className="stat-meme-card">
                            <h3>SUPPLY</h3>
                            <p>1 BILLION</p>
                        </div>
                        <div className="stat-meme-card">
                            <h3>TAX</h3>
                            <p>0% / 0%</p>
                        </div>
                        <div className="stat-meme-card">
                            <h3>LIQUIDITY</h3>
                            <p>BURNED 🔥</p>
                        </div>
                        <div className="stat-meme-card">
                            <h3>VIBES</h3>
                            <p>IMMACULATE</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troll Maker */}
            <section id="maker" className="meme-section black-bg">
                <div className="section-container">
                    <TrollMaker />
                </div>
            </section>

            {/* How to Buy */}
            <section id="howtobuy" className="meme-section white-bg">
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
                    <a href={BUY_LINK} target="_blank" rel="noreferrer" className="btn-mega btn-center">
                        LAUNCH JUPITER
                    </a>
                </div>
            </section>

            <footer className="meme-footer">
                <p>TROLLFACE2 © 2025. NO ROADMAP. JUST MEMES.</p>
                <img src={coin3d} alt="Coin" className="footer-coin" />
            </footer>
        </div>
    );
};
