import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeProvider } from "next-themes";
import { siteContent, type SiteLanguage } from "@/lib/site-content";

type SitePreferencesContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  isRTL: boolean;
  content: (typeof siteContent)[SiteLanguage];
};

const STORAGE_KEY = "steps-language";

const SitePreferencesContext = createContext<
  SitePreferencesContextValue | undefined
>(undefined);

function getInitialLanguage(): SiteLanguage {
  if (typeof window === "undefined") {
    return "fr";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ar" || stored === "fr" || stored === "en") {
    return stored;
  }

  const browserLanguage = window.navigator.language.toLowerCase();

  if (browserLanguage.startsWith("ar")) {
    return "ar";
  }

  if (browserLanguage.startsWith("fr")) {
    return "fr";
  }

  return "en";
}

export function SitePreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<SiteLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isRTL: language === "ar",
      content: siteContent[language],
    }),
    [language]
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      <SitePreferencesContext.Provider value={value}>
        {children}
      </SitePreferencesContext.Provider>
    </ThemeProvider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error(
      "useSitePreferences must be used within SitePreferencesProvider."
    );
  }

  return context;
}
