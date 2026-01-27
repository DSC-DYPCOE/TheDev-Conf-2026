'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Sparkles, Zap, Star } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Google Developer Groups on Campus Pune's WOW event?",
    answer:
      'GDGoC WoW is an extraordinary annual celebration that brings together the brightest minds from across the global developer community. It\'s a unique platform for learning, innovation, and networking.',
  },
  {
    id: 2,
    question: 'When and where will the WOW event take place?',
    answer:
      'The event will be held on March 15-16, 2024 at the Pune Convention Center. Registration starts at 8:00 AM with sessions beginning at 9:00 AM.',
  },
  {
    id: 3,
    question: 'How can I register for the event?',
    answer:
      'You can register for the event by clicking the "Register Now" button on our website. Registration is free but limited to the first 10,000 participants. Early registration is encouraged.',
  },
  {
    id: 4,
    question: 'What topics will be covered at the WOW event?',
    answer:
      'We\'ll cover a wide range of topics including Web Development, Mobile Development, Cloud Computing, AI/ML, Flutter, Firebase, Google Cloud, and many more cutting-edge technologies.',
  },
  {
    id: 5,
    question: 'Will there be networking opportunities?',
    answer:
      'Absolutely! We have dedicated networking sessions, lunch breaks, and evening meetups where you can connect with fellow developers, speakers, and industry experts.',
  },
]

