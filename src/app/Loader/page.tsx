"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC04",
  green: "#34A853",
};

const CIRCLE_COLORS = [COLORS.blue, COLORS.red, COLORS.yellow, COLORS.green];

interface GDGLoaderProps {
  variant?: "modern" | "classic";
  onComplete?: () => void;
}

export default function GDGLoader({
  variant = "modern",
  onComplete,
}: GDGLoaderProps) {
  const [phase, setPhase] = useState<"circles" | "transform" | "exit">(
    "circles",
  );

  useEffect(() => {
    const sequence = async () => {
      // Phase 1: Circle loader animation (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Phase 2: Transform to panels
      setPhase("transform");
      await new Promise((resolve) => setTimeout(resolve, 2400));

      // Phase 3: Exit animation
      setPhase("exit");

      // Wait for exit animation to complete
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Call onComplete callback if provided
      if (onComplete) {
        onComplete();
      }
    };

    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
      }}
      initial={{ opacity: 1 }}
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* GDGC Conference 2026 Text */}
      {phase === "circles" && (
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span style={{ color: COLORS.blue }}>G</span>
            <span style={{ color: COLORS.red }}>D</span>
            <span style={{ color: COLORS.yellow }}>G</span>
            <span style={{ color: COLORS.green }}>C</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">
            Conference 2026
          </p>
        </motion.div>
      )}

      {/* Phase 1: Circle Animation */}
      {phase === "circles" && (
        <div className="relative flex items-center justify-center gap-3">
          {CIRCLE_COLORS.map((color, index) => (
            <motion.div
              key={index}
              className="relative rounded-full"
              style={{
                backgroundColor: color,
                width: 16,
                height: 16,
                boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: color,
                  filter: "blur(8px)",
                  opacity: 0.4,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Phase 2 & 3: Panel Transformation and Exit */}
      {(phase === "transform" || phase === "exit") && (
        <div className="absolute inset-0 flex">
          {CIRCLE_COLORS.map((color, index) => (
            <motion.div
              key={index}
              className="relative"
              style={{
                backgroundColor: color,
                width: "25%",
                willChange: "transform",
              }}
              initial={{
                height: 16,
                width: 16,
                borderRadius: "50%",
                position: "absolute",
                left: `calc(50% + ${(index - 1.5) * 24}px)`,
                top: "50%",
                y: "-50%",
                x: "-50%",
                boxShadow: `0 0 20px ${color}40`,
              }}
              animate={{
                height: "100vh",
                width: "25%",
                borderRadius: "0%",
                position: "relative",
                left: 0,
                top: 0,
                y: phase === "exit" ? "-100vh" : 0,
                x: 0,
                boxShadow: "none",
                filter: phase === "exit" ? "blur(1px)" : "blur(0px)",
              }}
              transition={{
                height: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                width: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                borderRadius: {
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                position: {
                  duration: 0,
                  delay: 0,
                },
                left: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                top: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                x: {
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                },
                y:
                  phase === "exit"
                    ? {
                        duration: 0.7,
                        delay: index * 0.08,
                        ease: [0.76, 0, 0.24, 1],
                      }
                    : {
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: [0.76, 0, 0.24, 1],
                      },
                boxShadow: {
                  duration: 0.4,
                  delay: index * 0.15,
                },
                filter: {
                  duration: 0.3,
                  delay: phase === "exit" ? index * 0.08 : 0,
                },
              }}
            >
              {/* Subtle overlay for depth */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${color}10 100%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "transform" ? 0.5 : 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
