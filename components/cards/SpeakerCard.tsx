import Image from "next/image";
import Link from "next/link";
import { Speaker } from "@/utils/types";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const imageSrc =
    NEXT_PUBLIC_BASE_PATH + (speaker.image || "/images/placeholder-person.jpg");

  const CardInner = (
    <article
      id={speaker.id}
      className={[
        "card p-4 md:p-6",
        "flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-lg",
        speaker.link ? "cursor-pointer" : "",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative mx-auto w-full max-w-[220px] aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 shrink-0 sm:mx-0 sm:w-[140px] sm:max-w-none sm:aspect-[7/8]">
        <Image
          src={imageSrc}
          alt={speaker.name}
          fill
          sizes="(max-width: 640px) 220px, 140px"
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-col text-center sm:text-left">
        <h3 className="text-lg font-semibold leading-tight">
          {speaker.name}
        </h3>

        {speaker.affiliation && (
          <p className="mt-1 text-sm font-medium text-slate-600">
            {speaker.affiliation}
          </p>
        )}

        {speaker.bio && (
          <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
            {speaker.bio}
          </p>
        )}

        {speaker.link && (
          <p className="mt-3 text-sm font-medium text-[var(--byu-royal)]">
            View profile →
          </p>
        )}
      </div>
    </article>
  );

  // Whole card clickable only if there is a link destination
  if (speaker.link) {
    const isExternal = /^https?:\/\//i.test(speaker.link);

    return isExternal ? (
      <a
        href={speaker.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </a>
    ) : (
      <Link
        href={speaker.link}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--byu-royal)] rounded-2xl"
      >
        {CardInner}
      </Link>
    );
  }

  return CardInner;
}
