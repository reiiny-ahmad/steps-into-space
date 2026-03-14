import { BookOpen, Camera, Globe, Star, Telescope, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

const icons = [Telescope, BookOpen, Users, Star, Globe, Camera];

export default function Activities() {
  const { content } = useSitePreferences();
  const activities = content.activities.items;

  return (
    <section id="activities" className="relative py-24 theme-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full theme-chip px-4 py-1.5 text-sm font-semibold mb-4">
            {content.activities.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold theme-title sm:text-5xl">
            {content.activities.titleLead}{" "}
            <span className="theme-gradient-text">
              {content.activities.titleAccent}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg theme-text-muted">
            {content.activities.description}
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {activities.slice(0, 2).map((activity, index) => {
            const Icon = icons[index];

            return (
              <Card
                key={activity.title}
                className="group overflow-hidden theme-card transition-all duration-500 hover:-translate-y-1"
              >
                {activity.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.7)] via-transparent to-transparent dark:from-[rgba(7,17,31,0.82)]" />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl theme-button-primary">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold theme-title">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed theme-text-muted">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.slice(2).map((activity, index) => {
            const Icon = icons[index + 2];

            return (
              <Card
                key={activity.title}
                className="group theme-card transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl theme-button-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold theme-title">
                    {activity.title}
                  </h3>
                  <p className="text-sm leading-relaxed theme-text-muted">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
