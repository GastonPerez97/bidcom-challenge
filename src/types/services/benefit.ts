import { ComponentType } from "react";

export type Benefit = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};
