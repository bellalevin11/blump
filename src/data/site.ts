export const siteMeta = {
  name: "BLUMP",
  title: "BLUMP | House, Disco, and Nightlife DJ",
  description:
    "BLUMP is a nightlife-focused DJ blending house, disco edits, and nostalgic EDM remixes into high-energy sets for college events, club nights, and private bookings.",
  tagline: "House grooves, disco edits, and high-trust energy for packed dance floors.",
  location: "Based in New York starting in June. Primarily booking New York gigs, with select travel for the right events.",
  email: "booking@blumpmusic.com",
  instagram: "https://instagram.com/blumpmusic",
  soundcloud: "https://soundcloud.com/blumpp"
};

export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sets", href: "#sets" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#social-proof" }
] as const;

export const genreTags = [
  "House",
  "Disco edits",
  "Nostalgic EDM remixes",
  "College nightlife"
];

export const bookingReasons = [
  {
    title: "Reads the room fast",
    description: "Transitions are built around crowd momentum, not autopilot playlists."
  },
  {
    title: "Musical background",
    description: "Piano and drums training shows up in tighter pacing, cleaner builds, and more musical set flow."
  },
  {
    title: "Flexible across formats",
    description: "From late-night club energy to polished campus formals, the tone stays intentional."
  }
];

export const featuredSets = [
  {
    title: "La Boucherie Live",
    description: "A locked-in house set built for a packed Copenhagen cocktail room that kept climbing deeper all night.",
    href: "https://soundcloud.com/blumpp/la-boucherie-set",
    platform: "SoundCloud",
    length: "52 min"
  },
  {
    title: "Disco Den Vol. 1",
    description: "Disco edits, vocal lift-offs, and familiar hooks threaded into a smooth late-night arc.",
    href: "https://soundcloud.com/blumpp/disco-den-vol-1",
    platform: "SoundCloud",
    length: "48 min"
  },
  {
    title: "Campus Afterhours ID Mix",
    description: "A higher-energy blend of house pressure and nostalgic EDM remixes aimed at college dance floors.",
    href: "https://soundcloud.com/blumpp",
    platform: "Listen",
    length: "41 min"
  }
];

export const eventTypes = [
  {
    label: "College events",
    eyebrow: "Campus-ready",
    description: "Welcome weeks, themed parties, philanthropy events, and social calendars that need real energy."
  },
  {
    label: "Club nights",
    eyebrow: "Peak-hour flow",
    description: "Warm-up, support, or headline sets that hold attention without overplaying the room."
  },
  {
    label: "Private parties",
    eyebrow: "Personal but elevated",
    description: "Birthday parties, rooftops, house events, and intimate nights that still want a polished sound."
  },
  {
    label: "Formals",
    eyebrow: "Clean execution",
    description: "Structured events that need tasteful pacing early and a stronger payoff once the floor opens."
  },
  {
    label: "Brand and social events",
    eyebrow: "Professional presence",
    description: "Launches, lifestyle activations, and social gatherings where the music shapes the atmosphere."
  }
];

export const testimonials = [
  {
    quote:
      "Eli was easy to work with, stayed aligned with the music profile we discussed, and brought great energy to the room all night.",
    name: "Milad Ghorbany",
    role: "Venue Manager, La Boucherie"
  },
  {
    quote:
      "The set felt current without losing the songs people actually wanted to move to. It was the right balance for a college crowd.",
    name: "Event Chair",
    role: "Campus Social Committee"
  },
  {
    quote:
      "Professional communication, smooth setup, and a much stronger crowd response than we usually get from a one-night booking.",
    name: "Private Client",
    role: "Formal Event Host"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    src: withBase("/images/hero-blump.jpeg"),
    alt: "BLUMP performing under moody club lighting",
    height: "lg"
  },
  {
    src: withBase("/images/gallery-01.jpeg"),
    alt: "Crowd-facing nightlife portrait of BLUMP",
    height: "md"
  },
  {
    src: withBase("/images/gallery-02.jpeg"),
    alt: "BLUMP in an intimate event setting",
    height: "xl"
  },
  {
    src: withBase("/images/gallery-03.jpeg"),
    alt: "Atmospheric event detail from a live BLUMP set",
    height: "sm"
  }
];

export const socialLinks = [
  { label: "Instagram", href: siteMeta.instagram },
  { label: "SoundCloud", href: siteMeta.soundcloud },
  { label: "Email", href: `mailto:${siteMeta.email}` }
];
export type GalleryImage = {
  src: string;
  alt: string;
  height: "sm" | "md" | "lg" | "xl";
};
