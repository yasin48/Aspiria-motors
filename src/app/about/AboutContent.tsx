"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Eye, Target, Heart, ArrowRight } from "lucide-react";

const cardData = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where mobility and sustainability coexist — where every journey leaves the planet better than we found it.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To engineer and deliver hydrogen fuel cell vehicles that outperform traditional combustion and electric alternatives in range, refuelling speed, and environmental impact.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation without compromise. Transparency with every stakeholder. A relentless focus on safety, quality, and the communities we serve.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function AboutContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-[1200px]">
        <div className="max-w-4xl relative z-10">
          <p className="text-primary font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-6">
            Our Story
          </p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-text mb-8 leading-[1.1] uppercase tracking-wide"
          >
            About Aspiria
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-muted font-light max-w-3xl leading-relaxed">
            Born from the belief that clean energy and exhilarating performance
            are not mutually exclusive.
          </p>
        </div>
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-text mb-8">
              Our Mission
            </h2>
            <p className="text-text-muted text-lg md:text-xl leading-relaxed font-light">
              Aspiria Motors aims to revolutionize clean transportation through
              hydrogen fuel cell vehicles that combine environmental
              sustainability with advanced automotive engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 GLASS CARDS */}
      <section className="py-24 md:py-32 container mx-auto px-6 max-w-[1200px]">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Vision, Mission & Values"
          centered={true}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <GlassCard index={i} className="p-8 h-full flex flex-col items-start gap-5 hover:border-primary/40 transition duration-500 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors duration-500">
                  <card.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-text tracking-wide">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-6">
              From Our Founder
            </p>
            <blockquote className="text-text-muted text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-primary/30 pl-6 text-left">
              &ldquo;When we started Aspiria, our peers said hydrogen was a
              decade away. We chose to build anyway — because the planet doesn&apos;t
              have a decade to wait. Every vehicle we deliver is proof that
              ambition and responsibility can ride together.&rdquo;
            </blockquote>
            <p className="mt-6 text-text font-orbitron font-medium tracking-wider text-sm">
              — The Aspiria Founding Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 text-center relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl tracking-wide text-text mb-8">
            Discover What Powers Us
          </h2>
          <p className="text-text-muted mb-12 text-lg md:text-xl font-light">
            Explore the hydrogen fuel cell technology at the heart of every Aspiria vehicle.
          </p>
          <Link href="/technology">
            <Button
              variant="primary"
              className="text-lg px-10 py-5 font-orbitron uppercase tracking-widest hover:scale-105 transition-transform gap-3"
            >
              See Our Technology
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutContent;
