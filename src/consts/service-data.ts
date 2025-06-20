import { Award, Clock, Headphones, Lightbulb, Target, Zap } from "lucide-react";

export const SERVICES = [
  {
    icon: Target,
    title: "Strategic Consulting",
    description:
      "I help businesses develop comprehensive strategies and actionable plans to achieve their goals and maximize growth potential.",
    features: ["Market Analysis", "Growth Strategy", "Risk Assessment", "Performance Metrics"],
    popular: false
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "I bring creative visions to life through innovative design, compelling storytelling, and strategic creative direction.",
    features: ["Brand Identity", "Creative Direction", "Content Strategy", "Visual Design"],
    popular: true
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "I offer dedicated ongoing support and consultation to ensure continued success and growth.",
    features: [
      "Regular Check-ins",
      "Strategic Guidance",
      "Priority Response",
      "Continuous Improvement"
    ],
    popular: false
  }
];

export const BENEFITS = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality"
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience with a track record of successful projects"
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    description: "Personal attention and support throughout the entire process"
  }
];
