import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CallToActionProps = { href: string; text: string; className?: string };

export default function CallToAction({ href, text, className }: CallToActionProps) {
  return (
    <Button
      size="xl"
      className={cn("group w-full transition-all sm:w-[300px] lg:w-auto", className)}
      asChild
    >
      <Link href={href}>
        {text} <ArrowRight className="duration-150 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
