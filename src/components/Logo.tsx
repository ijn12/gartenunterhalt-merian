type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "inline-block", priority: _priority = false }: LogoProps) {
  return (
    <span
      className={`font-serif text-[1.35rem] leading-none tracking-[-0.02em] text-ink sm:text-[1.5rem] ${className}`}
    >
      Gartenunterhalt{" "}
      <span className="italic text-ink-2">Merian</span>
    </span>
  );
}
