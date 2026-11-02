import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  alt: string;
  variant?: "warm" | "sage" | "coral" | "forest" | "ivory" | "charcoal";
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  aspect?: "video" | "square" | "wide" | "tall" | "auto";
};

/**
 * Placeholder for hero and content imagery during development.
 * Replace with real photos via next/image once assets are sourced.
 */
export function PlaceholderImage({
  alt,
  variant = "warm",
  label,
  className,
  icon,
  aspect = "video",
}: PlaceholderImageProps) {
  const gradients: Record<string, string> = {
    warm: "from-[#F8F5EE] via-[#E6EDE5] to-[#173F35]",
    sage: "from-[#E6EDE5] via-[#EEF3EC] to-[#173F35]",
    coral: "from-[#F8F5EE] via-[#E8754A]/30 to-[#173F35]",
    forest: "from-[#173F35] via-[#102F28] to-[#173F35]",
    ivory: "from-[#F8F5EE] via-[#F8F5EE] to-[#E6EDE5]",
    charcoal: "from-[#252B28] via-[#173F35] to-[#102F28]",
  };

  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : aspect === "wide"
          ? "aspect-[16/9]"
          : aspect === "tall"
            ? "aspect-[3/4]"
            : "";

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradients[variant],
        aspectClass,
        className,
      )}
    >
      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(232,117,74,0.25) 0, transparent 50%)",
        }}
      />
      {icon && (
        <div className="relative text-white/90">{icon}</div>
      )}
      {label && (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
