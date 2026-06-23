import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-9 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/bolligerit-logo.png"
      alt="Bolliger IT – PC-Beratung und Service"
      width={2269}
      height={615}
      priority={priority}
      className={className}
    />
  );
}
