import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Institutions } from "@/components/site/Institutions";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Our Institutions | Nursing & Paramedical Colleges, Udupi";
const DESCRIPTION =
  "Ashrith College & School of Nursing and K. R. Hegde College of Paramedical Sciences — recognised programmes, intake, faculty and clinical training at NH-66, Kota, Udupi.";

export const Route = createFileRoute("/institutions")({
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
  component: InstitutionsPage,
});

function InstitutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our institutions"
        title={"Two colleges,\none standard of care."}
        weights={["font-light", "font-bold"]}
        lead="Each institution runs its own faculty, laboratories and clinical calendar — under a single academic council and one shared code of practice."
      />
      <Institutions />
      <FinalCta />
    </PageShell>
  );
}
