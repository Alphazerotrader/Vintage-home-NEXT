const principles = [
  {
    title: "Capital protection first",
    body: "We underwrite for downside before upside, and walk away from deals that don't pencil without optimistic assumptions.",
  },
  {
    title: "An open ledger",
    body: "Every acquisition, invoice and appraisal is visible to our partners for the life of the investment — not just at reporting time.",
  },
  {
    title: "Stewardship, not flips",
    body: "We hold what we restore. Our incentives are aligned with the long-term health of the property and the neighborhood around it.",
  },
];

export default function Investors() {
  return (
    <section
      id="investors"
      className="border-t border-line bg-forest px-6 py-20 text-parchment2 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-1">
            <p className="font-body text-sm text-parchment2/45">04</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl italic leading-tight sm:text-4xl">
              Partners, not passengers.
            </h2>
            <p className="mt-6 max-w-prose font-body leading-relaxed text-parchment2/75">
              We raise capital from a small group of individuals and family
              offices who want direct exposure to restoration real estate,
              without the noise of a public fund. Every commitment is
              matched with a full accounting of how it was used.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-parchment2/20 pt-10 sm:grid-cols-3 md:ml-[8.33%]">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-xl text-parchment2">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-parchment2/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:ml-[8.33%]">
          <a
            href="#contact"
            className="inline-block border border-parchment2 px-6 py-3 font-body text-sm text-parchment2 transition-colors hover:bg-parchment2 hover:text-forest"
          >
            Request the investor memorandum
          </a>
        </div>
      </div>
    </section>
  );
}
