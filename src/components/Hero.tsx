"use client";

import { motion } from "framer-motion";

function Palm({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 360"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M58 360 C60 280 56 200 64 120 L70 120 C64 200 68 280 66 360 Z" />
      <path d="M67 120 C40 90 10 90 0 110 C25 98 48 104 67 120 Z" />
      <path d="M67 120 C45 70 20 55 6 62 C30 66 50 88 67 120 Z" />
      <path d="M67 120 C70 70 62 35 48 22 C60 50 62 85 67 120 Z" />
      <path d="M67 120 C95 75 115 62 120 70 C100 76 82 95 67 120 Z" />
      <path d="M67 120 C100 100 118 108 120 122 C100 114 84 114 67 120 Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0b0d26 0%, #241a5a 38%, #4a2a7a 62%, #ff6b6b 88%, #ffb347 100%)",
      }}
    >
      {/* sun / moon glow */}
      <div className="absolute left-1/2 top-[58%] h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/80 blur-3xl" />

      {/* stars */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 12% 18%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 28% 32%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 44% 12%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 63% 26%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 78% 14%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 90% 34%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 6% 40%, #fff 50%, transparent 51%)",
        }}
      />

      {/* hills silhouette */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[16%] h-40 w-full text-night/90"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 220 L0 140 C160 70 300 150 460 110 C620 70 760 160 940 120 C1120 80 1280 150 1440 100 L1440 220 Z" />
      </svg>

      {/* pool */}
      <div className="absolute inset-x-0 bottom-0 h-[18%] overflow-hidden bg-gradient-to-b from-pool/70 to-night">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/40"
            initial={{ scale: 0.2, opacity: 0.7 }}
            animate={{ scale: [0.2, 7], opacity: [0.7, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* palms */}
      <Palm className="absolute bottom-[14%] left-[4%] h-[46vh] text-night" />
      <Palm className="absolute bottom-[14%] right-[6%] h-[38vh] text-night" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-pool"
        >
          An unofficial fan tribute
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="neon mt-6 font-display text-6xl italic leading-[0.95] text-sunset sm:text-8xl"
        >
          Horse
          <br />
          in the Hills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-lg text-cream/85"
        >
          A late-night love letter to <em>BoJack Horseman</em>: a sitcom about a
          washed-up sitcom star, and one of the funniest, saddest things ever
          animated.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#seasons"
            className="rounded-full bg-sunset px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-night transition hover:bg-amber"
          >
            Explore the seasons
          </a>
          <a
            href="#cast"
            className="rounded-full border border-cream/40 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cream transition hover:border-pool hover:text-pool"
          >
            Meet the cast
          </a>
        </motion.div>
      </div>
    </section>
  );
}
