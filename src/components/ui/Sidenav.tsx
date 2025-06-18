"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SidenavLink } from "@/types/sidenav-link";

import { Button } from "./Button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./Sheet";

const SIDENAV_LINKS: SidenavLink[] = [
  { href: "/", name: "Home" },
  { href: "#about", name: "About" },
  { href: "#services", name: "Services" },
  { href: "#contact", name: "Contact" }
];

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSidenav = (value: boolean) => setIsOpen(value);

  return (
    <Sheet open={isOpen} onOpenChange={handleSidenav}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="size-10">
          <Image src="./icons/menu.svg" alt="Menu fries icon" width={26} height={20} />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[300px]" aria-describedby={undefined}>
        <VisuallyHidden>
          <SheetTitle></SheetTitle>
        </VisuallyHidden>

        <ul className="mt-10 flex flex-col gap-y-1">
          {SIDENAV_LINKS.map(({ href, name }: SidenavLink, index: number) => (
            <li key={index}>
              <Button variant="link" asChild onClick={() => handleSidenav(false)}>
                <Link href={href}>{name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
