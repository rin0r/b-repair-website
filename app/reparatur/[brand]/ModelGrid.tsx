import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getModelGroups, modelSlug, prettyPrice, hasPrice } from "@/lib/repairData";

export default function ModelGrid({ brandKey }: { brandKey: string }) {
  const groups = getModelGroups(brandKey);

  return (
    <div className="space-y-9">
      {groups.map((group) => (
        <div key={group.label}>
          <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-brand-gray mb-3 flex items-center gap-3">
            {group.label}
            <span className="h-px flex-1 bg-brand-border" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {group.rows.map((row) => (
              <Link
                key={row.model}
                href={`/reparatur/${brandKey}/${modelSlug(row.model)}`}
                className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl bg-white border border-brand-border hover:border-brand-accent hover:shadow-md transition-all"
              >
                <span className="min-w-0">
                  <span className="block font-sans font-bold text-brand-primary text-sm truncate">
                    {row.model}
                  </span>
                  <span className="block font-sans text-xs text-brand-gray mt-0.5">
                    {hasPrice(row.display) ? (
                      <>
                        Display ab{" "}
                        <span className="text-brand-accent font-bold">{prettyPrice(row.display)}</span>
                      </>
                    ) : (
                      "Preis auf Anfrage"
                    )}
                  </span>
                </span>
                <ChevronRight className="w-4 h-4 text-brand-gray group-hover:text-brand-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
