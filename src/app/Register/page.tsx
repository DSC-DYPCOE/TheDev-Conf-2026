"use client";

import { useEffect, useState, useRef } from "react";
import { FiClock, FiCalendar, FiMapPin } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Register() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const registerRef = useRef(null);
  const isInView = useInView(registerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const targetDate = new Date("2026-02-26T00:00:00").getTime();

    const calculateTimeLeft = () => {
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
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
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
      className="relative py-20 md:py-28 overflow-hidden font-mono"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* GDGC Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={isInView ? {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.8,
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          } : {}}
          whileInView={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.08,
            rotate: 0,
            transition: { duration: 0.3 }
          }}
          className="flex justify-center mb-12 cursor-pointer"
        >
          <div className="relative group">
            {/* Animated shadow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500" />

            {/* Image with static high-quality shadow */}
            <img
              src="/images/ticket2.svg"
              alt="GDGC Logo"
              className="relative w-full max-w-5xl h-auto md:h-48 lg:h-56 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border-[3px] border-black px-6 py-3 rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase font-black">
            <FiCalendar className="text-blue-600 text-xl" />
            <span className="text-black">Reserve Your Spot</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase">
            <span className="text-black">Join Us at </span>
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              GDGC Tech Conference 2026
            </span>
          </h2>
        </motion.div>

        {/* Countdown Timer Section */}
        <div className="mb-16">
          <div className="text-center mb-10 flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-4"
            >
              <FiClock className="text-5xl text-blue-600" />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter">
              The <span className="text-blue-600">Countdown</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                value: timeLeft.days,
                label: "DAYS",
                color: "text-blue-600",
                bg: "bg-blue-600",
              },
              {
                value: timeLeft.hours,
                label: "HRS",
                color: "text-red-500",
                bg: "bg-red-500",
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
                <motion.div
                  className={`absolute inset-0 ${item.bg} rounded-[2.5rem] blur-2xl opacity-20`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05, translateZ: 0 }}
                  className="relative bg-white rounded-[2.5rem] p-8 md:p-10 border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-6xl md:text-7xl lg:text-8xl font-black ${item.color} mb-2`}
                  >
                    {formatTime(item.value)}
                  </motion.div>
                  <div className="text-lg font-black text-black tracking-[0.3em]">
                    {item.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: <FiCalendar />, label: "Date", val: "Feb 26-28, 2026" },
            { icon: <FiMapPin />, label: "Venue", val: "DYPCOE, Pune" },
            { icon: <FiClock />, label: "Time", val: "9 AM - 6 PM" },
          ].map((info, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="text-2xl text-black">{info.icon}</div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                  {info.label}
                </p>
                <p className="text-lg font-black text-black uppercase">
                  {info.val}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-12 mb-8"
        >
          <div className="inline-block border-[3px] border-black bg-yellow-400 px-6 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            <p className="text-black font-black text-lg tracking-tight uppercase">
              • 🔥 Limited Seats •
            </p>
          </div>
          <p className="text-gray-500 font-black text-sm md:text-base tracking-[0.2em] uppercase max-w-2xl mx-auto">
            Join 500+ developers, designers, and tech enthusiasts
          </p>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: -5 } : {}}
          className="absolute top-0 right-0 bg-yellow-400 text-black font-black px-6 py-3 rounded-xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hidden lg:block uppercase text-sm"
        >
          🔥 Only 100 Seats Left!
        </motion.div>
      </div>
    </section>
  );
}
