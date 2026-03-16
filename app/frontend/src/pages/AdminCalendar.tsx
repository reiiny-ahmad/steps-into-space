import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  CalendarDays,
  PencilLine,
  Plus,
  RefreshCcw,
  Save,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import PreferenceControls from "@/components/PreferenceControls";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  buildCalendarEvent,
  clearStoredCalendarEvents,
  emptyCalendarEvent,
  loadStoredCalendarEvents,
  saveStoredCalendarEvents,
  seedCalendarEvents,
  sortCalendarEvents,
  type CalendarEventRecord,
  type CalendarTone,
} from "@/lib/calendar-events";

const toneOptions: Array<{ value: CalendarTone; label: string }> = [
  { value: "violet", label: "Violet" },
  { value: "amber", label: "Amber" },
  { value: "sky", label: "Sky" },
  { value: "emerald", label: "Emerald" },
];

const toneClasses: Record<CalendarTone, string> = {
  violet: "bg-[#8B5CF6]/20 text-[#DDD6FE]",
  amber: "bg-[#F59E0B]/20 text-[#FCD34D]",
  sky: "bg-[#38BDF8]/20 text-[#BAE6FD]",
  emerald: "bg-[#10B981]/20 text-[#A7F3D0]",
};

export default function AdminCalendar() {
  const { content } = useSitePreferences();
  const [events, setEvents] = useState<CalendarEventRecord[]>(() =>
    loadStoredCalendarEvents() ?? seedCalendarEvents(content.calendar.events)
  );
  const [formData, setFormData] = useState<CalendarEventRecord>(emptyCalendarEvent);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [hasCustomChanges, setHasCustomChanges] = useState(
    Boolean(loadStoredCalendarEvents())
  );

  useEffect(() => {
    if (!hasCustomChanges) {
      setEvents(seedCalendarEvents(content.calendar.events));
    }
  }, [content.calendar.events, hasCustomChanges]);

  const resetForm = () => {
    setFormData(emptyCalendarEvent());
    setEditingId(null);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nextEvent = buildCalendarEvent(
      formData,
      editingId ?? undefined
    );

    if (!nextEvent || !nextEvent.date) {
      toast.error("Merci de remplir tous les champs de l'evenement.");
      return;
    }

    const nextEvents = sortCalendarEvents(
      editingId
        ? events.map((item) =>
            item.id === editingId ? { ...nextEvent, id: editingId } : item
          )
        : [...events, nextEvent]
    );

    setEvents(nextEvents);
    setHasCustomChanges(true);
    saveStoredCalendarEvents(nextEvents);
    resetForm();

    toast.success(
      editingId
        ? "Evenement modifie avec succes."
        : "Evenement ajoute au calendrier."
    );
  };

  const handleEdit = (event: CalendarEventRecord) => {
    setEditingId(event.id);
    setFormData(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (eventId: string) => {
    const nextEvents = events.filter((event) => event.id !== eventId);

    setEvents(nextEvents);
    setHasCustomChanges(true);
    saveStoredCalendarEvents(nextEvents);

    if (editingId === eventId) {
      resetForm();
    }

    toast.success("Evenement supprime.");
  };

  const handleResetDefaults = () => {
    const defaultEvents = seedCalendarEvents(content.calendar.events);

    clearStoredCalendarEvents();
    setEvents(defaultEvents);
    setHasCustomChanges(false);
    resetForm();
    toast.success("Calendrier reinitialise avec les evenements par defaut.");
  };

  return (
    <main className="min-h-screen theme-page theme-section-alt px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] theme-card-strong p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full theme-chip px-4 py-2 text-sm font-semibold">
              <CalendarDays className="h-4 w-4" />
              Admin Calendrier
            </div>
            <h1 className="font-display text-3xl font-bold theme-title sm:text-4xl">
              Gerer les evenements du calendrier
            </h1>
            <p className="mt-2 max-w-2xl theme-text-muted">
              Ajoute, modifie ou supprime des evenements. Les changements
              apparaissent ensuite dans la section calendrier du site sur ce
              navigateur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PreferenceControls />
            <Link
              to="/"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold theme-button-secondary"
            >
              {content.preferences.backHome}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="theme-card-strong">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold theme-title">
                    {editingId ? "Modifier un evenement" : "Ajouter un evenement"}
                  </h2>
                  <p className="mt-1 text-sm theme-text-muted">
                    Renseigne les informations qui seront affichees dans le
                    calendrier public.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="rounded-full theme-button-secondary"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Nouveau
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleResetDefaults}
                    className="rounded-full theme-button-secondary"
                  >
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Reinitialiser
                  </Button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Titre
                    </label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Nuit d'observation"
                      className="theme-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Date
                    </label>
                    <Input
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="theme-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Heure
                    </label>
                    <Input
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="18:00 - 20:00"
                      className="theme-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Lieu
                    </label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Casablanca"
                      className="theme-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Categorie
                    </label>
                    <Input
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      placeholder="Workshop"
                      className="theme-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold theme-title">
                      Couleur
                    </label>
                    <select
                      name="tone"
                      value={formData.tone}
                      onChange={handleChange}
                      className="theme-input h-10 w-full rounded-md border px-3 text-sm"
                    >
                      {toneOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold theme-title">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Description de l'evenement..."
                    className="theme-input resize-none"
                    required
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    type="submit"
                    className="rounded-full border-0 px-6 theme-button-primary"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {editingId ? "Enregistrer les modifications" : "Ajouter l'evenement"}
                  </Button>

                  {editingId ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                      className="rounded-full theme-button-secondary"
                    >
                      Annuler
                    </Button>
                  ) : null}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="theme-card-strong">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold theme-title">
                      Evenements actuels
                    </h2>
                    <p className="mt-1 text-sm theme-text-muted">
                      {events.length} evenement(s) dans le calendrier.
                    </p>
                  </div>

                  <Badge
                    variant="secondary"
                    className="rounded-full border-0 bg-[rgba(37,99,235,0.14)] px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--accent-primary)]"
                  >
                    {hasCustomChanges ? "Version admin" : "Version par defaut"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {events.map((event) => (
              <Card key={event.id} className="theme-card">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold theme-title">
                          {event.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={`${toneClasses[event.tone]} border-0`}
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <p className="text-sm theme-text-soft">
                        {event.date} | {event.time}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => handleEdit(event)}
                        className="rounded-full theme-button-secondary"
                      >
                        <PencilLine className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => handleDelete(event.id)}
                        className="rounded-full theme-button-secondary"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed theme-text-muted">
                    {event.description}
                  </p>
                  <p className="text-sm font-medium theme-text-soft">
                    {event.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
