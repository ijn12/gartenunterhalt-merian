import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "./icons";

type Variant = "dark" | "ghost" | "light" | "orange" | "white" | "outline";
type Size = "sm" | "md" | "lg";

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
};

const VARIANTS: Record<Variant, string> = {
  dark: "bg-btn text-white border border-btn hover:bg-btn-hover hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.3)]",
  ghost:
    "bg-transparent text-ink border border-ink/80 hover:bg-ink hover:text-white hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]",
  light:
    "bg-white text-ink border border-line hover:border-ink/30 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]",
  orange:
    "bg-orange text-white border border-orange hover:brightness-95 hover:shadow-[0_8px_24px_-10px_rgba(124,105,168,0.6)]",
  white:
    "bg-white text-ink border border-white hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)]",
  outline:
    "bg-white/5 text-white border border-white/55 backdrop-blur-sm hover:bg-white hover:text-ink",
};

const SIZES: Record<Size, string> = {
  sm: "py-2.5 pl-5 pr-[18px] text-[13px] gap-2.5",
  md: "py-3.5 pl-7 pr-[22px] text-sm gap-3",
  lg: "py-[18px] pl-[34px] pr-7 text-[15px] gap-3.5",
};

export function PillButton({
  children,
  href = "#",
  variant = "dark",
  size = "md",
  icon = true,
  className,
}: PillButtonProps) {
  const classes = `group inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium tracking-[-0.005em] transition-all duration-200 ease-out hover:-translate-y-0.5 ${SIZES[size]} ${VARIANTS[variant]} ${className ?? ""}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  const isInternal = href.startsWith("/");
  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}
