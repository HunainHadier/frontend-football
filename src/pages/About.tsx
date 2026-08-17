import { motion } from "framer-motion";
import { Compass, HeartHandshake, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

const values = [
  {
    icon: HeartHandshake,
    title: "Gentle by default",
    text: "We build appointments around reassurance and clarity, not pressure or rushed recommendations.",
  },
  {
    icon: Compass,
    title: "Clear treatment paths",
    text: "Patients leave knowing what is urgent, what can wait, and what each decision means financially and clinically.",
  },
];

const team = [
  {
    name: "Dr. Amelia Carter",
    role: "Cosmetic and restorative dentistry",
    bio: "Known for natural-looking smile design and practical treatment planning for busy adults.",
    image: doc1,
  },
  {
    name: "Dr. James Bennett",
    role: "Implants and complex rehabilitation",
    bio: "Balances precision-led restorative work with a calm chairside manner that eases nervous patients.",
    image: doc2,
  },
  {
    name: "Dr. Sofia Rivera",
    role: "Aligners and bite correction",
    bio: "Helps teens and adults straighten their smile without making the process feel overwhelming.",
    image: doc3,
  },
];

const About = () => {
  return (
    <div className="space-y-6 px-4 pb-6 md:px-6">
      <section className="section-shell gradient-hero mx-auto mt-4 max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <span className="eyebrow">About the studio</span>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-tight md:text-6xl">
              More considered than a chain clinic, more polished than the average neighborhood practice.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Brightsmile was built for patients who want high standards without the sterile, over-produced feeling that so many modern healthcare sites accidentally lean into.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">Our approach</span>
          <div className="mt-6 space-y-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.12 }}
                className="paper-panel"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <value.icon className="size-5" />
                </div>
                <h2 className="mt-5 text-3xl font-bold">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">What patients notice</span>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Soft, residential-inspired interiors instead of bright generic surfaces.",
              "Shorter explanations written in plain language, not clinical jargon.",
              "More continuity with the same clinicians across repeat visits.",
              "Treatment recommendations built around long-term trust, not one-day upsells.",
            ].map((item) => (
              <Card key={item} className="rounded-[1.75rem] border-border/70 bg-white/75 p-6">
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] bg-[#0f5177] p-8 text-primary-foreground">
            <Sparkles className="size-6 text-primary-foreground/80" />
            <p className="mt-4 max-w-2xl text-2xl font-bold leading-9">
              The goal is simple: patients should feel looked after, not processed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl section-shell px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Meet the clinicians</span>
            <h2 className="mt-5 text-4xl font-bold">The faces patients remember by name.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Each profile is positioned around specialty and style of care, which feels far more grounded than generic team cards.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {team.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="overflow-hidden rounded-[1.75rem] border-border/70 bg-white/80">
                <img src={doctor.image} alt={doctor.name} className="h-[22rem] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Specialist care</p>
                  <h3 className="mt-3 text-2xl font-bold">{doctor.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{doctor.role}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{doctor.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
