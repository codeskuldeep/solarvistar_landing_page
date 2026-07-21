import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "PM Surya Ghar Yojana | Solar Vistar",
  description: "Benefit from substantial government subsidies under PM Surya Ghar Muft Yojana and reduce your electricity bills.",
};

export default function PMSuryaGhar() {
  return (
    <main className="flex-grow overflow-hidden">
      {/* Hero Section */}
      <PageHero
        eyebrow="Government of India Scheme"
        icon="verified"
        title={<>PM Surya Ghar <span className="text-solar-gradient">Muft Yojana</span></>}
        subtitle="Empowering Indian households with clean energy. Install rooftop solar panels, significantly reduce your electricity bills, and benefit from substantial government subsidies designed to make renewable energy accessible to all."
        image="/gallery/withCM.jpeg"
        imageAlt="Solar panels at sunset"
        stats={[{ value: "₹78,000", label: "Max Subsidy Available" }]}
        cta={
          <GradientButton href="/contact" className="flex items-center gap-2">
            Check Your Subsidy
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </GradientButton>
        }
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative h-[350px] rounded-2xl overflow-hidden">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Modern residential rooftop with solar panels" 
                src="/gallery/fieldvi.jpeg"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-2 flex flex-col gap-4">
              <SectionHeading eyebrow="ABOUT" title="Scheme Overview" centered={false} />
              <div className="w-16 h-1 bg-solar-orange rounded-full -mt-lg mb-2"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The PM Surya Ghar Muft Yojana is a transformative initiative aimed at illuminating millions of homes across India with free electricity. By encouraging the adoption of grid-connected rooftop solar systems, the scheme not only reduces the financial burden on middle and lower-income families but also promotes environmental sustainability.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Through structured Central Financial Assistance (CFA), the government directly subsidizes the capital cost of installation, ensuring a rapid return on investment. Solar Power Vistar is committed to facilitating this transition for cooperative members, providing end-to-end support from application to commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Documents */}
      <section className="py-20 md:py-28 bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading 
            eyebrow="ELIGIBILITY"
            title="Are You Eligible?" 
            subtitle="Everything you need to know before applying for the PM Surya Ghar subsidy."
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            
            {/* Eligibility Criteria */}
            <GlassCard className="!p-8 bg-surface-container-lowest">
              <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/30 pb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">rule</span>
                </div>
                <h3 className="font-headline-sm text-on-surface">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-bold text-on-surface block">Indian Citizen</span>
                    <span className="text-sm text-on-surface-variant">Must be a permanent resident of India.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-bold text-on-surface block">Own a Suitable Roof</span>
                    <span className="text-sm text-on-surface-variant">House must have a pucca (concrete) roof with adequate space for solar panels.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-bold text-on-surface block">Valid Electricity Connection</span>
                    <span className="text-sm text-on-surface-variant">Must have an active electricity connection in the applicant&apos;s name.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <span className="font-bold text-on-surface block">No Prior Subsidies</span>
                    <span className="text-sm text-on-surface-variant">The applicant should not have availed of any other subsidy for solar panels previously.</span>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Document Checklist */}
            <GlassCard className="!p-8 bg-surface-container-lowest">
              <div className="flex items-center gap-4 mb-6 border-b border-outline-variant/30 pb-4">
                <div className="w-12 h-12 rounded-full bg-solar-orange/10 flex items-center justify-center text-solar-orange">
                  <span className="material-symbols-outlined text-2xl">list_alt</span>
                </div>
                <h3 className="font-headline-sm text-on-surface">Required Documents</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">badge</span>
                  <span className="font-body-sm">Aadhaar Card</span>
                </li>
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">receipt_long</span>
                  <span className="font-body-sm">Recent Electricity Bill</span>
                </li>
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">account_balance</span>
                  <span className="font-body-sm">Bank Passbook</span>
                </li>
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">home</span>
                  <span className="font-body-sm">Property Tax Receipt</span>
                </li>
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">image</span>
                  <span className="font-body-sm">Passport Size Photo</span>
                </li>
                <li className="bg-surface p-3 rounded-lg border border-outline-variant/20 flex items-center gap-3">
                  <span className="material-symbols-outlined text-solar-orange text-[20px]">email</span>
                  <span className="font-body-sm">Active Mobile & Email</span>
                </li>
              </ul>
            </GlassCard>

          </div>
        </div>
      </section>

      {/* Subsidy Benefits Bento Grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading 
            eyebrow="BENEFITS"
            title="Subsidy Structure"
            subtitle="Transparent financial assistance based on system capacity designed to maximize your savings."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Cards */}
            <GlassCard delay={0.1} className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant mb-2">
                <span className="material-symbols-outlined fill">battery_charging_full</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">Up to 2 kW</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Significant support for smaller household energy needs.</p>
              <div className="mt-auto pt-4 border-t border-outline-variant/30">
                <p className="font-headline-sm text-headline-sm text-primary font-bold">₹30,000 <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">per kW</span></p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.2} className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant mb-2">
                <span className="material-symbols-outlined fill">electric_bolt</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">Additional up to 3 kW</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Tiered support for medium to high consumption households.</p>
              <div className="mt-auto pt-4 border-t border-outline-variant/30">
                <p className="font-headline-sm text-headline-sm text-primary font-bold">₹18,000 <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">per kW</span></p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.3} className="flex flex-col gap-4 solar-gradient !border-0">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-on-primary mb-2 backdrop-blur-sm">
                <span className="material-symbols-outlined fill">workspace_premium</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Above 3 kW</h3>
              <p className="font-body-md text-body-md text-on-primary/90 flex-grow">Maximum capped benefit for large residential systems.</p>
              <div className="mt-auto pt-4 border-t border-white/30">
                <p className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">Max ₹78,000</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.4} className="md:col-span-2 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed-dim flex-shrink-0 flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined text-3xl fill">domain</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">GHS / RWA Facilities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">Support for common facilities including EV charging up to 500 kW capacity (@3 kW per house).</p>
                <p className="font-label-md text-label-md text-primary font-bold">₹18,000 per kW</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.5} className="flex flex-col justify-center bg-surface-container-high border-dashed border-2 border-outline-variant !shadow-none hover:!shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary-container">info</span>
                <h3 className="font-label-md text-label-md font-bold text-on-background">Special States Note</h3>
              </div>
              <p className="font-body-sm text-sm text-on-surface-variant">
                Additional <span className="font-bold text-secondary-container">10% subsidy per kW</span> applies to specific hilly and North-Eastern states.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Capacity Guide & Benefits */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Table Section */}
            <div>
              <SectionHeading eyebrow="SIZING" title="Capacity Guide" centered={false} />
              <GlassCard hover={false} className="overflow-hidden p-0 !p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high border-b border-outline-variant/30">
                      <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant">Monthly Consumption (Units)</th>
                      <th className="py-4 px-6 font-label-md text-label-md text-on-surface-variant text-right">Recommended Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-body-md text-body-md text-on-background">0 – 150 units</td>
                      <td className="py-4 px-6 font-headline-sm text-headline-sm text-primary text-right font-bold">1 – 2 kW</td>
                    </tr>
                    <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-body-md text-body-md text-on-background">150 – 300 units</td>
                      <td className="py-4 px-6 font-headline-sm text-headline-sm text-primary text-right font-bold">2 – 3 kW</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-6 font-body-md text-body-md text-on-background">&gt; 300 units</td>
                      <td className="py-4 px-6 font-headline-sm text-headline-sm text-primary text-right font-bold">Above 3 kW</td>
                    </tr>
                  </tbody>
                </table>
              </GlassCard>
            </div>
            
            {/* Benefits Grid */}
            <div>
              <SectionHeading eyebrow="ADVANTAGES" title="Long-Term Benefits" centered={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "trending_down", color: "text-secondary-container", title: "Lower Electricity Bills", desc: "Offset most or all of your monthly consumption from day one." },
                  { icon: "account_balance", color: "text-primary", title: "Government Subsidy", desc: "Up to ₹78,000 credited directly to your bank account." },
                  { icon: "eco", color: "text-secondary-container", title: "Clean Renewable Energy", desc: "Cut your household's carbon footprint with every unit generated." },
                  { icon: "real_estate_agent", color: "text-primary", title: "Increased Property Value", desc: "A commissioned solar system adds resale appeal to your home." },
                  { icon: "savings", color: "text-secondary-container", title: "Long-Term Savings", desc: "System pays for itself in ~2.5 years, then powers your home free." },
                  { icon: "build", color: "text-primary", title: "Low Maintenance", desc: "Just periodic cleaning — backed by our 25-year service guarantee." },
                  { icon: "wb_sunny", color: "text-secondary-container", title: "Energy Independence", desc: "Less dependence on grid tariffs and outages, more control over your bill.", span: true },
                ].map((b) => (
                  <div key={b.title} className={`flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors ${b.span ? "sm:col-span-2" : ""}`}>
                    <span className={`material-symbols-outlined mt-1 ${b.color}`}>{b.icon}</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-background font-bold">{b.title}</p>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistance Process */}
      <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary-container) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <SectionHeading 
            eyebrow="WORKFLOW"
            title="Our Seamless Assistance Process" 
            subtitle="End-to-end support for a hassle-free transition to solar energy."
          />
          <GlassCard hover={false} className="max-w-[768px] mx-auto p-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[55px] top-12 bottom-12 w-0.5 bg-outline-variant/30"></div>
            <ul className="flex flex-col gap-6 relative">
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Free Site Survey</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">System Design</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">request_quote</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Customized Quotation</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Documentation Assistance</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-md z-10 shrink-0 scale-110">
                  <span className="material-symbols-outlined fill">app_registration</span>
                </div>
                <div className="font-headline-sm text-headline-sm text-primary font-bold">PM Surya Ghar Registration Support</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Subsidy Guidance</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">handyman</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Professional Installation</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary flex items-center justify-center text-primary z-10 shrink-0">
                  <span className="material-symbols-outlined">fact_check</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Testing &amp; Commissioning</div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-secondary-container flex items-center justify-center text-secondary-container z-10 shrink-0">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div className="font-body-lg text-body-lg text-on-background">Free 5-Year Maintenance</div>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading 
            eyebrow="CLARIFICATIONS"
            title="Myths vs. Facts" 
            subtitle="Clearing the air around rooftop solar and government subsidies."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <GlassCard className="!p-6 border-outline-variant/30">
              <div className="flex items-center gap-2 text-error mb-2">
                <span className="material-symbols-outlined">cancel</span>
                <span className="font-bold text-sm uppercase tracking-wider">Myth</span>
              </div>
              <p className="font-headline-sm text-on-surface mb-6">&ldquo;The subsidy takes years to process.&rdquo;</p>
              <div className="flex items-center gap-2 text-primary mb-2 border-t border-outline-variant/30 pt-4">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="font-bold text-sm uppercase tracking-wider">Fact</span>
              </div>
              <p className="font-body-sm text-on-surface-variant">With the new National Portal, subsidies are credited directly to your bank account within 30 days of project commissioning and inspection.</p>
            </GlassCard>
            
            <GlassCard className="!p-6 border-outline-variant/30">
              <div className="flex items-center gap-2 text-error mb-2">
                <span className="material-symbols-outlined">cancel</span>
                <span className="font-bold text-sm uppercase tracking-wider">Myth</span>
              </div>
              <p className="font-headline-sm text-on-surface mb-6">&ldquo;I have to pay the vendor the full amount first.&rdquo;</p>
              <div className="flex items-center gap-2 text-primary mb-2 border-t border-outline-variant/30 pt-4">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="font-bold text-sm uppercase tracking-wider">Fact</span>
              </div>
              <p className="font-body-sm text-on-surface-variant">While some vendors require full payment, our cooperative model and bank tie-ups allow you to finance the net cost with zero upfront investment.</p>
            </GlassCard>

            <GlassCard className="!p-6 border-outline-variant/30">
              <div className="flex items-center gap-2 text-error mb-2">
                <span className="material-symbols-outlined">cancel</span>
                <span className="font-bold text-sm uppercase tracking-wider">Myth</span>
              </div>
              <p className="font-headline-sm text-on-surface mb-6">&ldquo;I can claim subsidy on any solar panel.&rdquo;</p>
              <div className="flex items-center gap-2 text-primary mb-2 border-t border-outline-variant/30 pt-4">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="font-bold text-sm uppercase tracking-wider">Fact</span>
              </div>
              <p className="font-body-sm text-on-surface-variant">The subsidy is ONLY applicable if you use Domestic Content Requirement (DCR) panels from an ALMM-approved list installed by registered vendors like us.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <GlassCard hover={false} className="rounded-2xl p-8 md:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden">
            {/* Subtle background decoration inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="font-headline-md text-headline-md text-on-background mb-4 relative z-10">Ready to Switch to Solar?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[576px] mb-8 relative z-10">
              Take the first step towards energy independence and significant savings. Our experts are ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <GradientButton href="/contact" className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                Book Free Site Visit
              </GradientButton>
              <GradientButton href="/contact" className="!bg-none !bg-transparent border-2 border-primary !text-primary hover:!bg-primary-fixed/20 flex items-center justify-center gap-2 !shadow-none">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Now
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
