'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'TEAM', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'AGENDA', href: '#agenda' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="flex justify-center items-center px-4">
        {/* Center aligned container */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-base shrink-0">
            {/* <Image
              src="/images/google-logo.jpeg"
              alt="GDGoC Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
            {/* <span className="text-sm font-semibold hidden sm:inline">gDi</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-3 text-sm font-bold text-gray-800 border-2 border-gray-800 rounded-full hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600 transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 ml-auto"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm mt-0 space-y-3 p-5 border-t border-gray-200 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-5 py-3 text-sm font-bold text-gray-800 border-2 border-gray-800 rounded-full text-center hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}