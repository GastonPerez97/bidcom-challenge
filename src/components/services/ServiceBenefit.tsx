import { Benefit } from "@/types/services/benefit";

export default function ServiceBenefit({ title, description, icon }: Benefit) {
  const Icon = icon;

  return (
    <div className="space-y-3 text-center">
      <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
