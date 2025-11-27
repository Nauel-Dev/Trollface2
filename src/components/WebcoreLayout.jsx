import React from 'react';
import './WebcoreLayout.css';
import headerImg from '../assets/header.png';
import frameImg from '../assets/frame.png';
import webcoreBg from '../assets/webcore_bg.png';
import dominatorImg from '../assets/dominator.png';

const CA = "6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const BUY_LINK = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5";
const COMMUNITY_LINK = "https://x.com/i/communities/1993830723472503135";

export const WebcoreLayout = () => {
    const copyCA = () => {
        navigator.clipboard.writeText(CA);
        alert("CA COPIED: " + CA);
    };

    return (
        <div className="webcore-body" style={{ backgroundImage: `url(${webcoreBg})` }}>
            <div className="main-container">
                {/* Header Section */}
                <header className="site-header">
                    <img src={headerImg} alt="Trollface Domination" className="header-banner" />
                    <nav className="retro-nav">
                        <a href="#home">HOME</a>
                        <a href="#chart">CHART</a>
                        <a href={BUY_LINK} target="_blank" rel="noreferrer" className="blink">BUY NOW</a>
                        <a href={COMMUNITY_LINK} target="_blank" rel="noreferrer">COMMUNITY</a>
                    </nav>
                </header>

                {/* Main Content Area */}
                <main className="content-area">
                    <div className="content-frame-border">
                        <div className="content-inner">

                            {/* Hero / Intro */}
                            <section id="home" className="intro-section">
                                <div className="marquee-container">
                                    <div className="marquee-text">
                                        DOMINANCE IS IMMINENT +++ TROLLFACE2 TAKEOVER +++ NO SURVIVORS +++ BUY OR CRY +++
                                    </div>
                                </div>

                                <div className="hero-split">
                                    <div className="hero-text">
                                        <h1>WELCOME TO THE <span className="red-glow">ENDGAME</span></h1>
                                        <p>The old memes are dead. Long live the King.</p>
                                        <div className="ca-box" onClick={copyCA}>
                                            <span className="ca-label">CA:</span>
                                            <span className="ca-text">{CA}</span>
                                            <span className="copy-icon">📋</span>
                                        </div>
                                    </div>
                                    <div className="hero-img-box">
                                        <img src={dominatorImg} alt="The Dominator" />
                                    </div>
                                </div>
                            </section>

                            {/* Lore Section */}
                            <section className="lore-section">
                                <div className="lore-header">CLASSIFIED: OPERATION BULLRUN</div>
                                <div className="lore-text">
                                    <p>
                                        The meme games have grown stale. The charts are bleeding. The world waits for a savior.
                                    </p>
                                    <p>
                                        <span className="highlight">TROLLFACE2</span> is not just a coin. It is a reckoning.
                                        We plan on rising from the ashes of dead memes to
                                        <span className="highlight">TAKE OVER</span> the entire ecosystem.
                                    </p>
                                    <p>
                                        They said the Bull Run was over. They were wrong.
                                        <strong>TROLLFACE2 WILL BRING BACK THE BULL RUN.</strong>
                                        Dominance is not just a goal; it is our destiny.
                                    </p>
                                </div>
                            </section>

                            {/* Chart Section */}
                            <section id="chart" className="chart-section">
                                <h2>LIVE MARKET DATA</h2>
                                <div className="chart-wrapper">
                                    <div id="dexscreener-embed">
                                        <iframe src="https://dexscreener.com/solana/BiJFxUePx91tzBMxrkp3TVYQEqSLEm2prxwmB9Gfsbi9?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
                                    </div>
                                </div>
                            </section>

                            {/* Community / Links */}
                            <section className="links-section">
                                <a href={COMMUNITY_LINK} target="_blank" rel="noreferrer" className="retro-btn community-btn">
                                    JOIN THE CULT (X COMMUNITY)
                                </a>
                                <a href={BUY_LINK} target="_blank" rel="noreferrer" className="retro-btn buy-btn">
                                    INITIATE BUY SEQUENCE (JUPITER)
                                </a>
                            </section>

                        </div>
                    </div>
                </main>

                <footer className="site-footer">
                    <p>© 2025 TROLLFACE2 DOMINATION CORP. ALL RIGHTS RESERVED.</p>
                    <div className="footer-stamps">
                        {/* Placeholder for stamps/badges if needed */}
                        <span>[NO RUGS]</span>
                        <span>[100% HATE]</span>
                        <span>[PURE CHAOS]</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};
