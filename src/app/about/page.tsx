export default function About() {
  const stats = [
    { number: '10000+', label: 'Participants', color: 'bg-red-500' },
    { number: '25+', label: 'Sessions', color: 'bg-blue-600' },
    { number: '35+', label: 'Speakers', color: 'bg-green-600' },
    { number: '2', label: 'Days', color: 'bg-amber-400' },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Decorative and Description */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-8 top-0 w-24 h-48 bg-blue-600 rounded-r-3xl opacity-20" />
            <div className="absolute bottom-0 -left-16 w-32 h-32 bg-blue-600 rounded-tr-3xl opacity-10" />

            <div className="relative z-10 bg-white rounded-2xl p-8 border-2 border-blue-400 shadow-lg">
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold mb-6 text-sm">
                About GDGoC WOW
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Google Developer Groups on Campus Wonder of Wonders - where innovation meets community!{' '}
                <span className="text-yellow-400">✨</span>
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                GDGoC WoW is an extraordinary annual celebration that brings together the brightest minds from across
                our global developer community.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Join us for an incredible journey filled with learning, innovation, and networking opportunities that
                will inspire and empower you. No matter your skill level, background, or path, we're in this together -
                we're building more than just code - we're building the future!
              </p>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.color} text-white rounded-3xl p-8 flex flex-col items-center justify-center min-h-48 relative overflow-hidden`}
              >
                {/* Decorative puzzle notches */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 rounded-full" />
                <div className="absolute -bottom-8 right-4 w-20 h-20 bg-blue-100 rounded-full opacity-30" />
                <div className="absolute top-4 -right-8 w-16 h-16 bg-blue-100 rounded-full opacity-30" />

                <div className="relative z-10 text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-base md:text-lg font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
