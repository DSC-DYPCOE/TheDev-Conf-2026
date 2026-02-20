"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Cpu,
  Code2,
  Cloud,
  Database,
  Network,
  Terminal,
  Brain,
  Rocket
} from "lucide-react";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const [hoveredGrid, setHoveredGrid] = useState<number | null>(null);

  const stats = [
    { number: "500+", label: "Participants", color: "bg-red-500" },
    { number: "35+", label: "Sessions", color: "bg-blue-600" },
    { number: "25+", label: "Speakers", color: "bg-green-600" },
    { number: "3", label: "Days", color: "bg-amber-400" },
  ];

  const techCards = [
    {
      title: "Web Dev",
      description: "React, Next.js, Vue",
      icon: <Code2 className="w-8 h-8" />,
      bg: "from-blue-600 to-blue-700",
      color: "text-blue-600",
      delay: 0.1
    },
    {
      title: "Cloud",
      description: "AWS, GCP, Azure",
      icon: <Cloud className="w-8 h-8" />,
      bg: "from-blue-600 to-blue-500",
      color: "text-blue-500",
      delay: 0.2
    },
    {
      title: "AI/ML",
      description: "TensorFlow, PyTorch",
      icon: <Brain className="w-8 h-8" />,
      bg: "from-green-600 to-green-500",
      color: "text-green-600",
      delay: 0.3
    },
    {
      title: "Mobile",
      description: "Flutter, React Native",
      icon: <Cpu className="w-8 h-8" />,
      bg: "from-red-500 to-red-600",
      color: "text-red-500",
      delay: 0.4
    },
    {
      title: "DevOps",
      description: "Docker, Kubernetes",
      icon: <Terminal className="w-8 h-8" />,
      bg: "from-blue-700 to-blue-800",
      color: "text-blue-700",
      delay: 0.5
    },
    {
      title: "Data",
      description: "SQL, MongoDB, BigData",
      icon: <Database className="w-8 h-8" />,
      bg: "from-amber-400 to-amber-500",
      color: "text-amber-500",
      delay: 0.6
    },
    {
      title: "Networking",
      description: "APIs, Microservices",
      icon: <Network className="w-8 h-8" />,
      bg: "from-blue-500 to-blue-600",
      color: "text-blue-500",
      delay: 0.7
    },
    {
      title: "Innovation",
      description: "IoT, Blockchain, AR/VR",
      icon: <Rocket className="w-8 h-8" />,
      bg: "from-green-600 to-green-700",
      color: "text-green-600",
      delay: 0.8
    },
  ];

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-white py-16 md:py-24 font-mono"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm border-[3px] border-black rounded-3xl p-6 lg:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                  Tech Stack
                </h3>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  🔥
                </motion.div>
              </div>

              {/* Compact 2x4 grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: card.delay, duration: 0.5 }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    onHoverStart={() => setHoveredGrid(index)}
                    onHoverEnd={() => setHoveredGrid(null)}
                    className={`relative group cursor-pointer ${hoveredGrid === index ? 'z-10' : ''}`}
                  >
                    {/* Card with gradient border */}
                    <div className={`relative bg-gradient-to-br ${card.bg} rounded-2xl p-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1`}>
                      {/* Icon container */}
                      <div className="mb-3 relative">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border-2 border-black mx-auto">
                          <motion.div
                            animate={hoveredGrid === index ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                            className={card.color}
                          >
                            {card.icon}
                          </motion.div>
                        </div>

                        {/* Floating dots */}
                        {[0, 1].map((i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full border border-black"
                            style={{
                              top: `${15 + i * 20}px`,
                              left: `${15 + i * 10}px`,
                            }}
                            animate={{
                              y: [0, -5, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.3
                            }}
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h4 className="text-sm font-black text-white uppercase tracking-tight mb-1">
                          {card.title}
                        </h4>
                        <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider">
                          {card.description}
                        </p>
                      </div>

                      {/* Hover effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </div>

                    {/* Connecting line effect */}
                    {index < techCards.length - 1 && (
                      <div className="absolute -right-2 top-1/2 transform translate-y-1/2 hidden sm:block">
                        <motion.div
                          className="w-4 h-0.5 bg-gradient-to-r from-black/20 to-transparent"
                          animate={{ width: hoveredGrid === index ? "20px" : "0px" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Grid footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-8 pt-6 border-t-2 border-black/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-black" />
                    <span className="text-xs font-black text-gray-600 uppercase tracking-widest">
                      All Technologies Covered
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-xl"
                  >
                    ⚙️
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl border-2 border-black shadow-md" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl border-2 border-black shadow-md" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            {/* About Header */}
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-black mb-6 text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest"
              >
                About
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tighter uppercase"
              >
                Welcome to{" "}
                <span className="text-blue-600">The Dev Summit 2026</span> ✨
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-black text-lg mb-4 leading-relaxed font-bold"
              >
                The Dev Summit is the premier annual conference that brings
                together the brightest developers, innovators, and tech leaders
                from across the ecosystem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                Powered by GDGC DYPCOE, this 3-day summit features cutting-edge
                sessions and unparalleled networking
                opportunities with industry experts and fellow developers.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-black/20 to-black" />
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest">
                  By The Numbers
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-black/20 to-black" />
              </div>

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

            {/* CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black text-lg py-4 px-8 rounded-xl border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎟️
                  </motion.span>
                  <span>Register Now - Limited Seats</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}