import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        sage: "bg-secondary text-primary",
        accent: "bg-accent/10 text-accent",
        outline: "border border-border text-muted-foreground",
        primary: "bg-primary/10 text-primary",
        white: "bg-white/15 text-white backdrop-blur",
      },
    },
    defaultVariants: { variant: "sage" },
  },
);

export type BadgeProps = {
  children: React.ReactNode;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  className?: string;
};

export function BrandBadge({ children, variant, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>{children}</span>
  );
}
