import {
  Flame,
  BellRing,
  Droplets,
  ShowerHead,
  DoorOpen,
  ClipboardCheck,
  ShieldCheck,
  BadgeCheck,
  HardHat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  extinguisher: Flame,
  bell: BellRing,
  hydrant: Droplets,
  sprinkler: ShowerHead,
  exit: DoorOpen,
  clipboard: ClipboardCheck,
  shield: ShieldCheck,
  badge: BadgeCheck,
  helmet: HardHat,
  wrench: Wrench,
};
