import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Gallery } from "@/components/site/Gallery";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Gallery | Campus, Labs, Events & Graduation";
const DESCRIPTION =
  "Photographs from across the Ashrith campus — laboratories, library, hostel, sports evenings, cultural nights and graduation day.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Gallery"
        title={"A year on campus,\nin pictures."}
        weights={["font-light", "font-bold"]}
      />
      <Gallery />
      <FinalCta />
    </PageShell>
  );
}
