"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "group hover:bg-primary border-primary text-primary fixed right-1/2 bottom-5 z-50 size-8 translate-x-1/2 rounded-full border-[2.5px] p-3 shadow-lg duration-300",
        isVisible ? "fade-in opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={scrollToTop}
    >
      <ChevronUp style={{ scale: 1.5 }} className="duration-300 group-hover:text-white" />
    </Button>
  );
}
