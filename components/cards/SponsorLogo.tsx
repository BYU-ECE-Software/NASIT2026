import Image from "next/image";
import { Sponsor } from "@/utils/types";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <figure className="card card-hover p-4 flex items-center justify-center h-28">
      <Image
        src={NEXT_PUBLIC_BASE_PATH + (sponsor.logo || "/images/placeholder-logo.png")}
        alt={sponsor.name}
        width={180}
        height={80}
        className="object-contain"
      />
    </figure>
  );
}
