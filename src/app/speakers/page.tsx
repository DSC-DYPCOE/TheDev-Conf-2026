"use client";

import React, { useState, useEffect, useCallback } from "react";

// --- Synchronized Decrypt Component ---
const DecryptText = ({
  text,
  trigger,
  className,
}: {
  text: string;
  trigger: boolean;
  className?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(text);
  const [isRevealed, setIsRevealed] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

  const runScramble = useCallback(() => {
    setIsRevealed(false);
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayValue(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsRevealed(true);
      }
      iteration += 1 / 2; // Synchronized speed
    }, 30);
  }, [text]);

  useEffect(() => {
    if (!trigger) {
      runScramble();
    }
  }, [trigger, runScramble]);

  return (
    <span
      className={`inline-block transition-all duration-600 ease-out ${className} ${
        !isRevealed ? "blur-[1px] opacity-80" : "blur-0 opacity-100"
      }`}
    >
      {displayValue}
    </span>
  );
};

// --- Data ---
const SPEAKERS = [
  {
    id: 1,
    name: "Aanchal Mishra",
    title: "Developer Advocate",
    company: "POSTMAN",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    borderColor: "border-red-500",
  },
  {
    id: 2,
    name: "Megha Arora",
    title: "DevRel Strategist & Founder",
    company: "DevRelSquad",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
    borderColor: "border-green-500",
  },
  {
    id: 3,
    name: "Saurav Jain",
    title: "Senior Developer Community Manager",
    company: "Apify",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    borderColor: "border-orange-500",
  },
  {
    id: 4,
    name: "Bhawna Chauhan",
    title: "Developer Relations Engineer",
    company: "QuillAI Network",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
    borderColor: "border-blue-500",
  },
  {
    id: 5,
    name: "Shagufta Bangi",
    title: "Customer Engineer",
    company: "Google Cloud",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=600&fit=crop",
    borderColor: "border-blue-500",
  },
  {
    id: 6,
    name: "Savinder Puri",
    title: "DevOps Evangelist",
    company: "CloudOps",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    borderColor: "border-orange-500",
  },
  {
    id: 7,
    name: "Mahaveer Muttha",
    title: "Co-founder",
    company: "Tech Startup",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=600&fit=crop",
    borderColor: "border-green-500",
  },
  {
    id: 8,
    name: "Pranoti Nandurkar",
    title: "Technical Architect",
    company: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop",
    borderColor: "border-red-500",
  },
];

export default function SpeakerGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsPerPage = 4;

  const visibleSpeakers = SPEAKERS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage,
  );

  useEffect(() => {
    const interval = setInterval(() => triggerTransition(), 6000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const triggerTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === 0 ? 1 : 0));
      setIsTransitioning(false);
    }, 800);
  };

  const getLineColor = (borderClass: string) => {
    const colorMap: Record<string, string> = {
      "border-red-500": "bg-red-500",
      "border-green-500": "bg-green-500",
      "border-orange-500": "bg-orange-500",
      "border-blue-500": "bg-blue-600",
    };
    return colorMap[borderClass] || "bg-blue-600";
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 font-mono">
      <div className="max-w-7xl w-full">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
            OUR <span className="text-blue-600">SPEAKERS</span>
          </h2>
          <p className="text-[12px] tracking-[0.5em] text-gray-400 uppercase font-bold">
            Learn from industry experts and thought leaders
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visibleSpeakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-in-out border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1
                ${isTransitioning ? "opacity-0 scale-95 translate-y-10" : "opacity-100 scale-100 translate-y-0"}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-0">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <DecryptText
                  text={speaker.company}
                  trigger={isTransitioning}
                  className="text-blue-400 text-[11px] font-black tracking-widest uppercase mb-1"
                />
                <DecryptText
                  text={speaker.name}
                  trigger={isTransitioning}
                  className="text-white text-2xl font-bold leading-none mb-2"
                />
                <DecryptText
                  text={speaker.title}
                  trigger={isTransitioning}
                  className="text-gray-300 text-xs font-medium"
                />
              </div>

              <div
                className={`absolute bottom-0 left-0 h-4 w-0 group-hover:w-full transition-all duration-500 ease-in-out ${getLineColor(speaker.borderColor)}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation Indicators */}
        <div className="mt-20 flex justify-center items-center gap-8">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                if (currentPage !== idx) triggerTransition();
              }}
              className={`h-4 rounded-full transition-all duration-500 border-2 border-black
                ${
                  currentPage === idx
                    ? "w-24 bg-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    : "w-4 bg-orange-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
