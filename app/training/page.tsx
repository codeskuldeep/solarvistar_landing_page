"use client";

import { useState } from "react";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export default function SolarTraining() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5001/api/website/training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit registration");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-xl pb-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/solar_family_1783983635437.png"
            alt="Solar Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/70 to-surface"></div>
        </div>
        <div className="max-w-container-max mx-auto px-md md:px-gutter w-full relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-sm animate-fade-in-up max-w-[800px]">
            <span className="font-label-md text-label-md text-secondary-container uppercase tracking-wider font-bold bg-surface-container-low/50 px-4 py-1 rounded-full backdrop-blur-sm">Learn. Install. Grow.</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary leading-tight text-shadow-sm">5-Day Solar Business Practical Training</h1>
            <p className="font-body-lg text-on-surface-variant max-w-[672px] bg-surface/80 p-4 rounded-xl backdrop-blur-md">
              Build your career in the booming solar industry with India&apos;s First Solar Cooperative Society. Hands-on experience and expert mentorship await.
            </p>
            <div className="flex flex-wrap justify-center gap-xs mt-sm">
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs shadow-sm bg-surface/90">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">workspace_premium</span> Certificate of Participation
              </span>
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs shadow-sm bg-surface/90">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">restaurant</span> Breakfast &amp; Lunch Included
              </span>
              <span className="glass-card border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary flex items-center gap-xs shadow-sm bg-surface/90">
                <span className="material-symbols-outlined fill text-secondary-container text-sm">build</span> Live Projects
              </span>
            </div>
            <div className="mt-md">
              <GradientButton href="#register" className="flex items-center gap-xs text-lg px-8 py-3 shadow-lg hover:scale-105">
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
                src="/images/solar_team_1783983625434.png" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <GlassCard delay={0.2} hover={false} className="p-8 border border-outline-variant/30 shadow-lg relative">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Registration Form</h3>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 p-4 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined">check_circle</span>
                <p>Thank you! Your registration has been received. We will contact you with details.</p>
              </div>
            ) : (
            <form className="flex flex-col gap-sm" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Full Name</label>
                <input required name="name" className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" type="text"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Mobile Number</label>
                <input required name="mobile" className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+91 XXXXX XXXXX" type="tel"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">City</label>
                <input required name="city" className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Mumbai" type="text"/>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Background/Profession</label>
                <select required name="profession" className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" defaultValue="">
                  <option disabled value="">Select your background</option>
                  <option value="Student">Student</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-outline">Message (Optional)</label>
                <textarea name="message" className="bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Any questions?" rows={3}></textarea>
              </div>
              {error && (
                <div className="text-error text-sm">{error}</div>
              )}
              <div className="flex flex-col sm:flex-row gap-sm mt-md">
                <GradientButton type="submit" className="flex-1 text-center font-bold !w-full disabled:opacity-70" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Register for Training"}
                </GradientButton>
              </div>
            </form>
            )}
          </GlassCard>
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-container-max mx-auto px-md mb-xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="bg-[image:var(--background-image-solar-gradient)] rounded-xl p-xl flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="relative z-10 mb-md md:mb-0 text-center md:text-left">
            <h2 className="font-headline-md text-headline-md text-on-primary mb-xs">Got questions about the training?</h2>
            <p className="font-body-md text-body-md text-on-primary/90">Our team is here to help you get started on your solar journey.</p>
          </div>
          <div className="relative z-10 flex gap-4">
            <GradientButton href="/contact" className="!bg-surface !text-primary hover:scale-102 transition-transform duration-200 shadow-none !border-0 whitespace-nowrap">
              Contact Us
            </GradientButton>
          </div>
        </div>
      </section>
    </main>
  );
}
