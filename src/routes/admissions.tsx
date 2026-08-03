import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Process, Faq } from "@/components/site/ProcessFaq";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Admissions 2025–26 | Eligibility, Process & Contact";
const DESCRIPTION =
  "How to apply to Ashrith Group of Institutions: eligibility, documents, the admission process, and frequently asked questions about nursing and paramedical programmes.";

export const Route = createFileRoute("/admissions")({
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
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admissions"
        title={"Applications open\nfor 2026–27."}
        weights={["font-light", "font-bold"]}
        lead="Intake closes 30 September. Counselling begins the first week of October, and seats are confirmed in the order applications are verified."
      />
      <Process />
      <Faq />
      <FinalCta />
    </PageShell>
  );
}
