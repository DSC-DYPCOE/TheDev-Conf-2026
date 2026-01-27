'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set event date - example: March 15, 2024
      const targetDate = new Date('2024-03-15T09:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => String(value).padStart(2, '0')

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-12 pb-16 md:pt-8 md:pb-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-4 items-center h-full">
          {/* Left side - Large Hero Illustration */}
          <div className="relative flex items-center justify-center md:min-h-96">
            <Image
              src="/public/images/gdg-pune-hero.jpeg"
              alt="GDG Pune WOW event illustration"
              width={600}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center gap-8 md:pl-8">
            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 leading-tight">
                <span className="text-red-500">Google</span>
                <span className="text-blue-600"> Developer</span>
                <span className="text-cyan-500"> Groups</span>
                <span className="text-gray-900"> on Campus </span>
                <span className="text-green-600">पुणे</span>
              </h1>
              <p className="text-gray-700 text-lg font-medium mb-4">Presents</p>
            </div>

            {/* WOW Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/public/images/wow-logo.jpg"
                alt="WOW Logo"
                width={300}
                height={150}
                className="w-80 h-auto object-contain"
              />
            </div>

            {/* Event Name in Marathi */}
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-green-700">
                पुणे तेयो काय उणो
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 my-6">
              <div className="bg-blue-600 text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold">{formatTime(timeLeft.days)}</div>
                <div className="text-xs md:text-sm mt-1 font-semibold">Days</div>
              </div>
              <div className="bg-red-600 text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold">{formatTime(timeLeft.hours)}</div>
                <div className="text-xs md:text-sm mt-1 font-semibold">Hours</div>
              </div>
              <div className="bg-yellow-500 text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold">{formatTime(timeLeft.minutes)}</div>
                <div className="text-xs md:text-sm mt-1 font-semibold">Minutes</div>
              </div>
              <div className="bg-green-600 text-white rounded-xl p-4 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold">{formatTime(timeLeft.seconds)}</div>
                <div className="text-xs md:text-sm mt-1 font-semibold">Seconds</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition-colors shadow-md">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
