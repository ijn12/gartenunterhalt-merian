type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap font-serif text-[1.65rem] italic leading-none tracking-[-0.04em] text-ink ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/illustrations/lavender.png"
        alt=""
        aria-hidden
        className="h-[1.5em] w-auto -translate-y-[0.04em] shrink-0"
      />
      Gärtnerei Merian
    </span>
  );
}
