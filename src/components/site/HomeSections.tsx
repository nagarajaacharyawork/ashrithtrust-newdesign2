import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import careImg from "@/assets/care-hands.jpg";
import classroomImg from "@/assets/Classroom.JPG";
import portraitImg from "@/assets/student-portrait.jpg";
import {
  CAMPUS_CARDS,
  FEATURED_PROGRAMS,
  GALLERY_ITEMS,
  INSTITUTIONS,
  LEADERS,
  NEWS,
  TESTIMONIALS,
} from "./data";
import { Eyebrow, MaskImage, Reveal, SplitText, ease } from "./primitives";
import { ArrowLink, LinkButton } from "./LinkButton";
import { Section } from "./PageShell";

function Heading({
  text,
  weights,
  className,
}: {
  text: string;
  weights?: string[];
  className?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-display)] text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.02] text-[color:var(--primary)] ${className ?? ""}`}
    >
      <SplitText text={text} weights={weights ?? []} />
    </h2>
  );
}

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

/* ------------------------------------------------------------------ About */

export function AboutIntro() {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Eyebrow>About Ashrith</Eyebrow>
          <Heading
            text={"Healthcare education\nbuilt around humanity."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
              Ashrith Trust (R) was established in 2009 with a commitment to
              quality healthcare education. Managed by dedicated trustees, the
              group runs two institutions at NH-66, Kota, Udupi — guided by
              the tagline Study to Serve the Humanity.
            </p>
            <div className="mt-10">
              <LinkButton to="/about">Learn More</LinkButton>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:col-span-7 lg:gap-6">
          <MaskImage
            src={careImg}
            alt="A nurse holding an elderly patient's hand"
            className="col-span-2 aspect-[16/9] rounded-[28px] shadow-[var(--shadow-lift)]"
          />
          <MaskImage
            src={classroomImg}
            alt="Students in a classroom"
            className="aspect-[4/3] rounded-[24px] shadow-[var(--shadow-soft)]"
          />
          <MaskImage
            src={portraitImg}
            alt="Nursing student portrait"
            className="aspect-[4/3] rounded-[24px] shadow-[var(--shadow-soft)]"
          />
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Institutions */

export function InstitutionsPreview() {
  return (
    <Section id="institutions" tone="muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Our institutions</Eyebrow>
          <Heading
            text={"Two colleges,\none mission of care."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
        </div>
        <ArrowLink to="/institutions">Explore institutions</ArrowLink>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {INSTITUTIONS.map((inst, i) => (
          <motion.article
            key={inst.slug}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
            className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-[color:var(--surface)] shadow-[var(--shadow-soft)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={inst.image}
                alt={inst.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <span className="glass absolute bottom-5 left-5 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                {inst.since}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-9">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.3rem,2.2vw,1.75rem)] font-semibold leading-tight text-[color:var(--primary)]">
                {inst.name}
              </h3>
              <p className="mt-5 text-[15px] leading-[1.85] text-[color:var(--muted-foreground)]">
                {inst.short}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {inst.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[color:var(--hairline)] px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <ArrowLink to="/institutions">View institution</ArrowLink>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Programs */

export function ProgramsPreview() {
  return (
    <Section id="programs">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Academic programs</Eyebrow>
          <Heading
            text={"Seven pathways\ninto healthcare."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
        </div>
        <LinkButton to="/academics" variant="outline">
          View All Programs
        </LinkButton>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROGRAMS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
            whileHover={{ y: -6 }}
            className="flex h-full flex-col rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-8"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--secondary)]">
              {p.level}
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[color:var(--primary)]">
              {p.name}
            </h3>
            <div className="mt-auto flex items-center gap-6 pt-8 text-[12px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
              <span>{p.duration}</span>
              <span>{p.seats} seats</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- Campus experience */

export function CampusExperience() {
  return (
    <Section id="campus" tone="muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Campus experience</Eyebrow>
          <Heading
            text={"Where the learning\nactually happens."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
        </div>
        <ArrowLink to="/campus-life">Explore campus life</ArrowLink>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CAMPUS_CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease }}
            className="h-full"
          >
            <Link
              to="/campus-life"
              className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[color:var(--primary)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-[color:var(--muted-foreground)]">
                  {c.copy}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Leadership */

export function LeadershipPreview() {
  return (
    <Section id="leadership">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Leadership</Eyebrow>
          <Heading
            text={"The trustees who\nguide the standard."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
        </div>
        <ArrowLink to="/leadership">View leadership</ArrowLink>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERS.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
            className="flex h-full flex-col rounded-[26px] bg-[color:var(--surface)] p-8 text-center shadow-[var(--shadow-soft)]"
          >
            <div className="mx-auto aspect-square w-32 overflow-hidden rounded-full shadow-[var(--shadow-lift)]">
              <ProfileIcon className="h-full w-full" />
            </div>
            <h3 className="mt-7 font-[family-name:var(--font-display)] text-lg font-semibold text-[color:var(--primary)]">
              {l.name}
            </h3>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
              {l.role}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- Gallery */

export function GalleryPreview() {
  const items = GALLERY_ITEMS.slice(0, 6);
  return (
    <Section id="gallery" tone="muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Gallery</Eyebrow>
          <Heading text={"A year on campus."} weights={["font-light"]} className="mt-7" />
        </div>
        <ArrowLink to="/gallery">View gallery</ArrowLink>
      </div>

      <div className="mt-16 grid auto-rows-[168px] grid-cols-2 gap-5 md:auto-rows-[200px] md:grid-cols-4 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-6% 0px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.06, ease }}
            className={`group relative overflow-hidden rounded-[22px] shadow-[var(--shadow-soft)] ${item.span}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[color:var(--primary-deep)]/0 transition-colors duration-500 group-hover:bg-[color:var(--primary-deep)]/35" />
            <span className="absolute bottom-4 left-4 right-4 translate-y-3 truncate text-left text-[11px] font-medium uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Testimonials */

