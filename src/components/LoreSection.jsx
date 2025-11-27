import trollfaceCloseup from '../assets/trollface_closeup.png';

export const LoreSection = () => {
    return (
        <section className="lore-section">
            <div className="container">
                <h2 className="section-title-lore">
                    <span className="text-alarm">THE LEGEND</span> OF TROLLFACE2
                </h2>

                <div className="lore-content">
                    <div className="lore-text">
                        <p className="lore-paragraph">
                            In the darkest corners of the blockchain, where memes transcend reality and chaos reigns supreme,
                            a legend was born. <span className="highlight">TROLLFACE2</span> emerged not as a mere token,
                            but as a force of nature — an unstoppable entity that feeds on market volatility and thrives on chaos.
                        </p>

                        <p className="lore-paragraph">
                            The original Trollface was but a whisper. TROLLFACE2 is the <span className="text-toxic">SCREAM</span>
                            that echoes across the Solana blockchain. Where others see risk, we see opportunity. Where they see
                            volatility, we see <span className="text-glow">DOMINANCE</span>.
                        </p>

                        <p className="lore-paragraph">
                            Born from the ashes of failed projects and fueled by the tears of paper hands, TROLLFACE2 represents
                            the ultimate evolution of memecoin culture. We don't just moon — we <span className="text-alarm">CONQUER</span>.
                        </p>
                    </div>

                    <div className="lore-image">
                        <img
                            src={trollfaceCloseup}
                            alt="Trollface Legend"
                            className="astronaut-image"
                        />
                        <div className="image-glow" />
                    </div>
                </div>
            </div>
        </section>
    );
};
