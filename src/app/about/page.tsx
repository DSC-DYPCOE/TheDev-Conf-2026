"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Participants", color: "bg-red-500" },
    { number: "35+", label: "Sessions", color: "bg-blue-600" },
    { number: "25+", label: "Speakers", color: "bg-green-600" },
    { number: "3", label: "Days", color: "bg-amber-400" },
  ];

  // Shared Neubrutalist style for the grid cards
  const neubrutalBorder =
    "border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-300";

  return (
    <section
      ref={aboutRef}
      id="about"
      // Added font-mono to match speaker grid
      className="relative overflow-hidden bg-white py-16 md:py-24 font-mono"
    >
      {/* <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                            linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
          backgroundSize: "80px 80px",
        }}
      /> */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left - Grid with Appearance Updates */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:pr-10"
          >
            <div className="grid grid-cols-12 gap-4 auto-rows-[80px]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`col-span-4 row-span-2 bg-indigo-600 rounded-[2rem] flex items-end justify-start p-5 relative overflow-hidden group ${neubrutalBorder}`}
              >
                <div className="w-14 h-14 bg-indigo-400 rounded-2xl opacity-50 border-2 border-black" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`col-span-5 row-span-3 bg-emerald-200 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-7xl"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`col-span-3 row-span-2 bg-blue-500 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div whileHover={{ scale: 1.15 }} className="text-6xl">
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.03, rotate: -1 }}
                className={`col-span-5 row-span-3 bg-indigo-800 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="text-8xl"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: 5 }}
                className={`col-span-4 row-span-2 bg-gray-200 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div whileHover={{ scale: 1.2 }} className="text-6xl">
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                className={`col-span-3 row-span-2 bg-purple-500 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: 15 }}
                    className="text-6xl"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: 5 }}
                className={`col-span-4 row-span-2 bg-rose-400 rounded-[2rem] overflow-hidden relative group ${neubrutalBorder}`}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div whileHover={{ scale: 1.2 }} className="text-5xl">
                    👤
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.15, rotate: -10 }}
                className={`col-span-3 row-span-1 bg-amber-400 rounded-[1.5rem] overflow-hidden relative ${neubrutalBorder.replace("rounded-[2rem]", "")}`}
              >
                <div className="flex items-center justify-center h-full text-3xl">
                  ✨
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content with Appearance Updates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-black mb-6 text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
              >
                About GDGoC WOW
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tighter uppercase"
              >
                Welcome to Google Developer Groups{" "}
                <span className="text-blue-600">WOW</span> ✨
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-black text-lg mb-4 leading-relaxed font-bold"
              >
                GDGoC WoW is an extraordinary annual celebration that brings
                together the brightest minds from across our global developer
                community.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                Join us for an incredible journey filled with learning,
                innovation, and networking opportunities.
              </motion.p>
            </div>

            {/* Stats - Grid Appearance Updates */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: 0.9 + idx * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`${stat.color} text-white rounded-[1.5rem] p-6 text-center border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer relative overflow-hidden group`}
                >
                  <div className="relative z-10">
                    <div className="text-3xl font-black mb-1 uppercase">
                      {stat.number}
                    </div>
                    <div className="text-[10px] font-black tracking-widest uppercase opacity-90">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
