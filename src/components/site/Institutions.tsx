import nursingImg from "@/assets/nursing-college.jpg";
import paraImg from "@/assets/paramedical-college.jpg";
import { Counter, Eyebrow, MagneticButton, Reveal, motion } from "./primitives";

const PANELS = [
  {
    name: "Ashrith College & School of Nursing",
    since: "Est. 2009",
    image: nursingImg,
    copy: "Offers B.Sc Nursing, GNM and ANM programmes recognised by the Indian Nursing Council, with supervised clinical practice and dedicated nursing skill laboratories.",
    programs: 3,
    seats: 150,
    tags: ["B.Sc Nursing", "GNM", "ANM"],
    reverse: false,
  },
  {
    name: "K. R. Hegde College of Paramedical Sciences",
    since: "Est. 2009",
    image: paraImg,
    copy: "Offers diploma programmes in Medical Laboratory Technology, Operation Theatre Technology, Ophthalmic Technology and Dialysis Technology, with hands-on clinical training.",
    programs: 4,
    seats: 120,
    tags: ["MLT", "OT Technology", "Ophthalmic Tech", "Dialysis Tech"],
    reverse: true,
  },
];

export function Institutions() {
  return (
    <section id="institutions" className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <Eyebrow>Our institutions</Eyebrow>
      </div>

      {PANELS.map((p, i) => (
        <div
          key={p.name}
          className="group relative mt-16 flex min-h-[86svh] items-center overflow-hidden md:mt-24"
        >
          <div
            className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-20 ${
              p.reverse ? "lg:[direction:rtl]" : ""
            }`}
          >
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[var(--shadow-float)] md:aspect-[5/4] lg:aspect-[4/5]"
            >
              <img
                src={p.image}
                alt={p.name}
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.08]"
              />
              <div
                className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-15"
                style={{ background: "var(--gradient-veil)" }}
              />
              <div className="glass absolute bottom-6 left-6 rounded-[20px] px-4 py-3 [direction:ltr]">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">
                  {p.since}
                </p>
              </div>
            </motion.div>

            <div className="[direction:ltr]">
              <Reveal>
                <p className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.34em] text-[color:var(--secondary)]">
                  0{i + 1} — Institution
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.4vw,3.6rem)] leading-[0.98] text-[color:var(--primary)]">
                  <span className="font-light">{p.name.split(" ")[0]} </span>
                  <span className="font-bold">
                    {p.name.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
                <p className="mt-7 max-w-lg text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
                  {p.copy}
                </p>

                <div className="mt-10 flex gap-12">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[color:var(--primary)]">
                      <Counter to={p.programs} />
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                      Programs
                    </p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[color:var(--primary)]">
                      <Counter to={p.seats} />
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                      Sanctioned seats
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[color:var(--hairline)] px-4 py-2 text-xs text-[color:var(--muted-foreground)] transition-colors duration-300 hover:border-[color:var(--secondary)] hover:text-[color:var(--primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <MagneticButton href="#programs" variant="solid">
                    View programs
                  </MagneticButton>
                  <MagneticButton href="#apply" variant="outline">
                    Request prospectus
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
