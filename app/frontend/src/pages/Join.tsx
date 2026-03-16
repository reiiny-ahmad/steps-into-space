import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowLeft, FileText, Rocket, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import PreferenceControls from "@/components/PreferenceControls";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitJoinApplication } from "@/lib/api";

const initialFormData = {
  firstName: "",
  lastName: "",
  age: "",
  cin: "",
  massarCode: "",
  studyLevel: "",
  city: "",
  address: "",
  interests: "",
  phone: "",
  email: "",
  motivation: "",
};

export default function Join() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { content } = useSitePreferences();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.cin.trim() && !formData.massarCode.trim()) {
      toast.error(content.join.messages.missingId);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitJoinApplication(formData);
      toast.success(content.join.messages.success);
      setFormData(initialFormData);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : content.join.messages.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = content.join.fields;

  return (
    <main className="min-h-screen theme-page join-spotlight">
      <section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div aria-hidden="true" className="cosmic-scene absolute inset-0">
          <div className="absolute inset-0 cosmic-gradient" />
          <div className="cosmic-nebula cosmic-nebula-a" />
          <div className="cosmic-nebula cosmic-nebula-b" />
          <div className="cosmic-nebula cosmic-nebula-c" />
          <div className="cosmic-planet cosmic-planet-join" />
          <div className="cosmic-orbit cosmic-orbit-join" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(234,242,255,0.82)] dark:to-[rgba(12,24,48,0.82)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 rounded-[2rem] theme-card-strong p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium theme-text-muted transition-colors hover:text-[var(--text-primary)]"
            >
              <ArrowLeft className="h-4 w-4 flip-in-rtl" />
              {content.preferences.backHome}
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl theme-card">
                <Rocket className="h-6 w-6 text-[var(--accent-primary)]" />
              </div>
              <span className="font-display text-lg font-bold theme-title sm:text-xl">
                {content.brand.lead}{" "}
                <span className="theme-gradient-text">{content.brand.accent}</span>
              </span>
            </div>

            <PreferenceControls />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6">
              <div className="join-hero-panel relative overflow-hidden rounded-[2.25rem] p-8 sm:p-10 lg:p-12">
                <div aria-hidden="true" className="join-panel-aurora join-panel-aurora-a" />
                <div aria-hidden="true" className="join-panel-aurora join-panel-aurora-b" />
                <div aria-hidden="true" className="join-panel-glow" />

                <div className="relative">
                  <span className="mb-7 inline-flex items-center gap-2 rounded-full theme-chip px-5 py-2.5 text-sm font-semibold tracking-[0.01em] sm:text-[0.95rem]">
                    <Sparkles className="h-4 w-4" />
                    {content.join.badge}
                  </span>
                  <h1 className="mb-6 font-display join-hero-title theme-title">
                    {content.join.title}
                  </h1>
                  <p className="join-hero-copy theme-text-muted">{content.join.description}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {content.join.cards.map((card, index) => (
                  <Card key={card.title} className="theme-card">
                    <CardContent className="p-6">
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${
                          index === 0
                            ? "theme-button-primary"
                            : "bg-gradient-to-r from-[#22D3EE] to-[#2563EB]"
                        }`}
                      >
                        {index === 0 ? (
                          <FileText className="h-5 w-5 text-white" />
                        ) : (
                          <Rocket className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <h2 className="mb-2 font-display text-xl font-semibold theme-title">
                        {card.title}
                      </h2>
                      <p className="text-[0.95rem] leading-7 theme-text-muted">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="theme-card-strong">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="mb-2 font-display text-3xl font-bold theme-title sm:text-[2.1rem]">
                    {content.join.formTitle}
                  </h2>
                  <p className="text-[1.02rem] leading-7 theme-text-muted">
                    {content.join.formDescription}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.lastName}
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={fields.lastNamePlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.firstName}
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={fields.firstNamePlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.age}
                      </label>
                      <Input
                        name="age"
                        type="number"
                        min="1"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder={fields.agePlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.studyLevel}
                      </label>
                      <Input
                        name="studyLevel"
                        value={formData.studyLevel}
                        onChange={handleChange}
                        placeholder={fields.studyLevelPlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.cin}
                      </label>
                      <Input
                        name="cin"
                        value={formData.cin}
                        onChange={handleChange}
                        placeholder={fields.cinPlaceholder}
                        className="theme-input"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.massarCode}
                      </label>
                      <Input
                        name="massarCode"
                        value={formData.massarCode}
                        onChange={handleChange}
                        placeholder={fields.massarCodePlaceholder}
                        className="theme-input"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.city}
                      </label>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder={fields.cityPlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                        {fields.phone}
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={fields.phonePlaceholder}
                        className="theme-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                      {fields.address}
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder={fields.addressPlaceholder}
                      required
                      className="theme-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                      {fields.email}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={fields.emailPlaceholder}
                      className="theme-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                      {fields.interests}
                    </label>
                    <Textarea
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      placeholder={fields.interestsPlaceholder}
                      rows={4}
                      required
                      className="theme-input resize-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[0.95rem] font-semibold theme-title">
                      {fields.motivation}
                    </label>
                    <Textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder={fields.motivationPlaceholder}
                      rows={4}
                      className="theme-input resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border-0 py-6 text-[1.02rem] font-semibold theme-button-primary hover:opacity-95 disabled:opacity-60"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? content.join.sending : content.join.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
