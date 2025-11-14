import { PageHeading } from "@/components/ui/PageHeading";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-6xl mx-auto py-16">
      <PageHeading title="Projects" subtitle="Selected work & prototypes" />
      <ProjectsGrid full />
    </div>
  );
}
