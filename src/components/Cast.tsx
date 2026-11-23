"use client";

import { motion } from "framer-motion";
import { cast } from "@/data/show";

// Full class names so Tailwind can see them at build time.
const accents: Record<string, { text: string; border: string; glow: string }> = {
  sunset: {
    text: "text-sunset",
    border: "hover:border-sunset",
    glow: "group-hover:bg-sunset/10",
  },
  amber: {
    text: "text-amber",
    border: "hover:border-amber",
    glow: "group-hover:bg-amber/10",
  },
  pool: {
    text: "text-pool",
    border: "hover:border-pool",
    glow: "group-hover:bg-pool/10",
  },
};

export default function Cast() {
  return (
    <section id="cast" className="bg-dusk/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-pool">
          The regulars
        </p>
        <h2 className="mt-4 font-display text-4xl italic sm:text-5xl">
          Everybody&apos;s trying their best
        </h2>
        <p className="mt-4 max-w-2xl text-cream/70">
          A few of the faces that keep the show moving, with the voice actors
          who bring them to life.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cast.map((c, i) => {
            const a = accents[c.accent];
            return (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-night/70 p-7 transition ${a.border}`}
              >
                <div
                  className={`absolute inset-0 transition ${a.glow}`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border border-current font-display text-2xl italic ${a.text}`}
                    aria-hidden="true"
                  >
                    {c.glyph}
                  </div>
                  <h3 className="mt-5 font-display text-2xl italic">{c.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/50">
                    {c.role}
                  </p>
                  <p className="mt-4 text-cream/80">{c.line}</p>
                  <p className={`mt-5 font-mono text-xs ${a.text}`}>
                    Voiced by {c.voice}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
