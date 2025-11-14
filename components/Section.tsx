import Link from "next/link";
import { ReactNode } from "react";

export function Section({ title, href, children }: { title: string; href?: string; children: ReactNode }) {
  return (
    <section className="px-6 sm:px-8 md:px-10 max-w-6xl mx-auto py-14">
      <div className="flex items-end justify-between">
        <h2 className="text-xl tracking-tight">{title}</h2>
        {href ? (
          <Link href={href} className="text-sm text-muted hover:text-foreground transition-colors link-underline">
            View all
          </Link>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
