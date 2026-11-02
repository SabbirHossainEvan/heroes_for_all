import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none active:scale-[0.97] hover:scale-[1.02] motion-reduce:hover:scale-100 motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
        ghost: "bg-transparent text-primary hover:bg-primary/5",
        subtle:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = {
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

export function BrandButton({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  type = "button",
  onClick,
  disabled,
  ...aria
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...aria}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...aria}
    >
      {children}
    </button>
  );
}
