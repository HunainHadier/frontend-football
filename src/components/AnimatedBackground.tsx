import { ReactNode } from "react";

type Variant = "hero" | "soft" | "mesh" | "bubbles" | "grid";

interface Props {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}

/**
 * Decorative animated backgrounds built from semantic tokens.
 * All shapes are pointer-events-none and live behind content.
 */
const AnimatedBackground = ({ variant = "hero", className = "", children }: Props) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {variant === "hero" && (
        <>
          {/* Animated gradient wash */}
          <div
            className="absolute inset-0 opacity-70 animate-gradient-shift"
            style={{
              background:
                "linear-gradient(120deg, hsl(var(--hero-bg)), hsl(var(--soft-blue)), hsl(var(--accent)), hsl(var(--hero-bg)))",
              backgroundSize: "300% 300%",
            }}
          />
          {/* Floating blobs */}
          <div className="absolute -top-24 -left-24 size-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-32 size-[32rem] rounded-full bg-primary-glow/25 blur-3xl animate-blob-slow" />
          <div className="absolute -bottom-32 left-1/3 size-[26rem] rounded-full bg-accent/40 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
          {/* Pulse rings */}
          <div className="absolute top-20 right-20 size-24 rounded-full border-2 border-primary/30 animate-pulse-ring" />
          <div className="absolute bottom-32 left-16 size-32 rounded-full border-2 border-primary-glow/30 animate-pulse-ring" style={{ animationDelay: "-2s" }} />
          {/* Floating dots */}
          <div className="absolute top-1/4 left-1/4 size-3 rounded-full bg-primary/60 animate-float" />
          <div className="absolute top-2/3 left-1/2 size-2 rounded-full bg-primary-glow/70 animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 right-1/4 size-4 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "-1.5s" }} />
        </>
      )}

      {variant === "soft" && (
        <>
          <div className="absolute -top-32 right-0 size-[24rem] rounded-full bg-primary/10 blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -left-20 size-[28rem] rounded-full bg-accent/30 blur-3xl animate-blob-slow" />
          <div className="absolute top-1/2 left-1/3 size-2 rounded-full bg-primary/40 animate-float" />
          <div className="absolute top-20 right-1/3 size-3 rounded-full bg-primary-glow/50 animate-float" style={{ animationDelay: "-2s" }} />
        </>
      )}

      {variant === "mesh" && (
        <>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.25), transparent 40%),
                                radial-gradient(circle at 80% 30%, hsl(var(--primary-glow) / 0.25), transparent 40%),
                                radial-gradient(circle at 50% 80%, hsl(var(--accent) / 0.35), transparent 45%)`,
            }}
          />
          <div className="absolute top-1/4 -left-20 size-80 rounded-full bg-primary/15 blur-3xl animate-drift" />
          <div className="absolute bottom-0 right-0 size-96 rounded-full bg-primary-glow/15 blur-3xl animate-blob" />
        </>
      )}

      {variant === "bubbles" && (
        <>
          {[...Array(8)].map((_, i) => {
            const left = (i * 13 + 7) % 100;
            const size = 12 + (i % 4) * 8;
            const delay = -(i * 1.8);
            const duration = 12 + (i % 5) * 2;
            return (
              <div
                key={i}
                className="absolute bottom-0 rounded-full bg-primary/20 blur-sm animate-bubble-rise"
                style={{
                  left: `${left}%`,
                  width: size,
                  height: size,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </>
      )}

      {variant === "grid" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute -top-20 left-1/4 size-72 rounded-full bg-primary/15 blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-primary-glow/15 blur-3xl animate-blob-slow" />
        </>
      )}

      {children}
    </div>
  );
};

export default AnimatedBackground;
