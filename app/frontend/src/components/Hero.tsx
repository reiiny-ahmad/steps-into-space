import { ArrowDown, Sparkles, Telescope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export default function Hero() {
  const { content } = useSitePreferences();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 sm:px-6"
    >
      <div aria-hidden="true" className="cosmic-scene absolute inset-0">
        <div className="absolute inset-0 cosmic-gradient" />
        <div className="absolute inset-0 cosmic-stars" />
        <div className="absolute inset-0 cosmic-stars cosmic-stars-alt" />
        <div className="cosmic-nebula cosmic-nebula-a" />
        <div className="cosmic-nebula cosmic-nebula-b" />
        <div className="cosmic-nebula cosmic-nebula-c" />
        <div className="cosmic-planet" />
        <div className="cosmic-orbit" />
        <div className="cosmic-focus-star cosmic-focus-star-a" />
        <div className="cosmic-focus-star cosmic-focus-star-b" />
        <div className="cosmic-focus-star cosmic-focus-star-c" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/28 via-transparent to-transparent" />

      <div className="hero-cosmic-copy relative z-10 mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full theme-chip px-4 py-2 text-sm font-semibold mb-8">
          <Sparkles className="h-4 w-4" />
          <span>{content.brand.tagline}</span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight theme-title sm:text-6xl md:text-7xl lg:text-8xl">
          {content.hero.titleLead}{" "}
          <span className="theme-gradient-text">{content.hero.titleAccent}</span>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed theme-text-muted sm:text-xl md:text-2xl">
          {content.hero.subtitle}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed theme-text-soft sm:text-base">
          {content.hero.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={() => handleScroll("#activities")}
            size="lg"
            className="rounded-full border-0 px-8 py-6 text-lg theme-button-primary hover:opacity-95"
          >
            <Telescope className="mr-2 h-5 w-5" />
            {content.hero.primaryAction}
          </Button>
          <Button
            onClick={() => handleScroll("#about")}
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg theme-button-secondary hover:bg-white/10 dark:hover:bg-white/5"
          >
            {content.hero.secondaryAction}
          </Button>
        </div>

        <button
          onClick={() => handleScroll("#activities")}
          className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 animate-bounce theme-text-soft transition-colors hover:text-[var(--text-primary)]"
          aria-label="Scroll"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
