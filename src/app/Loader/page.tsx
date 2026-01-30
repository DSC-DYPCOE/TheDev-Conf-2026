'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GDGLoader = ({ variant = 'modern', minDisplayTime = 2000 }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
      }, minDisplayTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [minDisplayTime]);

  const loaderStyle = `
    .loader-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 1;
      transition: opacity 0.6s ease-out;
    }

    .loader-container.fade-out {
      opacity: 0;
      pointer-events: none;
    }

    /* Orbital Dots Animation */
    .orbital-loader {
      position: relative;
      width: 100px;
      height: 100px;
    }

    .orbital-dot {
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
      animation: orbit 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .orbital-dot:nth-child(1) {
      background: #4285f4;
      animation-delay: 0s;
    }

    .orbital-dot:nth-child(2) {
      background: #ea4335;
      animation-delay: -0.5s;
    }

    .orbital-dot:nth-child(3) {
      background: #fbbc04;
      animation-delay: -1s;
    }

    .orbital-dot:nth-child(4) {
      background: #34a853;
      animation-delay: -1.5s;
    }

    @keyframes orbit {
      0%, 100% {
        transform: rotate(0deg) translateX(40px) scale(1);
        opacity: 1;
      }
      50% {
        transform: rotate(180deg) translateX(40px) scale(0.8);
        opacity: 0.7;
      }
    }

    /* Pulse Rings Animation */
    .pulse-loader {
      position: relative;
      width: 120px;
      height: 120px;
    }

    .pulse-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      border: 3px solid;
      transform: translate(-50%, -50%);
      animation: pulse-expand 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    .pulse-ring:nth-child(1) {
      border-color: #4285f4;
      animation-delay: 0s;
    }

    .pulse-ring:nth-child(2) {
      border-color: #ea4335;
      animation-delay: -0.625s;
    }

    .pulse-ring:nth-child(3) {
      border-color: #fbbc04;
      animation-delay: -1.25s;
    }

    .pulse-ring:nth-child(4) {
      border-color: #34a853;
      animation-delay: -1.875s;
    }

    @keyframes pulse-expand {
      0% {
        width: 0;
        height: 0;
        opacity: 0.8;
      }
      50% {
        opacity: 0.4;
      }
      100% {
        width: 120px;
        height: 120px;
        opacity: 0;
      }
    }

    /* Logo Reveal Animation */
    .reveal-loader {
      text-align: center;
    }

    .reveal-logo {
      font-size: 48px;
      font-weight: 700;
      font-family: 'Google Sans', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
      letter-spacing: -1px;
    }

    .reveal-letter {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      animation: letter-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .reveal-letter:nth-child(1) {
      color: #4285f4;
      animation-delay: 0.1s;
    }

    .reveal-letter:nth-child(2) {
      color: #ea4335;
      animation-delay: 0.2s;
    }

    .reveal-letter:nth-child(3) {
      color: #fbbc04;
      animation-delay: 0.3s;
    }

    .reveal-subtitle {
      font-size: 14px;
      font-weight: 400;
      color: #5f6368;
      margin-top: 16px;
      opacity: 0;
      animation: fade-in 0.6s ease-out 0.6s forwards;
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
      letter-spacing: 0.5px;
    }

    .reveal-dots {
      display: inline-block;
      margin-left: 4px;
    }

    .reveal-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background: #5f6368;
      border-radius: 50%;
      margin: 0 2px;
      animation: dot-bounce 1.4s infinite ease-in-out;
    }

    .reveal-dot:nth-child(1) { animation-delay: 0s; }
    .reveal-dot:nth-child(2) { animation-delay: 0.2s; }
    .reveal-dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes letter-reveal {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fade-in {
      to {
        opacity: 1;
      }
    }

    @keyframes dot-bounce {
      0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
      }
      40% {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    /* Responsive adjustments */
    @media (max-width: 640px) {
      .orbital-loader {
        width: 80px;
        height: 80px;
      }

      .orbital-dot {
        width: 12px;
        height: 12px;
        margin: -6px 0 0 -6px;
      }

      @keyframes orbit {
        0%, 100% {
          transform: rotate(0deg) translateX(30px) scale(1);
          opacity: 1;
        }
        50% {
          transform: rotate(180deg) translateX(30px) scale(0.8);
          opacity: 0.7;
        }
      }

      .pulse-loader {
        width: 100px;
        height: 100px;
      }

      @keyframes pulse-expand {
        100% {
          width: 100px;
          height: 100px;
          opacity: 0;
        }
      }

      .reveal-logo {
        font-size: 36px;
      }

      .reveal-subtitle {
        font-size: 12px;
      }
    }
  `;

  return (
    <>
      <style>{loaderStyle}</style>
      <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
        {variant === 'modern' && <ModernLoader />}
        {variant === 'orbital' && <OrbitalDotsLoader />}
        {variant === 'pulse' && <PulseRingsLoader />}
        {variant === 'reveal' && <LogoRevealLoader />}
      </div>
    </>
  );
};

// Modern Advanced Loader
const ModernLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative w-24 h-24">
        {/* Center Core */}
        <motion.div
          className="absolute inset-0 m-auto w-4 h-4 bg-gray-900 rounded-full z-10"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Rotating Rings */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute inset-0 m-auto border-4 border-transparent rounded-full"
            style={{
              width: `${100 - index * 20}%`,
              height: `${100 - index * 20}%`,
              borderTopColor: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'][index],
              borderRightColor: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'][index], // Half circle
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2 + index * 0.5,
              repeat: Infinity,
              ease: "linear",
              // Add slight stagger
              delay: index * 0.1,
            }}
          />
        ))}

        {/* Floating Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'][i],
            }}
            animate={{
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              y: [0, (i < 2 ? -30 : 30), 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Text Reveal */}
      <div className="flex flex-col items-center">
        <motion.div
          className="flex space-x-1 text-4xl font-bold tracking-tighter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">D</span>
          <span className="text-[#FBBC04]">G</span>
          <span className="text-[#34A853]">C</span>
        </motion.div>
        <motion.div
          className="text-gray-500 font-medium tracking-widest text-sm mt-1 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Conference 2025
        </motion.div>
      </div>
    </div>
  );
};


// Orbital Dots Component
const OrbitalDotsLoader = () => (
  <div className="orbital-loader">
    <div className="orbital-dot"></div>
    <div className="orbital-dot"></div>
    <div className="orbital-dot"></div>
    <div className="orbital-dot"></div>
  </div>
);

// Pulse Rings Component
const PulseRingsLoader = () => (
  <div className="pulse-loader">
    <div className="pulse-ring"></div>
    <div className="pulse-ring"></div>
    <div className="pulse-ring"></div>
    <div className="pulse-ring"></div>
  </div>
);

// Logo Reveal Component
const LogoRevealLoader = () => (
  <div className="reveal-loader">
    <div className="reveal-logo">
      <span className="reveal-letter">G</span>
      <span className="reveal-letter">D</span>
      <span className="reveal-letter">G</span>
    </div>
    <div className="reveal-subtitle">
      on Campus
      <span className="reveal-dots">
        <span className="reveal-dot"></span>
        <span className="reveal-dot"></span>
        <span className="reveal-dot"></span>
      </span>
    </div>
  </div>
);

export default GDGLoader;