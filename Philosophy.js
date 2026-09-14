const stats = [
  { value: "142", label: "Properties restored" },
  { value: "$186M", label: "Capital deployed" },
  { value: "12", label: "Years operating" },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-1">
          <p className="font-body text-sm text-ink/45">01</p>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl italic leading-tight text-ink sm:text-4xl">
            We buy the houses other funds walk past.
          </h2>
          <p className="mt-6 max-w-prose font-body leading-relaxed text-ink/75">
            Vintage Homes restores pre-war bungalows, brick four-squares and
            heritage cottages into homes people actually want to live in —
            then holds them for the long term. Every renovation ledger is
            open to our investors, and every dollar committed is tracked
            from acquisition to appraisal.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-10 border-t border-line pt-10 sm:grid-cols-3 md:ml-[8.33%]">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-brass pl-5">
            <p className="font-display text-4xl text-ink">{s.value}</p>
            <p className="mt-1 font-body text-sm text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
