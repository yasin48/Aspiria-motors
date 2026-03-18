"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a hydrogen fuel cell vehicle?",
    answer:
      "A hydrogen fuel cell vehicle generates electricity through a chemical reaction between hydrogen and oxygen. The only byproduct is water vapor — zero CO2, zero particulates.",
  },
  {
    question: "How do swappable hydrogen pods work?",
    answer:
      "Instead of waiting at a charging station, you swap your depleted hydrogen pod for a fully charged one in under 3 minutes — faster than filling a tank.",
  },
  {
    question: "What range can I expect?",
    answer:
      "Depending on the model, Aspiria vehicles offer between 500km and 780km per pod. Long-range pods are available at all swap stations.",
  },
  {
    question: "Is hydrogen safe?",
    answer:
      "Yes. Our pods use military-grade casing with multiple redundant safety systems. Hydrogen disperses rapidly upward in open air, unlike petrol which pools on the ground.",
  },
  {
    question: "What is Aspiria Pulse?",
    answer:
      "Aspiria Pulse is our integrated driver wellness system. It monitors posture, stress, hydration, and fatigue — and syncs with your wearable devices.",
  },
  {
    question: "When will Aspiria vehicles be available?",
    answer:
      "We are targeting pilot production in 2026 with a market launch in 2028. Register your interest to be first in line.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-[#111111] transition-colors duration-300 rounded-lg overflow-hidden border ${
              isOpen ? "border-[rgba(0,200,255,0.3)]" : "border-[#1a1a1a]"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left flex items-center justify-between p-5 md:px-[24px] focus:outline-none"
            >
              <span className="text-white font-orbitron text-[15px]">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-[500px] opacity-100 pb-5 md:px-[24px]"
                  : "max-h-0 opacity-0 px-[24px] pb-0"
              }`}
            >
              <p className="text-[#888888] font-inter text-[14px] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
