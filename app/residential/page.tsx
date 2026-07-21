import type { Metadata } from "next";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Residential Solar | Solar Vistar",
  description: "Complete residential rooftop solar solutions designed for Indian homes. Transform your unused roof space into a clean energy powerhouse.",
};

export default function ResidentialSolar() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Our Services"
        icon="solar_power"
        title={<>Residential <span className="text-solar-gradient">Rooftop Solar</span></>}
        subtitle="Complete residential rooftop solar solutions designed for Indian homes. Transform your unused roof space into a clean energy powerhouse."
        image="/gallery/installers.jpeg"
        imageAlt="Residential solar roof"
        chips={[{ icon: "solar_power", label: "Govt. Approved" }, { icon: "payments", label: "Subsidy Available" }]}
        cta={
          <GradientButton href="/contact" className="flex items-center gap-xs">
            Get Free Quote
            <span className="material-symbols-outlined">arrow_forward</span>
          </GradientButton>
        }
      />

      {/* System Sizing Guide */}
      <section className="py-20 md:py-28 px-gutter max-w-container-max mx-auto">
        <SectionHeading 
          eyebrow="SYSTEM SIZING"
          title="Choose the Right System" 
          subtitle="Whether you have a small home or a large villa, we have a system perfectly sized for your needs."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* 1kW System */}
          <GlassCard className="flex flex-col border-outline-variant/30 hover:border-primary/50 transition-colors !p-0 overflow-hidden">
            <div className="bg-surface-container-low p-6 text-center border-b border-outline-variant/30">
              <h3 className="font-display-lg text-3xl font-bold text-on-surface mb-1">1 kW - 2 kW</h3>
              <p className="font-label-md uppercase tracking-wider text-on-surface-variant">Small Family Home</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="font-body-md text-on-surface-variant mb-6 flex-1">Ideal for homes with electricity bills up to ₹1,500/month. Covers basic lighting, fans, TV, and fridge.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Requires ~100-200 sq.ft roof space</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Generates ~4-8 units per day</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Eligible for ₹30,000-₹60,000 Subsidy</span>
                </li>
              </ul>
            </div>
          </GlassCard>
          
          {/* 3kW System (Highlighted) */}
          <GlassCard className="flex flex-col border-primary/50 shadow-xl shadow-primary/10 transition-transform scale-105 z-10 !p-0 overflow-hidden">
            <div className="bg-primary p-6 text-center text-on-primary relative">
              <div className="absolute top-0 right-0 bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
              <h3 className="font-display-lg text-4xl font-bold mb-1">3 kW</h3>
              <p className="font-label-md uppercase tracking-wider text-on-primary/90">Standard Indian Home</p>
            </div>
            <div className="p-6 flex-1 flex flex-col bg-surface-container-lowest">
              <p className="font-body-md text-on-surface-variant mb-6 flex-1">The sweet spot for PM Surya Ghar subsidy. Handles 1 AC, washing machine, fridge, water motor, and lights.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Requires ~300 sq.ft roof space</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Generates ~12-15 units per day</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span className="font-bold text-primary">Max ₹78,000 Subsidy</span>
                </li>
              </ul>
            </div>
          </GlassCard>

          {/* 5kW+ System */}
          <GlassCard className="flex flex-col border-outline-variant/30 hover:border-primary/50 transition-colors !p-0 overflow-hidden">
            <div className="bg-surface-container-low p-6 text-center border-b border-outline-variant/30">
              <h3 className="font-display-lg text-3xl font-bold text-on-surface mb-1">5 kW+</h3>
              <p className="font-label-md uppercase tracking-wider text-on-surface-variant">Large Villas / Multi-story</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="font-body-md text-on-surface-variant mb-6 flex-1">For heavy power users with bills above ₹5,000/month. Easily runs multiple ACs, heavy pumps, and EVs.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Requires 500+ sq.ft roof space</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Generates 20+ units per day</span>
                </li>
                <li className="flex items-center gap-3 font-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                  <span>Capped at ₹78,000 Subsidy</span>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading 
            eyebrow="SERVICES"
            title="Comprehensive Solar Services" 
            subtitle="From initial assessment to ongoing support, we handle every aspect of your solar journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* Service Cards */}
            <GlassCard delay={0.1} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">assignment</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Site Survey</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Detailed inspection of roof condition and shading analysis.</p>
            </GlassCard>
            
            <GlassCard delay={0.15} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">analytics</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Load Analysis</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Calculating your energy needs for optimal system sizing.</p>
            </GlassCard>
            
            <GlassCard delay={0.2} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">architecture</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">System Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Custom engineering to maximize yield and aesthetics.</p>
            </GlassCard>
            
            <GlassCard delay={0.25} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">construction</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Installation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Professional deployment by certified technicians.</p>
            </GlassCard>
            
            <GlassCard delay={0.3} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">fact_check</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Testing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">Rigorous quality checks and system commissioning.</p>
            </GlassCard>
            
            <GlassCard delay={0.35} className="group">
              <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container/20 transition-colors">
                <span className="material-symbols-outlined fill text-primary-container text-2xl">electric_meter</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs text-xl">Net Metering</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">End-to-end DISCOM liaison and grid integration assistance.</p>
            </GlassCard>
            
            <GlassCard delay={0.4} className="group lg:col-span-2 flex items-center gap-md">
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

      {/* ROI & Financing Section */}
      <section className="py-20 md:py-28 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ROI Breakdown */}
          <div>
            <SectionHeading 
              eyebrow="FINANCIALS"
              title="Return on Investment (3kW Example)" 
              subtitle="See how quickly a residential solar system pays for itself."
              centered={false}
            />
            <div className="mt-8 space-y-6">
              <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                <div>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Estimated System Cost</p>
                  <p className="font-body-sm text-outline">High-quality panels + inverter</p>
                </div>
                <p className="font-headline-sm text-on-surface">₹1,60,000</p>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                <div>
                  <p className="font-label-sm text-primary uppercase tracking-wider">PM Surya Ghar Subsidy</p>
                  <p className="font-body-sm text-outline">Direct bank transfer</p>
                </div>
                <p className="font-headline-sm text-primary font-bold">- ₹78,000</p>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                <div>
                  <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Effective Net Cost</p>
                  <p className="font-body-sm text-outline">What you actually pay</p>
                </div>
                <p className="font-headline-sm text-on-surface font-bold text-2xl">₹82,000</p>
              </div>
              
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 mt-8">
                <p className="font-body-md text-on-surface-variant mb-2">With average savings of ₹2,500 per month, your system pays for itself in:</p>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-solar-orange">timer</span>
                  <p className="font-display-lg text-3xl font-bold text-on-surface">~2.5 Years</p>
                </div>
                <p className="font-label-sm text-primary mt-4 font-bold">Followed by 22+ years of FREE electricity.</p>
              </div>
            </div>
          </div>

          {/* Financing Options */}
          <GlassCard className="!p-10 bg-primary text-on-primary">
            <span className="material-symbols-outlined text-4xl mb-4">account_balance</span>
            <h3 className="font-headline-md font-bold mb-4">Zero Upfront Cost Options</h3>
            <p className="font-body-lg text-on-primary/90 mb-8">
              We&apos;ve partnered with leading national banks to provide easy EMI options. You can pay for your solar system using the money you save on your electricity bill!
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] mt-1">check_circle</span>
                <div>
                  <p className="font-bold">Lowest Interest Rates</p>
                  <p className="text-on-primary/80 text-sm">Special solar loan rates ranging from 8-10% p.a.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] mt-1">check_circle</span>
                <div>
                  <p className="font-bold">No Collateral Required</p>
                  <p className="text-on-primary/80 text-sm">For loans up to ₹3 Lakhs under government schemes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] mt-1">check_circle</span>
                <div>
                  <p className="font-bold">Fast Approval</p>
                  <p className="text-on-primary/80 text-sm">Digital sanction process in under 48 hours.</p>
                </div>
              </li>
            </ul>
            <GradientButton href="/contact" className="!bg-white !text-primary w-full shadow-lg hover:scale-105">
              Check EMI Eligibility
            </GradientButton>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="text-3xl md:text-5xl font-display-lg text-on-surface mb-6">Ready to go solar?</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">Join the cooperative society and get the best residential solar solution with absolute transparency.</p>
          <div className="flex justify-center gap-4">
            <GradientButton href="/contact">Book Free Site Visit</GradientButton>
            <GradientButton href="tel:+919303127775" className="!bg-[none] bg-surface text-primary border border-primary/30 shadow-none hover:shadow-md">Call Now</GradientButton>
          </div>
        </div>
      </section>
    </main>
  );
}
