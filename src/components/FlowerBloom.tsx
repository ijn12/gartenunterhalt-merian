"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Easter egg: clicking anything marked `data-bloom-trigger` (the logo) makes a
 * single flower pop up; three quick clicks fill the screen with flowers for a
 * few seconds. The overlay never intercepts pointer events.
 */

const KINDS = ["daisy", "poppy", "forgetMeNot", "sunflower", "tulip", "lavender"] as const;
type Kind = (typeof KINDS)[number];

const COLORS: Record<Kind, string[]> = {
  daisy: ["#ffffff"],
  poppy: ["#f08a6c", "#e86a5c", "#f2a7c3", "#f6b8d1"],
  forgetMeNot: ["#8fb4ec", "#a9c4f2", "#b9a6e0"],
  sunflower: ["#f5c84c"],
  tulip: ["#f2a7c3", "#f5c84c", "#e86a5c", "#b9a6e0"],
  lavender: ["#7c69a8", "#9a86c8"],
};

type Flower = {
  id: number;
  mode: "sprout" | "bloom";
  x: number;
  y: number;
  size: number;
  kind: Kind;
  color: string;
  rotate: number;
  delay: number;
};

const TRIGGER_CLICKS = 3;
const TRIGGER_WINDOW_MS = 1500;
const BLOOM_DURATION_S = 5;
const SPROUT_DURATION_S = 1.2;

const pick = <T,>(items: readonly T[]) => items[Math.floor(Math.random() * items.length)];
const rand = (min: number, max: number) => min + Math.random() * (max - min);

let nextId = 0;

function makeFlower(mode: Flower["mode"], x: number, y: number, size: number, delay: number): Flower {
  const kind = pick(KINDS);
  return {
    id: nextId++,
    mode,
    x,
    y,
    size,
    kind,
    color: pick(COLORS[kind]),
    rotate: rand(-25, 25),
    delay,
  };
}

function bloomField(originX: number, originY: number): Flower[] {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cell = w < 640 ? 78 : 112;
  const cols = Math.ceil(w / cell) + 1;
  const rows = Math.ceil(h / cell) + 1;
  const maxDist = Math.hypot(Math.max(originX, w - originX), Math.max(originY, h - originY));
  const flowers: Flower[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cell + rand(-0.35, 0.35) * cell;
      const y = r * cell + rand(-0.35, 0.35) * cell;
      const dist = Math.hypot(x - originX, y - originY);
      const delay = (dist / maxDist) * 0.9 + rand(0, 0.15);
      flowers.push(makeFlower("bloom", x, y, rand(0.55, 1) * cell * 0.95, delay));
    }
  }
  return flowers;
}

export function FlowerBloom() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const clicks = useRef<number[]>([]);
  const blooming = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const add = (batch: Flower[], lifetimeS: number, onDone?: () => void) => {
      const ids = new Set(batch.map((f) => f.id));
      setFlowers((prev) => [...prev, ...batch]);
      window.setTimeout(() => {
        setFlowers((prev) => prev.filter((f) => !ids.has(f.id)));
        onDone?.();
      }, lifetimeS * 1000 + 100);
    };

    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest?.("[data-bloom-trigger]");
      if (!trigger) return;

      // Keyboard activation has no pointer position; use the trigger's centre.
      let { clientX: x, clientY: y } = event;
      if (event.detail === 0) {
        const rect = trigger.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      }

      const now = performance.now();
      clicks.current = [...clicks.current.filter((t) => now - t < TRIGGER_WINDOW_MS), now];

      if (clicks.current.length >= TRIGGER_CLICKS && !blooming.current) {
        clicks.current = [];
        blooming.current = true;
        add(bloomField(x, y), BLOOM_DURATION_S + 1.1, () => {
          blooming.current = false;
        });
      } else if (!blooming.current) {
        add([makeFlower("sprout", x, y, 34, 0)], SPROUT_DURATION_S);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (flowers.length === 0) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute"
          style={{
            left: f.x - f.size / 2,
            top: f.y - f.size / 2,
            width: f.size,
            height: f.size,
          }}
          {...flowerMotion(f, Boolean(reduceMotion))}
        >
          <FlowerSvg kind={f.kind} color={f.color} />
        </motion.div>
      ))}
    </div>
  );
}

