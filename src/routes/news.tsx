import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, PageShell, Section } from "@/components/site/PageShell";
import { NEWS } from "@/components/site/data";
import { Eyebrow, ease } from "@/components/site/primitives";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "News & Events | Ashrith Group of Institutions";
const DESCRIPTION =
  "Admission notices, campus announcements, community outreach camps and academic events from Ashrith Group of Institutions, Udupi.";

const EVENTS = [
  { date: "18 Aug 2026", title: "Open day and campus tour", place: "Main campus, Udupi" },
  { date: "12 Sep 2026", title: "Clinical case conference", place: "Auditorium block" },
  { date: "30 Sep 2026", title: "Application deadline, 2026–27 intake", place: "Online" },
  { date: "14 Oct 2026", title: "Counselling week begins", place: "Admissions office" },
];

export const Route = createFileRoute("/news")({
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
  component: NewsPage,
});

function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & events"
        title={"What's happening\nat Ashrith."}
        weights={["font-light", "font-bold"]}
      />

      <Section>
        <Eyebrow>Latest updates</Eyebrow>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="flex h-full flex-col rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-7"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[color:var(--secondary)]">
                {n.tag}
                <span className="h-px w-6 bg-[color:var(--hairline)]" />
                <span className="text-[color:var(--muted-foreground)]">{n.date}</span>
              </div>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[color:var(--primary)]">
                {n.title}
              </h2>
              <p className="mt-3 text-[14px] leading-[1.8] text-[color:var(--muted-foreground)]">
                {n.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <Eyebrow>Upcoming calendar</Eyebrow>
        <ul className="mt-12 divide-y divide-[color:var(--hairline)] border-y border-[color:var(--hairline)]">
          {EVENTS.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 md:grid-cols-[160px_minmax(0,1fr)_auto]"
            >
              <span className="text-[12px] uppercase tracking-[0.2em] text-[color:var(--secondary)]">
                {e.date}
              </span>
              <span className="col-span-2 font-[family-name:var(--font-display)] text-lg text-[color:var(--primary)] md:col-span-1">
                {e.title}
              </span>
              <span className="text-[12px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                {e.place}
              </span>
            </motion.li>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </PageShell>
  );
}
