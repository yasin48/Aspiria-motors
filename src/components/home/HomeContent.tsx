"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { 
  BrainCircuit, BatteryCharging, 
  Network, Leaf, 
  Zap, RefreshCw, ChevronDown, Activity, 
  Droplets
} from "lucide-react";
import Link from "next/link";

const MoleculeAnimation = () => (
  <motion.div 
    className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] overflow-hidden"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary w-full max-w-4xl h-auto">
      <circle cx="50" cy="50" r="25" />
      <circle cx="50" cy="15" r="8" />
      <circle cx="20" cy="67" r="8" />
      <circle cx="80" cy="67" r="8" />
      <line x1="50" y1="23" x2="50" y2="50" />
      <line x1="27" y1="63" x2="50" y2="50" />
      <line x1="73" y1="63" x2="50" y2="50" />
    </svg>
  </motion.div>
);

export function HomeContent() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden section-padding pt-32">
        <MoleculeAnimation />
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,200,255,0.06)_0%,_transparent_70%)] pointer-events-none" />
          <motion.h1 
            className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl text-text mb-6 tracking-tight max-w-5xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Igniting Drives, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Inspiring Journeys.</span>
          </motion.h1>
          
          <motion.p 
            className="font-inter text-text-muted text-xl md:text-2xl mb-12 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The next generation of hydrogen-powered mobility.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/technology">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                Explore Our Technology
              </Button>
            </Link>
            <Link href="/technology">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                Watch the Vision
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-surface py-12 md:py-20 border-y border-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-primary/10 text-center">
            <motion.div 
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="text-primary w-10 h-10 mb-4" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-2">Zero Emissions</h3>
              <p className="font-inter text-text-muted">100% clean water vapor exhaust.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BrainCircuit className="text-primary w-10 h-10 mb-4" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-2">AI-Powered</h3>
              <p className="font-inter text-text-muted">Adaptive driving intelligence onboard.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center p-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BatteryCharging className="text-primary w-10 h-10 mb-4" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-2">Swappable Pods</h3>
              <p className="font-inter text-text-muted">Refuel in seconds anywhere.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY INNOVATIONS */}
      <section className="section-padding bg-bg relative">
        <div className="container">
          <SectionHeading 
            eyebrow="What We Build" 
            title="Four Pillars of Aspiria" 
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <GlassCard index={0} className="p-8 hover:bg-surface-2 transition-colors duration-300">
              <Network className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-4">Hydrogen Fuel Pod System</h3>
              <p className="font-inter text-text-muted mb-6">
                Our proprietary modular fuel pods eliminate the need for traditional refuelling infrastructure. Swap a depleted pod for a fresh one in under 60 seconds.
              </p>
              <Link href="/technology" className="font-inter text-primary font-medium hover:underline flex items-center gap-2">
                Learn More <Activity size={16} />
              </Link>
            </GlassCard>

            <GlassCard index={1} className="p-8 hover:bg-surface-2 transition-colors duration-300">
              <BrainCircuit className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-4">AI Assistant</h3>
              <p className="font-inter text-text-muted mb-6">
                A conscious co-pilot that learns your driving habits, optimizes fuel consumption based on terrain, and anticipates maintenance needs before they occur.
              </p>
              <Link href="/technology" className="font-inter text-primary font-medium hover:underline flex items-center gap-2">
                Learn More <Activity size={16} />
              </Link>
            </GlassCard>

            <GlassCard index={2} className="p-8 hover:bg-surface-2 transition-colors duration-300">
              <Zap className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-4">Holographic Interface</h3>
              <p className="font-inter text-text-muted mb-6">
                Say goodbye to distracting screens. Our AR windshield overlay projects crucial navigation and performance data directly into your line of sight.
              </p>
              <Link href="/technology" className="font-inter text-primary font-medium hover:underline flex items-center gap-2">
                Learn More <Activity size={16} />
              </Link>
            </GlassCard>

            <GlassCard index={3} className="p-8 hover:bg-surface-2 transition-colors duration-300">
              <RefreshCw className="text-primary w-10 h-10 mb-6" />
              <h3 className="font-orbitron font-bold text-2xl text-text mb-4">Aspiria Pulse</h3>
              <p className="font-inter text-text-muted mb-6">
                The centralized mesh network connecting every Aspiria vehicle. It shares real-time road conditions and automates fleet-wide safety updates instantly.
              </p>
              <Link href="/technology" className="font-inter text-primary font-medium hover:underline flex items-center gap-2">
                Learn More <Activity size={16} />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>



      {/* 5. SUSTAINABILITY VISION */}
      <section className="section-padding bg-bg">
        <div className="container text-center">
          <motion.h2 
            className="font-orbitron font-bold text-4xl md:text-6xl max-w-4xl mx-auto mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Zero emissions. Zero compromise.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Droplets className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-text mb-2">Water Vapor Only</h3>
              <p className="font-inter text-text-muted">The only byproduct of our advanced fuel cells is pure H2O.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <RefreshCw className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-text mb-2">Renewable Hydrogen</h3>
              <p className="font-inter text-text-muted">Pods powered by solar and wind electrolysis.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Leaf className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-text mb-2">Carbon-Free Driving</h3>
              <p className="font-inter text-text-muted">A fully closed-loop ecosystem from production to road.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-padding relative overflow-hidden bg-surface flex items-center justify-center text-center">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10 max-w-3xl">
          <SectionHeading 
            title="Join the Hydrogen Revolution" 
            subtitle="Be part of the movement redefining clean mobility. Discover how Aspiria is changing the future of driving today."
            className="mb-10"
          />
          <Link href="/contact">
            <Button variant="primary" className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(0,200,255,0.3)]">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
