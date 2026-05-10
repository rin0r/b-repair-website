import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | B-repair&service",
  description: "Datenschutzerklärung von B-repair&service gemäss nDSG (Schweiz) und DSGVO.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-headline text-2xl text-brand-primary mb-3">{title}</h2>
      <div className="font-sans text-brand-gray text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="font-headline text-5xl text-brand-primary mb-2">Datenschutzerklärung</h1>
        <p className="font-sans text-brand-gray text-sm mb-12">
          Gemäss neuem Schweizer Datenschutzgesetz (nDSG, in Kraft seit 01.09.2023) sowie der EU-Datenschutz-Grundverordnung (DSGVO), soweit anwendbar. Stand: Mai 2025.
        </p>

        <Section title="1. Verantwortliche Person">
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <div className="bg-brand-surface rounded-xl p-4 text-brand-primary">
            <strong>Bestar Zenelaj</strong><br />
            B-Repair (Einzelunternehmen)<br />
            Bürglenweg 24, 3627 Heimberg, Schweiz<br />
            <a href="tel:+41764020306" className="text-brand-accent hover:underline">+41 76 402 03 06</a><br />
            <a href="mailto:info@b-repair.ch" className="text-brand-accent hover:underline">info@b-repair.ch</a>
          </div>
        </Section>

        <Section title="2. Welche Daten wir erheben und warum">
          <p><strong className="text-brand-primary">a) Server-Logs (Websitebesuch)</strong></p>
          <p>
            Beim Aufruf dieser Website speichert unser Hosting-Anbieter Vercel Inc. technisch notwendige Daten in Server-Logfiles: IP-Adresse (anonymisiert), Browsertyp, Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs, aufgerufene Seite.
          </p>
          <p>
            <strong className="text-brand-primary">Zweck:</strong> Technischer Betrieb und Sicherheit der Website.<br />
            <strong className="text-brand-primary">Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 31 nDSG / Art. 6 Abs. 1 lit. f DSGVO).<br />
            <strong className="text-brand-primary">Speicherdauer:</strong> Maximal 30 Tage, danach automatische Löschung.
          </p>

          <p className="mt-2"><strong className="text-brand-primary">b) Kontaktformular</strong></p>
          <p>
            Wenn Sie das Kontaktformular ausfüllen, erheben wir Name, E-Mail-Adresse, Telefonnummer (optional), Gerätebeschreibung und Ihre Nachricht. Diese Daten werden über den Dienst Formspree (Formspree Inc., USA) übermittelt und per E-Mail an uns weitergeleitet.
          </p>
          <p>
            <strong className="text-brand-primary">Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme.<br />
            <strong className="text-brand-primary">Rechtsgrundlage:</strong> Vertragsanbahnung bzw. Ihre Einwilligung (Art. 6 Abs. 1 lit. b/a DSGVO).<br />
            <strong className="text-brand-primary">Speicherdauer:</strong> Bis zur vollständigen Erledigung Ihrer Anfrage, maximal 2 Jahre.
          </p>

          <p className="mt-2"><strong className="text-brand-primary">c) Cookies</strong></p>
          <p>
            Diese Website verwendet keine Tracking- oder Marketing-Cookies. Vercel kann technisch notwendige Session-Cookies setzen, die nach dem Schliessen des Browsers automatisch gelöscht werden. Es werden keine Cookies für Analyse- oder Werbezwecke eingesetzt.
          </p>
        </Section>

        <Section title="3. Eingesetzte Drittanbieter">
          <div className="overflow-x-auto rounded-xl border border-brand-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="px-4 py-3 text-left font-bold text-brand-primary text-xs uppercase tracking-wider">Anbieter</th>
                  <th className="px-4 py-3 text-left font-bold text-brand-primary text-xs uppercase tracking-wider">Zweck</th>
                  <th className="px-4 py-3 text-left font-bold text-brand-primary text-xs uppercase tracking-wider">Sitz</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr>
                  <td className="px-4 py-3 font-semibold text-brand-primary">Vercel Inc.</td>
                  <td className="px-4 py-3 text-brand-gray">Website-Hosting & Auslieferung</td>
                  <td className="px-4 py-3 text-brand-gray">USA</td>
                </tr>
                <tr className="bg-brand-surface/40">
                  <td className="px-4 py-3 font-semibold text-brand-primary">Formspree Inc.</td>
                  <td className="px-4 py-3 text-brand-gray">Kontaktformular-Verarbeitung</td>
                  <td className="px-4 py-3 text-brand-gray">USA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Datenübertragung ins Ausland">
          <p>
            Vercel Inc. und Formspree Inc. haben ihren Sitz in den USA. Die Datenübertragung erfolgt auf Basis von Standardvertragsklauseln (SCC) der Europäischen Kommission sowie dem Swiss-US Data Privacy Framework. Beide Anbieter haben entsprechende Datenschutzvereinbarungen (DPA) unterzeichnet.
          </p>
          <p>
            Weitere Informationen finden Sie in den Datenschutzrichtlinien der jeweiligen Anbieter:
            Vercel (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">vercel.com/legal/privacy-policy</a>) und
            Formspree (<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">formspree.io/legal/privacy-policy</a>).
          </p>
        </Section>

        <Section title="5. Ihre Rechte">
          <p>Gemäss nDSG (Art. 25 ff.) und DSGVO haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="space-y-1.5 ml-1">
            {[
              ["Auskunftsrecht", "Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen."],
              ["Berichtigungsrecht", "Sie haben das Recht, unrichtige Daten berichtigen zu lassen."],
              ["Löschungsrecht", "Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht."],
              ["Einschränkung", "Sie können die Einschränkung der Verarbeitung verlangen."],
              ["Datenübertragbarkeit", "Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten."],
              ["Widerspruchsrecht", "Sie können der Datenverarbeitung auf Basis berechtigter Interessen jederzeit widersprechen."],
              ["Beschwerderecht", "Sie können sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) beschweren."],
            ].map(([right, desc]) => (
              <li key={right} className="flex gap-2">
                <span className="text-brand-accent mt-0.5 flex-shrink-0">–</span>
                <span><strong className="text-brand-primary">{right}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:info@b-repair.ch" className="text-brand-accent hover:underline">info@b-repair.ch</a> (Bestar Zenelaj).
          </p>
        </Section>

        <Section title="6. Datensicherheit">
          <p>
            Diese Website wird über HTTPS ausgeliefert. Die Datenübertragung zwischen Ihrem Browser und unserem Server ist verschlüsselt. Wir treffen technische und organisatorische Massnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
          </p>
        </Section>

        <Section title="7. Änderungen dieser Datenschutzerklärung">
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser Seite abrufbar. Bei wesentlichen Änderungen informieren wir Sie über die Website.
          </p>
        </Section>

        <div className="pt-6 border-t border-brand-border flex flex-wrap gap-6 items-center">
          <Link href="/" className="font-sans text-sm text-brand-accent hover:underline">
            ← Zurück zur Startseite
          </Link>
          <Link href="/impressum" className="font-sans text-sm text-brand-gray hover:text-brand-accent transition-colors">
            Impressum →
          </Link>
        </div>

      </div>
    </section>
  );
}
