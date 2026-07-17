import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import GradientButton from "../../components/ui/GradientButton";
import GalleryGrid from "../../components/ui/GalleryGrid";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
export const metadata: Metadata = {
  title: "Projects & Gallery | Solar Vistar",
  description: "Explore our real residential solar installations across Madhya Pradesh and witness the transformation to sustainable living.",
};

export default function ProjectsGallery() {
  // Read images from public/gallery
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];
  
  try {
    if (fs.existsSync(galleryPath)) {
      const files = fs.readdirSync(galleryPath);
      images = files
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map(file => `/gallery/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // Fallback to existing images if the folder is empty
  if (images.length === 0) {
    images = [
      "/images/solar_farm_1783983615127.png",
      "/images/solar_team_1783983625434.png",
      "/images/solar_family_1783983635437.png"
    ];
  }

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-md pt-32 pb-20 md:pt-40 md:pb-28 text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          <span className="font-label-md text-label-md text-solar-orange tracking-widest uppercase mb-sm inline-block">Our Work</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
            Projects &amp; <span className="text-solar-gradient">Gallery</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto mb-6">
            Real residential solar installations across Madhya Pradesh. Witness the transformation to sustainable living through our community of forward-thinking homeowners.
          </p>
          <div className="flex justify-center items-center gap-8 mt-4 pt-4 border-t border-outline-variant/30">
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-3xl text-primary font-bold">500+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Projects Completed</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-3xl text-primary font-bold">1.5MW+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Installed Capacity</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/30 hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <span className="font-display-lg text-3xl text-primary font-bold">100%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 px-md bg-surface-container-low mb-xl border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <SectionHeading 
            eyebrow="CASE STUDIES"
            title="Featured Case Studies" 
            subtitle="Deep dives into how we've helped members eliminate their electricity bills."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassCard className="!p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow border-outline-variant/30">
              <div className="h-64 relative w-full">
                <Image src="/gallery/withbunchapeople.jpeg" alt="Residential Case Study" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-sm uppercase tracking-wider shadow-sm">
                  Residential - 3kW
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-headline-md text-on-surface mb-2">The Sharma Residence</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Indore, Madhya Pradesh
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-outline block mb-1">Old Bill</span>
                    <span className="font-headline-sm text-error block line-through decoration-error/50">₹3,500/mo</span>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/20">
                    <span className="font-label-sm text-primary block mb-1">New Bill</span>
                    <span className="font-headline-sm text-primary font-bold block">₹0/mo (Credit)</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant/20 col-span-2">
                    <span className="font-label-sm text-outline block mb-1">Environmental Impact</span>
                    <span className="font-body-md text-on-surface block">~3.6 Tonnes CO2 saved annually (Equivalent to 160 trees planted)</span>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant italic border-l-4 border-primary pl-4">"Our summer AC bills were a nightmare. Now, we run two ACs guilt-free, and the cooperative handled all the PM Surya Ghar subsidy paperwork."</p>
              </div>
            </GlassCard>

            <GlassCard className="!p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow border-outline-variant/30">
              <div className="h-64 relative w-full">
                <Image src="/gallery/solarbrigade.jpeg" alt="Commercial Case Study" fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-solar-orange/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-label-sm uppercase tracking-wider shadow-sm">
                  Commercial - 15kW
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-headline-md text-on-surface mb-2">Aaditya Cosmopolitan Society</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Dhar, Madhya Pradesh
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-outline block mb-1">Old Common Area Bill</span>
                    <span className="font-headline-sm text-error block line-through decoration-error/50">₹18,000/mo</span>
                  </div>
                  <div className="bg-solar-orange/10 p-4 rounded-xl border border-solar-orange/30">
                    <span className="font-label-sm text-solar-orange block mb-1">New Bill</span>
                    <span className="font-headline-sm text-solar-orange font-bold block">₹500/mo</span>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant/20 col-span-2">
                    <span className="font-label-sm text-outline block mb-1">Community Benefit</span>
                    <span className="font-body-md text-on-surface block">Reduced society maintenance fees by 15% for all 40 flats.</span>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant italic border-l-4 border-solar-orange pl-4">"Installing solar for our common areas was the best investment the society made. Solar Vistar's transparent pricing beat every private vendor."</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="max-w-container-max mx-auto px-md mb-xl">
        <GalleryGrid images={images} />
      </section>

      {/* CTA Band */}
      <section className="max-w-container-max mx-auto px-md mb-xl animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <div className="bg-[image:var(--background-image-solar-gradient)] rounded-xl p-xl flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 mb-md md:mb-0 text-center md:text-left">
            <h2 className="font-headline-md text-headline-md text-on-primary mb-xs">Ready to switch to solar?</h2>
            <p className="font-body-md text-body-md text-on-primary/90">Join hundreds of homeowners saving on their energy bills.</p>
          </div>
          <div className="relative z-10">
            <GradientButton href="/contact" className="!bg-surface !text-primary hover:scale-102 transition-transform duration-200 shadow-none !border-0 whitespace-nowrap">
              Book Your Free Site Visit
            </GradientButton>
          </div>
        </div>
      </section>
    </main>
  );
}
