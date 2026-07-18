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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-md md:px-gutter max-w-container-max mx-auto flex flex-col items-center text-center animate-fade-in-up">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-fixed-dim/40 via-surface to-surface"></div>
        <div className="flex items-center gap-xs font-label-sm text-label-sm text-on-surface-variant mb-md">
          <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
          <span className="material-symbols-outlined fill text-[16px]">chevron_right</span>
          <span className="text-primary font-medium">Cooperative Society</span>
        </div>
        <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest mb-sm">Cooperative Model</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">What is a Cooperative Society?</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">Empowering communities through mutual cooperation and sustainable energy solutions.</p>
      </section>

      {/* Explanation Block */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <GlassCard delay={0.2} hover={false} className="relative rounded-xl overflow-hidden !p-0">
            <div className="relative w-full aspect-[4/3]">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Community collaboration" 
                src="/gallery/withbunchapeople.jpeg" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </GlassCard>
          <div className="flex flex-col gap-md">
            <SectionHeading eyebrow="THE CONCEPT" title="Power to the People" centered={false} />
            <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-sm -mt-md">
              <p>A cooperative society is fundamentally about people uniting for a common goal. It operates on the principles of mutual cooperation and democratic control, prioritizing shared growth over pure profit.</p>
              <p>In the context of solar energy, this means transparent pricing, community-driven decisions, and a commitment to ensuring that the benefits of sustainable energy are accessible to all members of the community, not just a select few.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Cooperative vs Traditional */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto">
        <SectionHeading 
          eyebrow="COMPARISON"
          title="The Cooperative Advantage" 
          subtitle="See how our model compares to traditional private solar vendors."
          centered
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-outline-variant/50">
                <th className="py-4 px-6 font-headline-sm text-on-surface w-1/3">Feature</th>
                <th className="py-4 px-6 font-headline-sm text-primary w-1/3 bg-primary/5 rounded-tl-xl border-t border-l border-primary/20">Solar Vistar (Coop)</th>
                <th className="py-4 px-6 font-headline-sm text-on-surface-variant w-1/3 border-t border-r border-outline-variant/20 rounded-tr-xl bg-surface-container-low">Traditional Vendor</th>
              </tr>
            </thead>
            <tbody className="font-body-md">
              <tr className="border-b border-outline-variant/20">
                <td className="py-4 px-6 text-on-surface font-semibold">Pricing Model</td>
                <td className="py-4 px-6 bg-primary/5 border-l border-primary/20 text-on-surface">Wholesale cost + minimal admin fee</td>
                <td className="py-4 px-6 bg-surface-container-low border-r border-outline-variant/20 text-on-surface-variant">Retail cost + high profit margins</td>
              </tr>
              <tr className="border-b border-outline-variant/20">
                <td className="py-4 px-6 text-on-surface font-semibold">Subsidy Assistance</td>
                <td className="py-4 px-6 bg-primary/5 border-l border-primary/20 text-on-surface">100% End-to-end paperwork handled</td>
                <td className="py-4 px-6 bg-surface-container-low border-r border-outline-variant/20 text-on-surface-variant">Often left to the customer</td>
              </tr>
              <tr className="border-b border-outline-variant/20">
                <td className="py-4 px-6 text-on-surface font-semibold">Ownership</td>
                <td className="py-4 px-6 bg-primary/5 border-l border-primary/20 text-on-surface">Customer becomes a member (owner)</td>
                <td className="py-4 px-6 bg-surface-container-low border-r border-outline-variant/20 text-on-surface-variant">Customer is just a buyer</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-on-surface font-semibold">Service Guarantee</td>
                <td className="py-4 px-6 bg-primary/5 border-l border-b border-primary/20 rounded-bl-xl text-on-surface">25-Year comprehensive support</td>
                <td className="py-4 px-6 bg-surface-container-low border-r border-b border-outline-variant/20 rounded-br-xl text-on-surface-variant">Standard manufacturer warranty only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* "Why Choose a Cooperative Society?" */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto bg-surface-container-low rounded-3xl my-xl">
        <SectionHeading 
          eyebrow="BENEFITS"
          title="Why Choose a Cooperative Society?" 
          subtitle="Discover the core values that drive our community-focused approach to renewable energy." 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mt-md">
          {/* Cards 1-9 */}
          <GlassCard delay={0.1} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">groups</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Community-first approach</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Profits are reinvested into the community for collective growth.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.15} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">visibility</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Transparent pricing</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">No hidden fees. You see exactly what you pay for.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.2} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">handshake</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Long-term relationships</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">We&apos;re your energy partners for the next 25 years.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.25} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">verified</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Govt-registered org</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Fully compliant and recognized by state authorities.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.3} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">solar_power</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Affordable rooftop solar</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Wholesale equipment pricing passed directly to members.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.35} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">eco</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Sustainable development</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Building a greener future for our next generation.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.4} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">school</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Youth empowerment</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Creating local green jobs and skill development programs.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.45} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">lightbulb</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Renewable energy awareness</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Educating communities on the benefits of solar power.</p>
            </div>
          </GlassCard>
          <GlassCard delay={0.5} className="flex flex-col gap-sm items-start">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined fill">sentiment_satisfied</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Customer satisfaction</h3>
              <p className="font-body-sm text-sm text-on-surface-variant mt-1">Our members&apos; success is our only metric of success.</p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Member Success Stories */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto">
        <SectionHeading 
          eyebrow="TESTIMONIALS"
          title="Member Success Stories" 
          subtitle="Real members sharing their experience with the cooperative model."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <GlassCard className="!p-8 bg-surface-container-lowest border-outline-variant/30 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary/40 mb-4 block">format_quote</span>
              <p className="font-body-lg text-on-surface italic mb-6">"Joining the cooperative was the best decision for my family. We not only got a top-tier solar system at a fraction of the market cost, but we also feel like we are part of a larger community movement. Our electricity bill went from ₹3000 to zero."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">M</div>
              <div>
                <h4 className="font-headline-sm text-on-surface text-base">Manish Patidar</h4>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Khargone Member</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="!p-8 bg-surface-container-lowest border-outline-variant/30 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary/40 mb-4 block">format_quote</span>
              <p className="font-body-lg text-on-surface italic mb-6">"What impressed me most was the transparency. The cooperative showed me exactly what the panels cost them. The installation was swift, and the PM Surya Ghar subsidy was processed without me having to visit a single government office."</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">S</div>
              <div>
                <h4 className="font-headline-sm text-on-surface text-base">Sunita Chouhan</h4>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider">Indore Member</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="bg-surface-container rounded-3xl p-xl shadow-lg border border-outline-variant/30 flex items-center justify-center text-center relative overflow-hidden">
          <span className="material-symbols-outlined text-[120px] text-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">format_quote</span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary relative z-10 max-w-4xl capitalize leading-tight">
            &quot;Solar isn't just an alternative. It's the future we must build today.&quot;
          </h2>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 md:py-28 px-md md:px-gutter max-w-container-max mx-auto text-center flex flex-col items-center gap-md">
        <h2 className="font-headline-md text-headline-md text-on-surface">Ready to Join the Revolution?</h2>
        <div className="flex flex-col sm:flex-row gap-sm items-center justify-center">
          <GradientButton href="/contact">
            Get Free Quote
          </GradientButton>
          <GradientButton href="/contact" className="!bg-none !bg-transparent border-[1.5px] border-primary !text-primary hover:!bg-primary/5 !shadow-none flex items-center gap-xs">
            <span className="material-symbols-outlined fill text-[20px]">chat</span>
            WhatsApp Now
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
