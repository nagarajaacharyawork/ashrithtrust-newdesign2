import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, PageShell, Section } from "@/components/site/PageShell";
import { Eyebrow, ease } from "@/components/site/primitives";
import { LinkButton } from "@/components/site/LinkButton";

const TITLE = "Contact Ashrith | Admissions Office, Udupi";
const DESCRIPTION =
  "Reach Ashrith Group of Institutions at NH-66, Kota, Udupi — phone, email, campus address and office hours. Managed by Ashrith Trust (R).";

const DETAILS = [
  { label: "Campus", value: "NH-66, Kota, Udupi Taluk & District, Karnataka – 576221" },
  { label: "Phone", value: "+91 91480 87860 / +91 91480 87861" },
  { label: "Email", value: "info@ashritheducationtrust.org" },
  { label: "Office hours", value: "Monday to Saturday, 9:00 am – 5:30 pm" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={"Come and see\nthe wards."}
        weights={["font-light", "font-bold"]}
        lead="Campus visits run every weekday morning. Call ahead and we will pair you with a final-year student for the tour."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Reach us</Eyebrow>
            <dl className="mt-10 space-y-8">
              {DETAILS.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease }}
                >
                  <dt className="text-[10px] uppercase tracking-[0.26em] text-[color:var(--muted-foreground)]">
                    {d.label}
                  </dt>
                  <dd className="mt-2 font-[family-name:var(--font-display)] text-lg text-[color:var(--primary)]">
                    {d.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
            <div className="mt-12">
              <LinkButton to="/apply" variant="ember">
                Apply Now
              </LinkButton>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)]">
              <iframe
                title="Ashrith Group of Institutions campus location, Udupi"
                src="https://www.google.com/maps?q=NH-66+Kota+Udupi+Karnataka+576221&z=14&output=embed"
                loading="lazy"
                className="h-[420px] w-full border-0 md:h-[540px]"
              />
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
