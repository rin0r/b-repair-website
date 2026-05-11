import Image from "next/image";
import Link from "next/link";
import {
  Smartphone, Battery, Wifi, Camera, Mic, Wrench, Droplets,
  Cpu, Monitor, HardDrive, CheckCircle2, ArrowRight, Phone,
  MapPin, Clock, Shield, Star, Zap, ChevronRight, Package,
  Crosshair, Database, Layers,
} from "lucide-react";
import PreisrechnerWidget from "@/components/PreisrechnerWidget";
import OpenStatus from "@/components/OpenStatus";
import BrandMarquee from "@/components/BrandMarquee";
import HeroHoursCard from "@/components/HeroHoursCard";

/* ─── DATA ─────────────────────────────────────────────────────────── */

const services = [
  { icon: Monitor,    title: "Display-Reparatur",   time: "60–90 Min",  desc: "LCD & OLED – alle Marken, Originalqualität.",                          accent: "text-brand-accent" },
  { icon: Battery,    title: "Akku-Austausch",      time: "30–45 Min",  desc: "Neue Laufzeit – Original- oder Premium-Ersatzteile.",                   accent: "text-brand-accent" },
  { icon: Cpu,        title: "Mikrolöten",           time: "1–3 Tage",   desc: "Platinen-Reparaturen auf Bauteil-Ebene – unser Spezialgebiet.",         accent: "text-brand-orange" },
  { icon: HardDrive,  title: "Datenrettung",         time: "1–5 Tage",   desc: "Fotos, Kontakte, Dokumente – auch von schwer beschädigten Geräten.",    accent: "text-green-600" },
  { icon: Camera,     title: "Kamera-Reparatur",     time: "45–90 Min",  desc: "Front- & Rückkamera, Glas, Autofokus, Blitz.",                          accent: "text-brand-accent" },
  { icon: Droplets,   title: "Wasserschaden",        time: "1–2 Tage",   desc: "Ultraschall-Reinigung und Korrosionsbehandlung.",                       accent: "text-blue-600" },
  { icon: Wrench,     title: "Computer & Laptop",    time: "1–3 Tage",   desc: "MacBook, Windows-Laptops – Display, Akku, SSD.",                        accent: "text-brand-accent" },
  { icon: Wifi,       title: "Software & Diagnose",  time: "30–60 Min",  desc: "Abstürze, Viren, Betriebssystem – kostenlose Erstdiagnose.",             accent: "text-purple-600" },
];

const reviews = [
  {
    name: "Ramu Darwisch",
    initial: "R",
    color: "bg-purple-600",
    ago: "vor 3 Monaten",
    text: "Schneller Austausch mit originalem Akku. (iPhone 14) Top Qualität, alles funktioniert einwandfrei und die Akkuleistung ist wieder bei 100%. Absolut empfehlenswert!",
  },
  {
    name: "Frank Schulze",
    initial: "F",
    color: "bg-violet-600",
    ago: "vor 7 Monaten",
    text: "Display und Akku wurden schnell und zuverlässig gewechselt. Funktioniert alles einwandfrei. Sehr freundlicher Kontakt. Kann man nur weiterempfehlen! Top!",
  },
  {
    name: "Toni",
    initial: "T",
    color: "bg-emerald-700",
    ago: "vor 3 Monaten",
    text: "Top Microsoldering-Service, Board-Defekt repariert und alle Daten gerettet. Schnell und professionell. Sehr empfehlenswert!",
  },
];

