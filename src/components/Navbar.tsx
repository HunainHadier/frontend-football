import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Care" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-smooth md:px-6",
          scrolled
            ? "border-border/80 bg-[#fffdf9]/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-white/65 px-2 py-2 backdrop-blur-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-smooth",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+15551234567" className="text-sm font-semibold text-muted-foreground transition-smooth hover:text-foreground">
            <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
              <Phone className="size-4" />
            </span>
            (555) 123-4567
          </a>
          <Button asChild>
            <Link to="/book">Reserve Visit</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/80 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-border/80 bg-[#fffdf9] p-4 shadow-card md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 text-base font-semibold transition-smooth",
                    isActive ? "bg-primary text-primary-foreground" : "bg-secondary/65 text-foreground"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-border/70 bg-secondary/40 p-4">
            <p className="text-sm font-semibold text-foreground">Need help choosing a treatment?</p>
            <p className="mt-1 text-sm text-muted-foreground">Call for a quick consultation with our front desk.</p>
            <div className="mt-4 flex gap-3">
              <Button asChild className="flex-1">
                <Link to="/book">Book now</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href="tel:+15551234567">Call us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
