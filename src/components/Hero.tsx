import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="5xl:gap-x-[15dvw] mx-auto flex h-screen w-full justify-center gap-x-[5dvw] px-16">
      <div className="flex w-[590px] flex-col items-start justify-center gap-y-6">
        <p className="text-sm tracking-[.25em]">ABOUT &#8212; PERSONAL</p>

        <h1 className="text-5xl text-balance">
          ¡Hello! <b>I&apos;m Angela Smith</b>
        </h1>

        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h2>

        <Button size="xl">
          Get started
          <ArrowRight />
        </Button>
      </div>

      <div className="flex items-center">
        <Image
          src="/images/hero-fallback.png"
          alt="A woman in profile with dark hair, wearing a buttoned shirt, is set against a dark background with diagonal yellow lines."
          width={648}
          height={664}
          className="max-h-[80dvh] object-contain"
        />
      </div>
    </section>
  );
}
