export default function Footer() {
  return (
    <footer className="border-t border-line bg-parchment2 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 font-body text-sm text-ink/55 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Vintage Homes. All rights reserved.</p>
        <p>Established Property &amp; Restoration Group</p>
      </div>
    </footer>
  );
}
