import { themes } from "@/data/show";

export default function Themes() {
  const loop = [...themes, ...themes];

  return (
    <section id="themes" className="overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-pool">
          What it&apos;s really about
        </p>
        <h2 className="mt-4 font-display text-4xl italic sm:text-5xl">
          Funny on the surface, heavy underneath
        </h2>
      </div>

      <div className="mt-12 border-y border-white/10 py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-display text-3xl italic text-cream/80 sm:text-5xl"
            >
              {t} <span className="mx-6 text-sunset">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
