import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";
import PageHero from "../../components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Awards & Achievements | Solar Vistar",
  description: "Celebrating excellence and trust in India's first solar cooperative movement.",
};

export default function AwardsAchievements() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Recognition"
        icon="workspace_premium"
        title={<><span className="text-solar-gradient">Awards</span> &amp; Achievements</>}
        subtitle="Celebrating excellence and trust in India's first solar cooperative movement. Our commitment to sustainable community energy recognized globally."
        image="/gallery/awardtakin.jpeg"
        imageAlt="Solar Vistar awards and recognition"
      />

      {/* Recognition Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-container-max mx-auto px-md md:px-gutter">
          <SectionHeading
            eyebrow="ACCREDITATIONS"
            title="Credentials of Trust"
            subtitle="Verified excellence across multiple domains of sustainable energy and cooperative governance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <GlassCard delay={0.1} className="flex flex-col gap-4 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined fill text-[32px]">workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2">Excellence in Renewable Energy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">Awarded by the National Energy Board for outstanding contribution to residential solar adoption.</p>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-label-sm font-label-sm text-solar-orange">
                <span>2023 Winner</span>
                <span className="material-symbols-outlined text-[16px] fill">verified</span>
              </div>
            </GlassCard>

            {/* Card 2 */}
            <GlassCard delay={0.2} className="flex flex-col gap-4 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined fill text-[32px]">verified_user</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2">ISO 9001:2015 Certified</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">Internationally recognized standard ensuring our services meet the needs of clients through an effective quality management system.</p>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-label-sm font-label-sm text-solar-orange">
                <span>Active Certification</span>
                <span className="material-symbols-outlined text-[16px] fill">verified</span>
              </div>
            </GlassCard>

            {/* Card 3 */}
            <GlassCard delay={0.3} className="flex flex-col gap-4 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined fill text-[32px]">gavel</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2">MP Cooperative Societies Act</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">Officially registered under government statutes, ensuring transparent, democratic, and community-first operations.</p>
              <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-center text-label-sm font-label-sm text-solar-orange">
                <span>Reg. No. MPCS-2021/44</span>
                <span className="material-symbols-outlined text-[16px] fill">verified</span>
              </div>
            </GlassCard>

            {/* Card 4 */}
            <GlassCard delay={0.4} className="flex flex-col gap-4 group md:col-span-2 lg:col-span-1">
              <div className="w-full h-40 rounded-lg bg-surface-container mb-2 overflow-hidden relative">
                <Image
                  src="/gallery/withCM.jpeg"
                  alt="PM Surya Ghar Authorized"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined fill text-[20px]">handshake</span>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">PM Surya Ghar Authorized</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">Official implementation partner for the national rooftop solar scheme, bringing subsidies directly to members.</p>
            </GlassCard>

            {/* Card 5 */}
            <GlassCard delay={0.5} className="flex flex-col gap-4 group lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-6 h-full items-center">
                <div className="w-full md:w-1/3 h-48 md:h-full rounded-lg overflow-hidden shrink-0 relative">
                  <Image
                    src="/gallery/somefuckassconventioncenterevent.jpeg"
                    alt="Featured in Times of India"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-4 py-2">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined fill text-[24px]">newspaper</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Featured in Times of India</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Recognized as a pioneering model for community-driven renewable energy adoption, highlighting our innovative financial structures that make solar accessible to middle-income households.</p>
                  <Link href={"/projects"} className="mt-2 text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all w-fit">
                    Read Full Article <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Press & Media Coverage */}
      <section className="py-12 md:py-16">
        <div className="max-w-container-max mx-auto px-md md:px-gutter">
          <SectionHeading
            eyebrow="MEDIA"
            title="In the Spotlight"
            subtitle="Our cooperative model is making headlines across major publications for its innovative approach to rooftop solar."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                outlet: "Times of India",
                headline: "How a MP Cooperative is Making Solar Affordable",
                date: "October 12, 2023",
                logo: "newspaper"
              },
              {
                outlet: "Economic Times",
                headline: "Solar Vistar Paves the Way for Community Energy",
                date: "November 05, 2023",
                logo: "article"
              },
              {
                outlet: "Dainik Bhaskar",
                headline: "सौर ऊर्जा में नई क्रांति: सहकारी समिति का कमाल",
                date: "January 20, 2024",
                logo: "menu_book"
              },
              {
                outlet: "The Hindu",
                headline: "Democratizing Power: The Solar Cooperative Model",
                date: "March 15, 2024",
                logo: "feed"
              }
            ].map((press, idx) => (
              <GlassCard key={idx} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4 text-solar-orange">
                  <span className="material-symbols-outlined text-2xl">{press.logo}</span>
                  <span className="font-label-md uppercase tracking-wider font-bold">{press.outlet}</span>
                </div>
                <h4 className="font-headline-sm text-on-surface mb-4 flex-1">{press.headline}</h4>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                  <span className="font-label-sm text-on-surface-variant">{press.date}</span>
                  <span className="text-solar-orange"><span className="material-symbols-outlined text-xl fill">newspaper</span></span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-12 md:py-16 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-md md:px-gutter">
          <div className="mb-12">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Journey of Impact</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Key milestones in our mission to democratize energy.</p>
          </div>
          <div className="relative">
            {/* Track */}
            <div className="absolute left-[15px] md:left-[16px] md:top-[16px] w-0.5 h-full md:w-[calc(100%-32px)] md:h-0.5 bg-outline-variant/30 rounded-full z-0"></div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between relative z-10">
              {/* Step 1 */}
              <div className="flex md:flex-col items-start gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/30 border-4 border-surface-container-low">
                  <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                </div>
                <div className="pt-1 md:pt-4">
                  <span className="font-label-sm text-label-sm text-solar-orange uppercase tracking-wider mb-1 block">Foundation</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base md:text-lg leading-tight">India&apos;s First Solar Cooperative</h4>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex md:flex-col items-start gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/30 border-4 border-surface-container-low">
                  <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                </div>
                <div className="pt-1 md:pt-4">
                  <span className="font-label-sm text-label-sm text-solar-orange uppercase tracking-wider mb-1 block">Legal</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base md:text-lg leading-tight">Registered MP Societies Act</h4>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex md:flex-col items-start gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/30 border-4 border-surface-container-low">
                  <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                </div>
                <div className="pt-1 md:pt-4">
                  <span className="font-label-sm text-label-sm text-solar-orange uppercase tracking-wider mb-1 block">Impact</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base md:text-lg leading-tight">500+ Residential Installations</h4>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex md:flex-col items-start gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-solar-orange flex items-center justify-center shrink-0 shadow-md shadow-solar-orange/30 border-4 border-surface-container-low animate-pulse">
                  <span className="material-symbols-outlined fill text-[16px] text-white">star</span>
                </div>
                <div className="pt-1 md:pt-4">
                  <span className="font-label-sm text-label-sm text-solar-orange uppercase tracking-wider mb-1 block">Recognition</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-base md:text-lg leading-tight">National Solar Excellence</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-12 md:py-16">
        <div className="max-w-container-max mx-auto px-md md:px-gutter">
          <div className="bg-[image:var(--background-image-solar-gradient)] rounded-2xl p-8 md:p-12 text-center text-on-primary relative overflow-hidden shadow-xl">
            {/* Decorative background blur */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-[672px] mx-auto flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] opacity-80 mb-2">groups</span>
              <h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md leading-tight">Join our award-winning cooperative movement today</h2>
              <p className="font-body-md text-body-md text-on-primary/90 mb-4">Be part of a trusted, recognized community bringing clean energy to thousands.</p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <GradientButton href="/contact" className="!bg-none !bg-surface !text-primary hover:scale-105 shadow-lg">
                  Get Started
                </GradientButton>
                <GradientButton href="/contact" className="!bg-none !bg-transparent border-2 border-white/50 !text-white hover:!bg-white/10 !shadow-none">
                  Contact Us
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
