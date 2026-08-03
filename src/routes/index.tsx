import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Chrome";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import {
  AboutIntro,
  CampusExperience,
  InstitutionsPreview,
  LatestNews,
  LeadershipPreview,
  ProgramsPreview,
  TestimonialsPreview,
} from "@/components/site/HomeSections";
import { GalleryMarquee } from "@/components/site/GalleryMarquee";
import { FinalCta } from "@/components/site/Closing";

const TITLE = "Ashrith Group of Institutions | Nursing & Paramedical, Udupi";
const DESCRIPTION =
  "Nursing and allied health education in Udupi since 2011. Simulation-led teaching, eight partner hospitals, 13 degree and diploma programs. Admissions open.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: "Ashrith Group of Institutions",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ashrith Campus, Manipal Road",
            addressLocality: "Udupi",
            addressRegion: "Karnataka",
            postalCode: "576101",
            addressCountry: "IN",
          },
          telephone: "+91 98765 43210",
          email: "admissions@ashrith.edu.in",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <PageShell>
        <Hero />
        <AboutIntro />
        <InstitutionsPreview />
        <ProgramsPreview />
        <Metrics />
        <CampusExperience />
        <LeadershipPreview />
        <GalleryMarquee />
        <TestimonialsPreview />
        <LatestNews />
        <FinalCta />
      </PageShell>
    </>
  );
}
