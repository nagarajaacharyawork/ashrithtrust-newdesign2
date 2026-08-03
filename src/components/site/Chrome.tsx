import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/ashrithlogo.png";
import { ease } from "./primitives";

/** Lenis smooth scrolling, mounted once. */
export function SmoothScroll() {
  useEffect(() => {
    let raf = 0;
    let instance: { raf: (t: number) => void; destroy: () => void } | null =
      null;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        lerp: 0.09,
      });
      instance = lenis;
      const loop = (t: number) => {
        lenis.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, []);

  return null;
}

/** Cinematic loading curtain shown on first paint. */
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--gradient-deep)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.1, ease }}
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,4vw,3rem)] font-medium tracking-tight text-white"
            >
              Ashrith
            </motion.p>
            <motion.div
              className="mx-auto mt-5 h-px w-40 origin-left bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/50"
            >
              Group of Institutions
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Soft custom cursor that morphs over interactive elements. */
export function Cursor() {
  const x = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40 });
  const y = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    function move(e: globalThis.MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(
        !!el?.closest?.(
          "a,button,[data-cursor='hover'],input,summary,[role='button']",
        ),
      );
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[95] hidden rounded-full border border-[color:var(--primary)]/40 mix-blend-multiply md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: active ? 54 : 14,
        height: active ? 54 : 14,
        backgroundColor: active
          ? "oklch(0.7115 0.174 51.34 / 0.16)"
          : "oklch(0.2953 0.0776 253.57 / 0.5)",
      }}
      transition={{ duration: 0.25, ease }}
    />
  );
}

const LINKS = [
  { label: "About", to: "/about" },
  { label: "Institutions", to: "/institutions" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Contact", to: "/contact" },
];

const ALL_LINKS = [
  { label: "Home", to: "/" },
  ...LINKS.slice(0, 5),
  { label: "Facilities", to: "/facilities" },
  { label: "Leadership", to: "/leadership" },
  { label: "Gallery", to: "/gallery" },
  { label: "News & Events", to: "/news" },
  { label: "Contact", to: "/contact" },
];

/** Floating glass navigation that hides on scroll-down, returns on scroll-up. */
export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setSolid(y > 120);
      setHidden(y > 220 && y > last);
      last = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
      >
        <nav
          className={`grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[28px] px-5 py-3 transition-all duration-500 md:px-7 lg:flex lg:justify-between ${
            solid ? "glass-light" : "glass"
          }`}
        >
          <Link
            to="/"
            className={`min-w-0 truncate font-[family-name:var(--font-display)] text-base font-semibold tracking-tight transition-colors ${
              solid ? "text-[color:var(--primary)]" : "text-white"
            }`}
          >
            <img
              src={logoImg}
              alt="Ashrith Group of Institutions"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ "data-active": "true" }}
                className={`group relative text-[13px] font-medium transition-colors data-[active=true]:text-[color:var(--secondary)] ${
                  solid
                    ? "text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-[color:var(--secondary)] transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/apply"
              className="hidden rounded-full bg-[color:var(--secondary)] px-5 py-2.5 text-[13px] font-semibold text-[color:var(--secondary-foreground)] transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
                solid ? "bg-[color:var(--muted)]" : "bg-white/15"
              }`}
            >
              <span
                className={`block h-[9px] w-4 border-y transition-colors ${
                  solid ? "border-[color:var(--primary)]" : "border-white"
                }`}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease }}
            className="glass-light fixed inset-x-4 top-24 z-50 max-h-[70vh] overflow-y-auto rounded-[28px] p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {ALL_LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--primary)] transition-colors hover:bg-[color:var(--muted)]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Thumb-friendly sticky action bar for mobile. */
export function MobileApplyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 p-3 sm:hidden">
      <Link
        to="/apply"
        className="flex-1 rounded-full py-4 text-center text-sm font-semibold text-[color:var(--secondary-foreground)] shadow-[var(--shadow-float)]"
        style={{ backgroundImage: "var(--gradient-ember)" }}
      >
        Apply Now
      </Link>
      <a
        href="tel:+919148087860"
        className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[color:var(--primary)] text-lg text-[color:var(--primary-foreground)] shadow-[var(--shadow-float)]"
        aria-label="Call admissions"
      >
        ✆
      </a>
    </div>
  );
}
