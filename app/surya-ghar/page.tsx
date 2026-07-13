import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export const metadata: Metadata = {
  title: "PM Surya Ghar Yojana | Solar Vistar",
  description: "Benefit from substantial government subsidies under PM Surya Ghar Muft Yojana and reduce your electricity bills.",
};

export default function PMSuryaGhar() {
  return (
    <main className="flex-grow pt-[80px] overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-xl overflow-hidden min-h-[819px] flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary-fixed opacity-30 blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-primary-fixed opacity-40 blur-3xl mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-gutter w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
            <div className="flex flex-col gap-sm animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant w-fit mb-4">
                <span className="material-symbols-outlined text-secondary-container text-sm">verified</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">Government of India Scheme</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-2">
                PM Surya Ghar <br />
                <span className="text-solar-gradient">Muft Yojana</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-[512px]">
                Empowering Indian households with clean energy. Install rooftop solar panels, significantly reduce your electricity bills, and benefit from substantial government subsidies designed to make renewable energy accessible to all.
              </p>
              <div className="flex flex-wrap gap-4">
                <GradientButton href="/contact" className="flex items-center gap-2">
                  Check Your Subsidy
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </GradientButton>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Solar panels at sunset" 
                src="/images/solar_training_1783983645115.png" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Glass overlay for premium feel */}
              <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 glass-card border border-outline-variant/30 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined fill">payments</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Max Subsidy Available</p>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">₹78,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-5 order-2 md:order-1 relative h-[350px] rounded-2xl overflow-hidden">
              <Image 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                alt="Modern residential rooftop with solar panels" 
                src="/images/solar_team_1783983625434.png"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="md:col-span-7 order-1 md:order-2 flex flex-col gap-4">
              <SectionHeading title="Scheme Overview" centered={false} />
              <div className="w-16 h-1 bg-secondary-container rounded-full -mt-lg mb-2"></div>
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

      {/* Subsidy Benefits Bento Grid */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading 
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
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Table Section */}
            <div>
              <SectionHeading title="Capacity Guide" centered={false} />
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
              <SectionHeading title="Long-Term Benefits" centered={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-secondary-container mt-1">trending_down</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Lower Electricity Bills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary mt-1">account_balance</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Government Subsidy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-secondary-container mt-1">eco</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Clean Renewable Energy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary mt-1">real_estate_agent</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Increased Property Value</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-secondary-container mt-1">savings</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Long-Term Savings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-primary mt-1">build</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Low Maintenance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors sm:col-span-2">
                  <span className="material-symbols-outlined text-secondary-container mt-1">wb_sunny</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-background font-bold">Energy Independence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistance Process */}
      <section className="py-xl bg-surface relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0b5ed7 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <SectionHeading 
            title="Our Seamless Assistance Process" 
            subtitle="End-to-end support for a hassle-free transition to solar energy."
          />
          <GlassCard hover={false} className="max-w-[768px] mx-auto p-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[39px] md:left-[47px] top-12 bottom-12 w-0.5 bg-outline-variant/30"></div>
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

      {/* CTA Section */}
      <section className="py-xl bg-surface-container-lowest">
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
