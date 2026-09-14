import Image from "next/image";

const properties = [
  {
    seed: "vh-elmhurst",
    name: "The Elmhurst Bungalow",
    location: "Elmhurst, IL",
    note: "Structural restoration, period-accurate facade repair",
    year: "2025",
  },
  {
    seed: "vh-birchwood",
    name: "The Birchwood Four-Square",
    location: "Oak Park, IL",
    note: "Full mechanical rebuild, original millwork retained",
    year: "2024",
  },
  {
    seed: "vh-cottage-lane",
    name: "Cottage Lane Residence",
    location: "Ann Arbor, MI",
    note: "Foundation stabilization, garden restoration",
    year: "2024",
  },
  {
    seed: "vh-halstead",
    name: "The Halstead Rowhouse",
    location: "Chicago, IL",
    note: "Brick repointing, roofline reconstruction",
    year: "2023",
  },
  {
    seed: "vh-maple-court",
    name: "Maple Court Cottage",
    location: "Evanston, IL",
    note: "Window restoration, porch rebuild",
    year: "2023",
  },
  {
    seed: "vh-front-street",
    name: "Front Street Farmhouse",
    location: "New Paltz, NY",
    note: "Barn conversion, original beam preservation",
    year: "2022",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-t border-line bg-parchment2 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-1">
            <p className="font-body text-sm text-ink/45">02</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl italic leading-tight text-ink sm:text-4xl">
              Recent restorations
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <article key={p.seed}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
                <Image
                  src={`https://picsum.photos/seed/${p.seed}/700/540`}
                  alt={`${p.name} in ${p.location}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[15%] sepia-[8%]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{p.name}</h3>
                <span className="shrink-0 font-body text-xs text-ink/45">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 font-body text-sm text-ink/55">
                {p.location}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                {p.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
