"use client";

import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export default function SolarTraining() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center pt-xl pb-xl overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop"
            alt="Solar Training"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>
        <div className="max-w-container-max mx-auto px-md md:px-gutter w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-sm animate-fade-in-up">
            <span className="font-label-md text-label-md text-secondary-container uppercase tracking-wider font-bold">Learn. Install. Grow.</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary leading-tight">5-Day Solar Business Practical Training</h1>
            <p className="font-body-lg text-on-surface-variant max-w-[576px]">
              Build your career in the booming solar industry with India&apos;s First Solar Cooperative Society. Hands-on experience and expert mentorship await.
            </p>
            <div className="flex flex-wrap gap-xs mt-sm">
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">workspace_premium</span> Certificate of Participation
              </span>
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">restaurant</span> Breakfast &amp; Lunch Included
              </span>
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">build</span> Live Projects
              </span>
            </div>
            <div className="mt-md">
              <GradientButton href="#register" className="flex items-center gap-xs">
                Register for Training <span className="material-symbols-outlined">arrow_forward</span>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-xl bg-surface-container-low px-md">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <SectionHeading title="Who Should Join?" subtitle="Ideal for anyone looking to enter or accelerate their career in the renewable energy sector." />
          <div className="flex flex-wrap justify-center gap-sm mt-md">
            <GlassCard hover={false} delay={0.1} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">school</span> Students
            </GlassCard>
            <GlassCard hover={false} delay={0.2} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">engineering</span> Engineers &amp; Diploma Holders
            </GlassCard>
            <GlassCard hover={false} delay={0.3} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">bolt</span> Electricians
            </GlassCard>
            <GlassCard hover={false} delay={0.4} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">lightbulb</span> Entrepreneurs
            </GlassCard>
            <GlassCard hover={false} delay={0.5} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">storefront</span> Business Owners
            </GlassCard>
            <GlassCard hover={false} delay={0.6} className="!rounded-full px-6 py-3 flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/30">
              <span className="material-symbols-outlined fill text-primary">eco</span> Solar Enthusiasts
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-xl max-w-container-max mx-auto px-md md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div className="flex flex-col justify-center">
            <SectionHeading title="Secure Your Spot" centered={false} />
            <div className="w-16 h-1 bg-secondary-container rounded-full -mt-lg mb-4"></div>
            <p className="font-body-md text-on-surface-variant mb-md max-w-[448px]">
              Seats are limited for this intensive hands-on practical training. Register now to begin your journey in the solar industry.
            </p>
            <div className="hidden lg:block relative w-full max-w-[448px] h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                className="object-cover" 
                alt="Education and Technical Training" 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <GlassCard delay={0.2} hover={false} className="p-8 border border-outline-variant/30 shadow-lg">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Registration Form</h3>
            <form className="flex flex-col gap-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Full Name</label>
                <input className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" type="text"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Mobile Number</label>
                <input className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+91 XXXXX XXXXX" type="tel"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">City</label>
                <input className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Mumbai" type="text"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Background/Profession</label>
                <select className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" defaultValue="">
                  <option disabled value="">Select your background</option>
                  <option>Student</option>
                  <option>Engineer</option>
                  <option>Electrician</option>
                  <option>Business Owner</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Message (Optional)</label>
                <textarea className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Any questions?" rows={3}></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-sm mt-md">
                <GradientButton type="submit" className="flex-1 text-center font-bold !w-full">
                  Register for Training
                </GradientButton>
              </div>
            </form>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
