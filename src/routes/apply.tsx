import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, PageShell, Section } from "@/components/site/PageShell";
import { Eyebrow, ease } from "@/components/site/primitives";
import { FEATURED_PROGRAMS } from "@/components/site/data";

const TITLE = "Apply to Ashrith | Admission Enquiry Form 2026–27";
const DESCRIPTION =
  "Start your application to Ashrith Group of Institutions. Share your details and the admissions office will call you back within one working day.";

const FIELD =
  "mt-2 w-full rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--foreground)] outline-none transition-colors duration-300 focus:border-[color:var(--secondary)]";
const LABEL =
  "text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Apply"
        title={"Begin your\napplication."}
        weights={["font-light", "font-bold"]}
        lead="Tell us which program interests you. The admissions office replies within one working day with eligibility, fees and the document checklist."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Before you start</Eyebrow>
            <p className="mt-8 text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
              Keep your 10th and 12th marks cards, a photo ID and a recent
              passport photograph ready. Nothing is uploaded here — this form
              only starts the conversation.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-6 rounded-[28px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-7 sm:grid-cols-2 md:p-10 lg:col-span-8"
          >
            <label className="block">
              <span className={LABEL}>Full name</span>
              <input className={FIELD} name="name" required placeholder="Your name" />
            </label>
            <label className="block">
              <span className={LABEL}>Phone</span>
              <input className={FIELD} name="phone" required placeholder="+91" />
            </label>
            <label className="block">
              <span className={LABEL}>Email</span>
              <input className={FIELD} name="email" type="email" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className={LABEL}>Program of interest</span>
              <select className={FIELD} name="program" defaultValue="">
                <option value="" disabled>
                  Select a program
                </option>
                {FEATURED_PROGRAMS.map((p) => (
                  <option key={p.name} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className={LABEL}>Message</span>
              <textarea
                className={`${FIELD} min-h-32 resize-y`}
                name="message"
                placeholder="Anything you would like the admissions office to know"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                data-cursor="hover"
                style={{ backgroundImage: "var(--gradient-ember)" }}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-[color:var(--secondary-foreground)] shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Submit enquiry
              </button>
            </div>
          </motion.form>
        </div>
      </Section>
    </PageShell>
  );
}
