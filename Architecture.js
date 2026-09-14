import BeforeAfterSlider from "./BeforeAfterSlider";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-1">
          <p className="font-body text-sm text-ink/45">03</p>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl italic leading-tight text-ink sm:text-4xl">
            Before &amp; after
          </h2>
          <p className="mt-6 max-w-prose font-body leading-relaxed text-ink/75">
            Drag the slider to see how we take a tired structure back to its
            original character, then forward into a home built for today.
          </p>
        </div>
      </div>

      <div className="mt-12 md:ml-[8.33%]">
        <BeforeAfterSlider
          beforeSrc="https://picsum.photos/seed/vintage-homes-before/1000/620"
          afterSrc="https://picsum.photos/seed/vintage-homes-after/1000/620"
          alt="The Elmhurst Bungalow"
        />
        <p className="mt-4 max-w-prose font-body text-sm text-ink/55">
          The Elmhurst Bungalow — structural restoration and period-accurate
          facade repair, 2025.
        </p>
      </div>
    </section>
  );
}
