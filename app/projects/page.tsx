import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import GradientButton from "../../components/ui/GradientButton";
import GalleryGrid from "../../components/ui/GalleryGrid";

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
      <section className="max-w-container-max mx-auto px-md py-xl md:py-[120px] text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-sm inline-block">Our Work</span>
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
