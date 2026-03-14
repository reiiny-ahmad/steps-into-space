import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

const languages = [
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;

export default function PreferenceControls({
  className,
}: {
  className?: string;
}) {
  const { language, setLanguage, content } = useSitePreferences();

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <div className="flex items-center gap-1 rounded-full theme-control-shell px-1 py-1">
        <span className="px-2 text-[11px] font-semibold uppercase tracking-[0.18em] theme-text-soft">
          <Languages className="inline h-3.5 w-3.5" />
        </span>
        {languages.map((item) => (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold tracking-[0.18em] transition-all duration-200",
              language === item.code
                ? "theme-control-active"
                : "theme-control-idle"
            )}
            aria-label={`${content.preferences.language}: ${item.label}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
