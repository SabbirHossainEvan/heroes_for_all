import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type BrandImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Aspect ratio class — passed through to wrapper. Use Tailwind aspect-* utilities. */
  aspect?: "video" | "square" | "wide" | "tall" | "auto";
  /** Priority for LCP images (above-the-fold hero). */
  priority?: boolean;
  /** Object-fit position when using fill mode. */
  objectPosition?: string;
  /** Sizes for responsive loading. */
  sizes?: string;
  /** Optional overlay label badge. */
  label?: string;
};

/**
 * Brand image wrapper around next/image with sensible defaults for the
 * Heroes For All site. Uses `fill` mode so callers control layout via the
 * parent element (matches the PlaceholderImage API).
 */
export function BrandImage({
  src,
  alt,
  className,
  aspect = "video",
  priority = false,
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  label,
}: BrandImageProps) {
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
      className={cn(
        "relative overflow-hidden bg-secondary",
        aspectClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out"
        style={{ objectPosition }}
      />
      {/* subtle gradient overlay for text legibility on hero images */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
      />
      {label && (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}

/** Compact logo-style image: contained (not covered), transparent background. */
export function BrandLogo({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="160px"
        className="object-contain p-3"
      />
    </div>
  );
}

/** Avatar/portrait image: object-cover, rounded. */
export function BrandAvatar({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 120px, 200px"
        className="object-cover object-top"
      />
    </div>
  );
}

// Re-export for components that import both
export type { ImageProps };
