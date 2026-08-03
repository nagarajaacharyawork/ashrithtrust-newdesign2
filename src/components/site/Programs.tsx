import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, Reveal, SplitText } from "./primitives";

type Program = {
  name: string;
  stream: "Nursing" | "Paramedical" | "Diploma";
  duration: string;
  seats: number;
  eligibility: string;
  detail: string;
};

const PROGRAMS: Program[] = [
  {
    name: "B.Sc Nursing",
    stream: "Nursing",
    duration: "4 years",
    seats: 60,
    eligibility: "PUC / 10+2 with PCB, 45%",
    detail:
      "Undergraduate nursing programme recognised by the Indian Nursing Council. Covers medical-surgical, community, psychiatric and paediatric nursing with supervised clinical practice.",
  },
  {
    name: "General Nursing & Midwifery (GNM)",
    stream: "Nursing",
    duration: "3½ years",
    seats: 60,
    eligibility: "10+2, any stream, 40%",
    detail:
      "Diploma programme with midwifery certification. Includes supervised clinical postings across medicine, surgery, obstetrics and community health.",
  },
  {
    name: "Auxiliary Nurse Midwifery (ANM)",
    stream: "Nursing",
    duration: "2 years",
    seats: 40,
    eligibility: "10+2, 40%",
    detail:
      "Community-focused nursing programme covering maternal and child health, immunisation and primary health centre practice. Offered at Ashrith School of Nursing.",
  },
  {
    name: "Diploma in Medical Laboratory Technology",
    stream: "Paramedical",
    duration: "2 years",
    seats: 30,
    eligibility: "10+2 with PCB",
    detail:
      "Covers haematology, biochemistry, microbiology and histopathology. Students receive hands-on training in clinical laboratory procedures.",
  },
  {
    name: "Diploma in Operation Theatre Technology",
    stream: "Paramedical",
    duration: "2 years",
    seats: 30,
    eligibility: "10+2 with PCB",
    detail:
      "Trains students in sterile technique, anaesthesia assistance and perioperative instrumentation in live operation theatre environments.",
  },
  {
    name: "Diploma in Ophthalmic Technology",
    stream: "Paramedical",
    duration: "2 years",
    seats: 30,
    eligibility: "10+2 with PCB",
    detail:
      "Covers ophthalmic examination techniques, refraction, tonometry and assisting in ophthalmic surgical procedures.",
  },
  {
    name: "Diploma in Dialysis Technology",
    stream: "Paramedical",
    duration: "2 years",
    seats: 30,
    eligibility: "10+2 with PCB",
    detail:
      "Covers renal replacement therapy, dialysis machine handling, vascular access care and chronic kidney disease patient management.",
  },
];

const FILTERS = ["All", "Nursing", "Paramedical"] as const;

export function Programs() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      PROGRAMS.filter(
        (p) =>
          (filter === "All" || p.stream === filter) &&
          p.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [filter, query],
  );

  return (
    <section id="programs" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <Eyebrow>Academic programs</Eyebrow>
            <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-[color:var(--primary)]">
              <SplitText
                text={"Seven pathways\ninto the profession."}
                weights={["font-light", "font-bold"]}
              />
            </h2>
          </div>
          <Reveal delay={0.15} className="w-full max-w-sm">
            <label className="relative block">
              <span className="sr-only">Search programs</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a course…"
                className="w-full rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-6 py-4 text-sm outline-none transition-shadow duration-300 placeholder:text-[color:var(--muted-foreground)] focus:shadow-[var(--shadow-lift)]"
              />
            </label>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="relative isolate rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors duration-300"
            >
              {filter === f && (
                <motion.span
                  layoutId="program-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-[color:var(--primary)]"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span
                className={
                  filter === f
                    ? "text-[color:var(--primary-foreground)]"
                    : "text-[color:var(--muted-foreground)]"
                }
              >
                {f}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]">
          <div className="hidden grid-cols-[2.2fr_1fr_0.7fr_1.6fr] gap-6 border-b border-[color:var(--hairline)] px-8 py-5 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)] md:grid">
            <span>Program</span>
            <span>Duration</span>
            <span>Seats</span>
            <span>Eligibility</span>
          </div>

          <AnimatePresence initial={false} mode="popLayout">
            {rows.map((p) => (
              <motion.div
                layout
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-[color:var(--hairline)] last:border-0"
              >
                <button
                  onClick={() => setOpen(open === p.name ? null : p.name)}
                  className="grid w-full grid-cols-1 items-center gap-2 px-6 py-6 text-left transition-colors duration-300 hover:bg-[color:var(--accent)]/45 md:grid-cols-[2.2fr_1fr_0.7fr_1.6fr] md:gap-6 md:px-8"
                >
                  <span className="font-[family-name:var(--font-display)] text-lg font-medium text-[color:var(--primary)]">
                    {p.name}
                  </span>
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {p.duration}
                  </span>
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {p.seats}
                  </span>
                  <span className="flex items-center justify-between gap-4 text-sm text-[color:var(--muted-foreground)]">
                    {p.eligibility}
                    <motion.span
                      animate={{ rotate: open === p.name ? 45 : 0 }}
                      transition={{ duration: 0.35 }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[color:var(--hairline)] text-[color:var(--primary)]"
                    >
                      +
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence>
                  {open === p.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[color:var(--accent)]/35"
                    >
                      <div className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
                        <p className="max-w-2xl text-sm leading-[1.9] text-[color:var(--muted-foreground)]">
                          {p.detail}
                        </p>
                        <a
                          href="#apply"
                          className="shrink-0 rounded-full bg-[color:var(--primary)] px-6 py-3 text-[13px] font-semibold text-[color:var(--primary-foreground)]"
                        >
                          Apply for {p.stream.toLowerCase()}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {rows.length === 0 && (
            <p className="px-8 py-16 text-center text-sm text-[color:var(--muted-foreground)]">
              No programs match that search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
