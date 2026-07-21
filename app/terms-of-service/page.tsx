import type { Metadata } from "next";
import GlassCard from "../../components/ui/GlassCard";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Solar Vistar",
  description: "Terms governing your use of the Solar Vistar website and enquiry process.",
};

const sections = [
  {
    title: "1. About This Website",
    body: [
      "This website is operated by Solar Power Vistar Sahakari Sanstha Maryadit (\"Solar Vistar\", \"we\", \"us\"), a cooperative society registered under the Madhya Pradesh Cooperative Societies Act (Reg. No. MPCS-2021/44), headquartered in Khargone, Madhya Pradesh.",
      "By using this website, you agree to these Terms of Service.",
    ],
  },
  {
    title: "2. Use of the Website",
    body: [
      "This website is provided to share information about our residential solar, PM Surya Ghar Yojana, cooperative membership, entrepreneurship, and training programs, and to let you request a site visit, quote, or training registration.",
      "You agree to provide accurate information when submitting any form on this site, and not to misuse the site in any way that could damage, disable, or impair it.",
    ],
  },
  {
    title: "3. Cooperative Membership",
    body: [
      "Becoming a member of the cooperative society, and the rights and obligations that come with membership, are governed separately by the society's bylaws and applicable cooperative law — not by these website terms. Submitting an enquiry through this site does not itself make you a member.",
    ],
  },
  {
    title: "4. Quotes, Subsidies & Installations",
    body: [
      "Pricing, subsidy amounts (including under the PM Surya Ghar Muft Yojana), and system sizing shown on this site are indicative and provided for general guidance. Final pricing and eligibility are confirmed only after a site survey and are subject to change based on government policy, DISCOM approval, and your specific site conditions.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: [
      "All text, images, and design on this website are the property of Solar Vistar unless otherwise noted, and may not be reproduced without our written permission.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "While we make reasonable efforts to keep information on this site accurate and up to date, we do not guarantee that it is error-free. Solar Vistar is not liable for any indirect or incidental loss arising from your use of this website; our installation and service commitments are governed by your individual service agreement, not this website.",
    ],
  },
  {
    title: "7. Governing Law",
    body: [
      "These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Khargone, Madhya Pradesh.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "Questions about these terms can be sent to solarcooperativesociety@gmail.com or +91 9303127775.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Legal"
        icon="gavel"
        title={<>Terms of <span className="text-solar-gradient">Service</span></>}
        subtitle="Last updated: July 2026. Please read these terms carefully before using this website."
        image="/gallery/somefuckassconventioncenterevent.jpeg"
        imageAlt="Solar Vistar community event"
      />

      <section className="max-w-[840px] mx-auto px-gutter py-20 md:py-28">
        <GlassCard hover={false} className="!p-8 md:!p-12 flex flex-col gap-lg">
          {sections.map((s) => (
            <div key={s.title} className="flex flex-col gap-sm">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="font-body-md text-body-md text-on-surface-variant">{p}</p>
              ))}
            </div>
          ))}
        </GlassCard>
      </section>
    </main>
  );
}
