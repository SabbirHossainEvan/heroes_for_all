import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

/** The official Heroes For All logo. */
export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Heroes For All, home"
      className={cn(
        "inline-flex shrink-0 items-center",
        variant === "light"
          ? "rounded-md bg-white p-1"
          : "bg-transparent p-0",
        className,
      )}
    >
      <Image
        src="/images/brand/hfa-logo.png"
        alt="Heroes For All"
        width={139}
        height={66}
        priority={variant === "dark"}
        className="h-[56px] w-[118px] object-contain sm:h-[62px] sm:w-[130px]"
      />
    </Link>
  );
}
