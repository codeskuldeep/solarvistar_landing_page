"use client";

import Image from "next/image";
import { useState } from "react";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);
    setError("");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5001/api/website/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit inquiry");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      form.reset();
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow w-full overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-md relative overflow-hidden min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-[-1] opacity-30">
          <Image 
            src="/gallery/withbunchapeople.jpeg"
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
      <section className="py-20 md:py-28 px-md max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Left Column: Form */}
          <GlassCard hover={false} delay={0.1} className="p-lg relative z-10">
            <h2 className="font-headline-md text-headline-md mb-md text-on-surface">Book Your Free Site Visit</h2>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500 text-green-700 dark:text-green-400 p-4 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined">check_circle</span>
                <p>Thank you! Your request has been received. We will contact you shortly.</p>
              </div>
            ) : (
            <form className="space-y-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="name">Name</label>
                  <input required name="customerName" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="name" placeholder="Your full name" type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="mobile">Mobile Number</label>
                  <input required name="phoneNumber" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="mobile" placeholder="+91" type="tel"/>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="city">City</label>
                  <input required name="city" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="city" placeholder="City" type="text"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="address">Address</label>
                  <input name="address" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="address" placeholder="Full address" type="text"/>
                </div>
              </div>
              
              <div>
                <label className="block font-label-sm text-label-sm text-outline mb-xs" htmlFor="message">Message</label>
                <textarea name="requirements" className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-xs focus:ring-1 focus:ring-primary focus:border-primary font-body-md text-body-md transition-colors focus:outline-none" id="message" placeholder="Any specific requirements?" rows={4}></textarea>
              </div>

              {error && (
                <div className="text-error text-sm mt-2">{error}</div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-sm pt-sm">
                <GradientButton type="submit" className="flex-1 font-semibold !w-full disabled:opacity-70" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Book Free Site Visit"}
                </GradientButton>
                <GradientButton type="button" className="flex-1 !bg-[#25D366] !text-white flex items-center justify-center gap-xs font-semibold !w-full !shadow-none hover:scale-102 hover:!shadow-md transition-all" onClick={() => window.open('https://wa.me/919303127775', '_blank')}>
                  <span className="material-symbols-outlined fill text-[20px]">chat</span>
                  WhatsApp Now
                </GradientButton>
              </div>
            </form>
            )}
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
                  <div className="overflow-hidden">
                    <p className="font-label-sm text-label-sm text-outline">Email</p>
                    <p className="font-body-md text-body-md text-on-surface text-sm break-all">solarcooperativesociety@gmail.com</p>
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

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-md max-w-[800px] mx-auto">
        <SectionHeading 
          eyebrow="FAQ"
          title="Frequently Asked Questions" 
          subtitle="Quick answers to common questions about our cooperative."
          centered
        />
        <div className="mt-8 space-y-4">
          {[
            {
              q: "How long does the installation take?",
              a: "Once your PM Surya Ghar application is approved, our team can complete the physical installation of a residential system in just 1 to 2 working days."
            },
            {
              q: "How do I claim the government subsidy?",
              a: "We handle the entire PM Surya Ghar Yojana subsidy process for you. From initial registration to final documentation, our team ensures the subsidy is credited directly to your bank account."
            },
            {
              q: "What maintenance is required?",
              a: "Solar panels require very little maintenance—usually just periodic cleaning with water. We provide a 25-year service guarantee, so if anything goes wrong, we've got you covered."
            },
            {
              q: "Can I sell excess electricity back to the grid?",
              a: "Yes! Through net metering, any excess power your system generates is fed back into the grid, which earns you credits on your electricity bill."
            }
          ].map((faq, idx) => (
            <GlassCard key={idx} className="!p-6 bg-surface-container-lowest">
              <h4 className="font-headline-sm text-on-surface mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">help</span>
                {faq.q}
              </h4>
              <p className="font-body-md text-on-surface-variant pl-9">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 px-md bg-surface-container-low">
        <div className="max-w-container-max mx-auto text-center">
          <SectionHeading eyebrow="WHERE WE WORK" title="Our Service Areas" centered={true} />
          <div className="flex flex-wrap justify-center gap-md">
            <GlassCard hover={false} delay={0.1} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-solar-orange">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Madhya Kshetra</span>
            </GlassCard>
            <GlassCard hover={false} delay={0.2} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-solar-orange">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Paschim Kshetra</span>
            </GlassCard>
            <GlassCard hover={false} delay={0.3} className="!rounded-full px-lg py-sm flex items-center gap-sm shadow-sm">
              <span className="material-symbols-outlined fill text-solar-orange">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">MP Purva Kshetra</span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full relative bg-surface-dim py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <SectionHeading eyebrow="OFFICES" title="Visit Us" subtitle="Drop by our offices to discuss your solar transition." centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md mt-lg">
            <GlassCard hover={false} className="p-md text-center shadow-lg bg-surface flex flex-col items-center justify-center min-h-[200px]">
              <span className="material-symbols-outlined fill text-primary text-4xl mb-sm">map</span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Khargone Headquarters</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">Sahakarita Bhavan, in front of Shakti Dairy, Nutan Nagar, Khargone 451001.</p>
            </GlassCard>
            <GlassCard hover={false} className="p-md text-center shadow-lg bg-surface flex flex-col items-center justify-center min-h-[200px]">
              <span className="material-symbols-outlined fill text-primary text-4xl mb-sm">business</span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Indore Branch</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">17 Aaditya Cosmopolitan, Lakhani Bypass, Mewar Road, Palda, Indore 452001.</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </main>
  );
}