export function TestimonialsPreview() {
  const [i, setI] = useState(0);
  const story = TESTIMONIALS[i]!;

  return (
    <Section id="stories">
      <Eyebrow>Student stories</Eyebrow>
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] sm:aspect-[16/10] lg:col-span-5 lg:aspect-[4/5]">
          <AnimatePresence mode="wait">
            <motion.img
              key={story.name}
              src={story.image}
              alt={story.name}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={story.name}
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease }}
            >
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.3rem,2.4vw,2.2rem)] font-light leading-[1.4] text-[color:var(--primary)]">
                "{story.quote}"
              </p>
              <footer className="mt-9">
                <p className="text-base font-semibold text-[color:var(--primary)]">
                  {story.name}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  {story.program} · {story.placed}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-3">
            {TESTIMONIALS.map((s, idx) => (
              <button
                key={s.name}
                onClick={() => setI(idx)}
                aria-label={`Story ${idx + 1}`}
                className="h-1 w-14 overflow-hidden rounded-full bg-[color:var(--hairline)]"
              >
                <motion.span
                  className="block h-full bg-[color:var(--secondary)]"
                  animate={{ width: idx === i ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------- News */

export function LatestNews() {
  return (
    <Section id="news" tone="muted">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <Eyebrow>Latest news</Eyebrow>
          <Heading
            text={"What's happening\nat Ashrith."}
            weights={["font-light", "font-bold"]}
            className="mt-7"
          />
        </div>
        <ArrowLink to="/news">All news & events</ArrowLink>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {NEWS.map((n, i) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease }}
            className="h-full"
          >
            <Link
              to="/news"
              className="flex h-full flex-col rounded-[24px] border border-[color:var(--hairline)] bg-[color:var(--surface)] p-8 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[color:var(--secondary)]">
                {n.tag}
                <span className="h-px w-6 bg-[color:var(--hairline)]" />
                <span className="text-[color:var(--muted-foreground)]">
                  {n.date}
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[color:var(--primary)]">
                {n.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-[color:var(--muted-foreground)]">
                {n.copy}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
