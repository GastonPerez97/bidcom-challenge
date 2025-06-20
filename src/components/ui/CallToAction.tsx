import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

type CallToActionProps = { href: string; text: string };

export default function CallToAction({ href, text }: CallToActionProps) {
  return (
    <Button size="xl" className="group w-full transition-all sm:w-[300px] lg:w-auto" asChild>
      <Link href={href}>
        {text} <ArrowRight className="duration-150 group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
