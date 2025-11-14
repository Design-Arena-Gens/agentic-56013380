import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PublicationsPreview } from "@/components/sections/PublicationsPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Selected Projects" href="/projects">
        <ProjectsPreview />
      </Section>
      <Section title="Recent Publications" href="/publications">
        <PublicationsPreview />
      </Section>
    </>
  );
}
