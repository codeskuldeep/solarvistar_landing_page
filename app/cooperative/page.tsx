import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "Cooperative Society | Solar Vistar",
  description: "Learn about the cooperative society model that empowers communities through mutual cooperation and sustainable energy solutions.",
};

export default function CooperativeSociety() {
  return (
    <main className="w-full overflow-hidden">
      {/* Page Hero */}
      <section className="relative pt-xl pb-lg px-md md:px-gutter max-w-container-max mx-auto flex flex-col items-center text-center mt-16 md:mt-0 animate-fade-in-up">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-fixed-dim/40 via-surface to-surface"></div>
        <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant mb-md">
          <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
          <span className="material-symbols-outlined fill text-[16px]">chevron_right</span>
          <span className="text-primary font-medium">Cooperative Society</span>
        </div>
        <span className="font-label-md text-label-md text-[#F58220] uppercase tracking-widest mb-sm">Cooperative Model</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">What is a Cooperative Society?</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">Empowering communities through mutual cooperation and sustainable energy solutions.</p>
      </section>

      {/* Explanation Block */}
      <section className="py-xl px-md md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <GlassCard delay={0.2} hover={false} className="relative rounded-xl overflow-hidden !p-0">
            <div className="relative w-full aspect-[4/3]">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Community collaboration" 
                src="/images/solar_hero_1783983605510.png" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </GlassCard>
          <div className="flex flex-col gap-md">
            <SectionHeading title="Power to the People" centered={false} />
            <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-sm -mt-md">
              <p>A cooperative society is fundamentally about people uniting for a common goal. It operates on the principles of mutual cooperation and democratic control, prioritizing shared growth over pure profit.</p>
              <p>In the context of solar energy, this means transparent pricing, community-driven decisions, and a commitment to ensuring that the benefits of sustainable energy are accessible to all members of the community, not just a select few.</p>
            </div>
          </div>
        </div>
      </section>

      {/* "Why Choose a Cooperative Society?" */}
      <section className="py-xl px-md md:px-gutter max-w-container-max mx-auto bg-surface-container-low rounded-3xl my-xl">
        <SectionHeading 
          title="Why Choose a Cooperative Society?" 
          subtitle="Discover the core values that drive our community-focused approach to renewable energy." 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-md">
          {/* Cards 1-9 */}
          <GlassCard delay={0.1} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">groups</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Community-first approach</h3>
          </GlassCard>
          <GlassCard delay={0.15} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">visibility</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Transparent pricing</h3>
          </GlassCard>
          <GlassCard delay={0.2} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">handshake</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Long-term relationships</h3>
          </GlassCard>
          <GlassCard delay={0.25} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">verified</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Govt-registered org</h3>
          </GlassCard>
          <GlassCard delay={0.3} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">solar_power</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Affordable rooftop solar</h3>
          </GlassCard>
          <GlassCard delay={0.35} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">eco</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Sustainable development</h3>
          </GlassCard>
          <GlassCard delay={0.4} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">school</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Youth empowerment</h3>
          </GlassCard>
          <GlassCard delay={0.45} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">lightbulb</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Renewable energy awareness</h3>
          </GlassCard>
          <GlassCard delay={0.5} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">sentiment_satisfied</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Customer satisfaction</h3>
          </GlassCard>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-xl px-md md:px-gutter max-w-container-max mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="solar-gradient rounded-3xl p-xl shadow-2xl flex items-center justify-center text-center relative overflow-hidden">
          {/* A simple geometric pattern overlay instead of SVG data URI for cleaner React */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_10%)]" style={{ backgroundSize: '20px 20px' }}></div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary relative z-10 max-w-4xl capitalize leading-tight">
            &quot;Solar — a need for future alternative energy.&quot;
          </h2>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-xl px-md md:px-gutter max-w-container-max mx-auto text-center flex flex-col items-center gap-md">
        <h2 className="font-headline-md text-headline-md text-on-surface">Ready to Join the Revolution?</h2>
        <div className="flex flex-col sm:flex-row gap-sm items-center justify-center">
          <GradientButton href="/contact">
            Get Free Quote
          </GradientButton>
          <GradientButton href="/contact" className="!bg-[none] !bg-transparent border-[1.5px] border-primary !text-primary hover:!bg-primary/5 !shadow-none flex items-center gap-xs">
            <span className="material-symbols-outlined fill text-[20px]">chat</span>
            WhatsApp Now
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
