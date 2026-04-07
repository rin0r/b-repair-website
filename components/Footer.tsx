import Link from "next/link";
import { Wrench, Phone, MapPin, Mail, Clock } from "lucide-react";

const navLinks = [
  { href: "/leistungen",  label: "Reparaturen" },
  { href: "/preisliste",  label: "Preise & Garantie" },
  { href: "/ueber-uns",   label: "Über uns & Team" },
  { href: "/kontakt",     label: "Anfrage starten" },
];

const services = [
  "Display-Reparatur",
  "Akku-Austausch",
  "Mikrolöten",
  "Datenrettung",
  "Wasserschaden",
  "Computer & Laptop",
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-accent flex items-center justify-center">
                <Wrench className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="leading-none">
                <span className="font-headline text-lg text-white">B-repair<span className="text-brand-accent">&</span>service</span>
                <div className="text-[10px] font-sans" style={{ color: "#6B8099" }}>Heimberg · Thun</div>
              </div>
            </Link>
            <p className="font-sans text-xs leading-relaxed mb-4" style={{ color: "#8899AA" }}>
              Professionelle Smartphone- & Laptop-Reparaturen. Schnell, zuverlässig, transparent – mit 6 Monaten Garantie.
            </p>
            {/* WhatsApp im Footer */}
            <a
              href="https://wa.me/41764020306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-white text-xs font-sans font-bold hover:opacity-90 transition-opacity"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-sans font-bold mb-4 text-xs uppercase tracking-wider">Reparaturen</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/leistungen" className="font-sans text-xs hover:text-brand-accent transition-colors" style={{ color: "#8899AA" }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-sans font-bold mb-4 text-xs uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-xs hover:text-brand-accent transition-colors" style={{ color: "#8899AA" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt + Öffnungszeiten */}
          <div>
            <h3 className="text-white font-sans font-bold mb-4 text-xs uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3 mb-6">
              <li>
                {/* WCAG AA: tel: Link für direktes Anrufen auf Mobile */}
                <a href="tel:+41764020306" className="flex items-center gap-2 text-xs font-sans hover:text-brand-accent transition-colors" style={{ color: "#8899AA" }}>
                  <Phone className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  +41 76 402 03 06
                </a>
              </li>
              <li>
                <a href="mailto:info@b-repair.ch" className="flex items-center gap-2 text-xs font-sans hover:text-brand-accent transition-colors" style={{ color: "#8899AA" }}>
                  <Mail className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  info@b-repair.ch
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs font-sans hover:text-brand-accent transition-colors" style={{ color: "#8899AA" }}>
                  <MapPin className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>Bürglenweg 24<br />3627 Heimberg</span>
                </a>
              </li>
            </ul>
            <h3 className="text-white font-sans font-bold mb-3 text-xs uppercase tracking-wider">Öffnungszeiten</h3>
            <ul className="space-y-1.5">
              {[
                { d: "Mo – Fr", t: "09:00 – 18:30" },
                { d: "Samstag", t: "10:00 – 16:00" },
                { d: "Sonntag", t: "Geschlossen" },
              ].map(({ d, t }) => (
                <li key={d} className="flex items-center gap-2 text-[11px] font-sans">
                  <Clock className="w-3 h-3 text-brand-accent flex-shrink-0" />
                  <span className="w-16" style={{ color: "#8899AA" }}>{d}</span>
                  <span className={t === "Geschlossen" ? "text-red-400" : "text-white font-bold"}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px]" style={{ color: "#6B8099" }}>
            © {new Date().getFullYear()} B-repair&service. Alle Rechte vorbehalten.
          </p>
          <p className="font-sans text-[11px]" style={{ color: "#6B8099" }}>
            Bürglenweg 24, 3627 Heimberg · Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
}
