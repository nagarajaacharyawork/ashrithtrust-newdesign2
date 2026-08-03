import { motion } from "framer-motion";
import { Eyebrow, ease } from "./primitives";
import { CAMPUS_LIFE_TILES } from "./data";
import { Section } from "./PageShell";

const COPY: Record<string, string> = {
  Hostel:
    "Residential facilities for students, warden-supervised, with mess service and an environment designed around the needs of nursing and paramedical students.",
  Laboratories:
    "Specialised laboratories for nursing skills, medical laboratory technology, ophthalmic technology and dialysis training, equipped for hands-on practice.",
  Events:
    "Nurses Day celebrations, cultural programmes and institutional events that build community spirit and recognise student achievement.",
  Sports:
    "Sports and physical activities including inter-college competitions, promoting fitness and teamwork alongside academic and clinical training.",
  "Community Outreach":
    "Regular community health camps across Udupi Taluk — health screening, immunisation and health education delivered by students under faculty supervision.",
  Library:
    "A well-stocked library with nursing and paramedical textbooks, reference materials and journals to support academic and clinical learning.",
};

export function CampusLife() {
  return (
    <Section id="campus-life">
      <Eyebrow>Campus life</Eyebrow>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CAMPUS_LIFE_TILES.map((tile, i) => (
          <motion.article
            key={tile.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
            className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-[color:var(--surface)] shadow-[var(--shadow-soft)] transition-transform duration-500 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={tile.image}
                alt={tile.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.3em] text-white/85">
                0{i + 1}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--primary)]">
                {tile.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.85] text-[color:var(--muted-foreground)]">
                {COPY[tile.title]}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
