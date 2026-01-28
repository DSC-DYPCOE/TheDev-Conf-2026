import { Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                              linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-3">GDGC DYPCOE</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Google Developer Groups on Campus - DYPCOE is a student-led community focused on learning and sharing knowledge about Google technologies.
            </p>
            <div className="flex items-start gap-2 text-gray-600 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>Dr. D. Y. Patil College of Engineering, Pune, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Events', 'Team', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:gdgc@dypcoe.ac.in"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm group"
              >
                <Mail size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>gdgc@dypcoe.ac.in</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm group"
              >
                <Phone size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 12345 67890</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 py-6">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-500 hover:text-blue-600 transition-all hover:scale-110 relative z-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6 relative z-10">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} GDGC DYPCOE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}