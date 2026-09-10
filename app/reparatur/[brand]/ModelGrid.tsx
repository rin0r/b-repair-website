import fs from "fs";
import path from "path";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getModelGroups, hatSerienauswahl, modelSlug, prettyPrice, hasPrice } from "@/lib/repairData";
import SeriesPicker, { type Serie } from "./SeriesPicker";

/* Eigenes Foto unter public/models/<slug>.<ext> – wie auf der Modellseite. */
function findPhoto(slug: string): string | undefined {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const rel = `/models/${slug}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  }
  return undefined;
}

const kurzLabel = (label: string) => label.replace(/-Serie$/, "");

export default function ModelGrid({ brandKey }: { brandKey: string }) {
  const groups = getModelGroups(brandKey);

  if (hatSerienauswahl(brandKey)) {
    const series: Serie[] = groups.map((group) => {
      const rows = group.rows.map((row) => ({
        model: row.model,
        slug: modelSlug(row.model),
        ab: hasPrice(row.displayPremium) ? prettyPrice(row.displayPremium) : null,
      }));
      return {
        label: group.label,
        kurz: kurzLabel(group.label),
        cover: rows.map((r) => findPhoto(r.slug)).find(Boolean),
        rows,
      };
    });
    return <SeriesPicker brandKey={brandKey} series={series} />;
  }

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
                    {hasPrice(row.displayPremium) ? (
                      <>
                        Display ab{" "}
                        <span className="text-brand-accent font-bold">{prettyPrice(row.displayPremium)}</span>
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
