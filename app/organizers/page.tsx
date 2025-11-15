import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import OrganizerCard from "@/components/cards/OrganizerCard";
import { organizers } from "@/data/organizers";

export default function OrganizersPage() {
  return (
    <>
      <PageHero
        title="Organizers"
        subtitle="The team behind the conference"
        image="/images/heroes/organizers-hero.jpg"
      />
      
      <Container wide>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizers.map((p) => (
            <OrganizerCard key={p.id} person={p} />
          ))}
        </div>
      </Container>
    </>
  );
}
