'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

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

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden bg-emerald-100 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full font-bold mb-4 text-sm">
            FAQ's
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">Got Any Questions?</h2>
          <p className="text-gray-700 text-lg">Find answers to the most asked questions about GDGoC WOW Pune event</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <button
              key={faq.id}
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              className="w-full text-left bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-emerald-400 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <Heart
                  size={24}
                  className={`flex-shrink-0 transition-colors ${
                    expandedId === faq.id ? 'fill-red-500 text-red-500' : 'text-red-500'
                  }`}
                />
              </div>

              {expandedId === faq.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-800 font-semibold mb-4">Have more Questions?</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
