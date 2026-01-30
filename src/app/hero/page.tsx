'use client'

import { useEffect, useState, useRef } from 'react'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiChevronRight, FiMic, FiAward } from 'react-icons/fi'
import { motion, useInView } from 'framer-motion'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isMounted, setIsMounted] = useState(false)
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })

  useEffect(() => {
    setIsMounted(true)

    const calculateTimeLeft = () => {
      const targetDate = new Date('March 15, 2025 09:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => String(value).padStart(2, '0')

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-4 md:pt-8 pb-12 md:pb-16 min-h-screen flex items-center"
    >
      {/* Google-style background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Google color dots - Blue */}
        {isMounted &&
          [...Array(8)].map((_, i) => (
            <div
              key={`blue-${i}`}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-10"
              style={{
                left: `${5 + i * 12}%`,
                top: `${10 + i * 10}%`,
                animation: `float 15s infinite linear ${i * 0.3}s`,
              }}
            />
          ))}

        {/* Google color dots - Red */}
        {isMounted &&
          [...Array(8)].map((_, i) => (
            <div
              key={`red-${i}`}
              className="absolute w-2 h-2 bg-red-500 rounded-full opacity-10"
              style={{
                left: `${10 + i * 10}%`,
                top: `${70 + i * 3}%`,
                animation: `float 18s infinite linear ${i * 0.5}s`,
              }}
            />
          ))}

        {/* Google color dots - Yellow */}
        {isMounted &&
          [...Array(8)].map((_, i) => (
            <div
              key={`yellow-${i}`}
              className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-10"
              style={{
                left: `${80 + i * 3}%`,
                top: `${20 + i * 8}%`,
                animation: `float 20s infinite linear ${i * 0.2}s`,
              }}
            />
          ))}

        {/* Google color dots - Green */}
        {isMounted &&
          [...Array(8)].map((_, i) => (
            <div
              key={`green-${i}`}
              className="absolute w-2 h-2 bg-green-500 rounded-full opacity-10"
              style={{
                left: `${65 + i * 5}%`,
                top: `${60 + i * 5}%`,
                animation: `float 16s infinite linear ${i * 0.7}s`,
              }}
            />
          ))}

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                              linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
            backgroundSize: "80px 80px",
          }}
        />
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
                        className={`absolute w-3 h-3 rounded-full ${
                          i % 4 === 0
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
                  {/* GDGC with letter by letter animation */}
                  {/* GDGC Logo with Google Colors and Animation */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="flex justify-center items-center gap-1 mb-2 relative">
                      {/* GDG Logo Badge Background */}
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

                      {/* GDG Letters with Google Colors */}
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* G - Blue */}
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
                            {/* Blue glow effect */}
                            <motion.div
                              className="absolute inset-0 text-blue-400 blur-md opacity-70"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              G
                            </motion.div>
                          </div>
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                              Google
                            </span>
                          </div>
                        </motion.div>

                        {/* D - Red */}
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
                            {/* Red glow effect */}
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
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                              Developer
                            </span>
                          </div>
                        </motion.div>

                        {/* G - Yellow */}
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
                            {/* Yellow glow effect */}
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
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
                              Groups
                            </span>
                          </div>
                        </motion.div>

                        {/* C - Green */}
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
                            {/* Green glow effect */}
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
                          {/* Tooltip */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                              OnCampus
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* GDG Logo Icon */}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.8, type: "spring" }}
                      >
                        <div className="relative">
                          {/* Google colored dots */}
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
                          {/* GDG Icon */}
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

                    {/* DYPCOE with Google Colors */}
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
                            className={`text-xl md:text-2xl font-bold ${
                              index % 6 === 0
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

                    {/* Connecting Line Animation */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 mt-2 mx-auto w-32"
                    />
                  </motion.div>

                  {/* DYPCOE with fade in animation */}
                  {/* <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mb-3"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-gray-800 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                      DYPCOE
                    </span>
                  </motion.div> */}

                  {/* Tech Conference text */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { width: "100%", opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="overflow-hidden mx-auto"
                  >
                    <div className="text-lg md:text-xl text-gray-600 font-semibold mb-4 whitespace-nowrap">
                      Tech Conference 2025
                    </div>
                  </motion.div>

                  {/* Speakers badge with bounce animation */}
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

              {/* Floating tech icons around the circle */}
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

              {/* Animated connection lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                {/* Base lines */}
                {/* {isMounted && [...Array(6)].map((_, i) => {
                  const angle = (i * 60) * Math.PI / 180;
                  const radius = 140;
                  const x2 = 50 + Math.cos(angle) * radius;
                  const y2 = 50 + Math.sin(angle) * radius;

                  return (
                    <motion.g key={i}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="#E8F0FE"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                      />
                      <motion.circle
                        r="4"
                        fill={['#4285F4', '#DB4437', '#F4B400', '#0F9D58'][i % 4]}
                        initial={{ pathLength: 0 }}
                        animate={isInView ? {
                          cx: [`50%`, `${x2}%`, `50%`],
                          cy: [`50%`, `${y2}%`, `50%`],
                        } : {}}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.g>
                  );
                })} */}
              </svg>
            </div>

            {/* Date and venue info below circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-0 md:mt-0 grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FiCalendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-semibold text-gray-800">Mar 15, 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FiMapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Venue</p>
                    <p className="font-semibold text-gray-800">DYPCOE, Pune</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Big Register Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 group relative bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-white font-black text-2xl md:text-2xl py-8 px-12 md:px-20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden"
              >
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

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-3xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1 order-1 lg:order-2"
          >
            {/* Google Developer Groups Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    <span className="text-blue-600">
                      Google Developer Groups
                    </span>
                    <span className="text-red-600"> OnCampus</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Dr. D. Y. Patil College of Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Annual Tech</span>
                <span className="block">
                  <span className="text-blue-600">Conference</span>
                  <span className="text-red-500"> 2026</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-bold text-gray-800">
                Innovation • Collaboration • Growth
              </p>

              <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
                Join Pune's premier technology conference organized by{" "}
                <span className="text-blue-600 font-semibold">GDGC DYPCOE</span>
                . Featuring{" "}
                <span className="text-red-500 font-semibold">
                  25+ industry experts
                </span>
                , hands-on workshops, and networking opportunities with Pune's
                tech community.
              </p>
            </div>

            {/* Conference Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: <FiUsers />,
                  value: "500+",
                  label: "Participants",
                  color: "blue",
                },
                {
                  icon: <FiAward />,
                  value: "15+",
                  label: "Sessions",
                  color: "red",
                },
                {
                  icon: <FiClock />,
                  value: "3 Day",
                  label: "Duration",
                  color: "yellow",
                },
                {
                  icon: <FiMic />,
                  value: "25+",
                  label: "Speakers",
                  color: "green",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  className={`bg-white rounded-lg p-3 shadow-sm border border-gray-100 ${
                    stat.color === "blue"
                      ? "border-l-3 border-blue-500"
                      : stat.color === "red"
                        ? "border-l-3 border-red-500"
                        : stat.color === "yellow"
                          ? "border-l-3 border-yellow-500"
                          : "border-l-3 border-green-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1.5 rounded-md ${
                        stat.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : stat.color === "red"
                            ? "bg-red-100 text-red-600"
                            : stat.color === "yellow"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                      }`}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Countdown Timer */}
            {/* <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <h3 className="text-base font-semibold text-gray-800">Conference Starts In</h3>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { value: timeLeft.days, label: 'Days', bg: 'bg-blue-500', text: 'text-blue-600' },
                  { value: timeLeft.hours, label: 'Hours', bg: 'bg-red-500', text: 'text-red-600' },
                  { value: timeLeft.minutes, label: 'Minutes', bg: 'bg-yellow-500', text: 'text-yellow-600' },
                  { value: timeLeft.seconds, label: 'Seconds', bg: 'bg-green-500', text: 'text-green-600' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-200 group-hover:shadow-md transition-shadow">
                      <div className={`text-xl md:text-2xl font-bold font-mono ${item.text}`}>
                        {formatTime(item.value)}
                      </div>
                      <div className="text-xs font-medium text-gray-700">
                        {item.label}
                      </div>
                      <div className={`mt-1 h-1 w-6 mx-auto rounded-full ${item.bg} group-hover:w-10 transition-all duration-300`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-base">🎟️ Register Now</span>
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 flex items-center justify-center gap-2"
              >
                <span className="text-sm md:text-base">View Agenda</span>
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - moved up */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-gray-400">Scroll</span>
          <div className="w-5 h-7 border border-gray-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gradient-to-b from-blue-400 to-red-400 rounded-full mt-1"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div> */}

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