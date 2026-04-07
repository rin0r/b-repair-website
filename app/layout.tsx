import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "B-repair&service | Smartphone Reparatur Heimberg – Fertig in 2h",
  description:
    "Professionelle Smartphone- & Tablet-Reparaturen in Heimberg bei Thun. Display, Akku, Mikrolöten, Datenrettung. Fertig in 2 Stunden. 6 Monate Garantie. Kostenlose Diagnose.",
  keywords:
    "Smartphone Reparatur Heimberg, Handy Reparatur Thun, iPhone Reparatur Bern, Samsung Display Reparatur, Mikrolöten, Datenrettung, Akku Wechsel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
