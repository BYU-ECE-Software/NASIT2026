import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PosterCard from "@/components/cards/PosterCard";
import { posters } from "@/data/posters";

export default function PostersPage() {
  return (
    <>
      <PageHero
        title="Posters"
        subtitle="Explore posters from presenters"
        image="/images/heroes/posters-hero.jpg"
      />
      <Container wide>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posters.map((p) => (
            <PosterCard key={p.id} poster={p} />
          ))}
        </div>
      </Container>
    </>
  );
}
