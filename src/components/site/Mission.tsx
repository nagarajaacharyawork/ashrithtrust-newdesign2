import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CHAPTERS = [
  {
    label: "Mission",
    text: "To provide quality nursing and allied health education that prepares students to serve humanity with competence, compassion and integrity.",
  },
  {
    label: "Vision",
    text: "To be a leading institution in healthcare education in Karnataka, producing skilled and compassionate nursing and paramedical professionals who serve their communities.",
  },
  {
    label: "Philosophy",
    text: "Study to Serve the Humanity. Education at Ashrith is grounded in the belief that clinical knowledge must be inseparable from human dignity and the duty of care.",
  },
  {
    label: "Values",
    text: "Compassion in every interaction. Integrity in every decision. Excellence in every skill. Service to every patient, regardless of circumstance.",
  },
];

export function Mission() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const bg = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "oklch(0.9845 0.0026 106.45)",
      "oklch(0.9409 0.03 246.59)",
      "oklch(0.9605 0.0046 258.32)",
      "oklch(0.2953 0.0776 253.57)",
    ],
  );
  const fg = useTransform(
    scrollYProgress,
    [0, 0.7, 0.85],
    [
      "oklch(0.2953 0.0776 253.57)",
      "oklch(0.2953 0.0776 253.57)",
      "oklch(0.9845 0.0026 106.45)",
    ],
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bg, color: fg }}
      className="relative"
    >
      <div className="mx-auto max-w-5xl px-6 py-32 md:py-48">
        {CHAPTERS.map((c, i) => (
          <div key={c.label} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="py-16 md:py-24"
            >
              <p className="text-[11px] uppercase tracking-[0.36em] opacity-50">
                0{i + 1}
              </p>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5.4rem)] font-light leading-[0.94]">
                {c.label}
              </h3>
              <p className="mt-8 max-w-2xl text-[clamp(1rem,1.6vw,1.35rem)] leading-[1.75] opacity-70">
                {c.text}
              </p>
            </motion.div>
            {i < CHAPTERS.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto h-24 w-px origin-top bg-current opacity-25"
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
