"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  sub: string;
}

function parseValue(raw: string): { target: number | null; suffix: string } {
  if (!/\d/.test(raw)) return { target: null, suffix: "" };
  const suffix = /[+%]$/.test(raw) ? raw.slice(-1) : "";
  const target = parseInt(raw.replace(/[^0-9]/g, ""), 10);
  return { target, suffix };
}

function formatNum(n: number, original: string): string {
  const r = Math.round(n);
  if (original.includes("'") && r >= 1000) {
    const thousands = Math.floor(r / 1000);
    const rest = String(r % 1000).padStart(3, "0");
    return `${thousands}'${rest}`;
  }
  return String(r);
}

function CountUp({ value }: { value: string }) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(target !== null ? "0" + suffix : value);
  const ref   = useRef<HTMLSpanElement>(null);
  const ran   = useRef(false);

  useEffect(() => {
    if (target === null || ran.current) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        ran.current = true;

        const duration = target >= 1000 ? 2000 : 1400;
        const start = performance.now();

        function tick(now: number) {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setDisplay(formatNum(eased * target!, value) + suffix);
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, value]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto sm:max-w-md">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-headline text-4xl sm:text-5xl text-brand-accent mb-0.5">
            <CountUp value={s.value} />
          </div>
          <div className="font-headline text-lg text-brand-primary">{s.label}</div>
          <div className="font-sans text-brand-gray text-xs mt-0.5 hidden sm:block">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
