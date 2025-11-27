import React, { useEffect, useRef, useState } from 'react';
import trollFaceImg from '../assets/trollface_closeup.png';
import './TrollClicker.css';

export const TrollClicker = () => {
    const canvasRef = useRef(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Use refs for game state to avoid closure staleness without re-running effects
    const gameState = useRef({
        bird: { x: 50, y: 150, velocity: 0, gravity: 0.4, jump: -8, size: 40 },
        pipes: [],
        frameCount: 0,
        score: 0,
        isRunning: false,
        gameStarted: false,
        highScore: 0
    });

    useEffect(() => {
        // Load high score
        const savedHigh = localStorage.getItem('trollHighScore');
        if (savedHigh) {
            const parsed = parseInt(savedHigh);
            setHighScore(parsed);
            gameState.current.highScore = parsed;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const troll = new Image();
        troll.src = trollFaceImg;

        const resize = () => {
            if (canvas && canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = 400;
            }
        };
        window.addEventListener('resize', resize);
        resize();

        const resetGame = () => {
            gameState.current.bird = { x: 50, y: canvas.height / 2, velocity: 0, gravity: 0.4, jump: -8, size: 40 };
            gameState.current.pipes = [];
            gameState.current.frameCount = 0;
            gameState.current.score = 0;
            gameState.current.isRunning = true;
            gameState.current.gameStarted = true;

            setScore(0);
            setGameOver(false);

            animate();
        };

        const jump = () => {
            if (gameOver) {
                resetGame();
                return;
            }
            if (!gameState.current.gameStarted) {
                resetGame();
                return;
            }
            gameState.current.bird.velocity = gameState.current.bird.jump;
        };

        // Input handling
        const handleInput = (e) => {
            e.preventDefault();
            e.stopPropagation();
            jump();
        };

        const container = canvas.parentElement;
        if (container) {
            container.addEventListener('mousedown', handleInput);
            container.addEventListener('touchstart', handleInput);
        }

        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        const animate = () => {
            if (!gameState.current.isRunning) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const state = gameState.current;

            // Bird Physics
            state.bird.velocity += state.bird.gravity;
            state.bird.y += state.bird.velocity;

            // Draw Bird
            if (troll.complete) {
                ctx.drawImage(troll, state.bird.x, state.bird.y, state.bird.size, state.bird.size);
            } else {
                ctx.fillStyle = 'white';
                ctx.fillRect(state.bird.x, state.bird.y, state.bird.size, state.bird.size);
            }

            // Pipe Logic
            if (state.frameCount % 150 === 0) {
                const gap = 200;
                const pipeWidth = 60;
                const minHeight = 50;
                const pipeHeight = Math.random() * (canvas.height - gap - minHeight * 2) + minHeight;

                state.pipes.push({
                    x: canvas.width,
                    topHeight: pipeHeight,
                    bottomY: pipeHeight + gap,
                    width: pipeWidth,
                    passed: false
                });
            }

            state.pipes.forEach((pipe, index) => {
                pipe.x -= 2;

                // Draw Pipes
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
                ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, canvas.height - pipe.bottomY);

                // Collision
                const hitboxPadding = 8;
                if (
                    state.bird.x + hitboxPadding < pipe.x + pipe.width &&
                    state.bird.x + state.bird.size - hitboxPadding > pipe.x &&
                    (state.bird.y + hitboxPadding < pipe.topHeight || state.bird.y + state.bird.size - hitboxPadding > pipe.bottomY)
                ) {
                    state.isRunning = false;
                    setGameOver(true);

                    if (state.score > state.highScore) {
                        state.highScore = state.score;
                        setHighScore(state.score);
                        localStorage.setItem('trollHighScore', state.score);
                    }
                }

                // Score
                if (pipe.x + pipe.width < state.bird.x && !pipe.passed) {
                    state.score++;
                    setScore(state.score);
                    pipe.passed = true;
                }

                // Remove off-screen
                if (pipe.x + pipe.width < 0) {
                    state.pipes.splice(index, 1);
                }
            });

            // Floor/Ceiling
            if (state.bird.y + state.bird.size > canvas.height || state.bird.y < 0) {
                state.isRunning = false;
                setGameOver(true);
                if (state.score > state.highScore) {
                    state.highScore = state.score;
                    setHighScore(state.score);
                    localStorage.setItem('trollHighScore', state.score);
                }
            }

            state.frameCount++;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initial Draw
        const drawStartScreen = () => {
            ctx.fillStyle = '#ffffff';
            ctx.font = '30px Impact';
            ctx.textAlign = 'center';
            ctx.fillText("CLICK TO START", canvas.width / 2, canvas.height / 2);
        };

        if (troll.complete) {
            drawStartScreen();
        } else {
            troll.onload = drawStartScreen;
        }

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('keydown', handleKeyDown);
            if (container) {
                container.removeEventListener('mousedown', handleInput);
                container.removeEventListener('touchstart', handleInput);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="game-container">
            <canvas ref={canvasRef} className="game-canvas" />
            <div className="game-ui">
                <div className="score-board">
                    <div className="score">SCORE: {score}</div>
                    <div className="high-score">HIGH: {highScore}</div>
                </div>
                {gameOver && (
                    <div className="game-over-container">
                        <div className="game-over">GAME OVER</div>
                        <div className="restart-text">CLICK TO RESTART</div>
                    </div>
                )}
            </div>
        </div>
    );
};
