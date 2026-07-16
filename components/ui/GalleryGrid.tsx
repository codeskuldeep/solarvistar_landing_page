"use client";

import { useState } from "react";
import Image from "next/image";
import GlassCard from "./GlassCard";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const showMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const visibleImages = images.slice(0, visibleCount);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-md space-y-md">
        {visibleImages.map((src, index) => (
          <GlassCard key={index} hover={false} delay={(index % 9) * 0.1} className="break-inside-avoid relative group overflow-hidden !p-0 cursor-pointer">
            <div className="relative w-full" onClick={() => setSelectedImage(src)}>
              <Image 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                alt={`Gallery image ${index + 1}`} 
                src={src}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                 <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-5xl drop-shadow-lg">zoom_in</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="mt-lg flex justify-center animate-fade-in-up">
          <button 
            onClick={showMore}
            className="font-label-md text-label-md text-primary bg-transparent border-[1.5px] border-primary px-lg py-sm rounded-full hover:scale-102 hover:shadow-lg transition-all duration-200"
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-primary transition-colors p-2 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
