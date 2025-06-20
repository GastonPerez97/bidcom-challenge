import { ComponentType } from "react";

export type Service = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  features: string[];
  popular?: boolean;
};
