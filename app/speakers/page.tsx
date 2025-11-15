import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SpeakerCard from "@/components/cards/SpeakerCard";
import { speakers } from "@/data/speakers";

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        title="Speakers"
        subtitle="Meet our invited and featured speakers"
        image="/images/heroes/speakers-hero.jpg"
      />
      <Container wide>
        <div className="grid gap-4">
          {speakers.map((s) => (
            <SpeakerCard key={s.id} speaker={s} />
          ))}
        </div>
      </Container>
    </>
  );
}
