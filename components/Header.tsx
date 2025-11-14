"use client";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Magnetic>
      <Link
        href={href}
        className={clsx(
          "relative px-3 py-1 rounded-md transition-colors",
          active ? "text-foreground" : "text-muted hover:text-foreground"
        )}
      >
        <span className="link-underline">{label}</span>
      </Link>
    </Magnetic>
  );
};

export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-background/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm tracking-widest text-muted hover:text-foreground transition-colors">
          COGNITIVE WAVES
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/publications" label="Publications" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}
