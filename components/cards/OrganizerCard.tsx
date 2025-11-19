import Image from "next/image";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";
import { Organizer } from "@/utils/types";

export default function OrganizerCard({ person }: { person: Organizer }) {
  return (
    <article className="card card-hover p-4 grid grid-cols-[100px,1fr] gap-4 items-center">
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={NEXT_PUBLIC_BASE_PATH + (person.image || "/images/placeholder-person.jpg")}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium">{person.name}</h3>
        {person.role && <p className="text-sm text-slate-600">{person.role}</p>}
        {person.affiliation && <p className="text-sm text-slate-600">{person.affiliation}</p>}
        </div>
    </article>
  );
}
