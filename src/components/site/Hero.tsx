import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/College_Image.JPG";
import { Counter, MagneticButton, ease, useMouseParallax } from "./primitives";

const STATS = [
  { value: 15, suffix: "+", label: "Years of service" },
  { value: 2, suffix: "", label: "Institutions" },
  { value: 7, suffix: "", label: "Programmes offered" },
  { value: 270, suffix: "+", label: "Sanctioned seats" },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 137) % 100,
  top: (i * 61) % 100,
  size: 2 + (i % 4),
  delay: (i % 7) * 0.9,
  duration: 12 + (i % 5) * 4,
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.22]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { x, y } = useMouseParallax(1);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ y: bgY, scale: bgScale }}
      >
        <motion.div className="h-full w-full" style={{ x, y }}>
          <img
            src={heroImg}
            alt="Ashrith campus at golden hour"
            width={1920}
            height={1088}
            fetchPriority="high"
            className="h-full w-full scale-110 object-cover"
          />
        </motion.div>
      </motion.div>
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-veil)" }}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40 blur-[1px]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -70, 0], opacity: [0, 0.7, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-28 pt-36 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10 lg:pb-24"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.9, ease }}
            className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)]" />
            Admissions open 2025–26
          </motion.div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.045em] text-white">
            {["Study", "to Serve", "Humanity."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${
                    i === 0
                      ? "font-light"
                      : i === 1
                        ? "font-medium italic opacity-80"
                        : "font-bold"
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.75 + i * 0.12, duration: 1.2, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 1, ease }}
            className="mt-9 max-w-xl text-[15px] leading-relaxed text-white/72 md:text-[17px]"
          >
            Ashrith Group of Institutions, managed by Ashrith Trust (R),
            provides quality nursing and allied health education at NH-66,
            Kota, Udupi — guided by the tagline Study to Serve the Humanity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 1, ease }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <MagneticButton variant="ember" href="#apply">
              Apply Now
            </MagneticButton>
            <MagneticButton variant="ghost" href="#institutions">
              Explore Institutions
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          style={{ x, y }}
          className="hidden gap-4 lg:grid lg:grid-cols-2"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.2 + i * 0.13, duration: 1, ease }}
              whileHover={{ y: -8 }}
              className={`glass rounded-[24px] p-5 ${i % 2 ? "mt-8" : ""}`}
            >
              <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/45 lg:left-6 lg:translate-x-0"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
