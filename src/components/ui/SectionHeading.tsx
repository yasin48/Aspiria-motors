"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface SectionHeadingProps extends Omit<HTMLMotionProps<"div">, "className"> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ eyebrow, title, subtitle, className = '', centered = true, ...props }, ref) => {
    
    const alignment = centered ? 'text-center items-center' : 'text-left items-start';
    
    return (
      <motion.div
        ref={ref}
        className={`flex flex-col gap-3 ${alignment} ${className}`}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {eyebrow && (
          <span className="text-primary text-sm font-semibold uppercase tracking-wider font-inter">
            {eyebrow}
          </span>
        )}
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-text">
          {title}
        </h2>
        {subtitle && (
          <p className="text-text-muted max-w-2xl text-lg mt-2 font-inter">
            {subtitle}
          </p>
        )}
      </motion.div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;
