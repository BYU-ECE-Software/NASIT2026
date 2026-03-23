import Image from "next/image";
import Link from "next/link";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";
import { Organizer } from "@/utils/types";

export default function OrganizerCard({ person }: { person: Organizer }) {
  const imageSrc =
    NEXT_PUBLIC_BASE_PATH +
    (person.image || "/images/placeholder-person.jpg");

  const CardInner = (
    <article
      className={[
        "card p-4 md:p-6",
        "flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg",
        person.link ? "cursor-pointer" : "",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative mx-auto w-full max-w-[220px] aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shrink-0 sm:mx-0 sm:w-[140px] sm:max-w-none sm:aspect-[7/8]">
        <Image
          src={imageSrc}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 220px, 140px"
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-col text-center sm:text-left">
        <h3 className="text-lg font-semibold leading-tight">
          {person.name}
        </h3>

        {person.affiliation && (
          <p className="mt-1 text-sm font-medium text-slate-600">
            {person.affiliation}
          </p>
        )}

        {person.role && (
          <p className="mt-1 text-sm text-slate-600">
            {person.role}
          </p>
        )}

        {person.link && (
          <p className="mt-3 text-sm font-medium text-[var(--byu-royal)]">
            View profile →
          </p>
        )}
      </div>
    </article>
  );

  // Make whole card clickable only when a link exists
  if (person.link) {
    const isExternal = /^https?:\/\//i.test(person.link);

    return isExternal ? (
      <a
        href={person.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </a>
    ) : (
      <Link
        href={person.link}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}
