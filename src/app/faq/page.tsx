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
    question: "What is The Dev Summit 2026?",
    answer:
      "The Dev Summit 2026 is a premier annual developer conference that brings together developers, tech leaders, and innovators from across the ecosystem. It's a platform for learning cutting-edge technologies, hands-on workshops, and networking with industry experts.",
  },
  {
    id: 2,
    question: 'When and where will The Dev Summit take place?',
    answer:
      'The summit will be held from 26 Feb to 28 Feb, 2026 at D. Y. Patil College of Engineering Akurdi, Pune. Registration starts at 8:00 AM with sessions beginning at 9:00 AM each day.',
  },
  {
    id: 3,
    question: 'How can I register for the event?',
    answer:
      'You can register for the event by clicking the "Register Now" button on our website. Registration is free but limited to the first 500 participants. Early registration is recommended as spots fill up quickly.',
  },
  {
    id: 4,
    question: 'What topics will be covered at The Dev Summit?',
    answer:
      'We cover a wide range of topics including Web Development (React, Next.js), Mobile Development (Flutter, React Native), Cloud Computing (Google Cloud, AWS), AI/ML, DevOps, Open Source technologies, and emerging tech trends.',
  },
  {
    id: 5,
    question: 'Will I receive a certificate of participation?',
    answer: 'Yes! All registered attendees who complete the summit will receive a digital certificate of participation. Additionally, workshop participants who complete specific sessions will receive specialized certificates for those workshops.'
  }
]

const floatingSymbols = [
  { symbol: '<>', top: '10%', left: '5%', delay: 0, color: 'text-blue-600' },
  { symbol: '{}', top: '20%', right: '8%', delay: 0.5, color: 'text-red-600' },
  { symbol: '</>', top: '35%', left: '3%', delay: 1, color: 'text-yellow-500' },
  { symbol: '##', top: '50%', right: '5%', delay: 1.5, color: 'text-green-600' },
  { symbol: '%%', top: '65%', left: '7%', delay: 2, color: 'text-blue-700' },
  { symbol: '$$$', top: '80%', right: '10%', delay: 2.5, color: 'text-red-700' },
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
      if (section) section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isClient])

  const getTransformStyle = (xMultiplier: number, yMultiplier: number, rotation?: number) => {
    if (!isClient || typeof window === 'undefined') return {}
    const baseTransform = `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier}px)`
    return { transform: rotation ? `${baseTransform} rotate(${rotation}deg)` : baseTransform }
  }

  const getSymbolTransform = (index: number) => {
    if (!isClient || typeof window === 'undefined') return {}
    const xMultiplier = 0.015 + index * 0.005
    const yMultiplier = 0.015 + index * 0.005
    const rotation = Math.sin(index) * 15
    return {
      transform: `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier}px) rotate(${rotation}deg)`,
    }
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative overflow-hidden bg-white py-16 md:py-24 font-mono"
    >

      {/* Floating Icons & Symbols (Original Logic, Styled for Contrast) */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingSymbols.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.color} font-black text-2xl md:text-4xl opacity-40`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                ...getSymbolTransform(index),
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
              }}
            >
              {item.symbol}
            </div>
          ))}
          <Zap
            className="absolute top-40 right-[15%] text-yellow-500 opacity-40 transition-all duration-500"
            size={40}
            style={getTransformStyle(-0.03, 0.03, 15)}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 text-sm uppercase tracking-widest">
            <Sparkles size={16} />
            FAQ's
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-black mb-4 uppercase tracking-tighter">
            GOT <span className="text-green-600">QUESTIONS?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-bold uppercase tracking-tight">
            Find answers about The Dev Summit 2026
          </p>
        </div>

        {/* Category Label */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-white border-[3px] border-black px-6 py-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-black animate-pulse" />
            <h3 className="text-black text-lg font-black uppercase tracking-widest">
              SUMMIT INFO:
            </h3>
          </div>
        </div>

        {/* FAQ Items (Functional logic preserved, styles updated to Neubrutalism) */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group"
              style={{ animation: `fadeInUp 0.6s ease-out ${(index + 1) * 0.1}s both` }}
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className={`w-full text-left bg-white border-[3px] border-black rounded-2xl p-6 transition-all duration-300 relative overflow-hidden ${expandedId === faq.id
                  ? 'translate-x-1 translate-y-1 shadow-none bg-emerald-50'
                  : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                  }`}
              >
                <div className="flex items-center justify-between gap-4 relative z-10">
                  <h3 className="text-lg md:text-xl font-black text-black pr-4 uppercase tracking-tight">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center transition-all duration-300 ${expandedId === faq.id ? 'bg-yellow-400 rotate-180' : ''}`}>
                    <ChevronDown size={24} className="text-black" />
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedId === faq.id ? 'max-h-96 mt-4 pt-4 border-t-2 border-black' : 'max-h-0'
                    }`}
                >
                  <p className="text-black text-lg font-bold leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-black text-xl font-black mb-8 flex items-center justify-center gap-2 uppercase tracking-widest">
            <Star className="text-red-500 fill-red-500" />
            Still have questions?
            <Star className="text-red-500 fill-red-500" />
          </p>
          <a href='https://gdg.community.dev/gdg-on-campus-dy-patil-college-of-engineering-pune-india/'>
          <button className="bg-blue-600 text-white font-black py-5 px-12 rounded-full border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-xl uppercase tracking-widest">
            Contact Us
          </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  )
}
