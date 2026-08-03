import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import portraitImg from "@/assets/student-portrait.jpg";
import studentsAtClassImg from "@/assets/studentsatclass.JPG";
import classImg from "@/assets/Class.JPG";
import { Eyebrow, SplitText } from "./primitives";

const STORIES = [
  {
    name: "Anusha Poojary",
    program: "B.Sc Nursing, 2021",
    placed: "Staff Nurse — Manipal Hospitals",
    quote:
      "My first night shift as a student terrified me. By graduation I had run a ward handover alone. Ashrith made that possible, one supervised hour at a time.",
    image: portraitImg,
  },
  {
    name: "Rohan D'Souza",
    program: "MLT, 2022",
    placed: "Lab Technologist — KMC Mangalore",
    quote:
      "We were running real diagnostic panels in the second year. Interviews felt like a normal working morning rather than an exam.",
    image: studentsAtClassImg,
  },
  {
    name: "Fathima Riza",
    program: "GNM, 2023",
    placed: "Community Health Officer — Kundapura",
    quote:
      "The community postings changed my direction entirely. I wanted a hospital job; I found a village that needed one nurse who stayed.",
    image: classImg,
  },
];

const RECRUITERS = [
  "Manipal Hospitals",
  "KMC Mangalore",
  "Apollo",
  "Fortis",
  "Narayana Health",
  "AJ Institute",
  "District Hospital Udupi",
  "Aster",
];

export function StudentSuccess() {
  const [i, setI] = useState(0);
  const story = STORIES[i]!;

  return (
    <section className="relative overflow-hidden bg-[color:var(--muted)] py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Eyebrow>Student success</Eyebrow>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-[color:var(--primary)]">
            <SplitText
              text={"Where our graduates\nare standing today."}
              weights={["font-light", "font-bold"]}
            />
          </h2>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[var(--shadow-float)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={story.name}
                src={story.image}
                alt={story.name}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <button
              aria-label="Play video testimonial"
              className="glass absolute bottom-6 left-6 flex items-center gap-3 rounded-full px-5 py-3 text-[12px] font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                ▶
              </span>
              Watch her story
            </button>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={story.name}
                initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.6vw,2.4rem)] font-light leading-[1.35] text-[color:var(--primary)]">
                  “{story.quote}”
                </p>
                <footer className="mt-8">
                  <p className="text-base font-semibold text-[color:var(--primary)]">
                    {story.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                    {story.program} · {story.placed}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              {STORIES.map((s, idx) => (
                <button
                  key={s.name}
                  onClick={() => setI(idx)}
                  aria-label={`Story ${idx + 1}`}
                  className="h-1 w-14 overflow-hidden rounded-full bg-[color:var(--hairline)]"
                >
                  <motion.span
                    className="block h-full bg-[color:var(--secondary)]"
                    animate={{ width: idx === i ? "100%" : "0%" }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 overflow-hidden">
          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
            Placement & internship partners
          </p>
          <motion.div
            className="flex gap-14 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...RECRUITERS, ...RECRUITERS].map((r, idx) => (
              <span
                key={`${r}-${idx}`}
                className="font-[family-name:var(--font-display)] text-2xl font-medium text-[color:var(--primary)]/35 md:text-3xl"
              >
                {r}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
