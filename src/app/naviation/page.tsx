"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "SPEAKERS", href: "#speakers" },
    // { label: "SPONSORS", href: "#sponsors" },
    { label: "ABOUT", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "AGENDA", href: "#register" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: any, href: string) => {
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 88; // approximate fixed nav height
      const y = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-white/30 font-mono`}
    >
      <div className="flex justify-center items-center px-4 py-3">
        <div className="flex items-center gap-5 md:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-base shrink-0"
          ></Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e as any, item.href)}
                className="px-4 py-2 text-sm font-black text-black border-[3px] border-black rounded-full bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 ml-auto text-black"
          >
            {isOpen ? (
              <X size={24} strokeWidth={3} />
            ) : (
              <Menu size={24} strokeWidth={3} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`absolute top-full left-0 right-0 mt-0 space-y-3 p-4 border-t-4 border-black md:hidden ${isScrolled
                ? "backdrop-blur-md bg-white/90"
                : "backdrop-blur-sm bg-white/80"
              }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e as any, item.href)}
                className="block px-4 py-3 text-sm font-black text-black border-[3px] border-black rounded-full text-center bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
