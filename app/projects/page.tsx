import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "Projects & Gallery | Solar Vistar",
  description: "Explore our real residential solar installations across Madhya Pradesh and witness the transformation to sustainable living.",
};

export default function ProjectsGallery() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-md py-xl md:py-[120px] text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm inline-block">Our Work</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
            Projects &amp; <span className="text-solar-gradient">Gallery</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
            Real residential solar installations across Madhya Pradesh. Witness the transformation to sustainable living through our community of forward-thinking homeowners.
          </p>
        </div>
      </section>

      {/* Interactive Filter Chips */}
      <section className="max-w-container-max mx-auto px-md mb-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="flex overflow-x-auto hide-scrollbar gap-sm py-xs pl-xs" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full bg-primary text-on-primary shadow-md hover:scale-102 transition-transform whitespace-nowrap">
            All
          </button>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full glass-card border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors whitespace-nowrap hover:scale-102">
            Residential Installations
          </button>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full glass-card border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors whitespace-nowrap hover:scale-102">
            Before &amp; After
          </button>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full glass-card border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors whitespace-nowrap hover:scale-102">
            Customer Visits
          </button>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full glass-card border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors whitespace-nowrap hover:scale-102">
            Project Videos
          </button>
          <button className="flex-none font-label-md text-label-md px-sm py-xs rounded-full glass-card border-outline-variant/30 text-primary hover:bg-surface-container-high transition-colors whitespace-nowrap hover:scale-102">
            Team
          </button>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="max-w-container-max mx-auto px-md mb-xl">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-md space-y-md">
          {/* Gallery Item 1: Standard Image */}
          <GlassCard hover={false} delay={0.2} className="break-inside-avoid relative group overflow-hidden !p-0">
            <div className="relative w-full aspect-[4/5]">
              <Image 
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                alt="Bhopal Residence Solar" 
                src="/images/solar_farm_1783983615127.png" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-sm">
                <p className="font-label-md text-label-md text-white">Bhopal Residence</p>
                <p className="font-label-sm text-label-sm text-white/80">5kW System</p>
              </div>
            </div>
          </GlassCard>

          {/* Gallery Item 2: Before & After */}
          <GlassCard hover={false} delay={0.3} className="break-inside-avoid relative group overflow-hidden !p-0">
            <div className="relative h-[300px] w-full overflow-hidden">
              {/* After Image */}
              <Image 
                className="object-cover" 
                alt="After Installation" 
                src="/images/solar_farm_1783983615127.png" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Before Image Clip (Simulated slider) */}
              <div className="absolute inset-0 w-1/2 border-r-2 border-white overflow-hidden bg-surface-container-highest">
                <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-label-md text-label-md opacity-50">Before</div>
              </div>
              <div className="absolute bottom-sm right-sm bg-primary/80 backdrop-blur-sm px-xs py-base rounded text-on-primary font-label-sm text-label-sm">After</div>
            </div>
            <div className="p-sm bg-white/70 dark:bg-black/70 backdrop-blur-md absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-label-md text-label-md text-on-surface">Transformation in Indore</p>
            </div>
          </GlassCard>

          {/* Gallery Item 3: Video Thumbnail */}
          <GlassCard hover={false} delay={0.4} className="break-inside-avoid relative group overflow-hidden !p-0 aspect-[4/3] flex items-center justify-center cursor-pointer">
            <Image 
              className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              alt="Customer Story Thumbnail" 
              src="/images/solar_team_1783983625434.png" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div className="relative glass-card border border-white/20 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-[32px] fill text-primary">play_arrow</span>
            </div>
            <div className="absolute bottom-sm left-sm right-sm">
              <p className="font-label-md text-label-md text-white drop-shadow-md">Customer Story: The Sharma Family</p>
            </div>
          </GlassCard>

          {/* Gallery Item 4: Standard Image */}
          <GlassCard hover={false} delay={0.5} className="break-inside-avoid relative group overflow-hidden !p-0">
            <div className="relative w-full aspect-square">
              <Image 
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                alt="Precision Installation" 
                src="/images/solar_family_1783983635437.png" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-sm">
                <p className="font-label-md text-label-md text-white">Precision Installation</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Load More */}
        <div className="mt-lg flex justify-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <button className="font-label-md text-label-md text-primary bg-transparent border-[1.5px] border-primary px-lg py-sm rounded-full hover:scale-102 hover:shadow-lg transition-all duration-200">
            Load More
          </button>
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-container-max mx-auto px-md mb-xl animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <div className="solar-gradient rounded-xl p-xl flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 mb-md md:mb-0 text-center md:text-left">
            <h2 className="font-headline-md text-headline-md text-on-primary mb-xs">Ready to switch to solar?</h2>
            <p className="font-body-md text-body-md text-on-primary/90">Join hundreds of homeowners saving on their energy bills.</p>
          </div>
          <div className="relative z-10">
            <button className="glass-card border border-white/30 font-label-md text-label-md text-primary px-lg py-sm rounded-full hover:scale-102 transition-transform duration-200 hover:shadow-lg whitespace-nowrap">
              Book Your Free Site Visit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
