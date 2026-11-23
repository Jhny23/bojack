"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { seasons } from "@/data/show";

export default function Seasons() {
  const [active, setActive] = useState(0);
  const season = seasons[active];

  return (
    <section id="seasons" className="mx-auto max-w-6xl px-6 py-28">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-pool">
        Six seasons · 2014–2020
      </p>
      <h2 className="mt-4 font-display text-4xl italic text-cream sm:text-5xl">
        The long way down
      </h2>
      <p className="mt-4 max-w-2xl text-cream/70">
        Created by Raphael Bob-Waksberg, with production design by Lisa
        Hanawalt. Pick a season to see where it goes and one episode worth
        revisiting.
      </p>

      <div
        role="tablist"
        aria-label="Seasons"
        className="mt-10 flex flex-wrap gap-2"
      >
        {seasons.map((s, i) => (
          <button
            key={s.number}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] transition ${
              i === active
                ? "border-sunset bg-sunset text-night"
                : "border-white/20 text-cream/70 hover:border-pool hover:text-pool"
            }`}
          >
            Season {s.number}
          </button>
        ))}
      </div>

      <div className="relative mt-8 min-h-[18rem] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-dusk to-night p-8 sm:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={season.number}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-7xl italic text-sunset sm:text-8xl">
                {season.number}
              </span>
              <span className="font-mono text-sm tracking-[0.3em] text-amber">
                {season.year}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-cream/90">
              {season.blurb}
            </p>

            <div className="mt-8 rounded-2xl border border-pool/30 bg-night/60 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-pool">
                Standout · {season.standout.code}
              </p>
              <h3 className="mt-2 font-display text-2xl italic">
                {season.standout.title}
              </h3>
              <p className="mt-2 text-cream/70">{season.standout.note}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
