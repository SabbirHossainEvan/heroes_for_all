import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
  container?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "default",
  className,
  container = false,
}: SectionHeadingProps) {
  const content = (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "heading-section text-primary",
          size === "large" && "heading-page",
          align === "center" && "mx-auto max-w-3xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base md:text-lg text-muted-foreground leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (container) {
    return <Container>{content}</Container>;
  }
  return content;
}
