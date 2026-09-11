import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Produktiv-Domain. Beide Deployments (Hostinger + Vercel) verweisen
   kanonisch hierher, damit Google die Kopie nicht als Original wertet. */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://b-repair.ch").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // "./" löst Next pro Route auf – jede Seite bekommt ihre eigene Adresse.
  alternates: { canonical: "./" },
  title: "B-repair&service | Smartphone Reparatur Heimberg – Fertig in 2h",
  description:
    "Professionelle Smartphone- & Tablet-Reparaturen in Heimberg bei Thun. Display, Akku, Mikrolöten, Datenrettung. Fertig in 2 Stunden. 6 Monate Garantie. Fixpreise ohne Überraschungen.",
  keywords:
    "Smartphone Reparatur Heimberg, Handy Reparatur Thun, iPhone Reparatur Bern, Samsung Display Reparatur, Mikrolöten, Datenrettung, Akku Wechsel",
  // Das Logo hat helle Flächen, deshalb liegt es im Icon auf dunklem Grund –
  // sonst verschwindet es im hellen Browser-Tab.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
      </body>
    </html>
  );
}
