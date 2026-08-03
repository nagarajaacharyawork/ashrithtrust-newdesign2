import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { CampusLife } from "@/components/site/CampusLife";
import { StudentSuccess } from "@/components/site/StudentSuccess";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Campus Life | Hostel, Clubs, Sports & Outreach";
const DESCRIPTION =
  "Life at Ashrith beyond the ward: hostel living, student clubs, sports, cultural festivals and monthly community outreach camps across Udupi taluk.";

export const Route = createFileRoute("/campus-life")({
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
  component: CampusLifePage,
});

function CampusLifePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Campus life"
        title={"A campus that keeps\nhospital hours."}
        weights={["font-light", "font-bold"]}
        lead="Residences, laboratories, sport and outreach are all built around clinical rotation timings — so student life works whatever shift you are on."
      />
      <CampusLife />
      <StudentSuccess />
      <FinalCta />
    </PageShell>
  );
}
