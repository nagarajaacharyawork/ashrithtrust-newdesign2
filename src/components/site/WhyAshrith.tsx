import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import careImg from "@/assets/care-hands.jpg";
import classroomImg from "@/assets/Classroom.JPG";
import portraitImg from "@/assets/student-portrait.jpg";
import { Eyebrow, MaskImage, Reveal, SplitText } from "./primitives";

export function WhyAshrith() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const ghostX = useTransform(scrollYProgress, [0, 1], ["12%", "-22%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-7, -2]);

  return (
    <section
      id="why"
      ref={ref}
      className="relative overflow-hidden py-32 md:py-48"
    >
      <motion.p
        aria-hidden
        style={{ x: ghostX }}
        className="ghost-type absolute left-0 top-24 whitespace-nowrap text-[22vw] leading-none"
      >
        15 YEARS 15 YEARS
      </motion.p>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <Eyebrow>Why Ashrith</Eyebrow>
            <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[0.95] text-[color:var(--primary)]">
              <SplitText
                text={"Healthcare\nEducation Built\nAround Humanity."}
                weights={["font-light", "font-medium", "font-bold"]}
              />
            </h2>

            <Reveal delay={0.2} className="mt-12 max-w-md">
              <p className="text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
                Ashrith Trust (R) was established in 2009 with a commitment to
                making quality healthcare education accessible. The tagline
                Study to Serve the Humanity reflects the institution's
                philosophy that clinical skill must be matched by compassion.
              </p>
              <p className="mt-6 text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
                Located at NH-66, Kota, Udupi, the group runs two institutions
                offering nursing and paramedical programmes recognised by the
                Indian Nursing Council and the State Paramedical Board.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {[
                  ["INC & State Board", "Recognised curriculum"],
                  ["Udupi, Karnataka", "NH-66, Kota campus"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[color:var(--primary)]">
                      {a}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[520px] md:min-h-[680px]">
            <MaskImage
              src={careImg}
              alt="A nurse holding an elderly patient's hand"
              width={1000}
              height={1400}
              className="absolute right-0 top-0 h-[62%] w-[74%] rounded-[32px] shadow-[var(--shadow-float)]"
            />
            <motion.div style={{ y: floatY }} className="absolute -left-2 top-40 w-[52%]">
              <MaskImage
                src={classroomImg}
                alt="Classroom learning environment"
                width={1408}
                height={1008}
                className="aspect-[4/3] rounded-[28px] shadow-[var(--shadow-float)] ring-8 ring-[color:var(--background)]"
              />
            </motion.div>
            <motion.div
              style={{ rotate }}
              className="absolute bottom-0 right-6 w-[42%]"
            >
              <MaskImage
                src={portraitImg}
                alt="Nursing student portrait"
                width={1008}
                height={1312}
                className="aspect-[3/4] rounded-[28px] shadow-[var(--shadow-lift)]"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="glass-light absolute bottom-24 left-0 rounded-[22px] px-5 py-4"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--primary)]">
                1:8
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                Faculty to student ratio
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
