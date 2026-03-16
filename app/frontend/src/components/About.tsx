import { useEffect, useState } from "react";
import { Eye, Heart, Sparkles, Target, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { cn } from "@/lib/utils";

const valueIcons = [Target, Eye, Heart];
const memberThemes = [
  {
    surface: "linear-gradient(160deg, rgba(37,99,235,0.98), rgba(34,211,238,0.88))",
    avatar: "linear-gradient(160deg, #dbeafe, #7dd3fc)",
    glow: "rgba(59, 130, 246, 0.36)",
  },
  {
    surface: "linear-gradient(160deg, rgba(124,58,237,0.98), rgba(56,189,248,0.86))",
    avatar: "linear-gradient(160deg, #ede9fe, #7dd3fc)",
    glow: "rgba(139, 92, 246, 0.34)",
  },
  {
    surface: "linear-gradient(160deg, rgba(8,145,178,0.98), rgba(16,185,129,0.86))",
    avatar: "linear-gradient(160deg, #ccfbf1, #a7f3d0)",
    glow: "rgba(20, 184, 166, 0.34)",
  },
  {
    surface: "linear-gradient(160deg, rgba(236,72,153,0.96), rgba(139,92,246,0.86))",
    avatar: "linear-gradient(160deg, #fce7f3, #ddd6fe)",
    glow: "rgba(236, 72, 153, 0.3)",
  },
  {
    surface: "linear-gradient(160deg, rgba(249,115,22,0.96), rgba(239,68,68,0.86))",
    avatar: "linear-gradient(160deg, #ffedd5, #fecaca)",
    glow: "rgba(249, 115, 22, 0.34)",
  },
  {
    surface: "linear-gradient(160deg, rgba(34,197,94,0.96), rgba(6,182,212,0.86))",
    avatar: "linear-gradient(160deg, #dcfce7, #bae6fd)",
    glow: "rgba(34, 197, 94, 0.3)",
  },
];

export default function About() {
  const { content, isRTL } = useSitePreferences();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoScroll = window.setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => {
      window.clearInterval(autoScroll);
    };
  }, [api]);

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

        <div className="mx-auto max-w-6xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              direction: isRTL ? "rtl" : "ltr",
            }}
            className="px-2 sm:px-12"
          >
            <CarouselContent className="items-stretch">
              {content.about.teamMembers.map((member, index) => {
                const theme = memberThemes[index % memberThemes.length];
                const isActive = current === index;

                return (
                  <CarouselItem
                    key={member.name}
                    className="basis-[86%] sm:basis-[58%] lg:basis-[37%]"
                  >
                    <div
                      className={cn(
                        "h-full transition-all duration-500 ease-out",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.92] opacity-55"
                      )}
                    >
                      <article
                        className="relative h-full min-h-[29rem] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_80px_rgba(2,6,23,0.34)]"
                        style={{
                          background: theme.surface,
                        }}
                      >
                        <div
                          aria-hidden="true"
                          className="absolute -right-12 -top-10 h-36 w-36 rounded-full blur-3xl"
                          style={{ background: theme.glow }}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 opacity-30"
                          style={{
                            background:
                              "radial-gradient(circle at top left, rgba(255,255,255,0.36), transparent 18%), radial-gradient(circle at bottom right, rgba(255,255,255,0.18), transparent 22%)",
                          }}
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-40 opacity-20"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)",
                          }}
                        />

                        <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                          <div className="flex items-start justify-between">
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-sm">
                              {content.about.teamTitleAccent}
                            </span>
                            <Sparkles className="h-5 w-5 text-white/80" />
                          </div>

                          <div className="relative flex flex-1 items-center justify-center py-8">
                            <div className="absolute h-56 w-56 rounded-full border border-white/18" />
                            <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                            <div
                              className="flex h-36 w-36 items-center justify-center rounded-[2.2rem] text-5xl font-extrabold text-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.26)]"
                              style={{ background: theme.avatar }}
                            >
                              {member.initials}
                            </div>
                          </div>

                          <div className="rounded-[1.6rem] border border-white/12 bg-[rgba(10,18,36,0.22)] p-5 backdrop-blur-md">
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.34em] text-white/55">
                              {String(index + 1).padStart(2, "0")}
                            </p>
                            <h4 className="mb-2 font-display text-2xl font-bold leading-tight text-white sm:text-[1.9rem]">
                              {member.name}
                            </h4>
                            <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/72 sm:text-[0.92rem]">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-0 top-[48%] h-12 w-12 border-0 bg-[rgba(6,12,26,0.88)] text-white shadow-[0_18px_40px_rgba(2,6,23,0.3)] hover:bg-[rgba(15,23,42,0.96)]" />
            <CarouselNext className="right-0 top-[48%] h-12 w-12 border-0 bg-[rgba(6,12,26,0.88)] text-white shadow-[0_18px_40px_rgba(2,6,23,0.3)] hover:bg-[rgba(15,23,42,0.96)]" />
          </Carousel>

          <div className="mt-8 flex justify-center gap-2">
            {content.about.teamMembers.map((member, index) => (
              <button
                key={`${member.name}-dot`}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  current === index
                    ? "w-10 bg-[var(--accent-primary)]"
                    : "w-2.5 bg-white/20 hover:bg-white/35"
                )}
                aria-label={`Go to ${member.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