// Floating placeholder symbols with Google colors
const floatingSymbols = [
  { symbol: '<>', top: '10%', left: '5%', delay: 0, color: 'text-blue-500' },
  { symbol: '{}', top: '20%', right: '8%', delay: 0.5, color: 'text-red-500' },
  { symbol: '</>', top: '35%', left: '3%', delay: 1, color: 'text-yellow-400' },
  { symbol: '##', top: '50%', right: '5%', delay: 1.5, color: 'text-green-500' },
  { symbol: '%%', top: '65%', left: '7%', delay: 2, color: 'text-blue-600' },
  { symbol: '$$$', top: '80%', right: '10%', delay: 2.5, color: 'text-red-600' },
  { symbol: '<>', top: '45%', left: '92%', delay: 3, color: 'text-yellow-500' },
  { symbol: '{}', top: '75%', left: '95%', delay: 3.5, color: 'text-green-600' },
  { symbol: '##', top: '15%', right: '20%', delay: 1.2, color: 'text-red-400' },
  { symbol: '</>', top: '60%', right: '15%', delay: 2.8, color: 'text-blue-400' },
  { symbol: '%%', top: '40%', left: '10%', delay: 1.8, color: 'text-yellow-600' },
  { symbol: '$$$', top: '85%', left: '15%', delay: 3.2, color: 'text-green-400' },
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isClient])

  // Helper function to calculate transform values safely
  const getTransformStyle = (xMultiplier: number, yMultiplier: number, rotation?: number) => {
    if (!isClient || typeof window === 'undefined') {
      return {}
    }
    
    const baseTransform = `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier}px)`
    
    if (rotation) {
      return { transform: `${baseTransform} rotate(${rotation}deg)` }
    }
    
    return { transform: baseTransform }
  }

  // Helper function for floating symbols transform
  const getSymbolTransform = (index: number) => {
    if (!isClient || typeof window === 'undefined') {
      return {}
    }
    
    const xMultiplier = 0.015 + index * 0.005
    const yMultiplier = 0.015 + index * 0.005
    const rotation = Math.sin(index) * 15
    
    return {
      transform: `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier}px) rotate(${rotation}deg)`,
    }
  }

  // Helper function for shape transforms
  const getShapeTransform = (xMultiplier: number, yMultiplier: number, additional?: string) => {
    if (!isClient || typeof window === 'undefined') {
      return {}
    }
    
    const baseTransform = `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier}px)`
    
    if (additional) {
      return { transform: `${baseTransform} ${additional}` }
    }
    
    return { transform: baseTransform }
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-400 to-green-500 py-16 md:py-24"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large green blob - top left */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full opacity-30 blur-3xl animate-blob" />
        
        {/* Medium teal blob - top right */}
        <div className="absolute top-20 -right-32 w-80 h-80 bg-teal-600 rounded-full opacity-25 blur-3xl animate-blob animation-delay-2000" />
        
        {/* Large mint blob - bottom left */}
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-green-400 rounded-full opacity-40 blur-3xl animate-blob animation-delay-4000" />
        
        {/* Medium blob - center right */}
        <div className="absolute top-1/2 -right-24 w-72 h-72 bg-emerald-600 rounded-full opacity-20 blur-3xl animate-blob animation-delay-3000" />
        
        {/* Small accent blobs */}
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-lime-400 rounded-full opacity-30 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-teal-500 rounded-full opacity-25 blur-2xl animate-blob animation-delay-1000" />
      </div>

      {/* Floating Icons with Mouse Interaction - Google Colors */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles
            className="absolute top-20 left-[10%] text-blue-500 opacity-70 transition-all duration-300 drop-shadow-lg"
            size={32}
            style={getTransformStyle(0.02, 0.02)}
          />
          <Zap
            className="absolute top-40 right-[15%] text-yellow-400 opacity-80 transition-all duration-500 drop-shadow-lg"
            size={28}
            style={getTransformStyle(-0.03, 0.03, 15)}
          />
          <Star
            className="absolute bottom-32 left-[20%] text-red-500 opacity-70 transition-all duration-700 drop-shadow-lg"
            size={24}
            style={getTransformStyle(0.025, -0.025)}
          />
          <Sparkles
            className="absolute bottom-48 right-[25%] text-green-500 opacity-60 transition-all duration-400 drop-shadow-lg"
            size={20}
            style={getTransformStyle(-0.015, 0.015)}
          />
          <Star
            className="absolute top-[60%] left-[15%] text-blue-600 opacity-70 transition-all duration-600 drop-shadow-lg"
            size={26}
            style={getTransformStyle(0.035, 0.035)}
          />
          <Zap
            className="absolute top-[30%] right-[10%] text-red-600 opacity-70 transition-all duration-800 drop-shadow-lg"
            size={22}
            style={getTransformStyle(-0.02, -0.02, -20)}
          />
        </div>
      )}

      {/* Floating Code Symbols - Interactive with Google Colors */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingSymbols.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.color} font-mono text-2xl md:text-4xl font-bold opacity-60 transition-all duration-500 drop-shadow-lg hover:opacity-90`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                ...getSymbolTransform(index),
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
                textShadow: '0 0 10px rgba(255,255,255,0.3)',
              }}
            >
              {item.symbol}
            </div>
          ))}
        </div>
      )}

      {/* Decorative Shapes with Mouse Interaction - Google Colors */}
      {isClient && (
        <>
          <div
            className="absolute top-10 right-10 w-20 h-20 border-4 border-blue-500 opacity-40 rounded-full animate-spin-slow transition-transform duration-700"
            style={getShapeTransform(-0.04, -0.04, `rotate(${mousePosition.x * 0.1}deg)`)}
          />
          <div
            className="absolute bottom-20 left-10 w-16 h-16 border-4 border-red-500 opacity-50 rounded-lg animate-spin-slow animation-delay-2000 transition-transform duration-500"
            style={getShapeTransform(0.03, 0.03, `rotate(${mousePosition.y * 0.1}deg)`)}
          />
          <div
            className="absolute top-1/2 left-[5%] w-12 h-12 bg-yellow-400 opacity-30 rounded-full transition-transform duration-600"
            style={{
              transform: isClient ? `translate(${(mousePosition.x - window.innerWidth / 2) * 0.025}px, ${(mousePosition.y - window.innerHeight / 2) * -0.025}px) scale(${1 + Math.sin(mousePosition.x * 0.01) * 0.2})` : 'none',
            }}
          />
          <div
            className="absolute top-[25%] right-[30%] w-14 h-14 bg-green-500 opacity-25 rounded-lg transition-transform duration-700"
            style={getShapeTransform(-0.03, 0.03, 'rotate(45deg)')}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-bold mb-6 text-sm border border-white border-opacity-30 animate-fade-in">
            <Sparkles size={16} className="animate-pulse text-yellow-300" />
            FAQ's
            <Sparkles size={16} className="animate-pulse animation-delay-500 text-yellow-300" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
            WE GOT ANSWERS
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Find answers to the most asked questions about GDGoC WOW Pune event
          </p>
        </div>

        {/* Category Label with Better Contrast */}
        <div className="mb-6 animate-fade-in-up animation-delay-400">
          <div className="inline-flex items-center gap-3 bg-emerald-900 bg-opacity-40 backdrop-blur-sm px-6 py-3 rounded-xl border-l-4 border-yellow-400 shadow-lg">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide drop-shadow-md">
              EVENT INFO:
            </h3>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.1}s both`,
              }}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === faq.id ? null : faq.id)
                }
                className="w-full text-left bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-opacity-50 relative overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />

                <div className="flex items-center justify-between gap-4 relative z-10">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>

                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 group-hover:rotate-180 transition-all duration-300">
                    <ChevronDown
                      size={20}
                      className={`text-white transition-transform duration-300 ${
                        expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === faq.id
                      ? 'max-h-96 mt-4 pt-4 border-t border-slate-200'
                      : 'max-h-0'
                  }`}
                >
                  <p className="text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center animate-fade-in-up animation-delay-800">
          <p className="text-white text-lg font-semibold mb-6 flex items-center justify-center gap-2">
            <Sparkles size={20} className="animate-pulse text-yellow-300" />
            Have more Questions?
            <Sparkles size={20} className="animate-pulse animation-delay-500 text-yellow-300" />
          </p>
          <button className="group relative bg-white text-emerald-600 font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-emerald-50 hover:scale-105 hover:shadow-2xl transform overflow-hidden">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white to-transparent opacity-30" />
          </button>
        </div>
      </div>

      {/* Add keyframes animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-2500 {
          animation-delay: 2.5s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}