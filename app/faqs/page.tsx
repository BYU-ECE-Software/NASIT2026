import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import { faqs } from "@/data/faqs";
import { thingsToDo } from "@/data/thingsToDo";
import ThingsToDoList from "@/components/lists/ThingsToDoList";

export default function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about registration, venue, and logistics"
        image="/images/heroes/faqs-hero.webp"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />
      <Container>
        <Accordion items={faqs} />
      </Container>
    </>
  );
}
