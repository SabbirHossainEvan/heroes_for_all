import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  withWordmark?: boolean;
};

/**
 * Heroes For All wordmark + emblem.
 * Uses the brand palette: Forest Green primary, Coral accent.
 */
export function Logo({ variant = "dark", className, withWordmark = true }: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#173F35";
  const accentColor = "#E8754A";
  const subtleColor = variant === "light" ? "rgba(255,255,255,0.55)" : "#66716B";

  return (
    <Link
      href="/"
      aria-label="Heroes For All — Warriors of Change, home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="transition-transform duration-500 group-hover:rotate-[8deg]"
        >
          {/* shield */}
          <path
            d="M20 2L4 8v14c0 9 6.5 14.5 16 16 9.5-1.5 16-7 16-16V8L20 2z"
            fill={textColor}
          />
          {/* rising figure / sunrays */}
          <circle cx="20" cy="16" r="3.4" fill={accentColor} />
          <path
            d="M20 8.5v-2M11 11.4l-1.4-1.4M29 11.4l1.4-1.4M8 16.5h-1.5M33.5 16.5H32"
            stroke={accentColor}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* uplift chevrons */}
          <path
            d="M12 27l4-4 4 4 4-4 4 4"
            stroke="#F8F5EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-heading text-base font-bold tracking-tight"
            style={{ color: textColor }}
          >
            Heroes For All
          </span>
          <span
            className="text-[10px] font-medium uppercase tracking-[0.18em] mt-0.5"
            style={{ color: subtleColor }}
          >
            Warriors of Change
          </span>
        </span>
      )}
    </Link>
  );
}
