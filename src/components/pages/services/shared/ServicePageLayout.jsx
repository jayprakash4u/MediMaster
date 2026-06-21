import ServiceHero from "@/components/ui/ServiceHero";
import ServiceIntro from "@/components/pages/services/shared/ServiceIntro";
import ServiceTypesSection from "@/components/pages/services/shared/ServiceTypesSection";
import ServiceRoadmap from "@/components/pages/services/shared/ServiceRoadmap";
import ServiceCta from "@/components/pages/services/shared/ServiceCta";

export default function ServicePageLayout({
  hero,
  floatingIcons = [],
  intro,
  types,
  process,
  cta,
  roadmapHeader,
}) {
  return (
    <main className="overflow-x-hidden">
      <ServiceHero {...hero} floatingIcons={floatingIcons} />
      <ServiceIntro activeHref={intro.activeHref} {...intro} />
      <ServiceTypesSection {...types} />
      {process ? <ServiceRoadmap process={process} {...roadmapHeader} /> : null}
      <ServiceCta {...cta} />
    </main>
  );
}
