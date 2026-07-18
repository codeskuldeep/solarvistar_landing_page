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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-md overflow-hidden min-h-[600px] flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>
        
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-sm animate-fade-in-up">
            <span className="font-label-md text-label-md text-solar-orange tracking-wider uppercase">Community &amp; Careers</span>
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
                src="/gallery/whitetshirtguys.jpeg" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Block */}
      <section className="py-20 md:py-28 px-md bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <GlassCard hover={false} delay={0.2} className="order-2 md:order-1 relative w-full h-[400px] rounded-2xl overflow-hidden p-2">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Mentorship in Solar" 
                src="/gallery/withbunchapeople.jpeg" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </GlassCard>
          <div className="order-1 md:order-2 flex flex-col gap-sm">
            <SectionHeading 
              eyebrow="MENTORSHIP"
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

      {/* Earnings Potential */}
      <section className="py-20 md:py-28 px-md">
        <div className="max-w-container-max mx-auto">
          <SectionHeading 
            eyebrow="REWARDS"
            title="Your Earning Potential" 
            subtitle="Multiple revenue streams designed to reward hard work and community networking."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <GlassCard className="!p-8 bg-surface-container border-outline-variant/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-full bg-solar-orange/10 flex items-center justify-center text-solar-orange mb-6">
                <span className="material-symbols-outlined text-3xl">payments</span>
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">Direct Referral Bonus</h3>
              <p className="font-body-md text-on-surface-variant flex-1">Earn a flat commission for every successful residential or commercial installation you bring to the cooperative.</p>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 w-full">
                <span className="font-bold text-lg text-primary">₹5,000 - ₹15,000</span>
                <span className="text-sm text-on-surface-variant block"> per installation</span>
              </div>
            </GlassCard>
            
            <GlassCard className="!p-8 bg-surface-container border-outline-variant/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-full bg-solar-orange/10 flex items-center justify-center text-solar-orange mb-6">
                <span className="material-symbols-outlined text-3xl">add_chart</span>
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">Team Overrides</h3>
              <p className="font-body-md text-on-surface-variant flex-1">Build your own team of sub-agents and earn a percentage of their total sales volume every month.</p>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 w-full">
                <span className="font-bold text-lg text-primary">2% - 5%</span>
                <span className="text-sm text-on-surface-variant block"> team volume bonus</span>
              </div>
            </GlassCard>
            
            <GlassCard className="!p-8 bg-surface-container border-outline-variant/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 rounded-full bg-solar-orange/10 flex items-center justify-center text-solar-orange mb-6">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-on-surface mb-2">Annual Performance</h3>
              <p className="font-body-md text-on-surface-variant flex-1">Hit your yearly targets and qualify for all-expense-paid trips, gadget bonuses, and higher commission tiers.</p>
              <div className="mt-6 pt-4 border-t border-outline-variant/30 w-full">
                <span className="font-bold text-lg text-primary">Exclusive</span>
                <span className="text-sm text-on-surface-variant block"> yearly rewards</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 md:py-28 px-md bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <SectionHeading 
            eyebrow="ROADMAP"
            title="How to Become a Solar Mitra" 
            subtitle="Four simple steps to start your renewable energy business."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-1 bg-outline-variant/30 z-0"></div>
            
            {[
              { step: "01", title: "Apply Online", desc: "Fill out our simple interest form to schedule an initial interview." },
              { step: "02", title: "Interview", desc: "A brief chat to align your goals with our cooperative mission." },
              { step: "03", title: "Training", desc: "Attend our 5-day comprehensive business and technical training." },
              { step: "04", title: "Launch", desc: "Get your marketing kit and start closing your first deals." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-surface border-4 border-surface-container-high flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:border-primary/50 shadow-sm">
                  <span className="text-3xl font-display-lg font-bold text-primary">{s.step}</span>
                </div>
                <h4 className="font-headline-sm text-on-surface mb-2">{s.title}</h4>
                <p className="font-body-sm text-on-surface-variant max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 px-md">
        <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-md">
          <GlassCard delay={0.1} className="text-center p-lg flex flex-col items-center justify-center">
            <h3 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-2">500+</h3>
            <p className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Entrepreneurs Trained</p>
          </GlassCard>
          <GlassCard delay={0.2} className="text-center p-lg flex flex-col items-center justify-center">
            <h3 className="font-display-lg text-4xl md:text-5xl text-solar-orange font-bold mb-2">52</h3>
            <p className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Districts Covered</p>
          </GlassCard>
          <GlassCard delay={0.3} className="text-center p-lg flex flex-col items-center justify-center">
            <h3 className="font-display-lg text-4xl md:text-5xl text-primary font-bold mb-2">₹5Cr+</h3>
            <p className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Business Generated</p>
          </GlassCard>
          <GlassCard delay={0.4} className="text-center p-lg flex flex-col items-center justify-center">
            <h3 className="font-display-lg text-4xl md:text-5xl text-solar-orange font-bold mb-2">100%</h3>
            <p className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Mentorship Support</p>
          </GlassCard>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 px-md bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <SectionHeading 
            eyebrow="SUCCESS STORIES"
            title="Entrepreneur Spotlights" 
            subtitle="Meet the young leaders who are transforming their local communities."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30">
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-surface shadow-md">
                <Image src="/gallery/idk.jpeg" alt="Ravi Sharma" width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <div>
                <h4 className="font-headline-sm text-on-surface mb-1">Ravi Sharma</h4>
                <p className="font-label-sm text-primary uppercase tracking-wider mb-4">Top Earner 2023 • Ujjain</p>
                <p className="font-body-md text-on-surface-variant italic">"I started right after college with zero capital. The cooperative's training gave me the technical edge, and within 6 months, I built a team of 5 people. Last month we crossed ₹50 Lakhs in sales volume."</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30">
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-surface shadow-md">
                <Image src="/gallery/idk.jpeg" alt="Pooja Desai" width={128} height={128} className="object-cover w-full h-full" />
              </div>
              <div>
                <h4 className="font-headline-sm text-on-surface mb-1">Pooja Desai</h4>
                <p className="font-label-sm text-primary uppercase tracking-wider mb-4">Community Leader • Dhar</p>
                <p className="font-body-md text-on-surface-variant italic">"Being a woman in the energy sector seemed daunting, but the mentorship here is unmatched. I've now helped over 40 households switch to solar, and the financial independence I've gained is life-changing."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 md:py-28 px-md animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="max-w-container-max mx-auto rounded-3xl p-xl bg-[image:var(--background-image-solar-gradient)] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
          {/* Abstract overlay for CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="flex flex-col gap-sm relative z-10 max-w-[672px] text-on-primary">
            <h2 className="font-headline-md text-headline-md font-bold text-on-primary">Ready to Accelerate Your Growth?</h2>
            <p className="font-body-lg text-body-lg text-on-primary/90">
              Join our intensive, expert-led program and transform your passion for renewable energy into a scalable, community-driven business.
            </p>
          </div>
          
          <GradientButton href="/training" className="relative z-10 !bg-none !bg-white !text-primary-container font-bold hover:scale-105 shadow-xl whitespace-nowrap">
            Join the 5-Day Solar Business Training
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
