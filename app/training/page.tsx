"use client";

import { useState } from "react";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";
import PageHero from "../../components/ui/PageHero";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export default function SolarTraining() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showFallback, setShowFallback] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);
    setError("");
    setShowFallback(false);

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${API_BASE}/api/website/training`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit registration");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      form.reset();
    } catch (err) {
      if (err instanceof TypeError) {
        setError("We couldn't reach our server right now. Please contact us directly instead — we respond fast on WhatsApp.");
        setShowFallback(true);
      } else {
        setError(err instanceof Error ? err.message : "An error occurred while submitting.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Learn. Install. Grow."
        icon="school"
        title={<>5-Day Solar Business <span className="text-solar-gradient">Practical Training</span></>}
        subtitle="Build your career in the booming solar industry with India's First Solar Cooperative Society. Hands-on experience and expert mentorship await."
        image="/gallery/withsomeone.jpeg"
        imageAlt="Solar Practical Training"
        chips={[
          { icon: "workspace_premium", label: "Certificate of Participation" },
          { icon: "restaurant", label: "Breakfast & Lunch Included" },
          { icon: "build", label: "Live Projects" },
        ]}
        cta={
          <GradientButton href="#register" className="flex items-center gap-xs text-lg px-8 py-3 shadow-lg hover:scale-105">
            Register for Training <span className="material-symbols-outlined">arrow_forward</span>
          </GradientButton>
        }
      />

      {/* Who Should Join */}
      <section className="py-20 md:py-28 bg-surface-container-low px-md">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <SectionHeading eyebrow="TARGET AUDIENCE" title="Who Should Join?" subtitle="Ideal for anyone looking to enter or accelerate their career in the renewable energy sector." />
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

      {/* Curriculum & Trainers */}
      <section className="py-20 md:py-28 max-w-container-max mx-auto px-md md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Detailed Curriculum */}
          <div>
            <SectionHeading 
              eyebrow="SYLLABUS"
              title="5-Day Intensive Curriculum" 
              subtitle="From technical basics to business mastery."
              centered={false}
            />
            <div className="mt-8 space-y-4">
              {[
                { day: "Day 1", title: "Solar Fundamentals", desc: "Understanding PV technology, inverters, and basic electrical concepts." },
                { day: "Day 2", title: "System Design & Sizing", desc: "Load calculation, shadow analysis, and optimal panel placement." },
                { day: "Day 3", title: "Government Policies", desc: "Deep dive into PM Surya Ghar Yojana, subsidies, and net-metering." },
                { day: "Day 4", title: "Installation & Safety", desc: "Hands-on practical training with mounting structures and wiring." },
                { day: "Day 5", title: "Business & Sales", desc: "How to find clients, pitch the cooperative model, and close deals." }
              ].map((module, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors border border-outline-variant/20">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center shrink-0">
                    <span className="font-bold text-primary">{module.day}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-on-surface mb-1">{module.title}</h4>
                    <p className="font-body-sm text-on-surface-variant">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trainers & Certification */}
          <div className="space-y-xl">
            {/* Trainers */}
            <div>
              <SectionHeading 
                eyebrow="INSTRUCTORS"
                title="Learn from Experts" 
                subtitle="Industry veterans guiding your path."
                centered={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <GlassCard className="!p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
                    <Image src="/gallery/CEO.jpeg" alt="Himanshu Kushwah" width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="font-headline-sm text-on-surface">Himanshu Kushwah</h4>
                  <p className="font-label-sm text-primary uppercase tracking-wider mb-2">CEO, Business Coach</p>
                  <p className="font-body-sm text-on-surface-variant">Expert in cooperative models and solar entrepreneurship.</p>
                </GlassCard>
                <GlassCard className="!p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-solar-orange">
                    <Image src="/gallery/idk.jpeg" alt="Priya Sharma" width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="font-headline-sm text-on-surface">Priya Sharma</h4>
                  <p className="font-label-sm text-solar-orange uppercase tracking-wider mb-2">Lead Engineer</p>
                  <p className="font-body-sm text-on-surface-variant">Master of technical design and grid integration.</p>
                </GlassCard>
              </div>
            </div>

            {/* Certification Benefits */}
            <GlassCard className="!p-8 bg-surface-container-lowest border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                <h3 className="font-headline-sm text-on-surface">Certification Benefits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Authorized Solar Mitra ID Card</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Eligibility to earn direct referral bonuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Access to wholesale equipment pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-1 text-sm">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Ongoing technical support for your projects</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="py-20 md:py-28 max-w-container-max mx-auto px-md md:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          <div className="flex flex-col justify-center">
            <SectionHeading eyebrow="ENROLL" title="Secure Your Spot" centered={false} />
            <div className="w-16 h-1 bg-solar-orange rounded-full -mt-lg mb-4"></div>
            <p className="font-body-md text-on-surface-variant mb-md max-w-[448px]">
              Seats are limited for this intensive hands-on practical training. Register now to begin your journey in the solar industry.
            </p>
            <div className="hidden lg:block relative w-full max-w-[448px] h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                className="object-cover" 
                alt="Education and Technical Training" 
                src="/gallery/withbunchapeople.jpeg" 
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
                <div className="text-error text-sm flex flex-col gap-sm">
                  <p>{error}</p>
                  {showFallback && (
                    <div className="flex flex-wrap gap-sm">
                      <a href="tel:+919303127775" className="inline-flex items-center gap-xs text-primary font-label-md text-label-md hover:underline">
                        <span className="material-symbols-outlined text-[18px]">call</span> Call 9303127775
                      </a>
                      <a href="https://wa.me/919303127775" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-xs text-primary font-label-md text-label-md hover:underline">
                        <span className="material-symbols-outlined text-[18px]">chat</span> WhatsApp Us
                      </a>
                    </div>
                  )}
                </div>
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
