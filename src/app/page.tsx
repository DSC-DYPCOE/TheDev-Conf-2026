import Navigation from "./naviation/page"
import Hero from "./hero/page"
import CallForSpeakers from "./callforspeakers/page"
import Speakers from "./speakers/page"
import About from "./about/page"
import FAQ from "./faq/page"
import Footer from "./footer/page"
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans pt-20">
      <Navigation />
      <Hero />
      <CallForSpeakers />
      <Speakers />
      <About />
      <FAQ />
      <Footer />
    </main>
  )
}
