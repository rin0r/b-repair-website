import PreisrechnerWidget from "@/components/PreisrechnerWidget";

export default function PreisrechnerPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-surface">
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="text-center mb-8">
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] block mb-2">
            Preisrechner
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl text-brand-primary">
            Preis berechnen
          </h1>
          <p className="font-sans text-brand-gray text-sm mt-2">
            In 3 Schritten zum geschätzten Reparaturpreis
          </p>
        </div>

        <PreisrechnerWidget />

      </div>
    </div>
  );
}
