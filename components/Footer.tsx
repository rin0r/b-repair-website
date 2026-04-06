import Link from "next/link";
import { Wrench, Phone, MapPin, Mail, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preisliste", label: "Preisliste" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">
                B-repair<span className="text-brand-accent">&</span>service
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed">
              Professionelle Smartphone- und Tablet-Reparaturen in Heimberg. Schnell, zuverlässig und zu fairen Preisen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41764020306"
                  className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  +41 76 402 03 06
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@b-repair.ch"
                  className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  info@b-repair.ch
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-brand-muted text-sm hover:text-brand-accent transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>
                    Bürglenweg 24<br />
                    3627 Heimberg
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-brand-text font-semibold mb-4 text-sm uppercase tracking-wider">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2">
              {[
                { day: "Mo – Fr", time: "09:00 – 18:30" },
                { day: "Samstag", time: "10:00 – 16:00" },
                { day: "Sonntag", time: "Geschlossen" },
              ].map(({ day, time }) => (
                <li key={day} className="flex items-center gap-2 text-sm">
                  <Clock className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                  <span className="text-brand-muted w-20">{day}</span>
                  <span
                    className={
                      time === "Geschlossen" ? "text-red-400" : "text-brand-text"
                    }
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} B-repair&service. Alle Rechte vorbehalten.
          </p>
          <p className="text-brand-muted text-xs">
            Bürglenweg 24, 3627 Heimberg, Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
}