function flowerMotion(f: Flower, reduceMotion: boolean) {
  if (reduceMotion) {
    const duration = f.mode === "bloom" ? BLOOM_DURATION_S : SPROUT_DURATION_S;
    return {
      initial: { opacity: 0, rotate: f.rotate },
      animate: { opacity: [0, 1, 1, 0] },
      transition: { duration, delay: f.mode === "bloom" ? f.delay * 0.3 : 0, times: [0, 0.15, 0.8, 1] },
    };
  }

  if (f.mode === "sprout") {
    return {
      initial: { opacity: 0, scale: 0, y: 0, rotate: f.rotate - 60 },
      animate: {
        opacity: [0, 1, 1, 0],
        scale: [0, 1.15, 1, 0.8],
        y: [0, -18, -48, -72],
        rotate: [f.rotate - 60, f.rotate, f.rotate + 10, f.rotate - 6],
      },
      transition: { duration: SPROUT_DURATION_S, times: [0, 0.25, 0.7, 1], ease: "easeOut" as const },
    };
  }

  const sway = rand(6, 12);
  return {
    initial: { opacity: 0, scale: 0, y: 0, rotate: f.rotate - 120 },
    animate: {
      opacity: [0, 1, 1, 1, 1, 0],
      scale: [0, 1.12, 1, 1, 1, 0.55],
      y: [0, 0, 0, 0, 0, 60],
      rotate: [f.rotate - 120, f.rotate, f.rotate + sway, f.rotate - sway, f.rotate, f.rotate + 40],
    },
    transition: {
      duration: BLOOM_DURATION_S,
      delay: f.delay,
      times: [0, 0.1, 0.35, 0.6, 0.8, 1],
      ease: "easeInOut" as const,
    },
  };
}

function FlowerSvg({ kind, color }: { kind: Kind; color: string }) {
  return (
    <svg viewBox="-50 -50 100 100" width="100%" height="100%" overflow="visible">
      {kind === "daisy" && (
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse
              key={i}
              cx={0}
              cy={-25}
              rx={8.5}
              ry={21}
              fill={color}
              stroke="#dfe6d2"
              strokeWidth={1.2}
              transform={`rotate(${i * 30})`}
            />
          ))}
          <circle r={13} fill="#f5c84c" />
          <circle r={7} fill="#e9a92f" opacity={0.5} />
        </>
      )}

      {kind === "poppy" && (
        <>
          {Array.from({ length: 5 }, (_, i) => (
            <circle key={i} cx={0} cy={-21} r={22} fill={color} transform={`rotate(${i * 72})`} />
          ))}
          {Array.from({ length: 5 }, (_, i) => (
            <circle
              key={`h${i}`}
              cx={0}
              cy={-24}
              r={12}
              fill="#fff"
              opacity={0.18}
              transform={`rotate(${i * 72 + 10})`}
            />
          ))}
          <circle r={9} fill="#2c4526" />
          <circle r={4} fill="#4f6f3f" />
        </>
      )}

      {kind === "forgetMeNot" && (
        <>
          {Array.from({ length: 5 }, (_, i) => (
            <circle key={i} cx={0} cy={-19} r={17} fill={color} transform={`rotate(${i * 72})`} />
          ))}
          <circle r={11} fill="#fff" />
          <circle r={6.5} fill="#f5d34c" />
        </>
      )}

      {kind === "sunflower" && (
        <>
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={`b${i}`}
              d="M0 -47 Q 10 -30 0 -14 Q -10 -30 0 -47Z"
              fill="#e9a92f"
              transform={`rotate(${i * 22.5 + 11.25})`}
            />
          ))}
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              d="M0 -45 Q 10 -28 0 -14 Q -10 -28 0 -45Z"
              fill={color}
              transform={`rotate(${i * 22.5})`}
            />
          ))}
          <circle r={18} fill="#6b4a2b" />
          <circle r={11} fill="#53381f" />
        </>
      )}

      {kind === "tulip" && (
        <>
          <path d="M0 22 L0 48" stroke="#4f6f3f" strokeWidth={5} strokeLinecap="round" />
          <path d="M0 40 Q 18 26 22 34 Q 14 44 0 44Z" fill="#6d8f4f" />
          <path
            d="M-24 -10 Q -27 -36 -13 -38 L 0 -22 L 13 -38 Q 27 -36 24 -10 Q 22 22 0 24 Q -22 22 -24 -10Z"
            fill={color}
          />
          <path d="M-10 -20 Q 0 -44 10 -20 Q 12 10 0 18 Q -12 10 -10 -20Z" fill="#fff" opacity={0.22} />
        </>
      )}

      {kind === "lavender" && (
        <>
          <path d="M0 48 Q 3 4 0 -42" stroke="#5f7f4c" strokeWidth={3.5} fill="none" strokeLinecap="round" />
          {Array.from({ length: 7 }, (_, i) => {
            const y = -38 + i * 9;
            const side = i % 2 === 0 ? -1 : 1;
            return (
              <g key={i}>
                <ellipse cx={side * 5} cy={y} rx={5.5} ry={8} fill={color} transform={`rotate(${side * 20} ${side * 5} ${y})`} />
                <ellipse cx={-side * 4} cy={y + 4} rx={4.5} ry={6.5} fill={color} opacity={0.75} />
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
}
