import Image from "next/image";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";
import { Organizer } from "@/utils/types";

export default function OrganizerCard({ person }: { person: Organizer }) {
  const nameElement = person.link ? (
    <a
      href={person.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold leading-tight hover:text-[var(--byu-royal)] transition-colors"
    >
      {person.name}
    </a>
  ) : (
    <h3 className="text-lg font-semibold leading-tight">{person.name}</h3>
  );

  return (
    <article className="card card-hover p-4 md:p-6 grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-4">
      <div className="relative h-40 w-full sm:h-48 sm:w-[140px] overflow-hidden rounded-xl bg-slate-100 shrink-0">
        <Image
          src={NEXT_PUBLIC_BASE_PATH + (person.image || "/images/placeholder-person.jpg")}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        {nameElement}
        {person.affiliation && (
          <p className="mt-1 text-sm text-slate-600">{person.affiliation}</p>
        )}
        {person.role && (
          <p className="mt-1 text-sm text-slate-600">{person.role}</p>
        )}
      </div>
    </article>
  );
}
