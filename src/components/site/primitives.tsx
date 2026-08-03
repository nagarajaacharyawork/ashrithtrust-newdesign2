import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease },
  },
};

/** Generic scroll reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 36,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.05, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word text reveal for large headings. */
export function SplitText({
  text,
  className,
  delay = 0,
  weights,
}: {
  text: string;
  className?: string;
  delay?: number;
  weights?: string[];
}) {
  const lines = text.split("\n");
  let index = 0;
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden py-[0.06em]">
          <span className={weights?.[li] ?? ""}>
            {line.split(" ").map((word) => {
              const i = index++;
              return (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block whitespace-pre"
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    show: {
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 1.05,
                        ease,
                        delay: delay + i * 0.055,
                      },
                    },
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}
    </motion.span>
  );
}


/** Image that reveals behind a sliding mask and scales gently. */
export function MaskImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.3, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.6, ease }}
      />
    </motion.div>
  );
}

/** Animated number that counts up when scrolled into view. */
export function Counter({
  to,
  suffix = "",
  duration = 1.8,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);
  const start = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (!inView) return;
    if (start.current === null) start.current = t;
    const p = Math.min((t - start.current) / (duration * 1000), 1);
    const eased = 1 - Math.pow(1 - p, 3);
    setValue(Math.round(to * eased));
  });

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/** Button with magnetic pull + ripple. */
export function MagneticButton({
  children,
  variant = "solid",
  href = "#apply",
  className,
  onClick,
}: {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "ember";
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const styles: Record<string, string> = {
    solid:
      "bg-[var(--primary)] text-[color:var(--primary-foreground)] shadow-[var(--shadow-lift)]",
    ember:
      "text-[color:var(--secondary-foreground)] shadow-[var(--shadow-lift)]",
    outline:
      "border border-[color:var(--hairline)] text-[color:var(--foreground)] bg-[color:var(--surface)]/70 backdrop-blur-md",
    ghost:
      "border border-white/35 text-white bg-white/10 backdrop-blur-xl",
  };

  function move(e: MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }

  function ripple(e: MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const id = Date.now();
    setRipples((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 700);
    onClick?.();
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="hover"
      onMouseMove={move}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      onClick={ripple}
      style={{
        x: mx,
        y: my,
        backgroundImage:
          variant === "ember" ? "var(--gradient-ember)" : undefined,
      }}
      whileTap={{ scale: 0.97 }}
      className={`relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold tracking-tight transition-colors duration-300 ${styles[variant]} ${className ?? ""}`}
    >
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="pointer-events-none absolute -z-10 rounded-full bg-current/20"
          style={{ left: r.x, top: r.y }}
          initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 0.5 }}
          animate={{ width: 420, height: 420, opacity: 0 }}
          transition={{ duration: 0.7, ease }}
        />
      ))}
      {children}
    </motion.a>
  );
}

/** Section label with a small hairline rule. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[color:var(--muted-foreground)]">
      <span className="h-px w-10 bg-[color:var(--secondary)]" />
      {children}
    </div>
  );
}

/** Parallax translate on scroll progress of the window. */
export function useMouseParallax(strength = 1) {
  const x = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  useEffect(() => {
    function handler(e: globalThis.MouseEvent) {
      x.set(((e.clientX / window.innerWidth) * 2 - 1) * 22 * strength);
      y.set(((e.clientY / window.innerHeight) * 2 - 1) * 16 * strength);
    }
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [strength, x, y]);

  return { x, y };
}

export { motion, useTransform };
