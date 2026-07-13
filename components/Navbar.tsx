"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl docked full-width top-0 sticky border-b border-white/50 shadow-sm shadow-primary/10 z-50">
      <div className="flex justify-between items-center px-gutter py-base w-full max-w-container-max mx-auto h-[72px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-xs">
          <span className="material-symbols-outlined text-solar-orange text-3xl">solar_power</span>
          <span className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">
            Solar Vistar
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-md">
          <Link
            href="/"
            className="font-label-md text-label-md text-primary font-bold hover:text-solar-orange transition-colors"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <Link
              href="/about"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:scale-102 duration-200 py-4 flex items-center gap-1"
            >
              About Us <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-surface border border-outline-variant/30 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/about" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Our Vision</Link>
              <Link href="/awards" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Awards & Achievements</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="/residential"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:scale-102 duration-200 py-4 flex items-center gap-1"
            >
              Services <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-56 bg-surface border border-outline-variant/30 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/residential" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Residential Solar</Link>
              <Link href="/surya-ghar" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">PM Surya Ghar Yojana</Link>
              <Link href="/projects" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Projects & Gallery</Link>
            </div>
          </div>

          {/* Community Dropdown */}
          <div className="relative group">
            <Link
              href="/cooperative"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors hover:scale-102 duration-200 py-4 flex items-center gap-1"
            >
              Community <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </Link>
            <div className="absolute top-full left-0 mt-0 w-64 bg-surface border border-outline-variant/30 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link href="/cooperative" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Cooperative Society Model</Link>
              <Link href="/entrepreneurs" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Young Entrepreneurs</Link>
              <Link href="/training" className="px-4 py-3 text-sm text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors">Solar Practical Training</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-md">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant/50"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="inline-block bg-[image:var(--background-image-solar-gradient)] text-on-primary font-label-md text-label-md px-md py-xs rounded-full hover:scale-105 transition-transform shadow-md shadow-primary/20">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-primary p-xs"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg flex flex-col p-4 max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-label-md text-label-md text-primary font-bold py-2 border-b border-outline-variant/20">Home</Link>
            
            <span className="font-label-md text-label-md text-outline mt-2 uppercase tracking-wider text-[10px]">About</span>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm">Our Vision</Link>
            <Link href="/awards" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm border-b border-outline-variant/20">Awards & Achievements</Link>
            
            <span className="font-label-md text-label-md text-outline mt-2 uppercase tracking-wider text-[10px]">Services</span>
            <Link href="/residential" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm">Residential Solar</Link>
            <Link href="/surya-ghar" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm">PM Surya Ghar Yojana</Link>
            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm border-b border-outline-variant/20">Projects & Gallery</Link>

            <span className="font-label-md text-label-md text-outline mt-2 uppercase tracking-wider text-[10px]">Community</span>
            <Link href="/cooperative" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm">Cooperative Society Model</Link>
            <Link href="/entrepreneurs" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm">Young Entrepreneurs</Link>
            <Link href="/training" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-2 text-on-surface-variant hover:text-primary text-sm border-b border-outline-variant/20">Solar Practical Training</Link>
            
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-[image:var(--background-image-solar-gradient)] text-white text-center font-label-md text-label-md px-md py-sm rounded-full shadow-md font-bold">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
