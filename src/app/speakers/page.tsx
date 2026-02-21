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
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
      iteration += 1 / 2;
    }, 80);
  }, [text]);

  useEffect(() => {
    if (!trigger) {
      runScramble();
    }
  }, [trigger, runScramble]);

  return (
    <span
      className={`inline-block transition-all duration-600 ease-out ${className} ${!isRevealed ? "blur-[1px] opacity-80" : "blur-0 opacity-100"
        }`}
    >
      {displayValue}
    </span>
  );
};

// --- Speaker Modal Component ---
const SpeakerModal = ({
  speaker,
  onClose,
}: {
  speaker: (typeof SPEAKERS)[0] | null;
  onClose: () => void;
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [modalTrigger, setModalTrigger] = useState(true);

  useEffect(() => {
    if (speaker) {
      setModalTrigger(false);
    }
  }, [speaker]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!speaker) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isClosing ? "opacity-0" : "opacity-100"
        }`}
      onClick={handleClose}
    >
      {/* Simple backdrop without grid */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal Content */}
      <div
        className={`relative max-w-4xl w-full bg-black border-[3px] border-blue-600 rounded-[2.5rem] overflow-hidden shadow-[20px_20px_0px_0px_rgba(37,99,235,0.5)] transition-all duration-500 ${isClosing ? "scale-90 translate-y-10" : "scale-100 translate-y-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group"
        >
          <span className="text-2xl font-bold transform group-hover:rotate-90 transition-transform duration-300">×</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
          </div>

          {/* Right side - Content */}
          <div className="p-8 md:p-10 bg-black text-white flex flex-col">
            {/* Company with decrypt effect */}
            <div className="mb-4">
              <DecryptText
                text={speaker.company}
                trigger={false}
                className="text-blue-400 text-xs font-black tracking-widest uppercase"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <DecryptText
                text={speaker.name}
                trigger={modalTrigger}
                className="text-3xl md:text-4xl font-bold font-mono"
              />
            </div>

            {/* Title */}
            <p className="text-gray-400 text-sm mb-8 pb-8 border-b border-gray-800">
              {speaker.title}
            </p>

            {/* About Section */}
            <div className="mb-8">
              <h4 className="text-blue-400 text-sm font-bold mb-3 tracking-wider">
                [ ABOUT ]
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {speaker.about || `${speaker.name} is a renowned expert in their field, currently working as ${speaker.title} at ${speaker.company}. With years of industry experience, they bring valuable insights and knowledge to the tech community.`}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-auto">
              <h4 className="text-blue-400 text-sm font-bold mb-3 tracking-wider">
                [ CONNECT ]
              </h4>
              <div className="flex gap-4">
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-mono text-gray-400">LinkedIn</span>
                  </a>
                )}
                {speaker.instagram && (
                  <a
                    href={speaker.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-gray-800 rounded-full hover:border-pink-600 hover:bg-pink-600/10 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                    <span className="text-sm font-mono text-gray-400">Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SPEAKERS = [
  {
    id: 1,
    name: "Mahaveer Muttha",
    title: "Co-founder & Organizer GDG Pune",
    company: "Birdvision",
    image: "/mahaveer2.png",
    borderColor: "border-red-500",
    linkedin: "https://www.linkedin.com/in/mahaveer-muttha/",
    // instagram: "https://instagram.com/mahaveermuttha",
    about: "Mahaveer is a tech community leader and co-founder of GDG Pune. With extensive experience in building developer communities, he has organized numerous tech events and hackathons across India."
  },
  {
    id: 2,
    name: "Arsh Goyal",
    title: "YouTuber & Senior Software Engineer",
    company: "Samsung India",
    image: "/arshgoyal2.png",
    borderColor: "border-red-500",
    linkedin: "https://www.linkedin.com/in/arshgoyal/",
    instagram: "https://www.instagram.com/arshgoyal.ai?igsh=Z29qam5zdDExaXUx",
    about: "Arsh is a popular tech educator on YouTube and Senior Software Engineer at Samsung. He creates content around coding interviews, system design, and career growth in tech."
  },
  {
    id: 3,
    name: "Shubham Londhe",
    title: "Senior Developer Advocate",
    company: "Temporal Technologies",
    image: "/Shubham_Londhe.jpg",
    borderColor: "border-red-500",
    linkedin: "https://www.linkedin.com/in/shubhamlondhe1996/",
    // instagram: "https://instagram.com/shubhamlondhe",
    about: "Shubham is a Senior Developer Advocate at Temporal Technologies, helping developers build reliable applications. He's passionate about distributed systems and cloud-native technologies."
  },
  {
    id: 4,
    name: "Vivek Singh",
    title: "Sr Technical Leader Customer Experience",
    company: "Cisco System",
    image: "/Vivek_Singh.jpg",
    borderColor: "border-green-500",
    linkedin: "https://linkedin.com/in/viveksingh",
    // instagram: "https://instagram.com/viveksingh",
    about: "Vivek leads customer experience initiatives at Cisco, focusing on technical solutions and customer success. He has deep expertise in networking and enterprise systems."
  },
  {
    id: 5,
    name: "Shreya Dhurde",
    title: "AIOps Engineer",
    company: "Capgemini",
    image: "/Shreya_Dhurde2.png",
    borderColor: "border-orange-500",
    linkedin: "https://www.linkedin.com/in/shreya-dhurde/",
    // instagram: "https://instagram.com/shreyadhurde",
    about: "Shreya specializes in AIOps at Capgemini, combining AI with IT operations. She works on intelligent automation and predictive analytics for enterprise systems."
  },
  {
    id: 6,
    name: "Saurabh Mishra",
    title: "Lead Consultant",
    company: "TSYS",
    image: "/Sourabh_Mishra.jpg",
    borderColor: "border-blue-500",
    linkedin: "https://www.linkedin.com/in/connectsaurabhmishra/",
    // instagram: "https://instagram.com/saurabhmishra",
    about: "Saurabh is a Lead Consultant at TSYS, specializing in payment systems and financial technology. He brings extensive experience in building scalable fintech solutions."
  },
  {
    id: 7,
    name: "Monali Nayak",
    title: "Senior Platform Engineer",
    company: "AI @ Elastic",
    image: "/Monali_Nayak.jpg",
    borderColor: "border-blue-500",
    linkedin: "https://www.linkedin.com/in/monali-nayak/",
    // instagram: "https://instagram.com/monalinayak",
    about: "Monali works on AI platform engineering at Elastic, building infrastructure for AI/ML workloads. She's passionate about MLOps and scalable AI systems."
  },
];

export default function SpeakerGrid() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof SPEAKERS[0] | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const cardsPerPage = 4;

  const visibleSpeakers = SPEAKERS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage,
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoRotating && !selectedSpeaker) {
      interval = setInterval(() => triggerTransition(), 7000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentPage, isAutoRotating, selectedSpeaker]);

  const triggerTransition = () => {
    if (!isAutoRotating || selectedSpeaker) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev === 0 ? 1 : 0));
      setIsTransitioning(false);
    }, 800);
  };

  const handleSpeakerClick = (speaker: typeof SPEAKERS[0]) => {
    setIsAutoRotating(false);
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
    // Re-enable auto-rotation when modal closes
    setIsAutoRotating(true);
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
    <>
      <main id="speakers" className="min-h-screen bg-white flex flex-col items-center justify-center p-6 md:p-12 font-mono">
        <div className="max-w-7xl w-full">
          <header className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-2">
              OUR <span className="text-blue-600">SPEAKERS</span>
            </h2>
            <p className="text-[12px] tracking-[0.5em] text-gray-400 uppercase font-bold">
              Learn from industry experts and thought leaders
            </p>
            {!isAutoRotating && selectedSpeaker && (
              <p className="mt-4 text-sm text-blue-600 animate-pulse">
                ⚡ Auto-rotation paused
              </p>
            )}
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {visibleSpeakers.map((speaker, index) => (
              <button
                key={speaker.id}
                onClick={() => handleSpeakerClick(speaker)}
                className={`relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-in-out border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-600/50
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

                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
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
                  className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-in-out ${getLineColor(speaker.borderColor)}`}
                />
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={handleCloseModal}
      />
    </>
  );
}