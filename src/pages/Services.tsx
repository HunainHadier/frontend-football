import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="space-y-6 px-4 pb-6 md:px-6">
      <section className="section-shell gradient-hero mx-auto mt-4 max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <span className="eyebrow">Care menu</span>
            <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-tight md:text-6xl">
              Treatments presented like a real practice, not a stock services grid.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            We grouped our services with more breathing room, stronger copy hierarchy, and a more bespoke visual rhythm so the page feels designed rather than generated.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl section-shell px-6 py-8 md:px-8 md:py-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`h-full rounded-[1.85rem] border-border/70 p-7 transition-smooth ${
                  index % 3 === 1 ? "bg-[#0f5177] text-primary-foreground" : index % 3 === 2 ? "bg-[#eef9ff]" : "bg-white/75"
                }`}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${index % 3 === 1 ? "bg-white/15" : "bg-secondary text-primary"}`}>
                  <service.icon className="size-6" />
                </div>
                <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className={`mt-3 max-w-xl text-sm leading-7 ${index % 3 === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <Link
                  to="/book"
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                    index % 3 === 1 ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  Reserve this treatment
                  <ArrowRight className="size-4" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.75rem] bg-[#0f5177] px-6 py-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">Need guidance?</p>
            <p className="mt-2 text-2xl font-bold">Tell us the concern, and we will point you to the right visit type.</p>
          </div>
          <Button asChild size="lg" className="bg-[#eef9ff] text-primary hover:bg-white">
            <Link to="/book">Book an assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
