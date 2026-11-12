import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryPhoto } from "@/data/gallery";

export default function PhotoShowcase({
  title,
  photos,
}: {
  title: string;
  photos: GalleryPhoto[];
}) {
  return (
    <section className="my-10" aria-label={title}>
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
        {title}
      </h2>
      <GalleryGrid photos={photos} />
    </section>
  );
}
