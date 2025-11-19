import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import { faqs } from "@/data/faqs";

export default function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about registration, venue, and logistics"
        image="/images/heroes/faqs-hero.jpg"
        height={380}
        position="center 30%"
      />
      <Container>
        <Accordion items={faqs} />
      </Container>
      <br></br>
    </>
  );
}
