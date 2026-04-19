import type { PopularItem } from "@/lib/repairData";

export default function BrandPriceTable({ items }: { items: PopularItem[] }) {
  return (
    <div>
      {/* Table card */}
      <div className="rounded-2xl border border-brand-border bg-white overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_auto] px-6 py-4 bg-brand-surface border-b border-brand-border">
          <span className="font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray">Modell</span>
          <span className="font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray">Reparatur</span>
          <span className="font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray text-right">Preis</span>
        </div>

        {/* Rows */}
        {items.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_1fr_auto] items-center px-6 py-5 ${
              i < items.length - 1 ? "border-b border-brand-border" : ""
            }`}
          >
            <span className="font-sans font-bold text-brand-primary text-sm sm:text-base pr-4">
              {item.model}
            </span>
            <span className="font-sans text-brand-gray text-sm sm:text-base pr-4">
              {item.repair}
            </span>
            <span
              className={`font-sans font-bold text-right whitespace-nowrap text-base sm:text-lg ${
                item.price === "Gratis"
                  ? "text-brand-accent"
                  : item.price === "Auf Anfrage"
                  ? "text-brand-gray text-sm"
                  : "text-brand-accent"
              }`}
            >
              {item.from && (
                <span className="text-sm font-normal mr-0.5">ab </span>
              )}
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-3 text-center font-sans text-[11px] text-brand-gray/70">
        Alle Preise inkl. MwSt. · Finaler Preis wird im Shop bestätigt
      </p>
    </div>
  );
}
