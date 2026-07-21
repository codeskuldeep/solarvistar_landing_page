import GradientButton from "../components/ui/GradientButton";

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center px-gutter py-28">
      <div className="max-w-[576px] mx-auto text-center flex flex-col items-center gap-md">
        <span className="w-20 h-20 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-2">
          <span className="material-symbols-outlined text-4xl">wb_sunny</span>
        </span>
        <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest">404 Error</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          This page has <span className="text-solar-gradient">gone dark</span>.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on the grid.
        </p>
        <div className="flex flex-col sm:flex-row gap-sm mt-sm">
          <GradientButton href="/" className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-sm">home</span>
            Back to Home
          </GradientButton>
          <GradientButton href="/contact" className="!bg-none !bg-transparent border-2 border-primary !text-primary hover:!bg-primary/5 !shadow-none">
            Contact Us
          </GradientButton>
        </div>
      </div>
    </main>
  );
}
