import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, SplitText } from "./primitives";
import { LEADERS } from "./data";

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="100" cy="100" r="100" fill="oklch(0.9409 0.03 246.59)" />
      <circle cx="100" cy="78" r="34" fill="oklch(0.7115 0.174 51.34 / 0.55)" />
      <ellipse cx="100" cy="172" rx="58" ry="42" fill="oklch(0.7115 0.174 51.34 / 0.55)" />
    </svg>
  );
}

export function Leadership() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="leadership" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-[color:var(--primary)]">
            <SplitText
              text={"The trustees who\nguide the standard."}
              weights={["font-light", "font-bold"]}
            />
          </h2>
        </div>

        <div className="mt-24 grid gap-16 sm:grid-cols-2 md:grid-cols-3 md:gap-10 lg:grid-cols-5">
          {LEADERS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`text-center ${i === 2 ? "md:-translate-y-12" : ""}`}
            >
              <div className="relative mx-auto aspect-square w-[74%] overflow-hidden rounded-full shadow-[var(--shadow-float)] md:w-[86%]">
                <ProfileIcon className="h-full w-full" />
                <motion.div
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center p-5 text-center"
                  style={{ background: "var(--gradient-veil)" }}
                >
                  <p className="text-[12px] leading-relaxed text-white/90">
                    {l.bio}
                  </p>
                </motion.div>
              </div>

              <h3 className="mt-8 font-[family-name:var(--font-display)] text-base font-semibold text-[color:var(--primary)]">
                {l.name}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                {l.role}
              </p>

              <svg
                viewBox="0 0 200 60"
                className="mx-auto mt-5 h-10 w-40 text-[color:var(--secondary)]"
                aria-hidden
              >
                <motion.path
                  d={l.signature}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
