import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "Young Entrepreneurs | Solar Vistar",
  description: "Join a network of passionate young entrepreneurs contributing to India's clean-energy mission through mentorship and practical opportunity.",
};

export default function YoungEntrepreneurs() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-xl pb-xl px-md overflow-hidden min-h-[600px] flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>
        
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-sm animate-fade-in-up">
            <span className="font-label-md text-label-md text-secondary-container tracking-wider uppercase">Community &amp; Careers</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Empowering Young Entrepreneurs</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-[512px]">
              Join a network of passionate young entrepreneurs contributing to India&apos;s clean-energy mission through mentorship and practical opportunity.
            </p>
            <div className="flex flex-wrap gap-sm mt-md">
              <GradientButton href="/training">
                Start Your Journey
              </GradientButton>
              <GradientButton href="/about" className="!bg-none !bg-transparent border-[1.5px] border-primary !text-primary hover:!bg-primary/5 !shadow-none">
                Learn More
              </GradientButton>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass-card p-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Young professionals collaborating" 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Block */}
      <section className="py-xl px-md bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <GlassCard hover={false} delay={0.2} className="order-2 md:order-1 relative w-full h-[400px] rounded-2xl overflow-hidden p-2 !p-2">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Mentorship in Solar" 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </GlassCard>
          <div className="order-1 md:order-2 flex flex-col gap-sm">
            <SectionHeading 
              title="Practical Guidance for Sustainable Success"
              centered={false}
            />
            <div className="w-16 h-1 bg-secondary-container rounded-full -mt-lg mb-2"></div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our approach bridges the gap between ambition and reality. We provide comprehensive, hands-on mentorship designed to equip young leaders with the exact tools needed to thrive in the booming solar industry.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From understanding the technical nuances of photovoltaic systems to navigating government subsidies and building a cooperative business model, our ecosystem ensures you are supported at every step of your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-xl px-md animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="max-w-container-max mx-auto rounded-3xl p-xl solar-gradient shadow-2xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
          {/* Abstract overlay for CTA */}
          <div className="absolute inset-0 bg-white/10" style={{ backgroundImage: 'radial-gradient(circle at 20% 150%, rgba(255,255,255,0.3) 0%, transparent 50%)' }}></div>
          
          <div className="flex flex-col gap-sm relative z-10 max-w-[672px] text-on-primary">
            <h2 className="font-headline-md text-headline-md font-bold text-on-primary">Ready to Accelerate Your Growth?</h2>
            <p className="font-body-lg text-body-lg text-on-primary/90">
              Join our intensive, expert-led program and transform your passion for renewable energy into a scalable, community-driven business.
            </p>
          </div>
          
          <GradientButton href="/training" className="relative z-10 !bg-[none] !bg-white !text-primary-container font-bold hover:scale-105 shadow-xl whitespace-nowrap">
            Join the 5-Day Solar Business Training
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
