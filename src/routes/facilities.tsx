import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Campus } from "@/components/site/Campus";
import { LearningExperience } from "@/components/site/LearningExperience";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Facilities | Simulation Labs, Library & Clinical Training";
const DESCRIPTION =
  "Nine specialised laboratories, high-fidelity simulation suites, a 12,000-title library and rotations across eight partner hospitals in coastal Karnataka.";

export const Route = createFileRoute("/facilities")({
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
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Facilities"
        title={"Equipment you will\nmeet again on shift."}
        weights={["font-light", "font-bold"]}
        lead="Our laboratories are specified against district hospital wards, so the first day of a clinical posting feels like a familiar room."
      />
      <Campus />
      <LearningExperience />
      <FinalCta />
    </PageShell>
  );
}
