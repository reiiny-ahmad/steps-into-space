import { useState, type ChangeEvent, type FormEvent } from "react";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSitePreferences } from "@/components/providers/SitePreferencesProvider";
import { submitContactMessage } from "@/lib/api";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { content } = useSitePreferences();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactMessage(formData);
      toast.success(content.contact.messages.success);
      setFormData(initialFormData);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : content.contact.messages.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 theme-section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full theme-chip px-4 py-1.5 text-sm font-semibold mb-4">
            <Mail className="mr-1.5 inline h-4 w-4" />
            {content.contact.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold theme-title sm:text-5xl">
            {content.contact.titleLead}{" "}
            <span className="theme-gradient-text">
              {content.contact.titleAccent}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg theme-text-muted">
            {content.contact.description}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Card className="theme-card">
              <CardContent className="space-y-6 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl theme-button-primary">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold theme-title">
                      {content.contact.infoTitles.email}
                    </h4>
                    <a
                      href="mailto:stepsintospacee@gmail.com"
                      className="text-sm theme-text-muted hover:text-[var(--accent-primary)] transition-colors"
                    >
                      stepsintospacee@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl theme-button-primary">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold theme-title">
                      {content.contact.infoTitles.location}
                    </h4>
                    <p className="text-sm theme-text-muted">
                      {content.contact.locationValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#E4405F] to-[#F77737]">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold theme-title">
                      {content.contact.infoTitles.instagram}
                    </h4>
                    <a
                      href="https://www.instagram.com/steps_into_space_association_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm theme-text-muted hover:text-[var(--accent-primary)] transition-colors"
                    >
                      @steps_into_space_association_
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#22C55E] to-[#06B6D4]">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold theme-title">
                      {content.contact.infoTitles.follow}
                    </h4>
                    <p className="text-sm theme-text-muted">
                      {content.contact.infoDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-[1.5rem] theme-card p-6">
              <p className="text-sm leading-relaxed theme-text-muted">
                {content.contact.note}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="theme-card-strong">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium theme-title">
                        {content.contact.form.name}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={content.contact.form.namePlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium theme-title">
                        {content.contact.form.email}
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={content.contact.form.emailPlaceholder}
                        required
                        className="theme-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium theme-title">
                      {content.contact.form.subject}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={content.contact.form.subjectPlaceholder}
                      required
                      className="theme-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium theme-title">
                      {content.contact.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={content.contact.form.messagePlaceholder}
                      rows={5}
                      required
                      className="theme-input resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border-0 py-6 text-base theme-button-primary hover:opacity-95 disabled:opacity-60"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting
                      ? content.contact.form.sending
                      : content.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
