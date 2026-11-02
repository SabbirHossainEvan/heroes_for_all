import { Container } from "@/components/ui-brand/container";
import { Breadcrumbs } from "@/components/ui-brand/breadcrumbs";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  variant?: "default" | "primary" | "sage";
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs: crumbs = [],
  variant = "default",
  align = "left",
  children,
}: PageHeaderProps) {
  const bg =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : variant === "sage"
        ? "bg-secondary/50"
        : "bg-background";

  const titleColor =
    variant === "primary" ? "text-primary-foreground" : "text-primary";

  const eyebrowColor =
    variant === "primary" ? "text-accent" : "text-accent";

  const descriptionColor =
    variant === "primary"
      ? "text-primary-foreground/85"
      : "text-muted-foreground";

  return (
    <section className={cn("relative overflow-hidden", bg)}>
      {variant === "primary" && (
        <>
          <div aria-hidden className="absolute -top-20 -right-12 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        </>
      )}
      <Container size="wide" className={cn("relative py-12 md:py-16 lg:py-20", align === "center" && "text-center")}>
        {crumbs.length > 0 && (
          <Breadcrumbs
            items={crumbs}
            className={cn(
              "mb-5",
              variant === "primary" && "text-primary-foreground/70 [&_a]:text-primary-foreground/70 [&_a:hover]:text-white",
            )}
          />
        )}
        <div className={cn("flex flex-col gap-4", align === "center" && "items-center")}>
          {eyebrow && (
            <span className="eyebrow" style={{ color: eyebrowColor === "text-accent" ? undefined : "#E8754A" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className={cn("heading-page max-w-3xl", titleColor, align === "center" && "mx-auto")}>
            {title}
          </h1>
          {description && (
            <p className={cn("text-base md:text-lg max-w-2xl leading-relaxed", descriptionColor, align === "center" && "mx-auto")}>
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
