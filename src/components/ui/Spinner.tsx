import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent",
        className
      )}
    />
  );
}
