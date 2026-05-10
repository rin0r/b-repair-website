import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | B-repair&service",
  description: "Impressum und rechtliche Angaben von B-repair&service, Heimberg.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="font-headline text-5xl text-brand-primary mb-2">Impressum</h1>
        <p className="font-sans text-brand-gray text-sm mb-12">Angaben gemäss Art. 3 UWG und Art. 944 OR</p>

        {/* Unternehmensangaben */}
        <div className="mb-10">
          <h2 className="font-headline text-2xl text-brand-primary mb-4">Unternehmensangaben</h2>
          <table className="w-full text-sm font-sans">
            <tbody className="divide-y divide-brand-border">
              {[
                ["Firma",            "B-Repair"],
                ["Rechtsform",       "Einzelunternehmen"],
                ["Inhaber",          "Bestar Zenelaj"],
                ["Adresse",          "Bürglenweg 24, 3627 Heimberg, Schweiz"],
                ["UID",              "CHE-282.605.618"],
                ["MWST-Nummer",      "CHE-282.605.618 MWST"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="py-3 pr-6 text-brand-gray font-semibold w-40">{label}</td>
                  <td className="py-3 text-brand-primary">{value}</td>
                </tr>
              ))}
              <tr>
                <td className="py-3 pr-6 text-brand-gray font-semibold">Telefon</td>
                <td className="py-3">
                  <a href="tel:+41764020306" className="text-brand-accent hover:underline">+41 76 402 03 06</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-brand-gray font-semibold">E-Mail</td>
                <td className="py-3">
                  <a href="mailto:info@b-repair.ch" className="text-brand-accent hover:underline">info@b-repair.ch</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Haftungsausschluss */}
        <div className="mb-10">
          <h2 className="font-headline text-2xl text-brand-primary mb-3">Haftungsausschluss</h2>
          <p className="font-sans text-brand-gray text-sm leading-relaxed mb-3">
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. B-repair&service übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr.
          </p>
          <p className="font-sans text-brand-gray text-sm leading-relaxed">
            Für externe Links zu fremden Webseiten übernimmt B-repair&service keine Haftung. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
          </p>
        </div>

        {/* Urheberrecht */}
        <div className="mb-10">
          <h2 className="font-headline text-2xl text-brand-primary mb-3">Urheberrecht</h2>
          <p className="font-sans text-brand-gray text-sm leading-relaxed">
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem Schweizer Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der ausdrücklichen schriftlichen Zustimmung von B-repair&service.
          </p>
        </div>

        {/* Datenschutz */}
        <div className="mb-12">
          <h2 className="font-headline text-2xl text-brand-primary mb-3">Datenschutz</h2>
          <p className="font-sans text-brand-gray text-sm leading-relaxed mb-3">
            Der Betrieb dieser Website erfolgt unter Einhaltung des Schweizer Datenschutzgesetzes (DSG) sowie der Europäischen Datenschutz-Grundverordnung (DSGVO), soweit anwendbar.
          </p>
          <p className="font-sans text-brand-gray text-sm leading-relaxed mb-3">
            Beim Besuch dieser Website werden technisch notwendige Daten (Server-Logs) gespeichert. Über das Kontaktformular übermittelte Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
          </p>
          <p className="font-sans text-brand-gray text-sm leading-relaxed">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Anfragen richten Sie bitte an{" "}
            <a href="mailto:info@b-repair.ch" className="text-brand-accent hover:underline">info@b-repair.ch</a>.
          </p>
        </div>

        <div className="pt-6 border-t border-brand-border">
          <Link href="/" className="font-sans text-sm text-brand-accent hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>

      </div>
    </section>
  );
}
