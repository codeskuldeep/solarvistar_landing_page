import type { Metadata } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/ui/SectionHeading";
import GradientButton from "../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "Solar Vistar - Premium Cooperative Solar Solutions",
  description: "India's first Solar Cooperative Society. We make rooftop solar accessible, transparent, and profitable.",
};

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden bg-background">
      <Hero />
      
      {/* Logos / Social Proof */}
      <section className="py-10 border-y border-outline-variant/20 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter overflow-hidden flex flex-col items-center">
          <p className="text-sm font-label-md text-on-surface-variant uppercase tracking-widest mb-6 font-bold">Trusted By & Associated With</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl text-solar-orange fill">wb_sunny</span>
              <span className="font-display-lg text-xl font-bold text-on-surface">PM Surya Ghar</span>
            </div>
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl text-primary fill">eco</span>
              <span className="font-display-lg text-xl font-bold text-on-surface">MNRE</span>
            </div>
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl text-secondary-container fill">verified</span>
              <span className="font-display-lg text-xl font-bold text-on-surface">Tier-1 Panels</span>
            </div>
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-3xl text-primary fill">workspace_premium</span>
              <span className="font-display-lg text-xl font-bold text-on-surface">ISO 9001</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Bento Grid Features */}
      <section className="py-16 md:py-20 max-w-container-max mx-auto px-gutter">
        <SectionHeading 
          title="Everything you need. Nothing you don't." 
          subtitle="We've completely re-engineered the solar installation process. Premium hardware, cooperative profit-sharing, and zero middlemen." 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
          
          {/* Main Large Card */}
          <GlassCard className="!p-0 overflow-hidden md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[700px] relative group !rounded-[2rem] !border-none">
            <Image 
              src="/images/solar_team_1783983625434.png"
              alt="Engineers installing solar panels"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay for text legibility, using deep primary/surface colors */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
              <div className="w-full max-w-[500px]">
                <span className="bg-primary/90 text-on-primary backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">Cooperative Model</span>
                <h3 className="text-3xl md:text-4xl font-display-lg text-white font-bold mb-4 leading-tight">Share in the profits, not the margins.</h3>
                <p className="text-white/90 font-body-md md:font-body-lg">
                  Because we are a cooperative society, you become a member, not just a customer. We pool resources to buy Tier-1 equipment at wholesale prices and pass 100% of the savings directly to you.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Top Right Card */}
          <GlassCard className="!p-8 flex flex-col justify-between !rounded-[2rem] bg-surface-container-low group hover:-translate-y-1 transition-transform border-outline-variant/30">
            <div>
              <div className="w-14 h-14 bg-solar-orange/10 rounded-2xl flex items-center justify-center mb-6 text-solar-orange">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl font-display-lg text-on-surface font-bold mb-2">₹78,000 Subsidy</h3>
              <p className="text-on-surface-variant font-body-md">
                We handle 100% of the PM Surya Ghar Yojana paperwork. From application to final disbursement directly into your bank account.
              </p>
            </div>
            <div className="w-full h-2 bg-outline-variant/30 rounded-full overflow-hidden mt-6">
              <div className="w-full h-full bg-solar-orange rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </GlassCard>

          {/* Bottom Right Card */}
          <GlassCard className="!p-0 overflow-hidden !rounded-[2rem] relative group hover:-translate-y-1 transition-transform !border-none">
            <Image 
              src="/images/solar_farm_1783983615127.png"
              alt="Solar panels close up"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Blend mode using primary color to fit the theme */}
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <span className="material-symbols-outlined text-white text-4xl">energy_savings_leaf</span>
              <div>
                <h3 className="text-2xl font-display-lg text-white font-bold mb-2">25-Year Warranty</h3>
                <p className="text-white/80 font-body-md">
                  Zero maintenance costs. If it breaks, we fix it. It's that simple.
                </p>
              </div>
            </div>
          </GlassCard>

        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 md:py-20 bg-surface-container relative overflow-hidden border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <SectionHeading 
            title="The simplest switch you'll ever make." 
            subtitle="We've reduced the solar transition from a 3-month headache to a seamless 4-step process." 
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-outline-variant/30 -z-10">
              <div className="h-full bg-primary w-1/2"></div>
            </div>

            {[
              { num: "01", title: "Free Site Visit", desc: "Our engineers assess your roof and energy bills to design a custom 3D model." },
              { num: "02", title: "Govt. Approval", desc: "We submit your PM Surya Ghar application and secure all necessary permits." },
              { num: "03", title: "1-Day Install", desc: "Our certified team installs your premium system in just one working day." },
              { num: "04", title: "Net Metering", desc: "We swap your meter so you can start selling excess power back to the grid." },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-surface border-4 border-surface-container-high flex items-center justify-center mb-6 shadow-md shadow-primary/5 transition-transform group-hover:scale-110 group-hover:border-primary/50">
                  <span className="text-3xl font-display-lg font-bold text-primary">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">{step.title}</h3>
                <p className="text-on-surface-variant font-body-md max-w-[250px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-primary">
        <Image 
          src="/images/solar_family_1783983635437.png"
          alt="Happy family outside their home"
          fill
          sizes="100vw"
          className="object-cover opacity-50 mix-blend-overlay"
        />
        {/* Solid dark gradient overlay to ensure text is ALWAYS visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/80"></div>
        
        <div className="max-w-4xl mx-auto text-center px-gutter relative z-10">
          <span className="w-20 h-20 bg-white/10 border border-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
            <span className="material-symbols-outlined text-4xl">wb_sunny</span>
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 font-display-lg tracking-tight">
            Ready to harness the sun?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-body-lg">
            Stop paying high electricity bills. Join the Solar Vistar cooperative today and get a premium solar system with zero hassle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <GradientButton href="#contact" className="!px-10 !py-5 !text-xl !w-full sm:!w-auto !bg-white !text-primary shadow-2xl hover:scale-105">
              Book Free Site Visit
            </GradientButton>
            {/* Secondary Action */}
            <a href="tel:+919303127775" className="px-10 py-5 text-xl font-bold text-white bg-black/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white hover:text-primary transition-all w-full sm:w-auto flex justify-center items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              Call 9303127775
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
