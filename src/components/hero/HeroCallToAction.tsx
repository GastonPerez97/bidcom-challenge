import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

type HeroCallToActionProps = { href: string; text: string };

export default function HeroCallToAction({ href, text }: HeroCallToActionProps) {
  return (
    <Button size="xl" className="group w-full transition-all lg:w-auto" asChild>
      <Link href={href}>
        {text} <ArrowRight className="duration-150 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
