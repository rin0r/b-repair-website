"use client";

import { useEffect, useState } from "react";

function getStatus(): { open: boolean; label: string } {
  // Use Swiss timezone (Europe/Zurich)
  const now = new Date();
  const zurich = new Intl.DateTimeFormat("de-CH", {
    timeZone: "Europe/Zurich",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = zurich.find((p) => p.type === "weekday")?.value ?? "";
  const hour    = parseInt(zurich.find((p) => p.type === "hour")?.value   ?? "0");
  const minute  = parseInt(zurich.find((p) => p.type === "minute")?.value ?? "0");
  const time    = hour * 60 + minute; // minutes since midnight

  const isSunday  = weekday === "So";
  const isSaturday = weekday === "Sa";

  let open = false;
  if (!isSunday && !isSaturday) {
    // Mo–Fr: 09:00–18:30
    open = time >= 9 * 60 && time < 18 * 60 + 30;
  } else if (isSaturday) {
    // Sa: 10:00–16:00
    open = time >= 10 * 60 && time < 16 * 60;
  }

  return { open, label: open ? "Geöffnet" : "Geschlossen" };
}

export default function OpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    // Refresh every minute
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return status.open ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-bold bg-green-100 text-green-700 border border-green-200">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      Geöffnet
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-bold bg-red-50 text-red-600 border border-red-200">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
      Geschlossen
    </span>
  );
}
