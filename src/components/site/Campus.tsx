import { useState } from "react";
import { motion } from "framer-motion";
import { Eyebrow, Reveal, SplitText } from "./primitives";

const PINS = [
  { place: "Udupi City Centre", distance: "6 km", time: "12 min" },
  { place: "Kundapura", distance: "34 km", time: "45 min" },
  { place: "Mangalore International Airport", distance: "68 km", time: "1 hr 25 min" },
  { place: "Udupi Railway Station", distance: "9 km", time: "16 min" },
  { place: "Service Bus Stand", distance: "5 km", time: "10 min" },
  { place: "Partner teaching hospitals", distance: "2–11 km", time: "5–20 min" },
];

export function Campus() {
  const [active, setActive] = useState(0);

  return (
    <section id="campus" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>Our campus</Eyebrow>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-[color:var(--primary)]">
            <SplitText
              text={"Rooted in Udupi.\nMinutes from care."}
              weights={["font-light", "font-bold"]}
            />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
              A quiet six-acre campus on the coastal belt, deliberately placed
              within a short drive of the district hospitals where our students
              spend a third of their week.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-2">
            {PINS.map((p, i) => (
              <motion.button
                key={p.place}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex items-center justify-between rounded-[22px] border px-6 py-6 text-left transition-all duration-500 ${
                  active === i
                    ? "border-transparent bg-[color:var(--primary)] shadow-[var(--shadow-lift)]"
                    : "border-[color:var(--hairline)] bg-[color:var(--surface)]"
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-display)] text-base font-medium ${
                    active === i
                      ? "text-[color:var(--primary-foreground)]"
                      : "text-[color:var(--primary)]"
                  }`}
                >
                  {p.place}
                </span>
                <span
                  className={`text-right text-xs uppercase tracking-[0.18em] ${
                    active === i
                      ? "text-[color:var(--primary-foreground)]/70"
                      : "text-[color:var(--muted-foreground)]"
                  }`}
                >
                  {p.distance}
                  <span className="block text-[10px] opacity-70">{p.time}</span>
                </span>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[420px] overflow-hidden rounded-[32px] shadow-[var(--shadow-float)] lg:min-h-full"
          >
            <iframe
              title="Ashrith Group of Institutions campus location, Udupi"
              src="https://www.google.com/maps?q=Udupi%2C%20Karnataka&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0 grayscale-[0.35] contrast-[1.05]"
            />
            <div className="glass-light pointer-events-none absolute bottom-6 left-6 rounded-[20px] px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Nearest to you
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-[color:var(--primary)]">
                {PINS[active]?.place}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
