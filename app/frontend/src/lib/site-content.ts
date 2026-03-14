import { siteContentAr } from "@/lib/site-content-ar";
import { siteContentEn } from "@/lib/site-content-en";
import { siteContentFr } from "@/lib/site-content-fr";

export type SiteLanguage = "en" | "fr" | "ar";

export const siteContent = {
  en: siteContentEn,
  fr: siteContentFr,
  ar: siteContentAr,
} as const;

export type SiteContent = (typeof siteContent)["en"];