const faqs = [
  { q: "Brauche ich einen Termin?",      a: "Nein – Sie können jederzeit während der Öffnungszeiten vorbeikommen. Für Mikrolöten und Datenrettung empfehlen wir kurze Voranmeldung per Telefon oder WhatsApp." },
  { q: "Wie lange dauert eine Reparatur?",  a: "Display und Akku: 30–90 Min. Wasserschäden, Mikrolötungen und Datenrettungen: 1–5 Werktage je nach Aufwand." },
  { q: "Was kostet die Diagnose?",        a: "Die Diagnose ist kostenlos und entfällt bei Reparatur bei uns. Sie erfahren den genauen Fixpreis vor der Reparatur – keine Überraschungen." },
  { q: "Welche Garantie gibt es?",        a: "6 Monate auf alle Reparaturen – doppelt so lang wie bei den meisten Mitbewerbern." },
  { q: "Gehen meine Daten verloren?",     a: "Bei Display- und Akku-Reparaturen bleiben alle Daten erhalten. Ihre Daten werden nie ohne Ihre Erlaubnis gelesen." },
  { q: "Reparieren Sie auch iPads und Laptops?",  a: "Ja – iPhones, iPads, Android-Smartphones, MacBooks und Windows-Laptops. Preis auf Anfrage." },
];

const mikroloetLeistungen = [
  {
    icon: Crosshair,
    title: "Kurzschluss-Diagnose",
    desc: "Platinen-Kurzschlüsse präzise lokalisieren und beheben – von toten Ladekreisen bis zum kompletten Mainboard-Defekt.",
    tag: "Board-Level",
  },
  {
    icon: Cpu,
    title: "IC-Chip Austausch",
    desc: "BGA- und QFN-Chips werden unter dem Präzisionsmikroskop mit Heissluftstation gelötet und ersetzt.",
    tag: "BGA / QFN",
  },
  {
    icon: Battery,
    title: "Ladeport & Power-IC",
    desc: "Ladeprobleme auf Bauteil-Ebene: Tristar, Hydra, USB-IC und defekte Ladekreise reparieren wir – nicht ersetzen.",
    tag: "Platinen-Level",
  },
  {
    icon: Database,
    title: "Datenrettung Chip-Ebene",
    desc: "NAND- und eMMC-Speicherchips direkt auslesen – auch wenn das Gerät nicht mehr bootet oder der Bildschirm schwarz bleibt.",
    tag: "1–5 Tage",
  },
  {
    icon: Droplets,
    title: "Wasserschaden Platinen",
    desc: "Ultraschall-Reinigung, Korrosionsentfernung und direkter Bauteilersatz auf der Platine – nicht nur aussen reinigen.",
    tag: "Tiefenreinigung",
  },
  {
    icon: Monitor,
    title: "MacBook Logic Board",
    desc: "GPU-Ausfälle, Backlight-Fehler, Kurzschlüsse – wir reparieren MacBook- und Windows-Laptop-Platinen auf Bauteil-Ebene.",
    tag: "macOS / Windows",
  },
];

const mikroloetStats = [
  { val: "2021",   label: "Mikrolöten seit",          sub: "Spezialisiert auf Platinen-Reparaturen" },
  { val: "100×",   label: "Mikroskop-Vergr.",         sub: "Für feinste Lötreparaturen" },
  { val: "0.1mm",  label: "Lötpräzision",             sub: "Bei BGA & QFN-Bauteilen" },
  { val: "95%",    label: "Erfolgsrate",               sub: "Bei Platinen-Reparaturen" },
];

