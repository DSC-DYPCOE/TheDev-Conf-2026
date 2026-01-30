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
        className={`min-h-screen bg-white font-sans pt-20 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <Navigation />
        <Hero />
        <Register />
        <CallForSpeakers />
        <Speakers />
        <About />
        <FAQ />
        <Footer />
      </main>

      {/* Loader */}
      {loading && <GDGLoader variant="modern" />}
    </>
  );
}