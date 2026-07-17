"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function GradientButton({ children, href, onClick, className = "", type = "button", disabled }: GradientButtonProps) {
  const baseClasses = `inline-flex items-center justify-center bg-[image:var(--background-image-solar-gradient)] text-on-primary font-label-md text-label-md px-xl py-sm rounded-full shadow-lg shadow-primary-container/30 ${className}`;

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={baseClasses}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