/* ─── PAGE ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      {/* VERKAUFSPSYCHOLOGIE: Headline adressiert den Hauptschmerzpunkt
          "unreparierbar" direkt. Kombination aus Empathie + Kompetenzversprechen.
          Subheadline verankert Expertise durch "seit 2021" + "IPC-zertifiziert".
          Primär-CTA gratis → senkt Hemmschwelle maximal. */}
      <section className="relative min-h-[100svh] flex items-center bg-grid overflow-hidden">
        {/* Hero background image – very faint through white overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-white/90 pointer-events-none" />
        {/* Subtile Hintergrund-Akzente */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Mikrolöt-Badge – Expertenpositionierung */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-primary text-xs font-bold mb-5 uppercase tracking-wide">
                <Zap className="w-3.5 h-3.5 text-brand-accent" />
                Mikrolöt-Spezialisten seit 2021 · IPC-zertifiziert
              </div>

              {/* HAUPTHEADLINE: direkte Ansprache des grössten Kundenproblems */}
              <h1 className="font-headline text-4xl sm:text-5xl xl:text-[3.75rem] leading-[1.0] text-brand-primary mb-5">
                Ihr Gerät gilt als{" "}
                <span className="text-brand-orange">unreparierbar?</span>
                <br />
                Wir reparieren,{" "}
                <span className="text-brand-accent">was andere aufgeben.</span>
              </h1>

              <p className="font-sans text-brand-gray text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Professionelle Smartphone- & Laptop-Reparaturen in Heimberg –
                günstiger als der Hersteller-Service, schneller als der Online-Versand.
                Mikrolöten, Datenrettung & mehr.
              </p>

              {/* VERKAUFSPSYCHOLOGIE: Primär-CTA kostenlos = kein Risiko für den Kunden.
                  Sekundär-CTA Outline = visuell weniger dominant → klare Hierarchie. */}
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Primär-CTA: #00D4AA, dunkle Schrift für WCAG AA */}
                <Link
                  href="/kontakt"
                  className="cta-btn gap-2 px-7 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02] shadow-lg shadow-brand-accent/20"
                >
                  Diagnose anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {/* Sekundär-CTA: Outline, weniger dominant */}
                <Link
                  href="/preisliste"
                  className="cta-btn gap-2 px-6 rounded-xl border-2 border-brand-primary text-brand-primary font-sans font-bold text-base hover:bg-brand-primary hover:text-white transition-all"
                >
                  Preise ansehen
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* VERKAUFSPSYCHOLOGIE: Trust-Bar direkt unter CTA (Nähe-Prinzip).
                  Jedes Element hebt eine andere Vertrauensdimension hervor. */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Diagnose kostenlos – entfällt bei Reparatur",
                  "6 Monate Garantie",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-sm text-brand-gray font-sans">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Info-Card rechts */}
            <div className="hidden lg:block">
              <HeroHoursCard />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BRAND MARQUEE ═════════════════════════════════════════════ */}
      <BrandMarquee />

      {/* ══ SERVICES ══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Was wir reparieren</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">Unsere Reparaturen</h2>
            <p className="mt-3 font-sans text-brand-gray max-w-xl mx-auto">
              Von der Express-Displayreparatur bis zur komplexen Platinen-Mikrolötung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, time, desc, accent }) => (
              <div
                key={title}
                className="group p-5 rounded-2xl bg-white border border-brand-border hover:border-brand-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-surface flex items-center justify-center mb-4 group-hover:bg-brand-accent/10 transition-colors">
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
                <h3 className="font-headline text-lg text-brand-primary mb-1">{title}</h3>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-surface text-brand-gray text-[10px] font-sans font-bold mb-2 uppercase">
                  <Clock className="w-2.5 h-2.5" />{time}
                </div>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leistungen" className="inline-flex items-center gap-2 font-sans font-bold text-brand-accent text-sm hover:gap-3 transition-all">
              Alle Reparaturen im Detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MIKROLÖTEN ════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-32 overflow-hidden section-dark">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-72 bg-brand-accent/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-72 bg-brand-orange/6 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/10 text-brand-accent text-xs font-bold mb-5 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              Unser Spezialgebiet · Selten im Grossraum Thun
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Mikrolöten –{" "}
              <span className="text-brand-accent">was andere ablehnen,</span>
              <br />
              reparieren wir.
            </h2>
            <p className="font-sans text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Platinen-Reparatur auf Bauteil-Ebene, unter dem Präzisionsmikroskop, IPC-zertifiziert.
              Kaum ein Anbieter im Grossraum Thun bietet dieses Niveau.
            </p>
          </div>

          {/* Capability grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {mikroloetLeistungen.map(({ icon: Icon, title, desc, tag }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 hover:bg-white/8 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-accent/15 flex items-center justify-center group-hover:bg-brand-accent/25 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-brand-accent/70 border border-brand-accent/20 rounded-md px-2 py-0.5">
                    {tag}
                  </span>
                </div>
                <h3 className="font-headline text-xl text-white mb-2">{title}</h3>
                <p className="font-sans text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-14">
            {[
              { src: "/images/mikroloet-chip-gold.jpg",    alt: "IC-Chip Mikrolöten – B-repair Heimberg" },
              { src: "/images/mikroloet-iphone-board.jpg", alt: "iPhone Logic Board unter dem Mikroskop" },
              { src: "/images/mikroloet-bga-chip.jpg",     alt: "BGA-Chip Platinen-Reparatur" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative h-60 sm:h-72 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-sans text-gray-500 text-xs uppercase tracking-widest whitespace-nowrap">
              Selten — weil aufwändig
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Bottom: explanation + stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-3xl sm:text-4xl text-white mb-4">
                Was ist Mikrolöten?
              </h3>
              <p className="font-sans text-gray-400 leading-relaxed mb-6">
                Mikrolöten (Microsoldering) bedeutet: Reparatur von Smartphone- und Laptop-Platinen
                auf Bauteil-Ebene. Einzelne Chips, Kondensatoren, Widerstände und Leiterbahnen
                werden unter einem Präzisionsmikroskop identifiziert, ausgelötet und ersetzt.
                Das erfordert spezielles Equipment, Zertifizierung und jahrelange Erfahrung –
                weshalb so wenige Anbieter dies wirklich beherrschen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Geräte reparieren, die andere Shops ablehnen",
                  "Daten retten, die verloren schienen",
                  "Günstiger als ein neues Gerät oder Platinentausch",
                  "IPC-zertifiziert – geprüfte Qualitätsstandards",
                  "Diagnose kostenlos – entfällt bei Reparatur bei uns",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="cta-btn gap-2 px-7 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02]"
              >
                Mikrolöt-Anfrage stellen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image + stats */}
            <div className="flex flex-col gap-4">
              <div className="relative h-56 rounded-2xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                <Image
                  src="/images/mikroloet-platinen.jpg"
                  alt="Mehrere Platinen bei der BGA-Reparatur – B-repair Werkstatt"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {mikroloetStats.map(({ val, label, sub }) => (
                  <div key={label} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="font-headline text-4xl sm:text-5xl text-brand-accent mb-1">{val}</div>
                    <div className="font-headline text-base text-white">{label}</div>
                    <div className="font-sans text-xs text-gray-400 mt-1">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══ PREISRECHNER ══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-y border-brand-border" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
              Preisrechner
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">
              Preis sofort berechnen
            </h2>
            <p className="font-sans text-brand-gray text-sm mt-2">
              In 3 Schritten zum geschätzten Reparaturpreis – direkt hier, ohne Umweg.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-border shadow-sm p-6 sm:p-10">
            <PreisrechnerWidget />
          </div>
        </div>
      </section>

      {/* ══ VERSANDSERVICE ════════════════════════════════════════════ */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-xl text-brand-primary mb-1">Versandservice – aus der ganzen Schweiz</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">
                  Sie müssen nicht persönlich vorbeikommen. Senden Sie Ihr Gerät versichert per Post ein –
                  wir reparieren es und schicken es schnell & sicher zurück. Für Kunden aus Zürich, Basel,
                  Genf oder woanders in der Schweiz.
                </p>
              </div>
              <Link
                href="/kontakt"
                className="cta-btn flex-shrink-0 gap-2 px-5 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow-sm"
              >
                Gerät einsenden
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROZESS ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 border-y border-brand-border" style={{ background: "#F4F5F7" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">So einfach geht&apos;s</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">In 4 Schritten zur Reparatur</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Vorbeikommen",         d: "Kein Termin nötig – einfach während den Öffnungszeiten." },
              { n: "02", t: "Kostenlose Diagnose",  d: "Wir prüfen Ihr Gerät und nennen den Fixpreis – entfällt bei Reparatur bei uns." },
              { n: "03", t: "Express-Reparatur",    d: "Die meisten Reparaturen in unter 2 Stunden abgeschlossen." },
              { n: "04", t: "Garantie geniessen",   d: "Gerät abholen und 6 Monate Garantie geniessen." },
            ].map(({ n, t, d }) => (
              <div key={n} className="p-5 rounded-2xl bg-white border border-brand-border shadow-sm">
                <div className="font-headline text-6xl text-brand-accent/20 mb-3 leading-none">{n}</div>
                <h3 className="font-headline text-base text-brand-primary mb-2 whitespace-nowrap">{t}</h3>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAPS ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* Map – 2/3 width */}
            <div className="lg:w-2/3 rounded-2xl overflow-hidden border border-brand-border shadow-sm flex-shrink-0" style={{ minHeight: 400 }}>
              <iframe
                src="https://maps.google.com/maps?q=Bürglenweg+24,+3627+Heimberg,+Schweiz&output=embed&hl=de"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="B-repair&service Standort"
              />
            </div>

            {/* Info blocks – 1/3 width */}
            <div className="lg:w-1/3 flex flex-col gap-4">

              {/* Block 1 – Adresse & Telefon */}
              <div className="flex-1 p-6 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <span className="font-headline text-xl text-brand-primary">Standort</span>
                </div>
                <p className="font-sans font-bold text-brand-primary text-base mb-1">B-repair&service</p>
                <p className="font-sans text-brand-gray text-sm mb-4">Bürglenweg 24, 3627 Heimberg</p>
                <a href="tel:+41764020306" className="inline-flex items-center gap-2 font-sans font-bold text-brand-primary text-base hover:text-brand-accent transition-colors">
                  <Phone className="w-4 h-4 text-brand-accent" />
                  +41 76 402 03 06
                </a>
              </div>

              {/* Block 2 – Öffnungszeiten */}
              <div className="flex-1 p-6 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span className="font-headline text-xl text-brand-primary">Öffnungszeiten</span>
                  </div>
                  <OpenStatus />
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Mo – Fr", time: "09:00 – 18:00" },
                    { day: "Samstag", time: "10:00 – 16:00" },
                    { day: "Sonntag", time: "Geschlossen" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-sm font-sans">
                      <span className="text-brand-gray">{day}</span>
                      <span className={time === "Geschlossen" ? "text-red-500 font-bold" : "text-brand-primary font-bold"}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Block 3 – Route planen */}
              <a
                href="https://maps.app.goo.gl/AUHeLXLo1wwJsYD6A"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn gap-2 px-6 rounded-2xl bg-brand-accent text-brand-primary font-sans font-bold text-base hover:bg-brand-accent-dark transition-all glow-sm"
              >
                <MapPin className="w-5 h-5" />
                Route planen
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ══ BEWERTUNGEN ═══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Google Bewertungen</span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-primary">Was Kunden sagen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 rounded-2xl border border-brand-border bg-white hover:border-brand-accent/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold font-sans text-sm flex-shrink-0`}>
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-sans font-bold text-brand-primary text-sm">{r.name}</div>
                    <div className="font-sans text-brand-gray text-xs">{r.ago}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="font-sans text-brand-gray text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ background: "#ECFEFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-2 block">Bereit?</span>
          <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-brand-primary mb-4">
            Kostenlose Diagnose.<br />
            <span className="text-brand-accent">Jetzt anfragen.</span>
          </h2>
          <p className="font-sans text-brand-gray text-lg mb-10 max-w-xl mx-auto">
            Diagnose kostenlos – entfällt bei Reparatur bei uns. Kein Termin nötig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+41764020306"
              className="cta-btn gap-2 px-8 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-lg hover:bg-brand-accent-dark transition-all glow hover:scale-[1.02]"
              aria-label="B-repair anrufen"
            >
              <Phone className="w-5 h-5" />
              +41 76 402 03 06
            </a>
            <a
              href="https://wa.me/41764020306?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Reparatur%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn gap-2 px-8 rounded-xl text-white font-sans font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02]"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp schreiben
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs font-sans text-brand-gray">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-accent" /> Mo–Fr 09–18 · Sa 10–16</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-accent" /> Bürglenweg 24, Heimberg</span>
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-brand-accent" /> 6 Monate Garantie</span>
          </div>
        </div>
      </section>
    </>
  );
}
