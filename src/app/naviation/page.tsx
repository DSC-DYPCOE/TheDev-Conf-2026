'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="flex justify-center items-center px-4">
        {/* Center aligned container */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-sm shrink-0">
            <Image
              src="/images/google-logo.jpeg"
              alt="GDGoC Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xs font-semibold hidden sm:inline">gDi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs font-bold text-gray-800 border-2 border-gray-800 rounded-full hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600 transition-all whitespace-nowrap"
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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white mt-0 space-y-2 p-4 border-t border-gray-200 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-xs font-bold text-gray-800 border-2 border-gray-800 rounded-full text-center hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600"
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
