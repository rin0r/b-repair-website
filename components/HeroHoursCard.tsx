"use client";

import { useEffect, useState } from "react";
import { Phone, MapPin, Star } from "lucide-react";

function getTodayInfo(): { heading: string; todayRow: "mofr" | "sa" | "so" } {
  const now = new Date();
  // Use numeric fields only — immune to locale/browser weekday string differences
  const z = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Zurich",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = z.find((p) => p.type === "weekday")?.value ?? ""; // "Mon"…"Sun"
  const hour    = parseInt(z.find((p) => p.type === "hour")?.value   ?? "0");
  const minute  = parseInt(z.find((p) => p.type === "minute")?.value ?? "0");
  const time    = hour * 60 + minute;

  const isSunday   = weekday === "Sun";
  const isSaturday = weekday === "Sat";

  let open = false;
  let todayRow: "mofr" | "sa" | "so" = "so";

  if (isSunday) {
    todayRow = "so";
  } else if (isSaturday) {
    todayRow = "sa";
    open = time >= 10 * 60 && time < 16 * 60;
  } else {
    todayRow = "mofr";
    open = time >= 9 * 60 && time < 18 * 60;
  }

  return { heading: open ? "Heute geöffnet" : "Heute geschlossen", todayRow };
}

export default function HeroHoursCard() {
  const [info, setInfo] = useState<ReturnType<typeof getTodayInfo> | null>(null);

  useEffect(() => {
    setInfo(getTodayInfo());
    const id = setInterval(() => setInfo(getTodayInfo()), 60_000);
    return () => clearInterval(id);
  }, []);

  const todayRow = info?.todayRow ?? null;
  const heading  = info?.heading  ?? "Öffnungszeiten";

  const rows = [
    { id: "mofr", day: "Mo – Fr",  time: "09:00 – 18:00", closed: false },
    { id: "sa",   day: "Samstag",  time: "10:00 – 16:00", closed: false },
    { id: "so",   day: "Sonntag",  time: "Geschlossen",    closed: true  },
  ];

  return (
    <div className="p-7 rounded-2xl bg-white border border-brand-border shadow-xl shadow-brand-primary/8">
      <h3 className="font-headline text-xl text-brand-primary mb-4">{heading}</h3>

      <div className="space-y-2.5 mb-6">
        {rows.map(({ id, day, time, closed }) => (
          <div key={id} className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-2 text-brand-gray font-sans">
              {todayRow === id && !closed && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              )}
              {todayRow === id && closed && (
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              )}
              {todayRow !== id && <span className="w-1.5 h-1.5" />}
              {day}
            </span>
            <span className={closed ? "text-red-500 text-xs font-sans" : "text-brand-primary font-bold font-sans"}>
              {time}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-border pt-5 space-y-3">
        <a href="tel:+41764020306" className="flex items-center gap-3 group" aria-label="B-repair anrufen">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
            <Phone className="w-5 h-5 text-brand-accent" />
          </div>
          <span className="font-sans font-bold text-brand-primary text-sm group-hover:text-brand-accent transition-colors">
            +41 76 402 03 06
          </span>
        </a>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-brand-accent" />
          </div>
          <span className="font-sans text-brand-gray text-sm">Bürglenweg 24, 3627 Heimberg</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-brand-border flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="font-headline text-lg text-brand-primary">4.9</span>
        <span className="font-sans text-brand-gray text-xs">auf Google</span>
      </div>
    </div>
  );
}
