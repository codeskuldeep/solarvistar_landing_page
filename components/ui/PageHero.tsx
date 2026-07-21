import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  icon?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
  chips?: { icon?: string; label: string }[];
  stats?: { value: string; label: string }[];
  cta?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  icon = "bolt",
  title,
  subtitle,
  image,
  imageAlt,
  chips,
  stats,
  cta,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[480px] flex items-center justify-center text-center overflow-hidden">
      <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-surface/85 dark:bg-surface-dim/85 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter md:px-lg py-20 md:py-28 flex flex-col items-center animate-fade-in-up">
        <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-md shadow-sm shadow-primary/5">
          <span className="material-symbols-outlined fill text-[16px]">{icon}</span>
          <span className="uppercase tracking-wider">{eyebrow}</span>
        </div>

        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface max-w-[896px] mb-sm leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px] mx-auto">{subtitle}</p>
        )}

        {chips && chips.length > 0 && (
          <div className="flex flex-wrap justify-center gap-xs mt-md">
            {chips.map((chip) => (
              <span
                key={chip.label}
                className="bg-surface/90 border border-outline-variant/30 px-4 py-2 rounded-full font-label-sm text-label-sm text-primary shadow-sm flex items-center gap-xs"
              >
                {chip.icon && <span className="material-symbols-outlined fill text-solar-orange text-sm">{chip.icon}</span>}
                {chip.label}
              </span>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mt-md pt-4 border-t border-outline-variant/30">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-12 bg-outline-variant/30 hidden sm:block"></div>}
                <div className="flex flex-col items-center">
                  <span className="font-display-lg text-3xl text-primary font-bold">{stat.value}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {cta && <div className="flex flex-wrap justify-center gap-sm mt-md">{cta}</div>}
      </div>
    </section>
  );
}
