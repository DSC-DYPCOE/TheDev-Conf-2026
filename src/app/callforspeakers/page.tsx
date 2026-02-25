'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Sparkles, Star, Zap, ChevronRight } from 'lucide-react'

// Sponsor data with Google/GDG colors
const sponsors = [
  {
    name: 'Sessionize',
    role: 'Call for Proposals',
    logo: '/sponsors/sessionize.png',
    color: 'blue', // Google Blue
  },
  {
    name: 'KonfHub',
    role: 'Ticketing Partner',
    logo: '/sponsors/konfhub.png',
    color: 'red', // Google Red
  },
  {
    name: 'Event Door',
    role: 'Swags Partner',
    logo: '/sponsors/eventdoor logo.png',
    color: 'yellow', // Google Yellow
  },
  {
    name: 'The API Community',
    role: 'Ecosystem Partner',
    logo: '/sponsors/API.png',
    color: 'green', // Google Green
  },
]

// Community partners with GDG-style colors
const communities = [
  {
    name: 'GDG Pune',
    logo: '/sponsors/gdg-pune.png',
    color: 'blue',
    bgColor: '#4285F4',
  },
  {
    name: 'Pune Dao',
    logo: '/sponsors/punedao.jpg',
    color: 'red',
    bgColor: '#EA4335',
  },
  {
    name: 'Flutter Pune',
    logo: '/sponsors/Flutter.jpg',
    color: 'green',
    bgColor: '#34A853',
  },
  {
    name: 'Girls Leading Tech',
    logo: '/sponsors/girls.png',
    color: 'yellow',
    bgColor: '#FBBC05',
  },
  {
    name: 'SWOC',
    logo: '/sponsors/swoc.png',
    color: 'green',
    bgColor: '#34A853',
  },
  {
    name: 'API',
    logo: '/sponsors/api.png',
    color: 'blue',
    bgColor: '#4285F4',
  },
]

// Floating symbols with Google colors - responsive positioning
const floatingSymbols = [
  { symbol: '<>', top: '5%', left: '2%', delay: 0, color: 'text-[#4285F4]', opacity: 'opacity-30 md:opacity-40' },
  { symbol: '{}', top: '15%', right: '3%', delay: 0.3, color: 'text-[#EA4335]', opacity: 'opacity-30 md:opacity-40' },
  { symbol: '/*', top: '30%', left: '8%', delay: 0.6, color: 'text-[#FBBC05]', opacity: 'opacity-40 md:opacity-50' },
  { symbol: '*/', top: '45%', right: '7%', delay: 0.9, color: 'text-[#34A853]', opacity: 'opacity-30 md:opacity-40' },
  { symbol: '&&', top: '60%', left: '4%', delay: 1.2, color: 'text-[#4285F4]', opacity: 'opacity-30 md:opacity-40' },
  { symbol: '||', top: '75%', right: '5%', delay: 1.5, color: 'text-[#EA4335]', opacity: 'opacity-30 md:opacity-40' },
  { symbol: '??', top: '85%', left: '9%', delay: 1.8, color: 'text-[#FBBC05]', opacity: 'opacity-40 md:opacity-50' },
  { symbol: '!!', top: '95%', right: '2%', delay: 2.1, color: 'text-[#34A853]', opacity: 'opacity-30 md:opacity-40' },
]

