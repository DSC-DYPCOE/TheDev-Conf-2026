import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-emerald-100 border-t-2 border-emerald-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                GD
              </div>
              GDGoC Pune
            </h3>
            <p className="text-gray-700">
              Google Developer Groups on Campus - Building the future of technology through community and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#speaker" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Get In Touch</h4>
            <p className="text-gray-700 mb-4">Have questions? We'd love to hear from you!</p>
            <a
              href="mailto:contact@gdgocpune.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Social Media and Contact Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Keep in touch with GDGoC Pune</h3>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4">
              <a
                href="mailto:contact@gdgocpune.com"
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>

            <p className="text-gray-600 text-sm text-center sm:text-left flex-1">
              Follow us on social media for the latest updates, announcements, and behind-the-scenes content from GDGoC
              WOW 2024.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Google Developer Groups on Campus Pune. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Google Developer Groups on Campus is a Google-supported initiative by students for students.
          </p>
        </div>
      </div>
    </footer>
  )
}
