import React, { useState, useEffect } from 'react';
import trollfaceCloseup from '../assets/trollface_closeup.png';

export const CinematicHero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToChart = () => {
        document.getElementById('chart-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openJupiter = () => {
        window.open('https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=6Fvp7EhQZ9rowiDc212k2ySC4nZEPs2nyfLr8ZoxYJN5', '_blank');
    };

    const parallaxX = mousePosition.x * 20;
    const parallaxY = mousePosition.y * 20;
    const scrollParallax = scrollY * 0.5;

    return (
        <section className="cinematic-hero">
            {/* Animated background layers */}
            <div className="hero-bg-layer layer-1" style={{ transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5 - scrollParallax}px)` }} />
            <div className="hero-bg-layer layer-2" style={{ transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3 - scrollParallax * 0.7}px)` }} />
            <div className="hero-bg-layer layer-3" style={{ transform: `translate(${parallaxX * 0.1}px, ${parallaxY * 0.1 - scrollParallax * 0.5}px)` }} />

            {/* Vignette overlay */}
            <div className="hero-vignette-cinematic" style={{ opacity: isHovered ? 0.8 : 0.4 }} />

            {/* Spotlight effect */}
            <div
                className="spotlight"
                style={{
                    left: `${50 + mousePosition.x * 10}%`,
                    top: `${50 + mousePosition.y * 10}%`,
                }}
            />

            {/* Main content */}
            <div className="hero-content-cinematic" style={{ transform: `translateY(${scrollParallax * -0.3}px)` }}>
                <div
                    className="logo-container-cinematic"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg) scale(${isHovered ? 1.1 : 1})`,
                    }}
                >
                    <div className="logo-glow-ring" />
                    <img src={trollfaceCloseup} alt="Trollface Logo" className="hero-logo-cinematic" />
                    <div className="logo-reflection" />
                </div>

                <div className="title-container">
                    <h1 className="hero-title-cinematic">
                        <span className="title-line line-1" data-text="TROLLFACE2">TROLLFACE2</span>
                        <span className="title-line line-2" data-text="DOMINANCE ISN'T">DOMINANCE ISN'T</span>
                        <span className="title-line line-3" data-text="NEGOTIABLE">NEGOTIABLE</span>
                    </h1>
                    <div className="title-underline" />
                </div>

                <p className="hero-subtitle-cinematic">
                    <span className="subtitle-word">Menacing</span>
                    <span className="subtitle-word">memecoin</span>
                    <span className="subtitle-word">on</span>
                    <span className="subtitle-word text-alarm">Solana</span>
                </p>

                <div className="hero-ctas-cinematic">
                    <button className="btn-primary-cinematic" onClick={openJupiter}>
                        <span className="btn-bg" />
                        <span className="btn-text">UNLEASH THE TROLL</span>
                        <span className="btn-icon">→</span>
                    </button>
                    <button className="btn-secondary-cinematic" onClick={scrollToChart}>
                        <span className="btn-text">VIEW DOMINANCE</span>
                        <span className="btn-icon">↓</span>
                    </button>
                </div>
            </div>

            {/* Floating elements */}
            <div className="floating-elements">
                <div className="float-element element-1" style={{ transform: `translate(${parallaxX * 2}px, ${parallaxY * 2}px)` }}>💀</div>
                <div className="float-element element-2" style={{ transform: `translate(${parallaxX * -1.5}px, ${parallaxY * 1.5}px)` }}>⚡</div>
                <div className="float-element element-3" style={{ transform: `translate(${parallaxX * 1.8}px, ${parallaxY * -1.2}px)` }}>🔥</div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line" />
                <div className="scroll-text">SCROLL TO DOMINATE</div>
            </div>
        </section>
    );
};
