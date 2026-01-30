import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  borderColor: string;
}

export default function Home() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Aanchal Mishra",
      title: "Developer Advocate",
      company: "POSTMAN",
      image:
        "https://images.unsplash.com/photo-1768593049340-6e50351b4b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      borderColor: "border-red-500",
    },
    {
      id: 2,
      name: "Megha Arora",
      title: "DevRel Strategist & Founder",
      company: "DevRelSquad",
      image: "/images/speaker2.jpg",
      borderColor: "border-green-500",
    },
    {
      id: 3,
      name: "Saurav Jain",
      title: "Senior Developer Community Manager",
      company: "Apify",
      image: "/images/speaker3.jpg",
      borderColor: "border-orange-500",
    },
    {
      id: 4,
      name: "Bhawna Chauhan",
      title: "Developer Relations Engineer",
      company: "QuillAI Network",
      image: "/images/speaker4.jpg",
      borderColor: "border-blue-500",
    },
    {
      id: 5,
      name: "Shagufta Bangi",
      title: "Customer Engineer",
      company: "Google Cloud",
      image: "/images/speaker5.jpg",
      borderColor: "border-blue-500",
    },
    {
      id: 6,
      name: "Savinder Puri",
      title: "DevOps Evangelist",
      company: "CloudOps",
      image: "/images/speaker6.jpg",
      borderColor: "border-orange-500",
    },
    {
      id: 7,
      name: "Mahaveer Muttha",
      title: "Co-founder",
      company: "Tech Startup",
      image: "/images/speaker7.jpg",
      borderColor: "border-green-500",
    },
    {
      id: 8,
      name: "Pranoti Nandurkar",
      title: "Technical Architect",
      company: "Enterprise Solutions",
      image: "/images/speaker8.jpg",
      borderColor: "border-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Speakers</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from industry experts and thought leaders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`bg-white rounded-lg border-4 ${speaker.borderColor} shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 align-center text-center">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm font-medium mb-0.5 text-blue-600">
                  {speaker.title}
                </p>
                <p className="text-sm text-gray-500">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}