export default function SponsorsPartners() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
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

  const getSymbolTransform = (index: number) => {
    if (!isClient || typeof window === 'undefined') return {}

    const xMultiplier = 0.02 + index * 0.003
    const yMultiplier = 0.02 + index * 0.003
    const rotation = Math.sin(index) * 10

    return {
      transform: `translate(${(mousePosition.x - window.innerWidth / 2) * xMultiplier}px, ${(mousePosition.y - window.innerHeight / 2) * yMultiplier
        }px) rotate(${rotation}deg)`,
    }
  }

  // Google color mapping
  const googleColors = {
    blue: {
      border: 'border-[#4285F4]',
      bg: 'bg-[#4285F4]',
      text: 'text-[#4285F4]',
      light: 'bg-[#4285F4]/10',
      hover: 'hover:bg-[#4285F4]',
    },
    red: {
      border: 'border-[#EA4335]',
      bg: 'bg-[#EA4335]',
      text: 'text-[#EA4335]',
      light: 'bg-[#EA4335]/10',
      hover: 'hover:bg-[#EA4335]',
    },
    yellow: {
      border: 'border-[#FBBC05]',
      bg: 'bg-[#FBBC05]',
      text: 'text-[#FBBC05]',
      light: 'bg-[#FBBC05]/10',
      hover: 'hover:bg-[#FBBC05]',
    },
    green: {
      border: 'border-[#34A853]',
      bg: 'bg-[#34A853]',
      text: 'text-[#34A853]',
      light: 'bg-[#34A853]/10',
      hover: 'hover:bg-[#34A853]',
    },
  }

  const getColorClasses = (color: string, type: 'border' | 'bg' | 'text' | 'light' | 'hover' = 'border') => {
    return googleColors[color as keyof typeof googleColors]?.[type] || googleColors.blue[type]
  }

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }))
  }

  return (
    <section
      ref={sectionRef}
      id="sponsors-partners"
      className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-32 font-mono"
    >
      {/* Floating symbols in background (mouse parallax) - hidden on mobile for better performance */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          {floatingSymbols.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.color} ${item.opacity} font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl select-none`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                ...getSymbolTransform(index),
                animation: `floatSymbol ${4 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
                textShadow: '1px 1px 0px rgba(0,0,0,0.1)',
              }}
            >
              {item.symbol}
            </div>
          ))}
          <Zap
            className="absolute top-20 left-[10%] text-[#FBBC05] opacity-20 lg:opacity-30"
            size={40}
            style={getSymbolTransform(2)}
          />
          <Star
            className="absolute bottom-32 right-[5%] text-[#EA4335] opacity-20 lg:opacity-30 fill-[#EA4335]"
            size={35}
            style={getSymbolTransform(4)}
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Responsive text sizes */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-[#4285F4] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full font-black border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm uppercase tracking-widest">
            <Sparkles size={14} className="sm:w-[18px] sm:h-[18px]" />
            Our Supporters
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-tighter">
            <span className="text-[#4285F4]">SPONSORS</span> &{' '}
            <span className="text-[#EA4335]">PARTNERS</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-bold uppercase tracking-wide px-2">
            Proudly supported by amazing organizations and communities driving the tech revolution.
          </p>
        </div>

        {/* Two Column Layout - Stack on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Left Column - Sponsors */}
          <div className="relative mb-6 lg:mb-0">
            {/* Decorative element - repositioned for mobile */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#FBBC05] rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0" />

            <div className="relative z-10">
              {/* Section label - responsive */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-[#4285F4] rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
                  SPONSORS
                </h3>
              </div>

              {/* Sponsors Grid - 2 columns on mobile, 2 columns on tablet/desktop */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="group bg-white border-2 sm:border-[3px] border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 flex flex-col items-center"
                  >
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 sm:mb-3 rounded-lg sm:rounded-xl border-2 sm:border-[3px] border-black flex items-center justify-center ${getColorClasses(
                        sponsor.color,
                        'light'
                      )}`}
                    >
                      {!imageErrors[sponsor.name] ? (
                        <Image
                          src={sponsor.logo}
                          alt={sponsor.name}
                          width={80}
                          height={80}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-lg"
                          onError={() => handleImageError(sponsor.name)}
                        />
                      ) : (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-lg border-2 border-black flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black">
                          {sponsor.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-center text-black mb-1 uppercase tracking-tight">
                      {sponsor.name}
                    </h4>
                    <p className="text-gray-700 text-center font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                      {sponsor.role}
                    </p>
                    <div className="mt-1 sm:mt-2">
                      <span
                        className={`inline-block w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full border border-black ${getColorClasses(
                          sponsor.color,
                          'bg'
                        )}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Community Partners */}
          <div className="relative">
            {/* Decorative element - repositioned for mobile */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[#34A853] rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0" />

            <div className="relative z-10">
              {/* Section label - responsive */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-[#EA4335] rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
                  COMMUNITY PARTNERS
                </h3>
              </div>

              {/* Communities Grid - Responsive grid that adapts to screen size */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {/* Map through all communities in a single responsive grid */}
                {communities.map((community) => (
                  <div
                    key={community.name}
                    className="group bg-white border-2 sm:border-[3px] border-black rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex flex-col items-center text-center"
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg border-2 border-black flex items-center justify-center mb-1 sm:mb-2"
                      style={{ backgroundColor: community.bgColor + '15' }}
                    >
                      {!imageErrors[community.name] ? (
                        <Image
                          src={community.logo}
                          alt={community.name}
                          width={64}
                          height={64}
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain rounded-md"
                          onError={() => handleImageError(community.name)}
                        />
                      ) : (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-md border border-black flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-black">
                          {community.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-[10px] sm:text-xs md:text-sm font-black text-black uppercase tracking-tight leading-tight px-1">
                      {community.name}
                    </h4>
                    <div
                      className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full mt-1 sm:mt-1.5"
                      style={{ backgroundColor: community.bgColor }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA - Responsive */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24 relative">
          {/* Decorative shapes - hidden on mobile */}
          <div className="hidden sm:block absolute top-0 left-0 transform -translate-x-12 -translate-y-12 opacity-30">
            <svg width="60" height="60" viewBox="0 0 80 80" className="text-[#34A853] w-12 sm:w-16 md:w-20">
              <rect x="10" y="10" width="60" height="60" fill="currentColor" />
            </svg>
          </div>
          <div className="hidden sm:block absolute bottom-0 right-0 transform translate-x-8 translate-y-8 opacity-30">
            <svg width="40" height="40" viewBox="0 0 60 60" className="text-[#EA4335] w-8 sm:w-12 md:w-16">
              <circle cx="30" cy="30" r="20" fill="currentColor" />
            </svg>
          </div>

          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-4 sm:mb-5 md:mb-6 flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-widest px-2">
            <Star className="text-[#FBBC05] fill-[#FBBC05] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            Want to support the revolution?
            <Star className="text-[#FBBC05] fill-[#FBBC05] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </p>
          <button className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white font-black py-3 sm:py-4 px-8 sm:px-10 md:px-12 rounded-full border-2 sm:border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest inline-flex items-center gap-1 sm:gap-2 group">
            Become a Sponsor
            <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSymbol {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        
        @media (min-width: 768px) {
          @keyframes floatSymbol {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        }
      `}</style>
    </section>
  )
}