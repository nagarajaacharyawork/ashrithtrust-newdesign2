import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Cursor, MobileApplyBar, Navigation, SmoothScroll } from "./Chrome";
import { Footer } from "./Closing";
import { SplitText } from "./primitives";

/** Consistent page frame: chrome, main content, footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Navigation />
      <main id="top">{children}</main>
      <Footer />
      <MobileApplyBar />
    </>
  );
}

/** Shared max width + vertical rhythm for every section on every page. */
export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={`relative ${tone === "muted" ? "bg-[color:var(--muted)]" : ""} py-20 md:py-28 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-[1320px] px-6">{children}</div>
    </section>
  );
}

/** Dark cinematic page header used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  weights,
  lead,
}: {
  eyebrow: string;
  title: string;
  weights?: string[];
  lead?: string;
}) {
  return (
    <header
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-52"
      style={{ background: "var(--gradient-deep)" }}
    >
      <motion.div
        aria-hidden
        animate={{ opacity: [0.16, 0.3, 0.16] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-32 -top-24 h-[52vh] w-[52vh] rounded-full bg-[color:var(--secondary)] blur-[150px]"
      />
      <div className="relative mx-auto w-full max-w-[1320px] px-6">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/50">
          <span className="h-px w-10 bg-[color:var(--secondary)]" />
          {eyebrow}
        </div>
        <h1 className="mt-8 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.98] text-white">
          <SplitText text={title} weights={weights ?? []} />
        </h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-white/65"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
}
