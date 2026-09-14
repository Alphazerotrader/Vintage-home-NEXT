import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-1">
          <p className="font-body text-sm text-ink/45">05</p>
        </div>
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl italic leading-tight text-ink sm:text-4xl">
            Let&rsquo;s talk.
          </h2>
          <p className="mt-6 max-w-prose font-body leading-relaxed text-ink/75">
            Whether you&rsquo;re a homeowner with a property that needs the
            right hands, or an investor curious about our process, we&rsquo;d
            like to hear from you.
          </p>
          <div className="mt-8 space-y-1 font-body text-sm text-ink/70">
            <p>info@vintagehomes.example</p>
            <p>(312) 555-0148</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
