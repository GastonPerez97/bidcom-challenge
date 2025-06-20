import { ReactNode } from "react";

type TextWithIconProps = {
  title: string;
  text: ReactNode;
  icon: ReactNode;
};

export default function TextWithIcon({ title, text, icon }: TextWithIconProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-muted-foreground text-sm">{text}</p>
      </div>
    </div>
  );
}
