import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { articles } from "@/lib/blogData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Reparatur-Tipps & Technik | B-repair&service",
  description: "Experten-Tipps rund um Smartphone-Reparatur, Mikrolöten, Wasserschäden und mehr. Von den IPC-zertifizierten Spezialisten aus Heimberg / Thun.",
};

const categoryColor: Record<string, string> = {
  "Reparatur-Tipps": "bg-brand-accent/10 text-brand-accent border-brand-accent/30",
  "Technik":         "bg-brand-orange/10 text-brand-orange border-brand-orange/30",
  "Erste Hilfe":     "bg-blue-50 text-blue-600 border-blue-200",
  "Lokal":           "bg-purple-50 text-purple-600 border-purple-200",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-16" style={{ background: "#F8FAFB" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans text-brand-accent text-xs font-bold uppercase tracking-[0.15em] mb-3 block">
            Wissen & Tipps
          </span>
          <h1 className="font-headline text-5xl sm:text-6xl text-brand-primary mb-4">
            Der B-repair Blog
          </h1>
          <p className="font-sans text-brand-gray text-lg max-w-xl mx-auto">
            Reparatur-Tipps, Technik-Erklärungen und Ratgeber rund ums Smartphone –
            von unseren IPC-zertifizierten Spezialisten.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured article */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-10 rounded-3xl border border-brand-border bg-white hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold font-sans ${categoryColor[featured.category] ?? "bg-brand-surface text-brand-gray border-brand-border"}`}>
                  <Tag className="w-3 h-3" />{featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-brand-gray font-sans">
                  <Clock className="w-3 h-3" /> {featured.readMin} Min Lesezeit · {featured.date}
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">
                {featured.title}
              </h2>
              <p className="font-sans text-brand-gray leading-relaxed mb-5 max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-sans font-bold text-brand-accent text-sm group-hover:gap-3 transition-all">
                Artikel lesen <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Remaining articles 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-border bg-white hover:border-brand-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold font-sans ${categoryColor[article.category] ?? "bg-brand-surface text-brand-gray border-brand-border"}`}>
                    <Tag className="w-3 h-3" />{article.category}
                  </span>
                </div>
                <h2 className="font-headline text-2xl text-brand-primary mb-2 group-hover:text-brand-accent transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="font-sans text-brand-gray text-sm leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-gray font-sans flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readMin} Min · {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans font-bold text-brand-accent text-sm group-hover:gap-2 transition-all">
                    Lesen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
