import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "Residential Solar | Solar Vistar",
  description: "Complete residential rooftop solar solutions designed for Indian homes. Transform your unused roof space into a clean energy powerhouse.",
};

export default function ResidentialSolar() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-xl pb-xl md:pt-[120px] md:pb-[100px]">
        <div className="absolute inset-0 bg-surface-container-low -z-10"></div>
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-container-max mx-auto px-md grid md:grid-cols-2 gap-xl items-center">
          <div className="space-y-sm animate-fade-in-up">
            <span className="inline-block px-sm py-xs bg-primary-container/10 text-primary-container rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Residential <br /> <span className="text-solar-gradient">Rooftop Solar</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[512px] pb-sm">
              Complete residential rooftop solar solutions designed for Indian homes. Transform your unused roof space into a clean energy powerhouse.
            </p>
            <GradientButton href="/contact" className="flex items-center gap-xs">
              Get Free Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </GradientButton>
          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="glass-card border border-outline-variant/30 rounded-[2rem] p-xs relative z-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden relative">
                <Image 
                  className="object-cover"
                  alt="Residential solar roof"
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-md -left-md glass-card border border-outline-variant/30 px-sm py-sm rounded-xl flex items-center gap-xs shadow-lg">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined fill text-secondary-container">solar_power</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface">Govt. Approved</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">Subsidy Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-md">
          <SectionHeading 
            title="Comprehensive Solar Services" 
            subtitle="From initial assessment to ongoing support, we handle every aspect of your solar journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* Service Cards */}
            <GlassCard delay={0.1} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">assignment</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Site Survey</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Detailed inspection of roof condition and shading analysis.</p>
            </GlassCard>
            
            <GlassCard delay={0.15} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">analytics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Load Analysis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Calculating your energy needs for optimal system sizing.</p>
            </GlassCard>
            
            <GlassCard delay={0.2} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">System Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Custom engineering to maximize yield and aesthetics.</p>
            </GlassCard>
            
            <GlassCard delay={0.25} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">construction</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Installation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Professional deployment by certified technicians.</p>
            </GlassCard>
            
            <GlassCard delay={0.3} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">fact_check</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Testing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Rigorous quality checks and system commissioning.</p>
            </GlassCard>
            
            <GlassCard delay={0.35} className="group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">electric_meter</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Net Metering</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">End-to-end DISCOM liaison and grid integration assistance.</p>
            </GlassCard>
            
            <GlassCard delay={0.4} className="group cursor-pointer lg:col-span-2 flex items-center gap-md">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-3xl">support_agent</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Customer Support</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm max-w-[384px]">
                  Dedicated post-installation support and maintenance services to ensure lifelong performance.
                </p>
              </div>
            </GlassCard>
            
          </div>
        </div>
      </section>
    </main>
  );
}
