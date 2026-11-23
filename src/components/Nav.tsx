const links = [
  { href: "#seasons", label: "Seasons" },
  { href: "#cast", label: "Cast" },
  { href: "#themes", label: "Themes" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg italic tracking-wide text-cream"
        >
          Hollywoo <span className="text-sunset">After Dark</span>
        </a>
        <ul className="flex gap-6 font-mono text-xs uppercase tracking-[0.2em] text-cream/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-pool focus-visible:text-pool"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
