import React from 'react';
import './Footer.css';

const CONTRACT_ADDRESS = '6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4 className="footer-title">TROLLFACE2</h4>
                        <p className="footer-description">
                            Menacing memecoin on Solana.<br />
                            Dominance isn't negotiable.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contract</h4>
                        <code className="footer-contract">{CONTRACT_ADDRESS}</code>
                        <div className="footer-links">
                            <a
                                href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Solscan
                            </a>
                            <a
                                href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-link"
                            >
                                Dexscreener
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 TROLLFACE2. All rights reserved.</p>
                    <p className="footer-warning">Fear the grin.</p>
                </div>
            </div>
        </footer>
    );
};
