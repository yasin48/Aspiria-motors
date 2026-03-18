import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  Brain, 
  Layers, 
  Heart, 
  Droplets, 
  Timer, 
  Shield, 
  Leaf, 
  Cpu, 
  RefreshCw
} from 'lucide-react';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata: Metadata = {
  title: 'Home | Aspiria Motors',
  description: 'Aspiria Motors is pioneering the next generation of hydrogen-powered mobility. Zero emissions. Zero compromise.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-primary/30 selection:text-white pb-0">
      
      {/* ═══════════════════════════════ */}
      {/* SECTION 1 — NAVBAR              */}
      {/* ═══════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-[#080808] border-b border-[#1a1a1a] h-[80px] flex items-center">
        <div className="container mx-auto px-6 w-full flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-3">
            <Image src="/aspiria-logo.png" alt="Aspiria Motors" width={40} height={40} className="rounded-full" />
            <span className="font-orbitron font-bold tracking-wide text-primary text-lg">
              ASPIRIA MOTORS
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#hero" className="text-sm font-inter text-gray-300 hover:text-primary transition-colors">Home</Link>
            <Link href="/technology" className="text-sm font-inter text-gray-300 hover:text-primary transition-colors">Technology</Link>
            <Link href="/about" className="text-sm font-inter text-gray-300 hover:text-primary transition-colors">About</Link>
            <Link href="#gallery" className="text-sm font-inter text-gray-300 hover:text-primary transition-colors">Gallery</Link>
            <Link href="#faq" className="text-sm font-inter text-gray-300 hover:text-primary transition-colors">FAQ</Link>
          </nav>
          
          <Link 
            href="/contact" 
            className="hidden md:inline-flex bg-primary text-black font-orbitron uppercase text-sm font-bold px-6 py-3 transition-colors hover:bg-white"
          >
            GET IN TOUCH
          </Link>
        </div>
      </header>

      <main>
        {/* ═══════════════════════════════ */}
        {/* SECTION 2 — HERO                */}
        {/* ═══════════════════════════════ */}
        <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
          {/* Full-width background image */}
          <Image
            src="/images/hero-bg.png"
            alt="Futuristic hydrogen-powered concept car in dramatic dark studio lighting with cyan accents"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay gradient: opaque left for text readability, translucent right to reveal car */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(5,13,26,0.95)] via-[rgba(5,13,26,0.8)] to-[rgba(5,13,26,0.4)]" />
          
          <div className="container mx-auto px-6 relative z-10 py-16">
            <div className="max-w-3xl">
              
              <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-6">
                THE FUTURE OF MOBILITY
              </span>
              
              <h1 className="flex flex-col gap-2 mb-6">
                <span className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
                  Igniting Drives,
                </span>
                <span className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
                  Inspiring Journeys.
                </span>
              </h1>
              
              <p className="font-inter text-[#aaa] text-base md:text-lg max-w-xl leading-relaxed mt-4 mb-8">
                Aspiria Motors is building next-generation hydrogen fuel cell vehicles powered by swappable hydrogen pods, intelligent AI, and immersive holographic interfaces. Zero emissions. Pure performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/technology" className="bg-primary text-black font-orbitron font-bold uppercase py-4 px-8 hover:bg-white transition-colors text-center">
                  EXPLORE TECHNOLOGY
                </Link>
                <Link href="/about" className="bg-transparent border border-primary text-primary font-orbitron font-bold uppercase py-4 px-8 hover:bg-primary/10 transition-colors text-center">
                  ABOUT US
                </Link>
              </div>

            </div>
          </div>
        </section>
        
        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.3)] to-transparent" />

        {/* ═══════════════════════════════ */}
        {/* SECTION 3 — TECHNOLOGY          */}
        {/* ═══════════════════════════════ */}
        <section id="services" className="bg-[#0d0d0d] py-24 lg:py-32 bg-[radial-gradient(rgba(0,200,255,0.07)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}>
          <div className="container mx-auto px-6 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                OUR TECHNOLOGY
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
                <span className="text-white">Pioneering </span>
                <span className="text-primary">Innovation</span>
              </h2>
              <p className="font-inter text-[#888] text-base leading-relaxed">
                Four breakthrough technologies that make Aspiria Motors the most advanced hydrogen vehicle platform on the planet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Hydrogen Fuel Cell Tech",
                  desc: "Our vehicles generate electricity through hydrogen and oxygen, emitting only water vapor. Zero emissions, maximum range, instant refueling through swappable hydrogen pods.",
                  icon: <Zap className="w-5 h-5 text-primary" />
                },
                {
                  title: "AI Driver Assistant",
                  desc: "Voice-controlled AI that provides predictive navigation, real-time safety alerts, and an adaptive driving experience that learns your preferences.",
                  icon: <Brain className="w-5 h-5 text-primary" />
                },
                {
                  title: "XR Holographic Interface",
                  desc: "Augmented reality windshield projections, holographic navigation, and an immersive cockpit experience that redefines human-vehicle interaction.",
                  icon: <Layers className="w-5 h-5 text-primary" />
                },
                {
                  title: "Aspiria Pulse Health",
                  desc: "Integrated health monitoring with posture correction, stress detection, hydration alerts, and wellness reports synced to your wearable devices.",
                  icon: <Heart className="w-5 h-5 text-primary" />
                }
              ].map((tech, i) => (
                <div 
                  key={i} 
                  className="bg-[#111] border border-[#1a1a1a] rounded-xl p-7 transition-colors duration-300 hover:border-[rgba(0,200,255,0.4)] group flex flex-col"
                >
                  <div className="bg-[rgba(0,200,255,0.15)] border border-[rgba(0,200,255,0.3)] rounded-[10px] p-3 w-fit mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="font-orbitron font-bold text-white text-[18px] mb-3">
                    {tech.title}
                  </h3>
                  <p className="font-inter text-[#888] text-[14px] leading-relaxed flex-1">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.3)] to-transparent" />

        {/* ═══════════════════════════════ */}
        {/* SECTION 4 — WHY CHOOSE US       */}
        {/* ═══════════════════════════════ */}
        <section id="why-us" className="bg-[#080808] py-24 lg:py-32">
          <div className="container mx-auto px-6 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
                <span className="text-white">The Aspiria </span>
                <span className="text-primary">Advantage</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
              {[
                { title: "Only Water Exhaust", desc: "Our hydrogen fuel cells emit nothing but pure water vapor.", icon: <Droplets className="w-4 h-4 text-primary" /> },
                { title: "Refuel in Seconds", desc: "Swappable hydrogen pods mean zero downtime at pod stations.", icon: <Timer className="w-4 h-4 text-primary" /> },
                { title: "Crash-Safe Pods", desc: "Modular hydrogen storage with military-grade crash protection.", icon: <Shield className="w-4 h-4 text-primary" /> },
                { title: "100% Renewable", desc: "Green hydrogen produced from renewable energy sources.", icon: <Leaf className="w-4 h-4 text-primary" /> },
                { title: "AI-First Design", desc: "Every vehicle ships with a fully integrated AI co-pilot.", icon: <Cpu className="w-4 h-4 text-primary" /> },
                { title: "Modular Platform", desc: "Sedan, SUV, or sports car — same swappable pod ecosystem.", icon: <RefreshCw className="w-4 h-4 text-primary" /> }
              ].map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 bg-[rgba(0,200,255,0.15)] border border-[rgba(0,200,255,0.3)] rounded-lg w-10 h-10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-orbitron font-bold text-white text-[16px] mb-2">{feat.title}</h3>
                    <p className="font-inter text-[#888] text-[14px] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.3)] to-transparent" />

        {/* ═══════════════════════════════ */}
        {/* SECTION 5 — GALLERY             */}
        {/* ═══════════════════════════════ */}
        <section id="gallery" className="bg-[#0d0d0d] py-24 lg:py-32 overflow-hidden bg-[radial-gradient(rgba(0,200,255,0.07)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}>
          <div className="container mx-auto px-6 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                GALLERY
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
                <span className="text-white">See the </span>
                <span className="text-primary">Future</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "/images/gallery-sedan-side.png", title: "Hydrogen Sedan", alt: "Futuristic hydrogen sedan side profile with dark background and cyan LED accent lighting" },
                { url: "/images/gallery-front-quarter.png", title: "Concept Reveal", alt: "Hydrogen concept car front three-quarter view with studio lighting and silver body" },
                { url: "/images/gallery-rear-view.png", title: "Performance Rear", alt: "Hydrogen sports car rear view with full-width cyan LED light bar" },
                { url: "/images/gallery-fuel-station.png", title: "H₂ Pod Station", alt: "Futuristic hydrogen refueling station at night with cyan ambient lighting" },
                { url: "/images/gallery-interior.png", title: "AI Cockpit", alt: "Futuristic car interior cockpit with holographic displays and cyan ambient lighting" },
                { url: "/images/gallery-road-drive.png", title: "Coastal Drive", alt: "Hydrogen luxury sedan driving on dramatic coastal mountain road at dusk" }
              ].map((img, i) => (
                <div key={i} className="relative h-[320px] rounded-xl overflow-hidden group">
                  <Image 
                    src={img.url} 
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(0,200,255,0.1)] transition-colors duration-300 pointer-events-none" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                    <span className="text-white font-orbitron font-bold text-lg tracking-wide">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.3)] to-transparent" />

        {/* ═══════════════════════════════ */}
        {/* SECTION 6 — FAQ                 */}
        {/* ═══════════════════════════════ */}
        <section id="faq" className="bg-[#080808] py-24 lg:py-32">
          <div className="container mx-auto px-6 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                FAQ
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
                <span className="text-white">Frequently Asked </span>
                <span className="text-primary">Questions</span>
              </h2>
            </div>
            
            <FAQAccordion />
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,200,255,0.3)] to-transparent" />

        {/* ═══════════════════════════════ */}
        {/* SECTION 7 — FINAL CTA           */}
        {/* ═══════════════════════════════ */}
        <section className="bg-[#0d0d0d] py-24 lg:py-32 bg-[radial-gradient(rgba(0,200,255,0.07)_1px,transparent_1px)]" style={{ backgroundSize: '40px 40px' }}>
          <div className="container mx-auto px-6 w-full">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
                JOIN THE REVOLUTION
              </span>
              <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 leading-tight">
                <span className="text-white">The Future Runs on </span>
                <span className="text-primary">Hydrogen</span>
              </h2>
              <p className="font-inter text-[#888] text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
                Be among the first to experience Aspiria Motors. Register your interest for early access, test drives, and exclusive updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contact" className="bg-primary text-black font-orbitron font-bold uppercase py-4 px-8 min-w-[240px] hover:bg-white transition-colors text-center">
                  RESERVE YOUR SPOT &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════ */}
      {/* FOOTER                          */}
      {/* ═══════════════════════════════ */}
      <footer className="bg-[#080808] border-t border-[#1a1a1a] py-8">
        <div className="container mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/aspiria-logo.png" alt="Aspiria Motors" width={28} height={28} className="rounded-full" />
            <span className="font-orbitron font-bold tracking-wide text-primary text-sm">
              ASPIRIA MOTORS
            </span>
          </div>
          <p className="font-inter text-[#555] text-sm text-center md:text-right">
            &copy; 2028 Aspiria Motors. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
