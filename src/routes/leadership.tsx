import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Leadership } from "@/components/site/Leadership";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Leadership | Trustees of Ashrith Trust";
const DESCRIPTION =
  "Meet the trustees and leaders of Ashrith Group of Institutions — the board that guides nursing and allied health education at Ashrith Trust (R).";

export const Route = createFileRoute("/leadership")({
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
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Leadership"
        title={"The people who\nsign the standard."}
        weights={["font-light", "font-bold"]}
        lead="Clinicians and educators who still teach, still round, and still review every curriculum change before it reaches a classroom."
      />
      <Leadership />
      <FinalCta />
    </PageShell>
  );
}
