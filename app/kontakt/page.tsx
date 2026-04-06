"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const openingHours = [
  { day: "Montag", time: "09:00 – 18:30" },
  { day: "Dienstag", time: "09:00 – 18:30" },
  { day: "Mittwoch", time: "09:00 – 18:30" },
  { day: "Donnerstag", time: "09:00 – 18:30" },
  { day: "Freitag", time: "09:00 – 18:30" },
  { day: "Samstag", time: "10:00 – 16:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function KontaktPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    problem: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all text-sm";

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-grid relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center gap-2 text-sm text-brand-muted mb-4">
            <Link href="/" className="hover:text-brand-accent transition-colors">Start</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-text">Kontakt</span>
          </nav>
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Wir helfen gerne
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-brand-text leading-tight">
            Kontakt
          </h1>
          <p className="mt-4 text-brand-muted text-lg max-w-xl">
            Haben Sie eine Frage oder möchten Sie eine Reparatur anfragen? Kontaktieren Sie uns – wir antworten schnell.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar Info */}
            <div className="space-y-5">
              {/* Contact Cards */}
              <a
                href="tel:+41764020306"
                className="flex items-center gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted mb-0.5">Telefon</div>
                  <div className="font-semibold text-brand-text">+41 76 402 03 06</div>
                </div>
              </a>

              <a
                href="mailto:info@b-repair.ch"
                className="flex items-center gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted mb-0.5">E-Mail</div>
                  <div className="font-semibold text-brand-text">info@b-repair.ch</div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted mb-0.5">Adresse</div>
                  <div className="font-semibold text-brand-text">
                    Bürglenweg 24<br />3627 Heimberg
                  </div>
                </div>
              </a>

              {/* Öffnungszeiten */}
              <div className="p-5 rounded-2xl bg-brand-card border border-brand-border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span className="font-semibold text-brand-text text-sm">Öffnungszeiten</span>
                </div>
                <ul className="space-y-2">
                  {openingHours.map(({ day, time }) => {
                    const closed = time === "Geschlossen";
                    return (
                      <li key={day} className="flex justify-between text-xs">
                        <span className="text-brand-muted">{day}</span>
                        <span className={closed ? "text-red-400" : "text-brand-text font-medium"}>
                          {time}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-2xl bg-brand-card border border-brand-border overflow-hidden h-44 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Bürglenweg+24+3627+Heimberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors"
                >
                  <MapPin className="w-8 h-8" />
                  <span className="text-sm font-medium">Auf Google Maps öffnen</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-7 sm:p-8 rounded-2xl bg-brand-card border border-brand-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h2 className="font-bold text-brand-text">Reparaturanfrage</h2>
                    <p className="text-brand-muted text-xs mt-0.5">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-text">Anfrage gesendet!</h3>
                    <p className="text-brand-muted max-w-sm">
                      Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", device: "", problem: "", message: "" }); }}
                      className="mt-2 text-sm text-brand-accent hover:underline"
                    >
                      Neue Anfrage senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-brand-muted mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Max Mustermann"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-muted mb-1.5">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="max@beispiel.ch"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-brand-muted mb-1.5">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+41 76 000 00 00"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-brand-muted mb-1.5">
                          Gerät / Modell *
                        </label>
                        <input
                          type="text"
                          name="device"
                          value={form.device}
                          onChange={handleChange}
                          required
                          placeholder="z.B. iPhone 14 Pro"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-brand-muted mb-1.5">
                        Art des Problems *
                      </label>
                      <select
                        name="problem"
                        value={form.problem}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="" disabled>Problem auswählen…</option>
                        <option value="display">Displayschaden / Gesprungenes Glas</option>
                        <option value="akku">Akku / Ladeprobleme</option>
                        <option value="kamera">Kamerafehler</option>
                        <option value="software">Software / System</option>
                        <option value="wasser">Wasserschaden</option>
                        <option value="audio">Mikrofon / Lautsprecher</option>
                        <option value="gehaeuse">Gehäuse / Mechanik</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-brand-muted mb-1.5">
                        Beschreibung des Problems
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Bitte beschreiben Sie das Problem möglichst genau…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <div className="flex items-start gap-2 text-xs text-brand-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>Ihre Daten werden vertraulich behandelt und nicht weitergegeben.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-white font-semibold hover:bg-brand-accent-dark transition-all glow disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Wird gesendet…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Anfrage absenden
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
