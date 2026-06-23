import type { ElementType, ReactNode } from "react";

/** Small uppercase mono labels (e.g. section headings, field labels). */
export function Label({
  children,
  className,
  as: Tag = "span",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  tone?: "default" | "light" | "accent";
}) {
  const toneClass =
    tone === "light" ? "text-white/80" : tone === "accent" ? "text-blue-deep" : "text-ink-2";

  return (
    <Tag className={`font-mono text-xs uppercase tracking-[0.13em] ${toneClass} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-6 sm:px-8 lg:px-10 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] ${
        tone === "light" ? "text-white/80" : "text-ink-2"
      } ${className ?? ""}`}
    >
      <span aria-hidden className="text-orange">
        ◦
      </span>
      {children}
    </p>
  );
}
