import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { WhyAshrith } from "@/components/site/WhyAshrith";
import { Mission } from "@/components/site/Mission";
import { Metrics } from "@/components/site/Metrics";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "About Ashrith Trust | Vision, Mission & History";
const DESCRIPTION =
  "About Ashrith Group of Institutions — managed by Ashrith Trust (R), established in 2009 at NH-66, Kota, Udupi, Karnataka. Nursing and allied health education guided by the mission to Study to Serve the Humanity.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About the trust"
        title={"About Ashrith Trust."}
        weights={["font-light", "font-bold"]}
        lead="Ashrith Trust (R) was established in 2009 to provide quality nursing and allied health education. Located at NH-66, Kota, Udupi, the group is guided by the tagline Study to Serve the Humanity."
      />
      <WhyAshrith />
      <Mission />
      <Metrics />
      <FinalCta />
    </PageShell>
  );
}
