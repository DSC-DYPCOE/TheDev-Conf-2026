export default function CallForSpeakers() {
  return (
    <section
      id="call-for-speakers"
      className="relative py-20 md:py-32 bg-white overflow-hidden font-mono"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                            linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and Subtitle */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-green-600 mb-4 uppercase tracking-tighter">
              Call for
              <br />
              Speakers
            </h2>
            <p className="text-xl text-black font-bold uppercase tracking-widest">
              Join the WOW revolution.
            </p>
          </div>

          {/* Right side - Main content with decorative shapes */}
          <div className="relative">
            {/* Decorative shapes background - Kept original functionality */}
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                className="text-green-600"
              >
                <g>
                  <path
                    d="M 40 30 L 100 30 L 100 60 L 70 60 L 70 100 L 100 100 L 100 130 L 40 130 L 40 100 L 10 100 L 10 60 L 40 60 Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M 45 35 L 95 35 L 95 55 L 65 55 L 65 95 L 95 95 L 95 125 L 45 125 L 45 95 L 15 95 L 15 55 L 45 55 Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-20">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="text-pink-500"
              >
                <g>
                  <path
                    d="M 35 20 L 85 20 L 85 45 L 60 45 L 60 85 L 85 85 L 85 110 L 35 110 L 35 85 L 10 85 L 10 45 L 35 45 Z"
                    fill="#8B1D5F"
                    opacity="0.6"
                  />
                  <path
                    d="M 35 25 L 85 25 L 85 50 L 60 50 L 60 85 L 85 85 L 85 110 L 35 110 L 35 85 L 10 85 L 10 50 L 35 50 Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </div>

            <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-12">
              <div className="flex gap-2 transform -rotate-12">
                <div className="w-16 h-20 bg-cyan-500 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6"></div>
                <div className="w-16 h-20 bg-cyan-600 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6 translate-y-4"></div>
              </div>
            </div>

            {/* Main Content Box - Updated Appearance */}
            <div className="relative z-20 bg-white rounded-[2.5rem] p-8 md:p-12 border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
                  <span className="text-pink-600">Your Voice</span>
                  <span className="text-black"> </span>
                  <span className="text-purple-600">Matters</span>
                </h3>

                <p className="text-black text-lg leading-relaxed mb-8 max-w-xl mx-auto font-bold">
                  Share your extraordinary journey and inspire the next
                  generation of innovators. Your unique perspective could spark
                  the next technological revolution.
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-8 rounded-full border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-lg uppercase tracking-widest">
                  Submit Your Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
