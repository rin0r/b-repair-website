"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Wrench, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preisliste", label: "Preisliste" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-surface/95 backdrop-blur-md border-b border-brand-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center glow-sm group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              B-repair<span className="text-brand-accent">&</span>service
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-brand-accent bg-brand-accent/10"
                      : "text-brand-muted hover:text-brand-text hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+41764020306"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-accent text-white text-sm font-semibold hover:bg-brand-accent-dark transition-colors glow-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">+41 76 402 03 06</span>
              <span className="md:hidden">Anrufen</span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-brand-muted hover:text-brand-text hover:bg-white/5 transition-colors"
              aria-label="Menü"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-brand-border bg-brand-surface/98 backdrop-blur-md -mx-4 sm:-mx-6 px-4 sm:px-6 pb-4">
            <div className="pt-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "text-brand-accent bg-brand-accent/10"
                        : "text-brand-muted hover:text-brand-text hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="tel:+41764020306"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-accent text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                +41 76 402 03 06
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
