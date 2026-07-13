"use client";

import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export default function ContactUs() {
  return (
    <main className="flex-grow w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-xl pb-lg px-md relative overflow-hidden mt-16 md:mt-0 min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-[-1] opacity-30">
          <Image 
            src="/images/solar_family_1783983635437.png"
            alt="Office setting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-[-1]"></div>
        <div className="max-w-container-max mx-auto text-center animate-fade-in-up">
          <p className="font-label-md text-label-md text-primary tracking-widest uppercase mb-xs font-semibold">Get In Touch</p>
          <h1 className="font-display-lg text-display-lg md:font-display-lg md:text-display-lg font-display-lg-mobile text-display-lg-mobile text-on-surface mb-sm">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">We&apos;re here to help you transition to clean, affordable solar energy. Reach out to our experts today.</p>
        </div>
      </section>

      {/* Main Contact Section (Two Columns) */}
      <section className="py-xl px-md max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Left Column: Form */}
          <GlassCard hover={false} delay={0.1} className="p-lg relative z-10">
            <h2 className="font-headline-md text-headline-md mb-md text-on-surface">Book Your Free Site Visit</h2>
            <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="name">Name</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="name" placeholder="Your full name" type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="mobile">Mobile Number</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="mobile" placeholder="+91" type="tel"/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="city">City</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="city" placeholder="City" type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="address">Address</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="address" placeholder="Full address" type="text"/>
                </div>
              </div>
              
              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="bill">Monthly Electricity Bill (Optional)</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 focus:outline-none" id="bill" type="file"/>
              </div>
              
              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="message">Message</label>
                <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="message" placeholder="Any specific requirements?" rows={4}></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-sm pt-sm">
                <GradientButton type="submit" className="flex-1 font-semibold !w-full">
                  Book Free Site Visit
                </GradientButton>
                <GradientButton className="flex-1 !bg-[#25D366] !text-white flex items-center justify-center gap-xs font-semibold !w-full !shadow-none hover:scale-102 hover:!shadow-md transition-all">
                  <span className="material-symbols-outlined fill text-[20px]">chat</span>
                  WhatsApp Now
                </GradientButton>
              </div>
            </form>
          </GlassCard>
          
          {/* Right Column: Info Cards */}
          <div className="flex flex-col gap-lg">
            {/* Office 1 */}
            <GlassCard delay={0.2} className="p-lg flex gap-md items-start shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined fill text-primary">location_on</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Khargone Office</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">Sahakarita Bhavan, in front of Shakti Dairy, Nutan Nagar, Khargone 451001.</p>
                <a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-xs" href="#">Get Directions <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </GlassCard>
            
            {/* Office 2 */}
            <GlassCard delay={0.3} className="p-lg flex gap-md items-start shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined fill text-primary">business</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Indore Office</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">17 Aaditya Cosmopolitan, Lakhani Bypass, Mewar Road, Palda, Indore 452001.</p>
                <a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-xs" href="#">Get Directions <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </GlassCard>
            
            {/* Contact Details */}
            <GlassCard delay={0.4} className="p-lg mt-auto shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Quick Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined fill text-primary">call</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline">Phone</p>
                    <p className="font-body-md text-body-md text-on-surface">9303127775</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined fill text-primary">mail</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline">Email</p>
                    <p className="font-body-md text-body-md text-on-surface truncate" title="solarcooperativesociety@gmail.com">solarcoop...</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined fill text-primary">chat</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline">WhatsApp</p>
                    <p className="font-body-md text-body-md text-on-surface">9303127775</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined fill text-primary">schedule</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline">Working Hours</p>
                    <p className="font-body-md text-body-md text-on-surface">10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-xl px-md bg-surface-container-low">
        <div className="max-w-container-max mx-auto text-center">
          <SectionHeading title="Our Service Areas" centered={true} />
          <div className="flex flex-wrap justify-center gap-md">
            <GlassCard hover={false} delay={0.1} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-secondary-container">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Madhya Kshetra</span>
            </GlassCard>
            <GlassCard hover={false} delay={0.2} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-secondary-container">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Paschim Kshetra</span>
            </GlassCard>
            <GlassCard hover={false} delay={0.3} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-secondary-container">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Purva Kshetra</span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 relative bg-surface-dim">
        <Image 
          src="/images/solar_family_1783983635437.png"
          alt="Map of Madhya Pradesh"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <GlassCard hover={false} className="p-md text-center pointer-events-auto shadow-lg">
            <span className="material-symbols-outlined fill text-primary text-4xl mb-xs">map</span>
            <p className="font-label-md text-label-md text-on-surface font-semibold">Serving Madhya Pradesh</p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
