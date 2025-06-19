import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

type HeroCallToActionProps = { href: string; text: string };

export default function HeroCallToAction({ href, text }: HeroCallToActionProps) {
  return (
    <Button size="xl" className="w-full lg:w-auto" asChild>
      <Link href={href}>
        {text} <ArrowRight />
      </Link>
    </Button>
  );
}
