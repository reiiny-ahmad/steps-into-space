import { useEffect, useState } from "react";
import { Menu, Rocket, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PreferenceControls from "@/components/PreferenceControls";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { content } = useSitePreferences();

  const navLinks = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.activities, href: "#activities" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.calendar, href: "#calendar" },
    { label: content.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "theme-nav-surface border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl theme-card">
              <Rocket className="h-6 w-6 text-[var(--accent-primary)] group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <span className="text-lg font-bold theme-title md:text-xl">
              {content.brand.lead}{" "}
              <span className="theme-gradient-text">{content.brand.accent}</span>
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-full px-4 py-2 text-sm font-medium theme-control-idle hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <PreferenceControls />
            <Button
              onClick={() => navigate("/join")}
              className="rounded-full border-0 px-6 theme-button-primary hover:opacity-95"
            >
              {content.nav.join}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full theme-control-shell theme-control-idle"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-[1.5rem] theme-card-strong p-4">
          <div className="mb-4">
            <PreferenceControls />
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full rounded-2xl px-4 py-3 text-start text-sm font-medium theme-control-idle hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>
          <Button
            onClick={() => {
              setIsOpen(false);
              navigate("/join");
            }}
            className="mt-4 w-full rounded-2xl border-0 py-6 theme-button-primary hover:opacity-95"
          >
            {content.nav.join}
          </Button>
        </div>
      </div>
    </nav>
  );
}
