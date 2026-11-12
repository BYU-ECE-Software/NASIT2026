import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A look back at the people, ideas, and moments of NASIT 2026!" 
        image="/images/heroes/hero-default.webp"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
        >
        <Link
        href={"https://photos.google.com/share/AF1QipOtc5d0Omfvmn44MahLQT4_mp8uehJYnGMxJCSy-sQ79fSMXqD2sb4DTpr9C4B-gw?key=ekRiMlU1RDZjTUFZcTdkYjlqdEJpcV96VGRpNlVB"}
        className="mt-5 inline-flex max-w-full items-center justify-center gap-2 rounded-xl bg-[var(--byu-royal)] px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--byu-navy)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:text-base"
        >
          <span>View or download the full photo album</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 shrink-0"
          >
            <path
              d="M11 3h6v6m-1-5-8 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d="M15 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </Link>
        </PageHero>
      <Container wide>
        <GalleryGrid />
      </Container>
      <br />
    </>
  );
}
