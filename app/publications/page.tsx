import { PageHeading } from "@/components/ui/PageHeading";
import { PublicationsList } from "@/components/sections/PublicationsList";

export default function PublicationsPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-6xl mx-auto py-16">
      <PageHeading title="Publications" subtitle="Peer-reviewed papers and preprints" />
      <PublicationsList />
    </div>
  );
}
