import { CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Service } from "@/types/services/service";

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  popular = false
}: Service) {
  const Icon = icon;
  return (
    <Card
      className={cn(
        "relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        popular && "border-primary shadow-md"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
          <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Requested</Badge>
        </div>
      )}

      <CardHeader className="pb-4 text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Icon className="text-primary h-8 w-8" />
        </div>

        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-muted-foreground text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
