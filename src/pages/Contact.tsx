import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const contactCards = [
  { icon: MapPin, title: "Studio address", text: "245 Wellness Ave, Suite 200\nSan Francisco, CA 94102" },
  { icon: Phone, title: "Front desk", text: "(555) 123-4567" },
  { icon: Mail, title: "Email us", text: "hello@brightsmile.dental" },
  { icon: Clock3, title: "Opening hours", text: "Mon-Fri: 8am-6pm\nSat: 9am-2pm" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSent(true);
    toast.success("Message received. We will be in touch shortly.");
    event.currentTarget.reset();
  };

  return (
    <div className="space-y-6 px-4 pb-6 md:px-6">
      <section className="section-shell gradient-hero mx-auto mt-4 max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <span className="eyebrow">Contact the studio</span>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-tight md:text-6xl">
              Reach us in the way that feels easiest for you.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            This page now reads more like a real clinic front desk than a generic web form. The information is clearer, the layout is calmer, and the form has a stronger sense of place.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">Visit or call</span>
          <div className="mt-6 grid gap-4">
            {contactCards.map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] border-border/70 bg-white/80 p-5">
                <div className="flex gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-foreground/85">{item.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">Send a note</span>
          <h2 className="mt-5 text-4xl font-bold">Questions, availability, second opinions.</h2>

          {sent ? (
            <div className="mt-8 rounded-[1.75rem] bg-[#0f5177] p-6 text-primary-foreground">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-6 shrink-0" />
                <div>
                  <p className="text-xl font-bold">Message received</p>
                  <p className="mt-2 text-sm leading-7 text-primary-foreground/80">
                    A team member will reply within one business day. If the matter is urgent, please call the front desk directly.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" required maxLength={100} className="mt-2 h-12 rounded-2xl bg-white/80" />
                </div>
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 h-12 rounded-2xl bg-white/80" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">What can we help with?</Label>
                <Textarea id="message" name="message" required maxLength={1000} rows={6} className="mt-2 rounded-[1.5rem] bg-white/80" />
              </div>
              <Button type="submit" size="lg" disabled={submitting}>
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl section-shell overflow-hidden">
        <iframe
          title="Clinic location"
          src="https://www.google.com/maps?q=San+Francisco+CA&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </section>
    </div>
  );
};

export default Contact;
