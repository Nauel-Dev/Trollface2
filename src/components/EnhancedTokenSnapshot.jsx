import React, { useState, useEffect, useRef } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import './EnhancedTokenSnapshot.css';

const CONTRACT_ADDRESS = '6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5';

export const TokenSnapshot = () => {
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [tokenData, setTokenData] = useState({
        price: '—',
        marketCap: '—',
        liquidity: '—'
    });
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const openExplorer = () => {
        window.open(`https://solscan.io/token/${CONTRACT_ADDRESS}`, '_blank');
    };

    return (
        <section id="chart-section" className={`token-snapshot-enhanced ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="section-bg-glow" />

            <div className="container">
                <h2 className="section-title-enhanced">
                    <span className="title-word">LIVE</span>
                    <span className="title-word text-toxic">DOMINANCE</span>
                    <span className="title-word">TRACKER</span>
                </h2>

                <div className="snapshot-grid-enhanced">
                    <div className="chart-embed-enhanced">
                        <div className="chart-frame">
                            <style dangerouslySetInnerHTML={{
                                __html: `
                #dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}
                @media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}
                #dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}
              `}} />
                            <div id="dexscreener-embed">
                                <iframe src="https://dexscreener.com/solana/BiJFxUePx91tzBMxrkp3TVYQEqSLEm2prxwmB9Gfsbi9?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
                            </div>
                        </div>
                        <div className="chart-glow-effect" />
                    </div>

                    <div className="token-card-enhanced glass-panel">
                        <div className="card-glow" />

                        <div className="token-header-enhanced">
                            <h3 className="token-ticker-enhanced">TROLLFACE2</h3>
                            <span className="token-badge-enhanced">SOLANA</span>
                        </div>

                        <div className="contract-section-enhanced">
                            <label>Contract Address</label>
                            <div className="contract-display-enhanced">
                                <code className="contract-address-enhanced">{CONTRACT_ADDRESS}</code>
                                <button
                                    className="icon-btn-enhanced"
                                    onClick={copyToClipboard}
                                    title="Copy to clipboard"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                            {copied && <span className="copy-tooltip-enhanced">Copied!</span>}
                        </div>

                        <div className="stats-grid-enhanced">
                            <div className="stat-item-enhanced">
                                <span className="stat-label">Price</span>
                                <span className="stat-value">{tokenData.price}</span>
                            </div>
                            <div className="stat-item-enhanced">
                                <span className="stat-label">Market Cap</span>
                                <span className="stat-value">{tokenData.marketCap}</span>
                            </div>
                            <div className="stat-item-enhanced">
                                <span className="stat-label">Liquidity</span>
                                <span className="stat-value">{tokenData.liquidity}</span>
                            </div>
                        </div>

                        <button className="btn-explorer-enhanced" onClick={openExplorer}>
                            <span className="btn-glow" />
                            <ExternalLink size={20} />
                            <span>OPEN IN EXPLORER</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
