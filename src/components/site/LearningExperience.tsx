import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import labImg from "@/assets/lab.jpg";
import classroomImg from "@/assets/Classroom.JPG";
import lectureImg from "@/assets/Class.JPG";
import computerLabImg from "@/assets/computerlab.JPG";
import medicalTeachingImg from "@/assets/medical-teaching.JPG";

const PANELS = [
  {
    title: "Laboratories",
    caption: "Diagnostics practised on hospital-grade benches.",
    image: labImg,
  },
  { title: "Computer Lab", caption: "Modern computing facilities for healthcare IT.", image: computerLabImg },
  { title: "Classroom", caption: "Interactive learning spaces with modern amenities.", image: classroomImg },
  { title: "Lecture halls", caption: "Case-based teaching, not slide reading.", image: lectureImg },
  { title: "Medical Training", caption: "Hands-on clinical training with expert faculty.", image: medicalTeachingImg },
];

export function LearningExperience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);

  return (
    <section ref={ref} className="relative h-[420svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--muted-foreground)]">
            <span className="h-px w-10 bg-[color:var(--secondary)]" />
            The learning experience
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-6 will-change-transform">
          {PANELS.map((p, i) => (
            <article
              key={p.title}
              className="group relative h-[62svh] w-[84vw] shrink-0 overflow-hidden rounded-[32px] shadow-[var(--shadow-float)] md:w-[62vw] lg:w-[46vw]"
            >
              <img
                src={p.image}
                alt={p.title}
                width={1400}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-veil)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/55">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.9rem,3.6vw,3.2rem)] font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                  {p.caption}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
