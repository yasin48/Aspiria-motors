"use client";

import { useState } from "react";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 relative z-10 py-16">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 pt-10">
        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
          GET IN TOUCH
        </span>
        <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
          <span className="text-white">Contact </span>
          <span className="text-primary">Us</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* LEFT COLUMN: FORM */}
        <div className="w-full bg-[#111] border border-[#1a1a1a] rounded-xl p-8 shadow-xl">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="bg-[#111] border border-[#222] rounded-md px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-3 focus:ring-[rgba(0,200,255,0.1)] transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-[#111] border border-[#222] rounded-md px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-3 focus:ring-[rgba(0,200,255,0.1)] transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                required
                type="text"
                placeholder="Subject"
                className="bg-[#111] border border-[#222] rounded-md px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-3 focus:ring-[rgba(0,200,255,0.1)] transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <textarea
                required
                rows={5}
                placeholder="Message"
                className="bg-[#111] border border-[#222] rounded-md px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary focus:ring-3 focus:ring-[rgba(0,200,255,0.1)] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-orbitron font-bold uppercase py-4 mt-2 hover:bg-white transition-colors"
            >
              SEND MESSAGE
            </button>
            {submitted && (
              <p className="text-primary font-inter text-sm text-center mt-2 animate-pulse">
                Message sent! We&apos;ll be in touch.
              </p>
            )}
          </form>
        </div>

        {/* RIGHT COLUMN: DETAILS */}
        <div className="w-full bg-[#111] border border-[#1a1a1a] rounded-xl p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-[#555] font-orbitron uppercase text-[10px] tracking-wider mb-1">
                  Email
                </span>
                <span className="text-white font-inter text-[15px]">
                  hello@aspiria-motors.com
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555] font-orbitron uppercase text-[10px] tracking-wider mb-1">
                  Phone
                </span>
                <span className="text-white font-inter text-[15px]">
                  +44 20 0000 0000
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#555] font-orbitron uppercase text-[10px] tracking-wider mb-1">
                  Office
                </span>
                <span className="text-white font-inter text-[15px]">
                  London, United Kingdom
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
            <p className="text-[#888] font-inter text-sm italic mb-6">
              &quot;Partnering globally, headquartered in London&quot;
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[rgba(0,200,255,0.15)] border border-[rgba(0,200,255,0.3)] rounded-lg p-3 hover:bg-[rgba(0,200,255,0.25)] transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="bg-[rgba(0,200,255,0.15)] border border-[rgba(0,200,255,0.3)] rounded-lg p-3 hover:bg-[rgba(0,200,255,0.25)] transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="bg-[rgba(0,200,255,0.15)] border border-[rgba(0,200,255,0.3)] rounded-lg p-3 hover:bg-[rgba(0,200,255,0.25)] transition-colors"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
