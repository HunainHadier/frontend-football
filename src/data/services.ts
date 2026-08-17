import {
  Sparkles, Sun, Activity, AlignCenter, Zap, Smile, Stethoscope,
} from "lucide-react";

export const services = [
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning",
    short: "Gentle professional cleaning to remove plaque and brighten your smile.",
    description:
      "Our routine cleanings remove tartar, polish your teeth, and include a complete oral health checkup. Recommended every 6 months.",
    icon: Sparkles,
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    short: "Professional whitening up to 8 shades brighter in one visit.",
    description:
      "Safe, dentist-supervised whitening using premium gels. Take-home and in-chair options available.",
    icon: Sun,
  },
  {
    slug: "root-canal",
    title: "Root Canal",
    short: "Modern, virtually painless root canal therapy to save your tooth.",
    description:
      "We use rotary endodontics and gentle anesthesia for a comfortable experience and predictable, long-lasting results.",
    icon: Activity,
  },
  {
    slug: "braces",
    title: "Braces & Aligners",
    short: "Traditional braces and clear aligners for a perfectly aligned smile.",
    description:
      "Custom orthodontic plans for teens and adults. We offer metal, ceramic, and Invisalign-style clear aligners.",
    icon: AlignCenter,
  },
  {
    slug: "implants",
    title: "Dental Implants",
    short: "Permanent, natural-looking tooth replacements that last a lifetime.",
    description:
      "Titanium implants placed with 3D-guided precision. Restore function and confidence with single or full-arch implants.",
    icon: Zap,
  },
  {
    slug: "checkup",
    title: "Family Dentistry",
    short: "Comprehensive dental care for every member of your family.",
    description:
      "From a child's first visit to senior care — gentle, preventive dentistry tailored to every age.",
    icon: Smile,
  },
] as const;

export type Service = (typeof services)[number];
