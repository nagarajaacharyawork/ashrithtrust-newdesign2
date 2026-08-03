import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SplitText } from "./primitives";
import { LinkButton } from "./LinkButton";
import logoImg from "@/assets/ashrithlogo.png";

export function FinalCta() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--gradient-deep)" }}
    >
      <motion.div
        aria-hidden
        animate={{ opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--secondary)] blur-[160px]"
      />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 text-center">
        <h2 className="mx-auto max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,5.2rem)] leading-[0.96] text-white">
          <SplitText
            text={"Your Journey Towards\nHealthcare Excellence\nStarts Here."}
            weights={["font-light", "font-medium italic opacity-80", "font-bold"]}
          />
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <LinkButton variant="ember" to="/apply">
            Apply Now
          </LinkButton>
          <LinkButton variant="ghost" to="/admissions">
            Download Brochure
          </LinkButton>
          <LinkButton variant="ghost" to="/contact">
            Visit Campus
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}

const QUICK = [
  { label: "About Trust", to: "/about" },
  { label: "Institutions", to: "/institutions" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Facilities", to: "/facilities" },
  { label: "Leadership", to: "/leadership" },
  { label: "Gallery", to: "/gallery" },
  { label: "News & Events", to: "/news" },
];
const PROGRAMS = ["B.Sc Nursing", "GNM", "ANM", "Diploma in MLT", "Diploma in OT Technology", "Diploma in Ophthalmic Technology", "Diploma in Dialysis Technology"];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[color:var(--primary-deep)] pb-40 pt-32 text-white/70 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logoImg}
              alt="Ashrith Group of Institutions"
              className="h-16 w-auto"
            />
            <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/45">
              Group of Institutions
            </p>
            <p className="mt-10 max-w-xs text-sm leading-relaxed text-white/55">
              Nursing and allied health education at NH-66, Kota, Udupi,
              Karnataka — managed by Ashrith Trust (R).
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-xl"
            >
              <label className="sr-only" htmlFor="newsletter">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Newsletter — your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button className="shrink-0 rounded-full bg-[color:var(--secondary)] px-5 py-2.5 text-[13px] font-semibold text-[color:var(--secondary-foreground)]">
                Join
              </button>
            </form>
          </div>

          <nav>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Quick links
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    to={q.to}
                    className="transition-colors duration-300 hover:text-[color:var(--secondary)]"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Programs
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {PROGRAMS.map((p) => (
                <li key={p}>
                  <Link
                    to="/academics"
                    className="transition-colors duration-300 hover:text-[color:var(--secondary)]"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Contact
            </p>
            <address className="mt-8 space-y-4 text-sm not-italic leading-relaxed">
              <p className="text-white/55">
                NH-66, Kota,
                <br />
                Udupi Taluk &amp; District,
                <br />
                Karnataka – 576221
              </p>
              <p>
                <a href="tel:+919148087860" className="hover:text-[color:var(--secondary)]">
                  +91 91480 87860
                </a>
              </p>
              <p>
                <a href="tel:+919148087861" className="hover:text-[color:var(--secondary)]">
                  +91 91480 87861
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@ashritheducationtrust.org"
                  className="hover:text-[color:var(--secondary)]"
                >
                  info@ashritheducationtrust.org
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-4 text-[11px] uppercase tracking-[0.2em] text-white/45">
              {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#footer"
                  className="transition-colors duration-300 hover:text-[color:var(--secondary)]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[28px] border border-white/10">
          <iframe
            title="Ashrith campus map"
            src="https://www.google.com/maps?q=NH-66+Kota+Udupi+Karnataka+576221&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[260px] w-full border-0 opacity-80 grayscale"
          />
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-10 text-[11px] uppercase tracking-[0.2em] text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} Ashrith Group of Institutions · Managed by Ashrith Trust (R)</p>
          <p>Udupi · Karnataka · India</p>
        </div>
      </div>
    </footer>
  );
}
