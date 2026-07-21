import type { Metadata } from "next";
import Image from "next/image";
import GlassCard from "../../components/ui/GlassCard";
import SectionHeading from "../../components/ui/SectionHeading";
import GradientButton from "../../components/ui/GradientButton";
import PageHero from "../../components/ui/PageHero";
import GalleryGrid from "../../components/ui/GalleryGrid";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "About Us | Solar Vistar",
  description: "Learn about India's First Solar Cooperative Society and our mission to build a sustainable future.",
};

export default function AboutUs() {
  // Read a preview slice of images from public/gallery for the Gallery teaser
  const galleryPath = path.join(process.cwd(), "public", "gallery");
  let galleryImages: string[] = [];
  try {
    if (fs.existsSync(galleryPath)) {
      const files = fs.readdirSync(galleryPath);
      galleryImages = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map((file) => `/gallery/${file}`)
        .slice(0, 6);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }
  if (galleryImages.length === 0) {
    galleryImages = ["/gallery/fieldvi.jpeg", "/gallery/installers.jpeg", "/gallery/solarbrigade.jpeg"];
  }

  return (
    <main className="w-full overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        eyebrow="About Us"
        icon="eco"
        title={<>India&apos;s First <span className="text-solar-gradient">Solar Cooperative</span> Society</>}
        subtitle="Meet the cooperative behind India's first community-owned rooftop solar movement."
        image="/gallery/withbunchapeople.jpeg"
        imageAlt="Solar Vistar cooperative community"
      />

      {/* 2. STORY */}
      <section className="w-full max-w-container-max mx-auto px-gutter md:px-lg py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-primary-fixed-dim/20 rounded-[40px] -z-10 blur-3xl transform -translate-y-10 scale-95 opacity-50"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <Image 
              alt="Solar Installation Team" 
              className="object-cover transition-transform duration-700 hover:scale-105" 
              src="/gallery/installers.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Glass badge overlay */}
            <div className="absolute bottom-md left-md glass-card border border-outline-variant/30 rounded-xl p-sm flex items-center gap-sm">
              <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined fill">verified</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-on-surface mb-0">500+</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Installations in MP</p>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-md">
            <SectionHeading 
              eyebrow="WHO WE ARE"
              title="Pioneering Cooperative Solar Energy" 
              centered={false} 
            />
            <div className="w-16 h-1 bg-secondary-container rounded-full -mt-md mb-xs"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-left md:text-justify">
              Solar Power Vistar Sahakari Sanstha Maryadit stands as India&apos;s first cooperative society dedicated to rooftop solar energy. We believe that the transition to clean energy should not just be technological, but communal.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant text-left md:text-justify">
              By applying cooperative principles—transparency, mutual trust, and community development—we ensure that every member benefits. We don&apos;t just sell panels; we build long-term relationships and sustainable ecosystems. From initial consultation to lifetime maintenance, we provide end-to-end solutions that make adopting solar energy effortless and highly rewarding.
            </p>
            <ul className="space-y-sm mt-sm">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined fill text-primary mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">100% Transparency in operations</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined fill text-primary mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Community-owned energy models</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined fill text-primary mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">End-to-end hassle-free installation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="w-full bg-surface-container-low py-20 md:py-28 mt-xl relative overflow-hidden">
        {/* Decorative blur blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-fixed-dim/30 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed-dim/30 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-gutter md:px-lg relative z-10">
          <SectionHeading 
            eyebrow="VISION & MISSION"
            title="Our Guiding Principles" 
            subtitle="Driving the transition to renewable energy through cooperative strength."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
            {/* Vision Card */}
            <GlassCard delay={0.1} className="flex flex-col justify-center">
              <div className="w-16 h-16 rounded-xl bg-primary-container/10 flex items-center justify-center mb-md">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Our Vision</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant italic leading-relaxed">
                &quot;To build a sustainable future where every village thrives with clean, affordable solar energy powered by cooperation, innovation, and community participation.&quot;
              </p>
            </GlassCard>
            
            {/* Mission Card */}
            <GlassCard delay={0.2}>
              <div className="flex items-center gap-sm mb-md">
                <div className="w-16 h-16 rounded-xl bg-secondary-container/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container text-3xl">flag</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Our Mission</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">lightbulb</span>
                  <span className="font-label-md text-label-md text-on-surface">Promote renewable energy awareness</span>
                </div>
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">payments</span>
                  <span className="font-label-md text-label-md text-on-surface">Make rooftop solar affordable</span>
                </div>
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">account_balance</span>
                  <span className="font-label-md text-label-md text-on-surface">Support PM Surya Ghar Mission</span>
                </div>
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">engineering</span>
                  <span className="font-label-md text-label-md text-on-surface">Deliver quality installations</span>
                </div>
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">trending_up</span>
                  <span className="font-label-md text-label-md text-on-surface">Empower young entrepreneurs</span>
                </div>
                <div className="flex items-start gap-xs bg-surface/50 p-sm rounded-lg border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">diversity_3</span>
                  <span className="font-label-md text-label-md text-on-surface">Build sustainable communities</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. CEO MESSAGE */}
      <section className="w-full max-w-container-max mx-auto px-gutter md:px-lg py-20 md:py-28 my-xl">
        <GlassCard className="!rounded-[32px] !p-lg md:!p-xl relative overflow-hidden" hover={false}>
          {/* Large decorative quote */}
          <span className="material-symbols-outlined fill absolute top-md left-md text-[120px] text-secondary-container/10 -z-10 transform -rotate-12">format_quote</span>
          <div className="flex flex-col md:flex-row items-center gap-lg relative z-10">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full border-4 border-surface shadow-xl overflow-hidden relative">
              <Image 
                alt="Himanshu Kushwah - CEO" 
                className="object-cover" 
                src="/gallery/CEO.jpeg"
                fill
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>
            <div className="flex-1 text-center md:text-left space-y-md">
              <p className="font-body-lg text-body-lg text-on-surface md:text-[20px] leading-relaxed italic">
                &quot;Our cooperative model is not just about generating electricity; it is about generating hope, employment, and a self-reliant community. We envision a Madhya Pradesh where every rooftop is a powerhouse, and every citizen is an active participant in India&apos;s clean energy transition. Together, we are building a brighter, sustainable tomorrow.&quot;
              </p>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-1">Himanshu Kushwah</h4>
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 4.1. IMPACT METRICS */}
      <section className="w-full bg-surface py-20 md:py-28 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <SectionHeading eyebrow="IMPACT" title="Our Impact by the Numbers" subtitle="Real change, measured in watts, rupees, and carbon reduced." centered />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { label: "Installations", value: "500+", icon: "roofing" },
              { label: "Members Savings", value: "₹2.5Cr", icon: "savings" },
              { label: "CO2 Reduced", value: "1,200 Tonnes", icon: "co2" },
              { label: "Districts Reached", value: "12", icon: "map" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/30 hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">{stat.icon}</span>
                <h4 className="text-4xl md:text-5xl font-display-lg font-bold text-on-surface mb-2">{stat.value}</h4>
                <p className="font-label-md text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2. OUR TEAM */}
      <section className="w-full bg-surface-container-lowest py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading eyebrow="TEAM" title="Meet the Core Team" subtitle="The dedicated professionals driving India's cooperative solar revolution." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Himanshu Kushwah", role: "CEO & Founder", img: "/gallery/CEO.jpeg" },
              { name: "Priya Sharma", role: "Head of Engineering", img: "/gallery/idk.jpeg" },
              { name: "Rahul Verma", role: "Community Outreach Lead", img: "/gallery/withsomeone.jpeg" }
            ].map((member, idx) => (
              <GlassCard key={idx} className="flex flex-col items-center text-center !p-8 group hover:-translate-y-2 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-surface shadow-md">
                  <Image src={member.img} alt={member.name} width={128} height={128} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-2xl font-display-lg font-bold text-on-surface mb-1">{member.name}</h4>
                <p className="text-primary font-label-md uppercase tracking-wide">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3. GOVERNANCE & REGISTRATION */}
      <section className="w-full max-w-container-max mx-auto px-gutter md:px-lg py-16">
        <GlassCard hover={false} className="!p-8 md:!p-10">
          <div className="flex items-center gap-sm mb-lg">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined fill">gavel</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Governance &amp; Registration</h3>
              <p className="font-body-sm text-sm text-on-surface-variant">Operating transparently under Indian cooperative law.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Registered Under</span>
              <span className="font-body-md text-body-md text-on-surface font-semibold">MP Cooperative Societies Act</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Registration No.</span>
              <span className="font-body-md text-body-md text-on-surface font-semibold">MPCS-2021/44</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Headquarters</span>
              <span className="font-body-md text-body-md text-on-surface font-semibold">Khargone, Madhya Pradesh</span>
            </div>
            <div className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Coverage</span>
              <span className="font-body-md text-body-md text-on-surface font-semibold">12 Districts in MP</span>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 4.4. FEATURED PROJECTS */}
      <section className="w-full bg-surface-container-low py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading
            eyebrow="OUR WORK"
            title="Featured Projects"
            subtitle="A glimpse of the residential and community installations we've delivered across Madhya Pradesh."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <GlassCard className="!p-0 overflow-hidden flex flex-col h-full border-outline-variant/30">
              <div className="h-56 relative w-full">
                <Image src="/gallery/withbunchapeople.jpeg" alt="The Sharma Residence solar installation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-label-sm uppercase tracking-wider shadow-sm">
                  Residential - 3kW
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline-sm text-on-surface mb-1">The Sharma Residence</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Indore, Madhya Pradesh
                </p>
                <p className="font-body-md text-on-surface-variant flex-1">Electricity bill went from ₹3,500/month to a ₹0 credit balance, with the full PM Surya Ghar subsidy handled end-to-end.</p>
              </div>
            </GlassCard>
            <GlassCard className="!p-0 overflow-hidden flex flex-col h-full border-outline-variant/30">
              <div className="h-56 relative w-full">
                <Image src="/gallery/solarbrigade.jpeg" alt="Aaditya Cosmopolitan Society solar installation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 right-4 bg-solar-orange/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-label-sm uppercase tracking-wider shadow-sm">
                  Commercial - 15kW
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-headline-sm text-on-surface mb-1">Aaditya Cosmopolitan Society</h3>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Dhar, Madhya Pradesh
                </p>
                <p className="font-body-md text-on-surface-variant flex-1">Cut common-area electricity costs by 15% for all 40 flats, funded through the cooperative&apos;s wholesale pricing model.</p>
              </div>
            </GlassCard>
          </div>
          <div className="flex justify-center mt-12">
            <GradientButton href="/projects" className="flex items-center gap-xs">
              View All Projects
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* 4.5. GALLERY */}
      <section className="w-full bg-surface-container-lowest py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading
            eyebrow="GALLERY"
            title="Life at Solar Vistar"
            subtitle="Moments from our installations, community events, and the team behind the mission."
            centered
          />
          <div className="mt-12">
            <GalleryGrid images={galleryImages} />
          </div>
          <div className="flex justify-center mt-12">
            <GradientButton href="/projects" className="!bg-none !bg-transparent border-[1.5px] border-primary !text-primary hover:!bg-primary/5 !shadow-none flex items-center gap-xs">
              View Full Gallery
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* 5. HIGHLIGHT BAND */}
      <section className="w-full solar-gradient py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-md text-headline-md text-on-primary font-bold tracking-wide">
            Powering the Future, One Rooftop at a Time.
          </h2>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section className="w-full bg-surface-container-highest py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col items-center justify-center text-center space-y-md">
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Ready to transition to clean energy?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[576px]">
            Join the cooperative movement and secure your energy future with transparent, high-quality solar installations.
          </p>
          <GradientButton href="/contact" className="flex items-center gap-xs">
            Book a Free Site Visit
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
