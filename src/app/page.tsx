"use client";

import { useEffect, useState } from "react";
import Navigation from "./naviation/page";
import Hero from "./hero/page";
import CallForSpeakers from "./callforspeakers/page";
import Speakers from "./speakers/page";
import About from "./about/page";
import FAQ from "./faq/page";
import Footer from "./footer/page";
import GDGLoader from "./Loader/page";
import Register from "./Register/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 2000); // 2 seconds loader time

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* Main Content */}
      <main
        className={`relative min-h-screen bg-gray-50 font-sans transition-opacity duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Navigation - Higher z-index */}
        <Navigation />

        {/* Global Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-20">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 95%, #4285F4 100%),
                                linear-gradient(180deg, transparent 95%, #DB4437 100%)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Content with proper z-index */}
        <div className="relative z-10 pt-20">
          <Hero />
          <Register />
          <CallForSpeakers />
          <Speakers />
          <About />
          <FAQ />
          <Footer />
        </div>
      </main>

      {/* Loader */}
      {loading && <GDGLoader variant="modern" />}
    </>
  );
}