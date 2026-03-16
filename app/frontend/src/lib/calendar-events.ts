import type { SiteContent, SiteLanguage } from "@/lib/site-content";

export type CalendarTone = "violet" | "amber" | "sky" | "emerald";

export type DefaultCalendarEvent = SiteContent["calendar"]["events"][number];

export type CalendarEventRecord = {
  id: string;
  date: string;
  title: string;
  time: string;
  location: string;
  description: string;
  category: string;
  tone: CalendarTone;
};

export type CalendarDisplayEvent = CalendarEventRecord & {
  dateLabel: string;
  day: string;
  month: string;
};

export const CALENDAR_UPDATED_EVENT = "steps-calendar-updated";

const STORAGE_KEY = "steps-calendar-events";
const VALID_TONES: CalendarTone[] = ["violet", "amber", "sky", "emerald"];
const DEFAULT_EVENT_DATES = [
  "2026-03-15",
  "2026-03-22",
  "2026-04-05",
  "2026-04-12",
  "2026-04-22",
  "2026-05-03",
] as const;

function createCalendarId() {
  return (
    globalThis.crypto?.randomUUID?.() ??
    `event-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  );
}

function isValidTone(value: string): value is CalendarTone {
  return VALID_TONES.includes(value as CalendarTone);
}

function isIsoDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function sanitizeEvent(
  value: unknown,
  fallbackDate = "",
  fallbackId?: string
): CalendarEventRecord | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const raw = value as Partial<CalendarEventRecord>;
  const title = raw.title?.trim();
  const time = raw.time?.trim();
  const location = raw.location?.trim();
  const description = raw.description?.trim();
  const category = raw.category?.trim();
  const date = raw.date?.trim();
  const tone = raw.tone?.trim();

  if (!title || !time || !location || !description || !category) {
    return null;
  }

  return {
    id: raw.id?.trim() || fallbackId || createCalendarId(),
    date: date && isIsoDate(date) ? date : fallbackDate,
    title,
    time,
    location,
    description,
    category,
    tone: tone && isValidTone(tone) ? tone : "violet",
  };
}

function getLocale(language: SiteLanguage) {
  if (language === "fr") {
    return "fr-FR";
  }

  if (language === "ar") {
    return "ar-MA";
  }

  return "en-US";
}

function formatEventDate(date: string, language: SiteLanguage) {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return {
      dateLabel: date,
      day: "--",
      month: "---",
    };
  }

  const locale = getLocale(language);
  const day = String(parsed.getDate()).padStart(2, "0");
  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "short",
  })
    .format(parsed)
    .replace(".", "");

  return {
    dateLabel: new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(parsed),
    day,
    month: language === "ar" ? monthLabel : monthLabel.toUpperCase(),
  };
}

export function sortCalendarEvents(events: CalendarEventRecord[]) {
  return [...events].sort((left, right) => {
    if (left.date === right.date) {
      return left.title.localeCompare(right.title);
    }

    return left.date.localeCompare(right.date);
  });
}

export function seedCalendarEvents(defaultEvents: readonly DefaultCalendarEvent[]) {
  return defaultEvents.map((event, index) => ({
    id: createCalendarId(),
    date: DEFAULT_EVENT_DATES[index] ?? "",
    title: event.title,
    time: event.time,
    location: event.location,
    description: event.description,
    category: event.category,
    tone: event.tone,
  }));
}

export function loadStoredCalendarEvents() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return null;
    }

    const events = parsed
      .map((event, index) =>
        sanitizeEvent(event, DEFAULT_EVENT_DATES[index] ?? "", `stored-${index}`)
      )
      .filter((event): event is CalendarEventRecord => event !== null);

    return sortCalendarEvents(events);
  } catch {
    return null;
  }
}

export function saveStoredCalendarEvents(events: CalendarEventRecord[]) {
  if (typeof window === "undefined") {
    return;
  }

  const sortedEvents = sortCalendarEvents(events);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedEvents));
  window.dispatchEvent(new CustomEvent(CALENDAR_UPDATED_EVENT));
}

export function clearStoredCalendarEvents() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CALENDAR_UPDATED_EVENT));
}

export function resolveCalendarDisplayEvents(
  defaultEvents: readonly DefaultCalendarEvent[],
  language: SiteLanguage
) {
  const storedEvents = loadStoredCalendarEvents();

  if (storedEvents !== null) {
    return storedEvents.map((event) => {
      const formattedDate = formatEventDate(event.date, language);

      return {
        ...event,
        ...formattedDate,
      } satisfies CalendarDisplayEvent;
    });
  }

  return defaultEvents.map((event, index) => ({
    id: `default-${index}`,
    date: DEFAULT_EVENT_DATES[index] ?? "",
    dateLabel: event.date,
    day: event.day,
    month: event.month,
    title: event.title,
    time: event.time,
    location: event.location,
    description: event.description,
    category: event.category,
    tone: event.tone,
  }));
}

export function emptyCalendarEvent(): CalendarEventRecord {
  return {
    id: "",
    date: "",
    title: "",
    time: "",
    location: "",
    description: "",
    category: "",
    tone: "violet",
  };
}

export function buildCalendarEvent(
  input: CalendarEventRecord,
  fallbackId?: string
) {
  return sanitizeEvent(input, input.date, fallbackId);
}
