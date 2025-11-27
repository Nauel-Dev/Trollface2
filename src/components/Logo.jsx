import React from 'react';

export const Logo = ({ className = "w-32 h-32" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Distorted Face Shape */}
    <path 
      d="M10,50 Q20,10 50,10 Q80,10 90,50 Q80,90 50,90 Q20,90 10,50 Z" 
      fill="#0f1112" 
      stroke="#ffffff" 
      strokeWidth="2"
    />
    
    {/* Eyes */}
    <path d="M25,40 Q35,30 45,40" stroke="#ffffff" strokeWidth="3" fill="none" />
    <circle cx="35" cy="45" r="3" fill="#b30000" filter="url(#glow)">
      <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
    </circle>
    
    <path d="M55,40 Q65,30 75,40" stroke="#ffffff" strokeWidth="3" fill="none" />
    <circle cx="65" cy="45" r="4" fill="#00ff6a" filter="url(#glow)">
      <animate attributeName="r" values="4;5;4" dur="0.2s" repeatCount="indefinite" />
    </circle>
    
    {/* Grin */}
    <path 
      d="M20,60 Q50,90 80,60" 
      stroke="#ffffff" 
      strokeWidth="3" 
      fill="none"
    >
      <animate attributeName="d" values="M20,60 Q50,90 80,60;M20,62 Q50,92 80,62;M20,60 Q50,90 80,60" dur="0.15s" repeatCount="indefinite" />
    </path>
    
    {/* Teeth */}
    <path d="M30,65 L30,75" stroke="#ffffff" strokeWidth="2" />
    <path d="M40,70 L40,80" stroke="#ffffff" strokeWidth="2" />
    <path d="M50,72 L50,82" stroke="#ffffff" strokeWidth="2" />
    <path d="M60,70 L60,80" stroke="#ffffff" strokeWidth="2" />
    <path d="M70,65 L70,75" stroke="#ffffff" strokeWidth="2" />
    
    {/* Glitch Lines */}
    <line x1="0" y1="20" x2="100" y2="20" stroke="#00ff6a" strokeWidth="0.5" opacity="0.5">
      <animate attributeName="x1" values="0;10;0" dur="0.1s" repeatCount="indefinite" />
    </line>
    <line x1="0" y1="80" x2="100" y2="80" stroke="#b30000" strokeWidth="0.5" opacity="0.5">
      <animate attributeName="x2" values="100;90;100" dur="0.3s" repeatCount="indefinite" />
    </line>
  </svg>
);
