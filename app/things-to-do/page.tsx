import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ThingsToDoList from "@/components/lists/ThingsToDoList";
import { thingsToDo } from "@/data/thingsToDo";

export default function ThingsToDoPage() {
  return (
    <>
      <PageHero
        title="Things to Do"
        subtitle="Make the most of your visit"
        image="/images/heroes/things-hero.jpg"
      />
      <Container>
        <ThingsToDoList items={thingsToDo} />
      </Container>
    </>
  );
}
