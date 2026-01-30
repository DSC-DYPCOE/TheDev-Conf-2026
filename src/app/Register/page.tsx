"use client";

import { useEffect, useState, useRef } from "react";
import { FiClock, FiChevronRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Register() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  const registerRef = useRef(null);
  const isInView = useInView(registerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      // Set target date to 7 days from now
      const now = new Date().getTime();
      const targetDate = now + 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
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
      ref={registerRef}
      id="register"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-50/40 rounded-full blur-3xl" />

        {/* Floating particles */}
        {isMounted &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0
                  ? "bg-blue-300/20"
                  : i % 4 === 1
                    ? "bg-red-300/20"
                    : i % 4 === 2
                      ? "bg-yellow-300/20"
                      : "bg-green-300/20"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

        {/* Grid pattern */}
        {/* <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, #4285F4 1px, transparent 1px),
                              linear-gradient(180deg, #4285F4 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        /> */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                              linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* GDGC Logo with 3D Tilt Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-12"
        >
          <motion.div
            whileHover={{
              rotateY: 20,
              rotateX: -15,
              scale: 1.08,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative cursor-pointer"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Your Local Logo Image - Replace the src path with your image path */}
            <motion.img
              src="/images/gdglogo.webp"
              alt="GDGC Logo"
              className="w-64 h-32 md:w-80 md:h-40 object-contain drop-shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Enhanced Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(66,133,244,0.3) 0%, rgba(219,68,55,0.2) 40%, transparent 70%)",
                filter: "blur(30px)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-red-100 px-6 py-3 rounded-full mb-6 shadow-sm"
          >
            <FiCalendar className="text-blue-600 text-xl" />
            <span className="text-gray-800 font-bold text-lg">
              Reserve Your Spot
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 mb-2">Join Us at</span>
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              GDGC Tech Conference 2026
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pune's biggest tech event is approaching! Join 500+ developers,
            innovators, and tech enthusiasts.
          </p>
        </motion.div>

        {/* Countdown Timer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          {/* Countdown Title */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <FiClock className="text-5xl text-blue-600" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiClock className="text-5xl text-blue-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-wide">
                The Countdown
              </h3>
            </motion.div>
            <p className="text-lg text-gray-600 font-medium">Event starts in</p>
          </div>

          {/* Countdown Timer Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                value: timeLeft.days,
                label: "DAYS",
                color: "from-blue-500 to-blue-600",
                shadow: "shadow-blue-500/50",
              },
              {
                value: timeLeft.hours,
                label: "HRS",
                color: "from-red-500 to-red-600",
                shadow: "shadow-red-500/50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Main card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl ${item.shadow} border-2 border-gray-100 group-hover:border-gray-200 transition-all`}
                >
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-3 font-mono`}
                  >
                    {formatTime(item.value)}
                  </motion.div>
                  <div className="text-base md:text-lg font-bold text-gray-600 tracking-widest">
                    {item.label}
                  </div>

                  {/* Bottom accent bar */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} rounded-b-3xl`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
          >
            <div className="p-3 bg-blue-100 rounded-xl">
              <FiCalendar className="text-2xl text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Date</p>
              <p className="text-lg font-bold text-gray-900">March 15, 2025</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all"
          >
            <div className="p-3 bg-red-100 rounded-xl">
              <FiMapPin className="text-2xl text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Venue</p>
              <p className="text-lg font-bold text-gray-900">
                DYPCOE Campus, Pune
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all"
          >
            <div className="p-3 bg-green-100 rounded-xl">
              <FiClock className="text-2xl text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Time</p>
              <p className="text-lg font-bold text-gray-900">
                9:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-600 mb-4">
            {/* <span className="font-bold text-green-600">✅ Free Entry</span> */}
            <span className="mx-3">•</span>
            <span className="font-bold text-yellow-600">🔥 Limited Seats</span>
            <span className="mx-3">•</span>
            {/* <span className="font-bold text-blue-600">🎁 Free Swag</span> */}
          </p>
          <p className="text-sm text-gray-500">
            Join 500+ developers, designers, and tech enthusiasts
          </p>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 12 } : {}}
          transition={{ delay: 1.8, type: "spring" }}
          className="absolute top-20 right-8 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-2xl hidden lg:block"
        >
          🔥 Only 100 Seats Left!
        </motion.div>
      </div>
    </section>
  );
}
