import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Counter } from "./primitives";

const METRICS = [
  { value: 15, suffix: "+", label: "Years", note: "Established 2009" },
  { value: 2, suffix: "", label: "Institutions", note: "Nursing & Paramedical" },
  { value: 7, suffix: "", label: "Programmes", note: "Degree & diploma" },
  { value: 270, suffix: "+", label: "Sanctioned seats", note: "Across both colleges" },
  { value: 3, suffix: "", label: "Nursing courses", note: "B.Sc, GNM, ANM" },
];

export function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-40 md:py-52"
      style={{ background: "var(--gradient-deep)" }}
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -left-40 top-0 h-[60vh] w-[60vh] rounded-full opacity-30 blur-[120px]"
      >
        <div className="h-full w-full rounded-full bg-[color:var(--secondary)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-32 bottom-0 h-[50vh] w-[50vh] rounded-full bg-[color:var(--accent)] opacity-20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/50">
            <span className="h-px w-10 bg-[color:var(--secondary)]" />
            By the numbers
          </div>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] text-white">
            <span className="font-light">Measured in </span>
            <span className="font-bold">outcomes</span>
            <span className="font-light italic opacity-70">, not brochures.</span>
          </h2>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 50, filter: "blur(16px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="glass flex h-full flex-col rounded-[28px] p-8"
            >
              <p className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-none tracking-tight text-white">
                <Counter to={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-6 text-sm font-medium text-white/85">{m.label}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
                {m.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
