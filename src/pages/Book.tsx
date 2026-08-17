import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";

const bookingSchema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  preferred_date: z.string().min(1, "Date required"),
  preferred_time: z.string().min(1, "Time required"),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

const times = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const Book = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = {
      full_name: String(fd.get("full_name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      service,
      preferred_date: String(fd.get("preferred_date") ?? ""),
      preferred_time: time,
      notes: String(fd.get("notes") ?? ""),
    };

    const parsed = bookingSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-booking", {
        body: parsed.data,
      });
      if (error) {
        throw error;
      }
      setSent(true);
      toast.success("Appointment request sent.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 px-4 pb-6 md:px-6">
      <section className="section-shell gradient-hero mx-auto mt-4 max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="eyebrow">Reserve a visit</span>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-tight md:text-6xl">
              Booking now feels like a premium intake, not a default app form.
            </h1>
          </div>
          <div className="rounded-[1.75rem] bg-[#0f5177] p-6 text-primary-foreground md:p-8">
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <CalendarDays className="size-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.22em]">What happens next</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
              Send your preferred time and treatment. Our front desk confirms quickly and helps you pick the most suitable appointment type if needed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">Before you submit</span>
          <div className="mt-6 space-y-4">
            {[
              "Choose the treatment closest to your current need. We can refine it after speaking with you.",
              "If you are in pain or dealing with a broken tooth, mention that in the notes field.",
              "We usually confirm new requests within a few working hours.",
            ].map((item) => (
              <Card key={item} className="rounded-[1.5rem] border-border/70 bg-white/80 p-5 text-sm leading-7 text-muted-foreground">
                {item}
              </Card>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="section-shell px-6 py-8 md:px-8">
          {sent ? (
            <div className="rounded-[1.75rem] bg-[#0f5177] p-8 text-primary-foreground">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-7 shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold">Appointment requested</h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-primary-foreground/80">
                    Your details are in. We will contact you shortly to confirm timing and make sure the visit type matches your needs.
                  </p>
                  <Button onClick={() => setSent(false)} variant="outline" className="mt-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    Book another visit
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <span className="eyebrow">Appointment details</span>
              <h2 className="mt-5 text-4xl font-bold">Tell us a little about your visit.</h2>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="full_name">Full name</Label>
                    <Input id="full_name" name="full_name" required maxLength={100} className="mt-2 h-12 rounded-2xl bg-white/80" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" name="phone" type="tel" required maxLength={20} className="mt-2 h-12 rounded-2xl bg-white/80" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 h-12 rounded-2xl bg-white/80" />
                </div>

                <div>
                  <Label>Service needed</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="mt-2 h-12 rounded-2xl bg-white/80">
                      <SelectValue placeholder="Choose a treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((item) => (
                        <SelectItem key={item.slug} value={item.title}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="preferred_date">Preferred date</Label>
                    <Input id="preferred_date" name="preferred_date" type="date" min={today} required className="mt-2 h-12 rounded-2xl bg-white/80" />
                  </div>
                  <div>
                    <Label>Preferred time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="mt-2 h-12 rounded-2xl bg-white/80">
                        <SelectValue placeholder="Pick a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {times.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes for the team</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    maxLength={1000}
                    rows={5}
                    className="mt-2 rounded-[1.5rem] bg-white/80"
                    placeholder="Anything we should know before we confirm?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Request appointment"}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Book;
