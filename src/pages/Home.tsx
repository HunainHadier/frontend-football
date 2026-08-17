import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, Clock3, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/hero-dental.jpg";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";
import { services } from "@/data/services";

const doctors = [
  { name: "Dr. Amelia Carter", role: "Smile design and veneers", image: doc1 },
  { name: "Dr. James Bennett", role: "Implants and restorative care", image: doc2 },
  { name: "Dr. Sofia Rivera", role: "Aligners and bite correction", image: doc3 },
];

const experienceNotes = [
  "Appointments run with real buffer time so you do not feel rushed.",
  "Every treatment plan is explained in plain language before we begin.",
  "The clinic is designed around quiet rooms, warm materials, and patient comfort.",
];

const Home = () => {
  return (
    <div className="space-y-6 px-4 pb-6 md:px-6">
      <section className="section-shell gradient-hero mx-auto mt-4 max-w-7xl px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">
        <div className="editorial-grid items-center gap-10">
          <div className="max-w-2xl">
            <span className="eyebrow">San Francisco family dentistry</span>
            <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-[4.5rem]">
              A dental studio that feels calm before you even sit down.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Brightsmile blends advanced clinical care with a softer, more thoughtful patient experience. Less waiting room stress, more clarity, comfort, and confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/book">
                  <Calendar className="size-4" />
                  Reserve your first visit
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">
                  Explore treatments
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: "15+", label: "years serving local families" },
                { value: "4.9", label: "average rating across reviews" },
                { value: "24h", label: "typical confirmation window" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-border/70 bg-white/70 p-4 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:pl-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-card">
              <img src={heroImg} alt="Bright dental studio treatment room" className="h-[24rem] w-full rounded-[1.5rem] object-cover md:h-[34rem]" />
              <div className="absolute left-7 top-7 max-w-[16rem] rounded-[1.5rem] bg-[#0f5177]/92 p-5 text-primary-foreground shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">Patient promise</p>
                <p className="mt-3 text-lg font-semibold leading-7">Clean clinical standards with a much warmer front-of-house experience.</p>
              </div>
              <div className="absolute bottom-7 right-7 w-[14rem] rounded-[1.5rem] bg-[#eef9ff] p-5 shadow-soft">
                <div className="flex items-center gap-2 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">"Finally a clinic that feels polished but not intimidating."</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <Card className="rounded-[1.75rem] border-border/70 bg-[#0f5177] p-6 text-primary-foreground shadow-soft">
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <ShieldCheck className="size-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">Clinical confidence</span>
                </div>
                <p className="mt-4 text-2xl font-bold leading-9">Digital diagnostics, sterilization discipline, and treatment plans that do not feel salesy.</p>
              </Card>
              <Card className="rounded-[1.75rem] border-border/70 bg-[#eef9ff] p-6 shadow-soft">
                <div className="flex items-center gap-3 text-primary">
                  <Clock3 className="size-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">Designed around your time</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Online booking, fast confirmation, and treatment blocks planned to reduce repeat visits where possible.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-shell px-6 py-8 md:px-8">
          <span className="eyebrow">Why patients stay</span>
          <h2 className="mt-5 max-w-sm text-4xl font-bold leading-tight">Less generic healthcare energy. More personal rhythm.</h2>
          <div className="mt-8 space-y-5">
            {experienceNotes.map((note) => (
              <div key={note} className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </span>
                <p className="text-sm leading-7 text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-shell px-6 py-8 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Signature care</span>
              <h2 className="mt-5 text-4xl font-bold">Treatments people actually ask for</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              View the full care menu
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Card
                key={service.slug}
                className={`rounded-[1.75rem] border-border/70 p-6 transition-smooth ${
                  index === 1 || index === 4 ? "bg-[#0f5177] text-primary-foreground" : "bg-white/75"
                }`}
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 1 || index === 4 ? "bg-white/15" : "bg-secondary text-primary"
                  }`}
                >
                  <service.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${index === 1 || index === 4 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {service.short}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl section-shell px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">The people behind the studio</span>
            <h2 className="mt-5 text-4xl font-bold">A compact team with specialist depth.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Instead of feeling like a stock-photo carousel, our team section is built around what each clinician is best known for inside the clinic.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {doctors.map((doctor, index) => (
            <Card key={doctor.name} className={`overflow-hidden rounded-[1.75rem] border-border/70 ${index === 0 ? "lg:row-span-2" : ""}`}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className={`w-full object-cover ${index === 0 ? "h-[30rem]" : "h-[18rem]"}`}
                loading="lazy"
              />
              <div className="bg-white/90 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Lead clinician</p>
                <h3 className="mt-3 text-2xl font-bold">{doctor.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{doctor.role}</p>
              </div>
            </Card>
          ))}

          <Card className="rounded-[1.75rem] border-border/70 bg-[#eef9ff] p-6 lg:col-start-2">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="size-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em]">What first visits include</p>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <li>Digital imaging where needed, gentle exam, and a real conversation before any treatment starts.</li>
              <li>Transparent pricing and phased treatment options for larger cases.</li>
              <li>Recommendations prioritized by urgency, comfort, and long-term value.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl section-shell px-6 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight">Book a visit that feels more like a good concierge experience than a cold intake form.</h2>
          </div>
          <div className="rounded-[2rem] bg-[#0f5177] px-6 py-8 text-primary-foreground md:px-8">
            <p className="max-w-2xl text-lg leading-8 text-primary-foreground/80">
              We confirm quickly, keep communication simple, and make sure you know exactly what to expect before you arrive.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#eef9ff] text-primary hover:bg-white">
                <Link to="/book">Start your booking</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Ask a question first</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
