const brands = [
  {
    name: "Apple",
    src: "https://cdn.simpleicons.org/apple/252B36",
  },
  {
    name: "Samsung",
    src: "https://cdn.simpleicons.org/samsung/1428A0",
  },
  {
    name: "Huawei",
    src: "https://cdn.simpleicons.org/huawei/CF0A2C",
  },
  {
    name: "Google Pixel",
    src: "https://cdn.simpleicons.org/google/4285F4",
  },
  {
    name: "Xiaomi",
    src: "https://cdn.simpleicons.org/xiaomi/FF6900",
  },
  {
    name: "OnePlus",
    src: "https://cdn.simpleicons.org/oneplus/EB0028",
  },
  {
    name: "Sony",
    src: "https://cdn.simpleicons.org/sony/000000",
  },
  {
    name: "Motorola",
    src: "https://cdn.simpleicons.org/motorola/E2121A",
  },
];

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="bg-white border-y border-brand-border py-10 overflow-hidden">
      <p className="text-center font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray mb-7">
        Wir reparieren alle grossen Marken
      </p>

      <div className="relative overflow-hidden">
        {/* Fade left edge */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent z-10" />
        {/* Fade right edge */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee items-center">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2.5 mx-10 sm:mx-14"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.src}
                alt={brand.name}
                className="h-9 w-auto"
                loading="lazy"
              />
              <span className="font-sans text-[11px] font-bold text-brand-gray whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
