"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle,
  ShieldCheck,
  Zap,
  Mic,
  Map,
  ShieldAlert,
  HeartPulse,
  BatteryMedium
} from 'lucide-react';

export function TechnologyContent() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-[1200px]">
        <div className="max-w-4xl relative z-10">
          <p className="text-primary font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-6 slide-in">
            How It Works
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-text mb-8 leading-[1.1] uppercase tracking-wide"
          >
            Technology
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-muted font-light max-w-3xl leading-relaxed">
            Hydrogen fuel cell innovation redefined through swappable pods, AI intelligence, and immersive interfaces.
          </p>
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      </section>

      {/* 2. HYDROGEN FUEL CELL EXPLAINED */}
      <section className="py-24 bg-surface/30 border-y border-white/5 relative">
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <SectionHeading 
            eyebrow="The Science"
            title="How Hydrogen Powers Aspiria"
            centered={false}
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hydrogen Storage", desc: "Hydrogen stored safely in our proprietary swappable pods at optimal pressure." },
              { title: "Fuel Cell Stack", desc: "Hydrogen reacts with oxygen from the air to generate continuous clean electricity." },
              { title: "Electric Motor", desc: "The generated electricity is instantly delivered to the wheels for powerful propulsion." },
              { title: "Zero Emissions", desc: "The only byproduct of this entire process is pure water vapor released into the air." }
            ].map((step, i) => (
              <GlassCard key={i} index={i} className="p-8 relative overflow-hidden group hover:border-primary/40 transition duration-500">
                <div className="text-6xl font-orbitron font-black text-primary/10 mb-6 group-hover:text-primary/25 transition-colors duration-500">{`0${i + 1}`}</div>
                <h3 className="text-xl font-orbitron font-bold text-text mb-4">{step.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {step.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SWAPPABLE HYDROGEN PODS */}
      <section className="py-24 md:py-32 container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-text mb-8 leading-tight">
              Refuel in Seconds, Not Minutes
            </h2>
            <p className="text-text-muted text-lg mb-12">
              Say goodbye to charging anxiety. Our modular hydrogen pods can be swapped in under 3 minutes at any Aspiria station, getting you back on the road instantly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <BatteryMedium className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-text mb-2 font-orbitron tracking-wide">Pod Swapping Stations</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Automated drive-through stations for seamless pod replacement.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-text mb-2 font-orbitron tracking-wide">Modular Storage</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Carry only the fuel you need with an adaptive multi-pod chassis.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-text mb-2 font-orbitron tracking-wide">Crash Protection</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Military-grade carbon fiber shells encase each pod for maximum collision safety.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <Zap className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-text mb-2 font-orbitron tracking-wide">Refueling in &lt; 3 mins</h4>
                  <p className="text-sm text-text-muted leading-relaxed">Faster than filling a gas tank, infinitely cleaner than fossil fuels.</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full aspect-square md:aspect-video lg:aspect-square bg-surface/40 border border-white/10 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 drop-shadow-2xl to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <Image 
              src="/images/pod-swap-sequence.png" 
              alt="Hydrogen pod swap sequence at an Aspiria station" 
              fill 
              className="object-cover" 
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. AI DRIVER ASSISTANT */}
      <section className="py-24 relative border-y border-white/5">
        <div className="absolute inset-0 bg-surface/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <SectionHeading 
            eyebrow="Intelligence"
            title="Your AI Co-Pilot"
            centered={true}
            className="mb-16"
          />
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {[
              { icon: Mic, title: "Voice Interaction", desc: "Natural language processing allows you to control the vehicle's parameters, navigation, and entertainment strictly through voice." },
              { icon: Map, title: "Predictive Navigation", desc: "AI maps the most energy-efficient routes taking real-time traffic, weather, battery health, and elevation topography into account." },
              { icon: ShieldAlert, title: "Safety Alerts", desc: "360-degree sensor arrays and LiDAR project potential hazards milliseconds before they occur and take evasive action autonomously." },
              { icon: HeartPulse, title: "Driver Health Monitoring", desc: "Biometric sensors in the cabin monitor your heart rate, stress levels, and visual fatigue, adjusting the environment to keep you alert." }
            ].map((feature, i) => (
              <GlassCard key={i} index={i} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 hover:bg-surface/80 transition duration-500 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-text text-xl mb-3 tracking-wide">{feature.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">{feature.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. XR INTERFACE */}
      <section className="py-24 md:py-32 container mx-auto px-6 max-w-[1200px]">
        <SectionHeading 
          eyebrow="Immersion"
          title="The Future of the Cockpit"
          centered={true}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "AR Navigation", 
              desc: "Turn-by-turn directions projected directly onto the physical road ahead. Never pull your eyes away from the action.",
              image: "/images/ar-navigation.png"
            },
            { 
              title: "Hologram Assistant", 
              desc: "Your AI co-pilot rendered in stunning 3D right on the center console. A truly immersive conversational interface.",
              image: "/images/hologram-assistant.png"
            },
            { 
              title: "Windshield Projection", 
              desc: "Critical telemetry, speed, gear selection, and hazard alerts integrated seamlessly into your full panoramic glass.",
              image: "/images/windshield-projection.png"
            }
          ].map((feature, i) => (
            <GlassCard key={i} index={i} className="p-0 overflow-hidden flex flex-col h-full bg-surface/40 group border-primary/10 hover:border-primary/30 transition duration-500 rounded-2xl">
              <div className="h-56 bg-bg border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-40 group-hover:opacity-100 transition duration-700 z-10" />
                <Image 
                  src={feature.image} 
                  alt={`${feature.title} visual`} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="font-orbitron font-bold text-xl text-text mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed grow">{feature.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 md:py-32 px-6 text-center relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl tracking-wide text-text mb-8">Ready to Experience It?</h2>
          <p className="text-text-muted mb-12 text-lg md:text-xl font-light">
            Be among the first to experience Aspiria Motors. Register your interest for early access, test drives, and exclusive updates.
          </p>
          <a href="/contact">
            <Button variant="primary" className="text-lg px-10 py-5 font-orbitron uppercase tracking-widest hover:scale-105 transition-transform">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}

export default TechnologyContent;
