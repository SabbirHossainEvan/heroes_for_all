import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  items: { label: string; href?: string }[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className={cn(isLast && "text-primary font-medium")}>
                  {item.label}
                </span>
              )}
              {!isLast && <span aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
