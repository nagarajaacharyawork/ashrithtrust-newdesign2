import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const MotionLink = motion.create(Link);

const STYLES: Record<string, string> = {
  solid:
    "bg-[var(--primary)] text-[color:var(--primary-foreground)] shadow-[var(--shadow-lift)]",
  ember: "text-[color:var(--secondary-foreground)] shadow-[var(--shadow-lift)]",
  outline:
    "border border-[color:var(--hairline)] text-[color:var(--foreground)] bg-[color:var(--surface)]/70 backdrop-blur-md",
  ghost: "border border-white/35 text-white bg-white/10 backdrop-blur-xl",
};

/** Magnetic call-to-action that navigates with the client router. */
export function LinkButton({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof STYLES;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  function move(e: MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }

  return (
    <MotionLink
      ref={ref}
      to={to}
      data-cursor="hover"
      onMouseMove={move}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{
        x: mx,
        y: my,
        backgroundImage:
          variant === "ember" ? "var(--gradient-ember)" : undefined,
      }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-tight transition-colors duration-300 ${STYLES[variant]} ${className ?? ""}`}
    >
      {children}
    </MotionLink>
  );
}

/** Small text link with an animated arrow, used under section previews. */
export function ArrowLink({
  to,
  children,
  tone = "dark",
}: {
  to: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      to={to}
      data-cursor="hover"
      className={`group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
        tone === "light"
          ? "text-white/80 hover:text-white"
          : "text-[color:var(--primary)] hover:text-[color:var(--secondary)]"
      }`}
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1.5">
        →
      </span>
    </Link>
  );
}
