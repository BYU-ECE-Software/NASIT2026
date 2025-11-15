"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/program", label: "Program" },
  { href: "/organizers", label: "Organizers" },
  { href: "/posters", label: "Posters" },
  { href: "/things-to-do", label: "Things to Do" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="flex gap-1 ">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors
${active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
