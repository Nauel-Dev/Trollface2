import React, { useState, useRef, useEffect } from 'react';
import trollFaceImg from '../assets/trollface_closeup.png';
import './TrollMaker.css';

export const TrollMaker = () => {
    const [image, setImage] = useState(null);
    const [trollPos, setTrollPos] = useState({ x: 50, y: 50, scale: 1, rotation: 0 });
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => setImage(img);
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas || !image) return;
        const ctx = canvas.getContext('2d');

        // Set canvas size to match image aspect ratio, max width 500
        const maxWidth = 500;
        const scale = maxWidth / image.width;
        canvas.width = maxWidth;
        canvas.height = image.height * scale;

        // Draw User Image
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Draw Trollface
        const troll = new Image();
        troll.src = trollFaceImg;
        troll.onload = () => {
            const trollSize = 100 * trollPos.scale;
            ctx.save();
            ctx.translate(trollPos.x, trollPos.y);
            ctx.rotate((trollPos.rotation * Math.PI) / 180);
            ctx.drawImage(troll, -trollSize / 2, -trollSize / 2, trollSize, trollSize);
            ctx.restore();
        };
    };

    useEffect(() => {
        draw();
    }, [image, trollPos]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'trollified.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="troll-maker-container">
            <h2>TROLL YOUR FRIENDS</h2>
            <p>Upload a pic and add the face of dominance.</p>

            <div className="maker-workspace">
                {!image ? (
                    <div className="upload-zone" onClick={() => fileInputRef.current.click()}>
                        <p>CLICK TO UPLOAD IMAGE</p>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                    </div>
                ) : (
                    <div className="canvas-wrapper">
                        <canvas ref={canvasRef} />
                        <div className="controls">
                            <label>
                                X Position:
                                <input
                                    type="range" min="0" max="500"
                                    value={trollPos.x}
                                    onChange={(e) => setTrollPos({ ...trollPos, x: parseInt(e.target.value) })}
                                />
                            </label>
                            <label>
                                Y Position:
                                <input
                                    type="range" min="0" max="500"
                                    value={trollPos.y}
                                    onChange={(e) => setTrollPos({ ...trollPos, y: parseInt(e.target.value) })}
                                />
                            </label>
                            <label>
                                Size:
                                <input
                                    type="range" min="0.5" max="5" step="0.1"
                                    value={trollPos.scale}
                                    onChange={(e) => setTrollPos({ ...trollPos, scale: parseFloat(e.target.value) })}
                                />
                            </label>
                            <label>
                                Rotate:
                                <input
                                    type="range" min="0" max="360"
                                    value={trollPos.rotation}
                                    onChange={(e) => setTrollPos({ ...trollPos, rotation: parseInt(e.target.value) })}
                                />
                            </label>
                            <div className="action-buttons">
                                <button onClick={() => setImage(null)} className="btn-reset">NEW IMAGE</button>
                                <button onClick={handleDownload} className="btn-download">DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
