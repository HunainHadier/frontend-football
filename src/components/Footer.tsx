import { Link } from "react-router-dom";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-20 px-4 pb-6 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/80 bg-[#eaf6fb] p-8 shadow-soft md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              A calm, modern dental studio built around gentle care, clear treatment plans, and appointments that run on time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground">Family dentistry</span>
              <span className="rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground">Cosmetic care</span>
              <span className="rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground">Urgent appointments</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Navigate</p>
            <div className="mt-5 grid gap-3 text-sm font-semibold">
              <Link to="/" className="transition-smooth hover:text-primary">Home</Link>
              <Link to="/about" className="transition-smooth hover:text-primary">About the studio</Link>
              <Link to="/services" className="transition-smooth hover:text-primary">Treatments</Link>
              <Link to="/book" className="transition-smooth hover:text-primary">Reserve a visit</Link>
              <Link to="/contact" className="transition-smooth hover:text-primary">Contact</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Visit us</p>
            <div className="paper-panel space-y-4 bg-white/80 p-5">
              <div className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>245 Wellness Ave, Suite 200, San Francisco, CA 94102</span>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>hello@brightsmile.dental</span>
              </div>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Mon-Fri 8am-6pm, Sat 9am-2pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/80 pt-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Brightsmile Dental Studio. All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <a
              href="http://webgaebel.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary transition-smooth hover:opacity-80"
            >
              Webgaebel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
