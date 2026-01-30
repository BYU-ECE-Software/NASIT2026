import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SponsorLogo from "@/components/cards/SponsorLogo";
import { sponsors } from "@/data/sponsors";

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        title="Sponsors"
        subtitle="We thank our sponsors for their generous support"
        image="/images/heroes/sponsors-hero.webp"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />
      <Container wide>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sponsors.map((s) => (
            <SponsorLogo key={s.id} sponsor={s} />
          ))}
        </div>
      </Container>
      <br></br>
    </>
  );
}
