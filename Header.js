const links = [
  { href: "#philosophy", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#architecture", label: "Architecture" },
  { href: "#investors", label: "Investors" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-line/70 bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink"
        >
          Vintage Homes
        </a>
        <nav className="hidden gap-8 font-body text-sm text-ink/80 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-transparent pb-1 transition-colors hover:border-brick hover:text-brick"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-none border border-ink px-4 py-2 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-parchment md:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
