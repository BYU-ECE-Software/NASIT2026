import Image from "next/image";
import { Speaker } from "@/utils/types";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="card card-hover p-4 md:p-6 grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-4 items-start">
      <div className="relative h-40 w-full sm:h-[140px] sm:w-[140px] overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={NEXT_PUBLIC_BASE_PATH + (speaker.image || "/images/placeholder-person.jpg")  }
          alt={speaker.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold leading-tight">{speaker.name}</h3>
        {speaker.affiliation && (
          <p className="mt-1 text-sm text-slate-600">{speaker.affiliation}</p>
        )}
        {speaker.bio && (
          <p className="mt-3 text-slate-700 leading-relaxed">{speaker.bio}</p>
        )}
      </div>
    </article>
  );
}
