import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:gap-6 md:px-10">
        <div className="md:col-span-7 md:pr-8 lg:col-span-6">
          <p className="font-body text-sm tracking-wide text-brick">
            Established Property &amp; Restoration Group
          </p>
          <h1 className="mt-5 font-display text-[2.75rem] italic leading-[1.05] text-ink sm:text-6xl">
            Timeless homes,
            <br />
            thoughtfully invested.
          </h1>
          <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-ink/75">
            We acquire, restore and steward character properties — and we do
            it with our partners&rsquo; capital treated like a family
            heirloom, not a line item.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#investors"
              className="border border-ink bg-ink px-6 py-3 font-body text-sm text-parchment transition-colors hover:bg-brick hover:border-brick"
            >
              Meet the investors
            </a>
            <a
              href="#portfolio"
              className="font-body text-sm text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-brick hover:decoration-brick"
            >
              View the portfolio
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line sm:aspect-[5/6]">
            <Image
              src="https://picsum.photos/seed/vintage-homes-hero/1000/1200"
              alt="A restored pre-war bungalow with its original brick facade"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale-[15%] sepia-[10%]"
            />
          </div>
          <p className="mt-3 font-body text-xs text-ink/55">
            The Elmhurst Bungalow, restored 2025
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
        <div className="ledger-rule" />
      </div>
    </section>
  );
}
