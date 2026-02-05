"use client";

import { useEffect, useState, useRef } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiClock,
  FiChevronRight,
  FiMic,
  FiAward,
} from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date("FEB 26, 2025 09:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => String(value).padStart(2, "0");

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-4 md:pt-8 pb-12 md:pb-16 min-h-screen flex items-center"
    >
      {/* Google-style background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid */}
        {/* <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                              linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
            backgroundSize: "80px 80px",
          }}
        /> */}
      </div>

      {/* Animated Google logo elements at top */}
      <div className="absolute top-1.5 right-6 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1"
        >
          {["#4285F4", "#DB4437", "#F4B400", "#0F9D58"].map((color, i) => (
            <motion.div
              key={i}
              className="w-6 h-6 rounded-full shadow-sm"
              style={{ backgroundColor: color }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-3 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Top-aligned Google-themed circular logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 lg:pt-4"
          >
            {/* Main circular container positioned at top */}
            <div className="relative h-[320px] md:h-[380px]">
              {/* Animated Google Developer Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <motion.div className="relative w-56 h-56 md:w-64 md:h-64">
                  {/* Radar sweep line */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-blue-500/80 via-transparent to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "left center" }}
                  />

                  {/* Concentric circles */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-gray-300/30"
                      style={{ inset: `${i * 20}px` }}
                    />
                  ))}

                  {/* Scanning dots */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const radius = 100;
                    const left = 50 + Math.cos(angle) * (radius / 2);
                    const top = 50 + Math.sin(angle) * (radius / 2);

                    return (
                      <motion.div
                        key={i}
                        className={`absolute w-3 h-3 rounded-full ${i % 4 === 0
                          ? "bg-blue-500"
                          : i % 4 === 1
                            ? "bg-red-500"
                            : i % 4 === 2
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    );
                  })}
                </motion.div>
              </div>

              {/* Center GDGC DYPCOE text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="flex justify-center items-center gap-1 mb-2 relative">
                      <motion.div
                        className="absolute -z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100/20 via-red-100/20 to-yellow-100/20 blur-sm"
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          scale: { duration: 4, repeat: Infinity },
                          rotate: { duration: 8, repeat: Infinity },
                        }}
                      />

                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="relative group"
                          initial={{ y: 60, rotate: -180, scale: 0 }}
                          animate={
                            isInView ? { y: 0, rotate: 0, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <div className="relative">
                            <span className="text-5xl md:text-6xl font-bold text-blue-600 drop-shadow-lg">
                              G
                            </span>
                            <motion.div
                              className="absolute inset-0 text-blue-400 blur-md opacity-70"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              G
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="relative group"
                          initial={{ y: 60, rotate: -180, scale: 0 }}
                          animate={
                            isInView ? { y: 0, rotate: 0, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <div className="relative">
                            <span className="text-5xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
                              D
                            </span>
                            <motion.div
                              className="absolute inset-0 text-red-400 blur-md opacity-70"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{
                                duration: 2,
                                delay: 0.5,
                                repeat: Infinity,
                              }}
                            >
                              D
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="relative group"
                          initial={{ y: 60, rotate: -180, scale: 0 }}
                          animate={
                            isInView ? { y: 0, rotate: 0, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <div className="relative">
                            <span className="text-5xl md:text-6xl font-bold text-yellow-500 drop-shadow-lg">
                              G
                            </span>
                            <motion.div
                              className="absolute inset-0 text-yellow-400 blur-md opacity-70"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{
                                duration: 2,
                                delay: 1,
                                repeat: Infinity,
                              }}
                            >
                              G
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="relative group"
                          initial={{ y: 60, rotate: -180, scale: 0 }}
                          animate={
                            isInView ? { y: 0, rotate: 0, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.6,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <div className="relative">
                            <span className="text-4xl md:text-5xl font-bold text-green-600 drop-shadow-lg">
                              C
                            </span>
                            <motion.div
                              className="absolute inset-0 text-green-400 blur-md opacity-70"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{
                                duration: 2,
                                delay: 1.5,
                                repeat: Infinity,
                              }}
                            >
                              C
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.8, type: "spring" }}
                      >
                        <div className="relative">
                          <div className="flex gap-1">
                            {["#4285F4", "#DB4437", "#F4B400", "#0F9D58"].map(
                              (color, i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: color }}
                                  animate={{ y: [0, -3, 0] }}
                                  transition={{
                                    duration: 1,
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                  }}
                                />
                              ),
                            )}
                          </div>
                          <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#4285F4"
                                strokeWidth="1.5"
                              />
                              <circle cx="12" cy="12" r="6" fill="#DB4437" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="overflow-hidden mx-auto w-48"
                    >
                      <div className="flex justify-center gap-0.5 mt-2">
                        {["D", "Y", "P", "C", "O", "E"].map((letter, index) => (
                          <motion.span
                            key={index}
                            className={`text-xl md:text-2xl font-bold ${index % 6 === 0
                              ? "text-blue-600"
                              : index % 6 === 1
                                ? "text-red-500"
                                : index % 6 === 2
                                  ? "text-yellow-500"
                                  : index % 6 === 3
                                    ? "text-green-600"
                                    : index % 6 === 4
                                      ? "text-blue-500"
                                      : "text-red-400"
                              }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.2 + index * 0.1 }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mt-2 mx-auto w-32"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { width: "100%", opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="overflow-hidden mx-auto"
                  >
                    <div className="text-lg md:text-xl text-gray-600 font-semibold mb-4 whitespace-nowrap">
                      The Dev Summit 2026
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      delay: 1.3,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-red-50 px-4 py-2 rounded-full border border-blue-100 shadow-md"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <FiMic className="text-blue-600" />
                    </motion.div>
                    <span className="text-gray-700 font-semibold text-sm md:text-base">
                      25+ Expert Speakers
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute top-8 left-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-xl">⚛️</div>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-xl">🚀</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xl">💻</div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-xl">🔧</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-0 md:mt-0 grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
              <div className="bg-white rounded-xl p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#4285F4] border border-black rounded-lg">
                    <FiCalendar className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500 leading-none mb-1">
                      Event Date
                    </p>
                    <p className="text-lg font-bold text-black leading-none">
                      FEB 26, 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#EA4335] border border-black rounded-lg">
                    <FiMapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-500 leading-none mb-1">
                      Venue
                    </p>
                    <p className="text-lg font-bold text-black leading-none">
                      DYPCOE, Pune
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 group relative bg-[#4285F4] text-black font-black text-2xl md:text-2xl py-8 px-12 md:px-20 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all overflow-hidden"
              >
                <a href="https://konfhub.com/widget/the-dev-summit-2026?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=73448&ticketId=73448%7C">
                  <span className="relative z-10 flex items-center gap-4">
                    <span className="text-4xl">🎟️</span>
                    <span>Register Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiChevronRight className="text-4xl" />
                    </motion.div>
                  </span>
                </a>

                {/* Subtle dark shimmer for professional depth */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT (STYLED TO MATCH PHOTO) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Google Developer Groups Badge (Preserved) */}
            <div className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                {/* <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div> */}
                <img src="/images/gdglogo.webp"
                  className="w-8 h-8 md:w-8 md:h-8 object-contain drop-shadow-2xl"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    <span className="text-blue-600">
                      Google Developer Groups
                    </span>
                    <span className="text-red-600"> OnCampus</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    D. Y. Patil College of Engineering Pune
                  </p>
                </div>
              </div>
            </div>

            {/* UPDATED HEADING STYLE: Massive, Uppercase, Pink/Purple Split */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-[0.9] uppercase tracking-tighter text-gray-900">
                <div className="block">
                  <span className="text-[#4285F4]">T</span>HE  {" "}
                  <span className="text-[#EA4335]">D</span>EV  {" "}
                  <span className="text-[#FBBC05]">S</span>UMMIT  {" "}
                </div>
                <div className="block">
                  <span className="text-[#34A853]">2026 </span> {" "}
                  <span className="text-[#4285F4]">P</span>OWERED BY  {" "}
                  <span className="text-[#EA4335]">G</span>DGC  {" "}
                  <span className="text-[#34A853]">D</span>YPCOE  {" "}
                </div>
              </h1>

              {/* UPDATED DESCRIPTION STYLE: Monospace, Bold, Black */}
              <p className="text-xl md:text-2xl font-mono font-bold text-black max-w-xl leading-tight">
                Share your extraordinary journey and inspire the next generation
                of innovators. Your unique perspective could spark the next
                technological revolution.
              </p>
            </div>

            {/* Conference Stats (Preserved) */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              {[
                {
                  icon: <FiUsers />,
                  value: "500+",
                  label: "Participants",
                  color: "#4285F4",
                },
                {
                  icon: <FiAward />,
                  value: "15+",
                  label: "Sessions",
                  color: "#EA4335",
                },
                {
                  icon: <FiClock />,
                  value: "3 Day",
                  label: "Duration",
                  color: "#FBBC05",
                },
                {
                  icon: <FiMic />,
                  value: "25+",
                  label: "Speakers",
                  color: "#34A853",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="bg-white rounded-xl p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <div
                    className="p-2 rounded-lg border border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{ backgroundColor: stat.color }}
                  >
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-black leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Animations Preserved */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(8px);
          }
          66% {
            transform: translateY(0px) translateX(15px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
