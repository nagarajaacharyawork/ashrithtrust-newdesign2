import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import labImg from "@/assets/lab.jpg";
import classroomImg from "@/assets/Classroom.JPG";
import medicalImg from "@/assets/medical-teaching.JPG";
import labTeachingImg from "@/assets/Lab-teaching.JPG";
import computerLabImg from "@/assets/computerlab.JPG";
import studentsAtClassImg from "@/assets/studentsatclass.JPG";
import teachingAtClassImg from "@/assets/teachingatclass.JPG";
import mainEntranceImg from "@/assets/main-entrence.JPG";
import roomsHostelImg from "@/assets/Rooms-hostel.JPG";
import foodCourtImg from "@/assets/Foodcort-or-mess.JPG";
import collegeImg from "@/assets/College_Image.JPG";
import classImg from "@/assets/Class.JPG";
import careImg from "@/assets/care-hands.jpg";
import portraitImg from "@/assets/student-portrait.jpg";
import { Eyebrow, SplitText } from "./primitives";

const ITEMS = [
  { src: collegeImg, alt: "College building", cat: "Campus" },
  { src: labImg, alt: "Laboratory session", cat: "Academics" },
  { src: classroomImg, alt: "Classroom", cat: "Academics" },
  { src: medicalImg, alt: "Medical teaching", cat: "Academics" },
  { src: classImg, alt: "Class session", cat: "Academics" },
  { src: labTeachingImg, alt: "Lab teaching", cat: "Academics" },
  { src: roomsHostelImg, alt: "Hostel rooms", cat: "Campus" },
  { src: foodCourtImg, alt: "Food court", cat: "Campus" },
  { src: computerLabImg, alt: "Computer lab", cat: "Academics" },
  { src: studentsAtClassImg, alt: "Students at class", cat: "Academics" },
  { src: teachingAtClassImg, alt: "Teaching at class", cat: "Academics" },
  { src: mainEntranceImg, alt: "Main entrance", cat: "Campus" },
  { src: careImg, alt: "Care and compassion", cat: "Campus" },
  { src: portraitImg, alt: "Student portrait", cat: "Campus" },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-82%"]);

  return (
    <section ref={ref} className="relative h-[420svh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-12 w-full max-w-7xl px-6">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.98] text-[color:var(--primary)]">
            <SplitText text={"A year on campus."} weights={["font-light"]} />
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-6 will-change-transform">
          {ITEMS.map((item, i) => (
            <article
              key={item.alt}
              className="group relative h-[62svh] w-[84vw] shrink-0 overflow-hidden rounded-[32px] shadow-[var(--shadow-float)] md:w-[62vw] lg:w-[52vw]"
            >
              <img
                src={item.src}
                alt={item.alt}
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
                  {item.cat}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.9rem,3.6vw,3.2rem)] font-semibold text-white">
                  {item.alt}
                </h3>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
