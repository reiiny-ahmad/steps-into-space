import { Facebook, Instagram, MessageCircle, Rocket } from "lucide-react";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

export default function Footer() {
  const { content } = useSitePreferences();

  const quickLinks = [
    { label: content.nav.home, href: "#home" },
    { label: content.nav.activities, href: "#activities" },
    { label: content.nav.about, href: "#about" },
    { label: content.nav.calendar, href: "#calendar" },
    { label: content.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[color:var(--border-soft)] theme-section">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-[var(--accent-primary)]" />
              <span className="text-lg font-bold theme-title">
                {content.brand.lead}{" "}
                <span className="theme-gradient-text">{content.brand.accent}</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed theme-text-muted">
              {content.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/steps_into_space_association_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl theme-card text-[#E4405F] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/stepsintospacee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl theme-card text-[#1877F2] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl theme-card text-[#25D366] transition-all duration-300 hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold theme-title">
              {content.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm theme-text-muted transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold theme-title">
              {content.footer.activitiesTitle}
            </h4>
            <ul className="space-y-2.5">
              {content.footer.activities.map((item) => (
                <li key={item}>
                  <span className="text-sm theme-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold theme-title">
              {content.footer.contactTitle}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:stepsintospacee@gmail.com"
                  className="text-sm theme-text-muted transition-colors hover:text-[var(--text-primary)]"
                >
                  stepsintospacee@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm theme-text-muted">
                  {content.contact.locationValue}
                </span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/steps_into_space_association_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm theme-text-muted transition-colors hover:text-[var(--text-primary)]"
                >
                  @steps_into_space_association_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border-soft)] pt-8 text-center sm:flex-row sm:text-start">
          <p className="text-sm theme-text-soft">{content.footer.copyright}</p>
          <p className="text-xs theme-text-soft">{content.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
