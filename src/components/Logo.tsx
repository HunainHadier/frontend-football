import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className, size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { container: "h-9 w-9", icon: "text-xs", text: "text-base", subtext: "text-[9px]" },
    md: { container: "h-11 w-11", icon: "text-sm", text: "text-lg", subtext: "text-[10px]" },
    lg: { container: "h-14 w-14", icon: "text-base", text: "text-2xl", subtext: "text-[11px]" },
  };

  const { container, icon, text, subtext } = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative flex items-center justify-center rounded-[1.35rem] border border-primary/15 bg-[#f5fbff] shadow-soft", container)}>
        <div className="absolute inset-1 rounded-[1rem] gradient-primary opacity-10" />
        <div className="relative flex h-[74%] w-[74%] items-center justify-center rounded-[1rem] gradient-primary text-primary-foreground shadow-glow">
          <span className={cn("font-display font-bold leading-none", icon)}>B</span>
        </div>
      </div>
      {showText && (
        <div className="leading-none">
          <span className={cn("block font-display font-bold text-foreground", text)}>Brightsmile</span>
          <span className={cn("mt-1 block font-sans font-semibold uppercase tracking-[0.24em] text-muted-foreground", subtext)}>
            Dental Studio
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
