import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  size?: "default" | "wide" | "narrow";
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  const max =
    size === "wide"
      ? "max-w-[1440px]"
      : size === "narrow"
        ? "max-w-[960px]"
        : "max-w-[1280px]";
  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-12",
        max,
        className,
      )}
    >
      {children}
    </Component>
  );
}
