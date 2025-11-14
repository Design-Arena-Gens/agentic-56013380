import { PageHeading } from "@/components/ui/PageHeading";

export default function ContactPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 max-w-4xl mx-auto py-16">
      <PageHeading title="Contact" subtitle="Collaborations, talks, and inquiries" />
      <div className="neural-card p-8 mt-8">
        <p className="text-muted">
          I welcome collaboration across neuroscience, AI, and systems biology. For speaking engagements or research inquiries, reach me at
          <a className="link-underline text-foreground ml-2" href="mailto:research@cognitivewaves.org">research@cognitivewaves.org</a>.
        </p>
      </div>
    </div>
  );
}
