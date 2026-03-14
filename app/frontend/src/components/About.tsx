import { Eye, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";

const valueIcons = [Target, Eye, Heart];
const memberGradients = [
  "from-[#2563EB] to-[#22D3EE]",
  "from-[#7C3AED] to-[#38BDF8]",
  "from-[#06B6D4] to-[#10B981]",
  "from-[#EC4899] to-[#8B5CF6]",
  "from-[#F97316] to-[#EF4444]",
  "from-[#22C55E] to-[#06B6D4]",
];

export default function About() {
  const { content } = useSitePreferences();

  return (
    <section id="about" className="relative py-24 theme-section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full theme-chip px-4 py-1.5 text-sm font-semibold mb-4">
            {content.about.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold theme-title sm:text-5xl">
            {content.about.titleLead}{" "}
            <span className="theme-gradient-text">{content.about.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg theme-text-muted">
            {content.about.description}
          </p>
        </div>

        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] theme-card">
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/994783/2026-03-09/dca2563c-1eef-4674-8189-3638b60b7b0a.png"
              alt={content.about.community}
              className="h-80 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.72)] via-transparent to-transparent dark:from-[rgba(7,17,31,0.85)]" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-[var(--accent-primary)]" />
                <span className="text-lg font-semibold text-white">
                  {content.about.community}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {content.about.values.map((value, index) => {
              const Icon = valueIcons[index];

              return (
                <div
                  key={value.title}
                  className="flex gap-4 rounded-[1.5rem] theme-card p-5 transition-colors duration-300"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl theme-button-primary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold theme-title">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed theme-text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="mb-3 text-3xl font-bold theme-title">
            {content.about.teamTitleLead}{" "}
            <span className="theme-gradient-text">
              {content.about.teamTitleAccent}
            </span>
          </h3>
          <p className="mx-auto max-w-lg theme-text-muted">
            {content.about.teamDescription}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.about.teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group theme-card transition-all duration-500 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${
                    memberGradients[index]
                  } shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h4 className="mb-1 text-lg font-bold theme-title">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-[var(--accent-primary)]">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
