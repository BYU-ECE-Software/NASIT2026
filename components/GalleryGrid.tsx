"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryPhotos, type GalleryPhoto } from "@/data/gallery";
import { NEXT_PUBLIC_BASE_PATH } from "@/next.config";

export default function GalleryGrid({
  photos = galleryPhotos,
}: {
  photos?: GalleryPhoto[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + photos.length) % photos.length,
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % photos.length,
        );
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable.item(0);
        const last = focusable.item(focusable.length - 1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [isOpen, photos]);

  if (photos.length === 0) {
    return (
      <section
        aria-labelledby="gallery-empty-title"
        className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm sm:px-12"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[var(--byu-royal)]">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
            <circle cx="9" cy="9" r="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m5 17 4.5-4.5a1.4 1.4 0 0 1 2 0l1.5 1.5 1-1a1.4 1.4 0 0 1 2 0L19 17" />
          </svg>
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--byu-royal)]">
          The moments that bring us together
        </p>
        <h2 id="gallery-empty-title" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Photos are on the way
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-slate-600">
          We’re gathering highlights from NASIT 2026. Check back soon to revisit the people, ideas, and moments that made the week special.
        </p>
      </section>
    );
  }

  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`View photo ${index + 1}: ${photo.alt || "NASIT 2026 conference photo"}`}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--byu-royal)]"
          >
            <span
              className="relative block overflow-hidden bg-slate-100"
              style={{ aspectRatio: ["4 / 3", "3 / 4", "1 / 1", "4 / 3"][index % 4] }}
            >
              <Image
                src={NEXT_PUBLIC_BASE_PATH + photo.src}
                alt={photo.alt || "NASIT 2026 conference photo"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                View photo
              </span>
            </span>
            {photo.caption && (
              <span className="block px-4 py-3 text-sm leading-relaxed text-slate-700">
                {photo.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${activeIndex! + 1} of ${photos.length}`}
            className="relative flex h-[min(88dvh,900px)] max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-slate-950 shadow-2xl"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3 sm:p-4">
              <span className="rounded-full bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                {activeIndex! + 1} / {photos.length}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close photo viewer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 bg-black"
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStartRef.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                const start = touchStartRef.current;
                touchStartRef.current = null;
                if (!start || photos.length < 2) return;

                const touch = event.changedTouches[0];
                const deltaX = touch.clientX - start.x;
                const deltaY = touch.clientY - start.y;
                if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;

                setActiveIndex((index) =>
                  index === null
                    ? null
                    : (index + (deltaX < 0 ? 1 : -1) + photos.length) % photos.length,
                );
              }}
            >
              <Image
                key={activePhoto.src}
                src={NEXT_PUBLIC_BASE_PATH + activePhoto.src}
                alt={activePhoto.alt || "NASIT 2026 conference photo"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex! - 1 + photos.length) % photos.length)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5"
                  >
                    <span aria-hidden="true">‹</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex! + 1) % photos.length)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-3xl text-white backdrop-blur transition hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5"
                  >
                    <span aria-hidden="true">›</span>
                  </button>
                </>
              )}
            </div>

            {activePhoto.caption && (
              <p className="px-5 py-4 text-center text-sm leading-relaxed text-white sm:text-base">
                {activePhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
