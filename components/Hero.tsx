"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GradientButton from "./ui/GradientButton";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative pt-xl pb-xl md:pt-24 md:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-high rounded-l-[100px] opacity-30 -z-10"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary-fixed rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        {/* Hero Content */}
        <motion.div 
          className="flex flex-col gap-sm relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-surface-bright border border-surface-variant px-sm py-xs rounded-full w-max shadow-sm shadow-primary/5">
            <span className="text-xl">🏆</span>
            <span className="font-label-md text-label-md text-primary font-bold">
              India&apos;s First Solar Cooperative Society
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-display-lg-mobile md:font-display-lg text-on-background max-w-[672px] text-display-lg-mobile md:text-display-lg">
            Powering Homes. <br />
            <span className="text-transparent bg-clip-text bg-[image:var(--background-image-solar-gradient)]">
              Empowering Communities.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px]">
            Join the cooperative revolution in renewable energy. We make premium rooftop solar and PM Surya Ghar installations accessible, transparent, and profitable for every Indian home.
          </motion.p>
          
          {/* Checklist */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-xs gap-x-sm my-sm">
            {[
              "Zero-Cost Maintenance", 
              "Government Subsidy Aid", 
              "Tier-1 Solar Panels", 
              "25-Year Performance Warranty", 
              "Cooperative Profit Sharing", 
              "Expert Installation Team"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-solar-orange fill text-xl">check_circle</span>
                <span className="font-label-md text-label-md">{item}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-sm mt-xs">
            <GradientButton href="/contact" className="flex items-center gap-2">
              <span>Book Free Site Visit</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </GradientButton>
            <GradientButton href="/contact" className="!bg-none !bg-transparent border-2 border-primary !text-primary hover:!bg-surface-container transition-colors flex items-center gap-2 !shadow-none">
              Get Free Quote
            </GradientButton>
          </motion.div>
        </motion.div>
        
        {/* Hero Image & Chips */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 z-10 border border-white/40"
        >
          <Image 
            className="object-cover transition-transform duration-700 hover:scale-105" 
            alt="Beautiful solar panels on a modern home roof at sunset"
            src="https://images.unsplash.com/photo-1509391365360-51ce59478fac?q=80&w=2000&auto=format&fit=crop" 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Floating Chip */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-md left-md glass-card border border-outline-variant/30 rounded-2xl p-sm flex items-center gap-sm animate-bounce" 
            style={{ animationDuration: '3s' }}
          >
            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">home</span>
            </div>
            <div>
              <p className="font-headline-sm text-headline-sm font-bold text-primary">500+</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Homes Powered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
