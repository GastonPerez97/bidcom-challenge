import { BidcomInfo } from "@/types/bidcom-api";

export const HERO_FALLBACK_CONTENT: BidcomInfo = {
  headline: "About -- Personal",
  title: "Hello! I'm <strong>Gastón Pérez</strong>",
  description:
    "Fallback lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  button: {
    title: "Resume",
    link: "https://gastonperez.ar/resume"
  }
};

export const HERO_FALLBACK_IMAGES = [
  {
    src: "/images/hero/hero-fallback-1.webp",
    alt: "A grey cat is partially covered by a blanket on a couch, peeking out from underneath."
  },
  {
    src: "/images/hero/hero-fallback-2.webp",
    alt: "Close-up of a peacock feather showcasing vibrant blue, green, and purple hues."
  },
  {
    src: "/images/hero/hero-fallback-3.webp",
    alt: "A diverse team in a meeting, with one member presenting data on a chart while others engage with tablets and documents."
  },
  {
    src: "/images/hero/hero-fallback-4.webp",
    alt: "A vibrant sunset paints the sky with shades of orange and pink."
  },
  {
    src: "/images/hero/hero-fallback-5.webp",
    alt: "Snow-capped mountains rise majestically under a clear blue sky."
  }
];
