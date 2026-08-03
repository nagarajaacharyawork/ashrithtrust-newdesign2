import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Eyebrow, SplitText } from "./primitives";

const STEPS = [
  {
    title: "Choose your course",
    copy: "Speak to an admissions counsellor about eligibility, fee structure and which pathway matches your marks and intent.",
  },
  {
    title: "Submit application",
    copy: "Complete the online form with your marks card, transfer certificate and a passport photograph. No application fee.",
  },
  {
    title: "Document verification",
    copy: "Originals are verified on campus or over a scheduled video call for out-of-district applicants.",
  },
  {
    title: "Admission confirmed",
    copy: "Provisional letter issued within 72 hours, followed by seat confirmation on first-instalment payment.",
  },
  {
    title: "Orientation",
    copy: "A week of campus induction, uniform fitting, hospital tour and mentor allocation before classes begin.",
  },
];

const FAQS = [
  {
    q: "What is the eligibility for B.Sc Nursing?",
    a: "10+2 with Physics, Chemistry and Biology, minimum 45% aggregate, and a minimum age of 17 years as on 31 December of the admission year.",
  },
  {
    q: "What is the eligibility for GNM?",
    a: "10+2 in any stream with minimum 40% aggregate. Candidates must be at least 17 years of age.",
  },
  {
    q: "What is the eligibility for ANM?",
    a: "10+2 with minimum 40% aggregate. The ANM programme is offered at Ashrith School of Nursing.",
  },
  {
    q: "What paramedical programmes are offered?",
    a: "K. R. Hegde College of Paramedical Sciences offers Diploma in Medical Laboratory Technology, Diploma in Operation Theatre Technology, Diploma in Ophthalmic Technology and Diploma in Dialysis Technology.",
  },
  {
    q: "Where is the campus located?",
    a: "The campus is located at NH-66, Kota, Udupi Taluk & District, Karnataka – 576221.",
  },
  {
    q: "How can I contact the admissions office?",
    a: "You can reach us at +91 91480 87860 or +91 91480 87861, or email info@ashritheducationtrust.org.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section className="relative py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6">
        <Eyebrow>Application process</Eyebrow>
        <h2 className="mt-8 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] text-[color:var(--primary)]">
          <SplitText
            text={"Five steps.\nNo agents."}
            weights={["font-light", "font-bold"]}
          />
        </h2>

        <div ref={ref} className="relative mt-20 pl-12 md:pl-20">
          <div className="absolute left-[15px] top-2 h-full w-px bg-[color:var(--hairline)] md:left-[23px]" />
          <motion.div
            style={{ scaleY: line }}
            className="absolute left-[15px] top-2 h-full w-px origin-top bg-[color:var(--secondary)] md:left-[23px]"
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative pb-16 last:pb-0"
            >
              <span className="absolute -left-12 top-0 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--primary)] text-[11px] font-semibold text-[color:var(--primary-foreground)] md:-left-20 md:h-12 md:w-12 md:text-sm">
                {i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--primary)] md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
                {s.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative pb-32 md:pb-44">
      <div className="mx-auto max-w-4xl px-6">
        <Eyebrow>Questions</Eyebrow>
        <div className="mt-14">
          {FAQS.map((f, i) => (
            <div key={f.q} className="border-b border-[color:var(--hairline)]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="font-[family-name:var(--font-display)] text-lg font-medium text-[color:var(--primary)] md:text-xl">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 135 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:var(--hairline)] text-[color:var(--primary)]"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-8 text-[15px] leading-[1.9] text-[color:var(--muted-foreground)]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
