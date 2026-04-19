import type { PopularItem } from "@/lib/repairData";

export default function BrandPriceTable({ items }: { items: PopularItem[] }) {
  return (
    <div>
      {/* Table card */}
      <div className="rounded-2xl border border-brand-border bg-white overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-brand-surface border-b border-brand-border">
              <th className="text-left px-6 py-4 font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray w-1/2">
                Modell
              </th>
              <th className="text-left px-6 py-4 font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray">
                Reparatur
              </th>
              <th className="text-right px-6 py-4 font-sans font-bold text-[11px] uppercase tracking-[0.12em] text-brand-gray whitespace-nowrap">
                Preis
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={i}
                className={i < items.length - 1 ? "border-b border-brand-border" : ""}
              >
                <td className="px-6 py-5 font-sans font-bold text-brand-primary text-sm sm:text-base">
                  {item.model}
                </td>
                <td className="px-6 py-5 font-sans text-brand-gray text-sm sm:text-base">
                  {item.repair}
                </td>
                <td className="px-6 py-5 text-right whitespace-nowrap font-sans font-bold text-base sm:text-lg text-brand-accent">
                  {item.from && (
                    <span className="text-sm font-normal mr-0.5">ab </span>
                  )}
                  {item.price === "Gratis" || item.price === "Auf Anfrage" ? (
                    <span className={item.price === "Gratis" ? "text-brand-accent" : "text-brand-gray text-sm font-normal"}>
                      {item.price}
                    </span>
                  ) : (
                    item.price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <p className="mt-3 text-center font-sans text-[11px] text-brand-gray/70">
        Alle Preise inkl. MwSt. · Finaler Preis wird im Shop bestätigt
      </p>
    </div>
  );
}
