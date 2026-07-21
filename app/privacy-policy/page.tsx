import type { Metadata } from "next";
import GlassCard from "../../components/ui/GlassCard";
import PageHero from "../../components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Solar Vistar",
  description: "How Solar Power Vistar Sahakari Sanstha Maryadit collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you submit an enquiry, book a site visit, or register for training through this website, we collect the details you provide directly — such as your name, mobile number, city, address, and any message or requirements you share.",
      "We do not collect payment information through this website; no online payments are processed here.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you submit to respond to your enquiry, schedule a free site visit, process training registrations, and provide updates related to your solar installation or PM Surya Ghar Yojana application.",
      "We may contact you by phone, WhatsApp, or email using the details you provide, for these purposes only.",
    ],
  },
  {
    title: "3. Information Sharing",
    body: [
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
      "Where required to complete your solar installation — for example, government subsidy processing under the PM Surya Ghar Muft Yojana or DISCOM net-metering applications — relevant details may be shared with the concerned government portal or utility, solely for that purpose.",
    ],
  },
  {
    title: "4. Cookies & Local Storage",
    body: [
      "This site uses minimal local storage only to remember your light/dark theme preference. We do not use third-party advertising or tracking cookies.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect the information you share with us against unauthorized access, alteration, or disclosure.",
    ],
  },
  {
    title: "6. Your Choices",
    body: [
      "You may request access to, correction of, or deletion of the personal information you've shared with us at any time by contacting us using the details below.",
    ],
  },
  {
    title: "7. Contact Us",
    body: [
      "For any questions about this Privacy Policy, reach us at solarcooperativesociety@gmail.com or +91 9303127775, or write to us at Sahakarita Bhavan, in front of Shakti Dairy, Nutan Nagar, Khargone 451001.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="w-full overflow-hidden">
      <PageHero
        eyebrow="Legal"
        icon="privacy_tip"
        title={<>Privacy <span className="text-solar-gradient">Policy</span></>}
        subtitle="Last updated: July 2026. This policy explains how Solar Power Vistar Sahakari Sanstha Maryadit handles the information you share with us."
        image="/gallery/idk.jpeg"
        imageAlt="Solar Vistar team"
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
