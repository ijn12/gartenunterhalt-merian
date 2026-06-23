import type { SVGProps } from "react";
import {
  Gamepad2,
  HeartHandshake,
  MapPinHouse,
  Monitor,
  Package,
  Smartphone,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

export const ArrowRight = (props: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M3.5 8h9M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const serviceIcons = {
  Home: MapPinHouse,
  Desktop: Monitor,
  Mobile: Smartphone,
  Gaming: Gamepad2,
  Wrench: Wrench,
  Heart: HeartHandshake,
  Box: Package,
  Penguin: Terminal,
} as const satisfies Record<string, LucideIcon>;

export type ServiceIconName = keyof typeof serviceIcons;

export const CalendarIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8 2v3M16 2v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 12l5 5 9-11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.5 3h3l1.5 4.5L9 9.5a12 12 0 0 0 5.5 5.5l2-2L21 14.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const PinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const QuoteIcon = (props: IconProps) => (
  <svg viewBox="0 0 28 22" fill="none" {...props}>
    <path
      d="M0 22V13C0 5.5 4 .5 11 0v4.5C7.5 5.5 5.5 8 5 13h4v9H0Zm17 0V13C17 5.5 21 .5 28 0v4.5c-3.5 1-5.5 3.5-6 8.5h4v9h-9Z"
      fill="currentColor"
    />
  </svg>
);
