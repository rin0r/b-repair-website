import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, ArrowRight, Phone } from "lucide-react";
import { articles, getArticle } from "@/lib/blogData";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title:       `${article.title} | B-repair&service Blog`,
    description: article.excerpt,
  };
}

const categoryColor: Record<string, string> = {
  "Reparatur-Tipps": "bg-brand-accent/10 text-brand-accent border-brand-accent/30",
  "Technik":         "bg-brand-orange/10 text-brand-orange border-brand-orange/30",
  "Erste Hilfe":     "bg-blue-50 text-blue-600 border-blue-200",
  "Lokal":           "bg-purple-50 text-purple-600 border-purple-200",
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-10 lg:pt-36 lg:pb-12" style={{ background: "#F8FAFB" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-sans font-bold text-brand-gray hover:text-brand-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold font-sans ${categoryColor[article.category] ?? "bg-brand-surface text-brand-gray border-brand-border"}`}>
              <Tag className="w-3 h-3" />{article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-brand-gray font-sans">
              <Clock className="w-3 h-3" /> {article.readMin} Min Lesezeit · {article.date}
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl text-brand-primary leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-brand-gray text-lg leading-relaxed mb-8 border-l-4 border-brand-accent pl-5 italic">
            {article.excerpt}
          </p>

          {article.content.map((block, i) => {
            if (block.type === "p") {
              return (
                <p key={i} className="font-sans text-brand-gray leading-relaxed mb-5 text-base">
                  {block.text}
                </p>
              );
            }
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-headline text-3xl text-brand-primary mt-10 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3 key={i} className="font-headline text-2xl text-brand-primary mt-7 mb-3">
                  {block.text}
                </h3>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-2 mb-6 ml-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 font-sans text-brand-gray text-base">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} className="overflow-x-auto rounded-xl border border-brand-border mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand-surface border-b border-brand-border">
                        {block.headers.map((h) => (
                          <th key={h} className="px-4 py-3 text-left font-sans font-bold text-brand-gray text-xs uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className={`border-b border-brand-border/60 ${ri % 2 === 0 ? "bg-white" : "bg-brand-surface/40"}`}>
                          {row.map((cell, ci) => (
                            <td key={ci} className={`px-4 py-3 font-sans text-sm ${ci === 0 ? "font-bold text-brand-primary" : ci === 1 ? "text-brand-accent font-bold font-price" : "text-brand-gray"}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return null;
          })}

          {/* CTA */}
          <div className="mt-12 p-7 rounded-2xl bg-brand-accent/5 border border-brand-accent/20">
            <h3 className="font-headline text-2xl text-brand-primary mb-2">Fragen? Wir helfen.</h3>
            <p className="font-sans text-brand-gray text-sm mb-5">
              Diagnose kostenlos – entfällt bei Reparatur bei uns. Einfach vorbeikommen, kein Termin nötig.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="cta-btn gap-2 px-5 rounded-xl bg-brand-accent text-brand-primary font-sans font-bold text-sm hover:bg-brand-accent-dark transition-all glow-sm"
              >
                Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+41764020306"
                className="cta-btn gap-2 px-5 rounded-xl border border-brand-border text-brand-gray font-sans font-bold text-sm hover:bg-brand-surface transition-colors"
              >
                <Phone className="w-4 h-4" /> +41 76 402 03 06
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Other articles */}
      <section className="py-14 border-t border-brand-border" style={{ background: "#F8FAFB" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-headline text-2xl text-brand-primary mb-6">Weitere Artikel</h3>
          <div className="space-y-3">
            {articles.filter((a) => a.slug !== article.slug).slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-brand-border hover:border-brand-accent/40 hover:shadow-sm transition-all group"
              >
                <span className="font-sans font-bold text-brand-primary text-sm group-hover:text-brand-accent transition-colors">
                  {a.title}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-accent flex-shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
