import { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: ReactNode;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>

        {subtitle && (
          <p className="text-muted-foreground flex max-w-[900px] flex-col md:text-xl/relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
