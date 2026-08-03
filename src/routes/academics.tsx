import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Programs } from "@/components/site/Programs";
import { LearningExperience } from "@/components/site/LearningExperience";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Academics | 7 Nursing & Allied Health Programs";
const DESCRIPTION =
  "Degree and diploma programmes at Ashrith — B.Sc Nursing, GNM, ANM, Diploma in MLT, OT Technology, Ophthalmic Technology and Dialysis Technology.";

export const Route = createFileRoute("/academics")({
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
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Academics"
        title={"Thirteen pathways\ninto healthcare."}
        weights={["font-light", "font-bold"]}
        lead="Every program is recognised by the Indian Nursing Council or the State Paramedical Board, and every semester carries supervised clinical hours."
      />
      <Programs />
      <LearningExperience />
      <FinalCta />
    </PageShell>
  );
}
