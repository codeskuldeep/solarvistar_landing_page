import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Solar Vistar - Premium Cooperative Solar Solutions",
  description: "India's first Solar Cooperative Society. We make rooftop solar accessible, transparent, and profitable.",
};

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      <Hero />
    </main>
  );
}
