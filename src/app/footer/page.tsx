import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t-[4px] border-white relative overflow-hidden font-mono">
      {/* Grid Background - Adjusted for Dark Mode (White lines, very low opacity) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px),
                            linear-gradient(180deg, #fff 1px, transparent 1px)`,
          backgroundSize: "75px 75px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
              GDGC <span className="text-blue-400">DYPCOE</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-bold">
              Google Developer Groups OnCampus - DYPCOE is a student-led
              community focused on learning and sharing knowledge about Google
              technologies.
            </p>
            <div className="flex items-start gap-3 text-black text-sm font-bold bg-yellow-400 border-2 border-white p-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <span>
                Dr. D. Y. Patil College of Engineering, Pune, Maharashtra
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 uppercase tracking-widest border-b-4 border-green-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Events", "Team", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 font-bold transition-colors text-sm inline-block uppercase hover:translate-x-1 transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-white mb-6 uppercase tracking-widest border-b-4 border-red-500 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:gdgc@dypcoe.ac.in"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all text-sm font-bold group"
              >
                <div className="p-2 border-2 border-white bg-black group-hover:bg-blue-900/50 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-colors">
                  <Mail size={16} className="flex-shrink-0 text-white" />
                </div>
                <span>dsc.dypcoe@gmail.com</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all text-sm font-bold group"
              >
                <div className="p-2 border-2 border-white bg-black group-hover:bg-green-900/50 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-colors">
                  <Phone size={16} className="flex-shrink-0 text-white" />
                </div>
                <span>+91 9347221212</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media - Dark Mode Stamps */}
        <div className="flex justify-center gap-4 py-8 border-y-4 border-white mb-8">
          {[
            {
              icon: Github,
              href: "https://github.com/DSC-DYPCOE",
              label: "GitHub",
              hover: "hover:bg-gray-800",
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              label: "Instagram",
              hover: "hover:bg-pink-900/40",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/dsc-dypcoe/",
              label: "LinkedIn",
              hover: "hover:bg-blue-900/40",
            },
            {
              icon: Twitter,
              href: "https://x.com/DSC_DYPCOE",
              label: "Twitter",
              hover: "hover:bg-sky-900/40",
            },
          ].map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`p-3 border-[3px] border-white bg-black text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ${hover}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} strokeWidth={2.5} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-white font-black text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} GDGC DYPCOE. Built for{" "}
            <span className="text-blue-400">Impact</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
