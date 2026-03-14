import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

const toneMap = {
  violet: "bg-[#8B5CF6]/15 text-[#7C3AED] dark:bg-[#8B5CF6]/20 dark:text-[#C4B5FD]",
  amber: "bg-[#F59E0B]/15 text-[#D97706] dark:bg-[#F59E0B]/20 dark:text-[#FCD34D]",
  sky: "bg-[#38BDF8]/15 text-[#0284C7] dark:bg-[#38BDF8]/20 dark:text-[#7DD3FC]",
  emerald: "bg-[#10B981]/15 text-[#059669] dark:bg-[#10B981]/20 dark:text-[#6EE7B7]",
} as const;

export default function Calendar() {
  const { content } = useSitePreferences();

  return (
    <section id="calendar" className="relative py-24 theme-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full theme-chip px-4 py-1.5 text-sm font-semibold mb-4">
            <CalendarDays className="mr-1.5 inline h-4 w-4" />
            {content.calendar.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold theme-title sm:text-5xl">
            {content.calendar.titleLead}{" "}
            <span className="theme-gradient-text">
              {content.calendar.titleAccent}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg theme-text-muted">
            {content.calendar.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4">
          {content.calendar.events.map((event) => (
            <Card
              key={`${event.date}-${event.title}`}
              className="group theme-card transition-all duration-300 hover:-translate-y-0.5"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex flex-shrink-0 flex-col items-center justify-center border-b border-[var(--border-soft)] bg-[rgba(37,99,235,0.08)] p-4 dark:bg-[rgba(56,189,248,0.12)] sm:w-28 sm:border-b-0 sm:border-r sm:p-6">
                    <span className="text-3xl font-extrabold theme-title">
                      {event.day}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
                      {event.month}
                    </span>
                  </div>

                  <div className="flex-1 p-5 sm:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold theme-title">
                        {event.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`${toneMap[event.tone]} border-0 text-xs`}
                      >
                        {event.category}
                      </Badge>
                    </div>
                    <p className="mb-3 text-sm theme-text-muted">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs theme-text-soft">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[var(--accent-secondary)]" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
