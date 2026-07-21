import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface dark:bg-on-tertiary-fixed text-on-tertiary-container full-width border-t border-outline-variant/20 pt-xl pb-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg px-gutter py-xl max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-sm lg:col-span-1">
          <div className="flex items-center gap-xs">
            <Image
              src="/logo.PNG"
              alt="Solar Vistar Logo"
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto object-contain bg-white/10 rounded-md p-1"
            />
          </div>
          <p className="font-body-md text-body-md text-surface-variant mt-2">
            India&apos;s First Solar Cooperative Society. Powering homes, empowering communities.
          </p>
          <div className="flex gap-sm mt-2">
            <a href="tel:+919303127775" aria-label="Call us" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-surface-variant hover:text-secondary-container hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
            <a href="https://wa.me/919303127775" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-surface-variant hover:text-secondary-container hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </a>
            <a href="mailto:solarcooperativesociety@gmail.com" aria-label="Email us" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-surface-variant hover:text-secondary-container hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-xs">
          <h4 className="font-label-md text-label-md text-surface-bright font-bold mb-2 uppercase tracking-wider">Company</h4>
          <Link href="/" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Home
          </Link>
          <Link href="/about" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            About Us
          </Link>
          <Link href="/awards" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Awards & Achievements
          </Link>
          <Link href="/projects" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Projects & Gallery
          </Link>
          <Link href="/contact" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Contact Us
          </Link>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-xs">
          <h4 className="font-label-md text-label-md text-surface-bright font-bold mb-2 uppercase tracking-wider">Services</h4>
          <Link href="/residential" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Residential Solar
          </Link>
          <Link href="/surya-ghar" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            PM Surya Ghar Yojana
          </Link>
          <Link href="/cooperative" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Cooperative Model
          </Link>
        </div>

        {/* Community Column */}
        <div className="flex flex-col gap-xs">
          <h4 className="font-label-md text-label-md text-surface-bright font-bold mb-2 uppercase tracking-wider">Community</h4>
          <Link href="/entrepreneurs" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Young Entrepreneurs
          </Link>
          <Link href="/training" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Solar Practical Training
          </Link>
          <h4 className="font-label-md text-label-md text-surface-bright font-bold mb-2 mt-4 uppercase tracking-wider">Legal</h4>
          <Link href="/privacy-policy" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-body-md text-body-md text-surface-variant hover:text-secondary-container transition-colors hover:translate-x-1 inline-block w-max">
            Terms of Service
          </Link>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-xs">
          <h4 className="font-label-md text-label-md text-surface-bright font-bold mb-2 uppercase tracking-wider">Contact Us</h4>
          <p className="font-body-md text-body-md text-surface-variant flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary-container text-sm mt-1">location_on</span>
            <span>Sahakarita Bhavan, in front of Shakti Dairy, Nutan Nagar, Khargone 451001.</span>
          </p>
          <p className="font-body-md text-body-md text-surface-variant flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-secondary-container text-sm">call</span>
            <a href="tel:+919303127775" className="hover:text-secondary-container transition-colors">+91 9303127775</a>
          </p>
          <p className="font-body-md text-body-md text-surface-variant flex items-center gap-2 mt-2 break-all">
            <span className="material-symbols-outlined text-secondary-container text-sm shrink-0">mail</span>
            <a href="mailto:solarcooperativesociety@gmail.com" className="hover:text-secondary-container transition-colors">solarcooperativesociety@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-lg pt-md border-t border-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-sm">
        <p className="font-body-md text-body-md text-surface-variant text-sm">
          © {year} Solar Power Vistar Sahakari Sanstha Maryadit. All rights reserved.
        </p>
        <div className="flex gap-sm">
          <Link href="https://wa.me/919303127775" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-secondary-container transition-colors">
            <span className="material-symbols-outlined">chat</span>
          </Link>
          <Link href="mailto:solarcooperativesociety@gmail.com" className="text-surface-variant hover:text-secondary-container transition-colors">
            <span className="material-symbols-outlined">mail</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
