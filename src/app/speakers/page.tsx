import Image from 'next/image'

interface Speaker {
  id: number
  name: string
  title: string
  company: string
  image: string
}

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'Aanchal Mishra',
      title: 'Developer Advocate',
      company: 'POSTMAN',
      image: '/images/speaker1.jpg',
    },
    {
      id: 2,
      name: 'Megha Arora',
      title: 'DevRel Strategist & Founder',
      company: 'DevRelSquad',
      image: '/images/speaker2.jpg',
    },
    {
      id: 3,
      name: 'Saurav Jain',
      title: 'Senior Developer Community Manager',
      company: 'Apify',
      image: '/images/speaker3.jpg',
    },
    {
      id: 4,
      name: 'Bhawna Chauhan',
      title: 'Developer Relations Engineer',
      company: 'QuillAI Network',
      image: '/images/speaker4.jpg',
    },
    {
      id: 5,
      name: 'Shagufta Bangi',
      title: 'Customer Engineer',
      company: 'Google Cloud',
      image: '/images/speaker5.jpg',
    },
    {
      id: 6,
      name: 'Savinder Puri',
      title: 'DevOps Evangelist',
      company: 'CloudOps',
      image: '/images/speaker6.jpg',
    },
    {
      id: 7,
      name: 'Mahaveer Muttha',
      title: 'Co-founder',
      company: 'Tech Startup',
      image: '/images/speaker7.jpg',
    },
    {
      id: 8,
      name: 'Pranoti Nandurkar',
      title: 'Technical Architect',
      company: 'Enterprise Solutions',
      image: '/images/speaker8.jpg',
    },
  ]

  return (
    <section id="speakers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Speakers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from industry experts and thought leaders
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex flex-col items-center text-center">
              {/* Speaker Image */}
              <div className="w-40 h-40 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-4 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Speaker Info */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-1">{speaker.title}</p>
              <p className="text-gray-600 text-xs">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
