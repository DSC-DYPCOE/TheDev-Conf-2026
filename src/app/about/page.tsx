'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" })

  const stats = [
    { number: '10000+', label: 'Participants', color: 'bg-red-500' },
    { number: '25+', label: 'Sessions', color: 'bg-blue-600' },
    { number: '35+', label: 'Speakers', color: 'bg-green-600' },
    { number: '2', label: 'Days', color: 'bg-amber-400' },
  ]

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          
          {/* Left - Dynamic Asymmetric Grid with varied heights and positions */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:pr-10"
          >
            <div className="grid grid-cols-12 gap-4 auto-rows-[80px]">
              
              {/* Top left - Small elevated card */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-end justify-start p-5 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400/20 rounded-bl-[100px]" />
                <div className="w-14 h-14 bg-indigo-400 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-300 rounded-full animate-pulse" />
              </motion.div>

              {/* Top middle - Tall prominent card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="col-span-5 row-span-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <div className="absolute top-4 left-4 w-3 h-3 bg-teal-400 rounded-full" />
                <div className="absolute top-4 right-4 w-3 h-3 bg-teal-500 rounded-full animate-ping" />
                <div className="absolute top-8 left-4 w-3 h-3 bg-teal-400 rounded-full opacity-60" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-7xl"
                  >
                    👤
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400" />
              </motion.div>

              {/* Top right - Medium card pushed up */}
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="col-span-3 row-span-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl overflow-hidden shadow-xl relative group"
              >
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-300 rounded-full" />
                <div className="absolute top-1/3 left-4 w-4 h-4 bg-blue-300 rounded-full opacity-50" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="text-6xl"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              {/* Middle left - Large hero card */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="col-span-5 row-span-3 bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <div className="absolute bottom-6 right-6 w-10 h-10 bg-indigo-400 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="grid grid-cols-3 gap-1.5 absolute top-6 left-6">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="text-8xl"
                  >
                    👤
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Bottom middle - Medium card lowered */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: 5 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-xl relative group"
              >
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-400 rounded-full" />
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-gray-400 rounded-full" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="text-6xl"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              {/* Bottom right top - Small elevated */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.25, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
                className="col-span-3 row-span-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl overflow-hidden shadow-xl relative group"
              >
                <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.25, rotate: 15 }}
                    className="text-6xl relative z-10"
                  >
                    👤
                  </motion.div>
                </div>
              </motion.div>

              {/* New bottom right - Small lowered card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: 5 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-rose-400 to-rose-500 rounded-3xl overflow-hidden shadow-xl relative group"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rose-300/30 rounded-full" />
                <div className="flex items-center justify-center h-full">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="text-5xl"
                  >
                    👤
                  </motion.div>
                </div>
                <div className="absolute top-3 right-3 w-2 h-2 bg-rose-200 rounded-full animate-bounce" />
              </motion.div>

              {/* Extra small accent card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.15, rotate: -10 }}
                className="col-span-3 row-span-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl overflow-hidden shadow-lg relative"
              >
                <div className="flex items-center justify-center h-full">
                  <div className="text-3xl">✨</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right - Content */}
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
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-bold mb-6 text-sm shadow-lg"
              >
                About GDGoC WOW
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Welcome to Google Developer Groups on Campus{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Wonder of Wonders
                </span>{' '}
                <span className="text-yellow-400">✨</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-700 text-lg mb-4 leading-relaxed"
              >
                GDGoC WoW is an extraordinary annual celebration that brings together the brightest minds from across
                our global developer community.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                Join us for an incredible journey filled with learning, innovation, and networking opportunities that
                will inspire and empower you. No matter your skill level, background, or path, we're in this together —
                we're building more than just code — we're building the future!
              </motion.p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.9 + idx * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`${stat.color} text-white rounded-2xl p-6 text-center shadow-lg cursor-pointer relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm font-semibold opacity-90">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}