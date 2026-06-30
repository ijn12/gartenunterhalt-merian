type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap font-serif text-[1.65rem] italic leading-none tracking-[-0.04em] text-ink ${className}`}
    >
      Gartenunterhalt Merian
    </span>
  );
}
