"use client";

import { useEffect, useState, useRef } from "react";
import { FiClock, FiCalendar, FiMapPin } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Register() {
  const [activeDay, setActiveDay] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const registerRef = useRef(null);
  const isInView = useInView(registerRef, { once: true, margin: "-100px" });

  // Day timings
  const dayTimings = [
    { day: 1, date: "Feb 26", time: "11:00 AM" },
    { day: 2, date: "Feb 27", time: "8:00 AM" },
    { day: 3, date: "Feb 28", time: "8:00 AM" }
  ];

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      const day1 = new Date(`February 26, ${currentYear} 11:00:00`);
      const day2 = new Date(`February 27, ${currentYear} 08:00:00`);
      const day3 = new Date(`February 28, ${currentYear} 08:00:00`);

      if (now < day1) {
        setActiveDay(1);
        return day1.getTime();
      } else if (now < day2) {
        setActiveDay(2);
        return day2.getTime();
      } else {
        setActiveDay(3);
        return day3.getTime();
      }
    };

    const calculateTimeLeft = () => {
      const targetTime = getTargetDate();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
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
          className="flex justify-center mb-8 md:mb-12 cursor-pointer"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500" />
            <img
              src="/images/ticket2.svg"
              alt="GDGC Logo"
              className="relative w-full max-w-[300px] md:max-w-5xl h-auto md:h-48 lg:h-56 object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white border-[3px] border-black px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase font-black text-sm md:text-base">
            <FiCalendar className="text-blue-600 text-lg md:text-xl" />
            <span className="text-black">Reserve Your Spot</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tighter uppercase px-2">
            <span className="text-black">Join Us at </span>
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              GDGC Tech Conference 2026
            </span>
          </h2>
        </motion.div>

        {/* Day Selector - Now shows full info on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-10 md:mb-12 px-2"
        >
          {dayTimings.map((day) => (
            <motion.button
              key={day.day}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDay(day.day)}
              className={`w-full sm:w-auto px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border-[3px] border-black font-black text-sm md:text-lg uppercase transition-all ${activeDay === day.day
                ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                }`}
            >
              <div className="flex flex-col items-center sm:block">
                <span className="block sm:hidden font-bold">Day {day.day}</span>
                <span className="block sm:hidden text-xs">{day.date} • {day.time}</span>
                <span className="hidden sm:block">Day {day.day} • {day.date} {day.time}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Countdown Timer Section */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-10 flex flex-col items-center px-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="mb-3 md:mb-4"
            >
              <FiClock className="text-3xl md:text-5xl text-blue-600" />
            </motion.div>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-black uppercase tracking-tighter">
              Day <span className="text-blue-600">{activeDay}</span>{" "}
              <span className="text-black">Countdown</span>
            </h3>
            <div className="mt-2 md:mt-3 bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-2 md:px-6 md:py-3 max-w-xs mx-auto">
              <p className="text-xs md:text-lg font-bold text-blue-800 whitespace-nowrap">
                Starts: {dayTimings[activeDay - 1].date} • {dayTimings[activeDay - 1].time}
              </p>
            </div>
          </div>

          {/* Responsive grid - 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-3xl mx-auto px-2">
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
              {
                value: timeLeft.minutes,
                label: "MIN",
                color: "text-green-600",
                bg: "bg-green-600",
              },
              {
                value: timeLeft.seconds,
                label: "SEC",
                color: "text-yellow-500",
                bg: "bg-yellow-500",
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
                  className={`absolute inset-0 ${item.bg} rounded-2xl md:rounded-[2.5rem] blur-xl md:blur-2xl opacity-20`}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white rounded-2xl md:rounded-[2.5rem] p-3 md:p-8 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-3xl md:text-6xl lg:text-7xl font-black ${item.color} mb-0 md:mb-2`}
                  >
                    {formatTime(item.value)}
                  </motion.div>
                  <div className="text-[10px] md:text-base font-black text-black tracking-[0.1em] md:tracking-[0.2em]">
                    {item.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Days Schedule Summary - NEW on mobile */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="block md:hidden mb-8 px-2"
        >
          <div className="bg-white rounded-2xl border-[3px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-center font-black text-sm mb-3 uppercase tracking-wider">All Days Schedule</h4>
            <div className="space-y-2">
              {dayTimings.map((day) => (
                <div
                  key={day.day}
                  className={`flex justify-between items-center p-2 rounded-xl border-2 ${activeDay === day.day ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                    }`}
                >
                  <span className="font-black">Day {day.day}</span>
                  <span className="font-bold text-sm">{day.date} • {day.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}

        {/* Event Quick Info */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 md:mb-16 px-2">
          {[
            { icon: <FiCalendar />, label: "Date", val: "Feb 26-28, 2026" },
            { icon: <FiMapPin />, label: "Venue", val: "DYPCOE, Pune" },
          ].map((info, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 md:gap-4 bg-white px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="text-lg md:text-2xl text-black">{info.icon}</div>
              <div>
                <p className="text-[8px] md:text-[10px] text-gray-400 font-black uppercase tracking-widest">
                  {info.label}
                </p>
                <p className="text-xs md:text-lg font-black text-black uppercase">
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
          className="text-center mt-8 md:mt-12 mb-6 md:mb-8 px-2"
        >
          <div className="inline-block border-[3px] border-black bg-yellow-400 px-4 md:px-6 py-1 md:py-2 rounded-lg md:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3 md:mb-4">
            <p className="text-black font-black text-sm md:text-lg tracking-tight uppercase">
              • 🔥 Limited Seats •
            </p>
          </div>
          <p className="text-gray-500 font-black text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase max-w-2xl mx-auto">
            Join 500+ developers, designers, and tech enthusiasts
          </p>
        </motion.div>

        {/* Floating Badge - Hidden on mobile */}
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