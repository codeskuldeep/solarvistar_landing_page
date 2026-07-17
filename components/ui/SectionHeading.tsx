"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  eyebrow?: string;
}

export default function SectionHeading({ title, subtitle, eyebrow, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-lg ${centered ? "text-center flex flex-col items-center" : "flex flex-col items-start"}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="font-label-sm text-solar-orange uppercase tracking-[0.2em] mb-4 font-bold"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="font-headline-md text-headline-md text-on-surface mb-sm"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`h-1 bg-solar-gradient rounded-full mb-sm ${centered ? "w-24" : "w-16 origin-left"}`}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`font-body-lg text-body-lg text-on-surface-variant max-w-[672px] ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
