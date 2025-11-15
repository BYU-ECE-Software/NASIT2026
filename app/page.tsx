import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Annual University Conference"
        subtitle="Join researchers, engineers, and students for talks, posters, and community."
        image="/hero-default.jpg"
      />
      <Container wide>
        <Section title="Welcome">
          <p>
            The Annual University Conference brings together academia and
            industry to share advances in computing research and education.
            Explore the program, meet the speakers, and enjoy our campus and
            city.
          </p>
        </Section>
        <Section title="Key Info">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="card p-4">
              <strong>Dates:</strong> Oct 10–12, 2025
            </li>
            <li className="card p-4">
              <strong>Location:</strong> Our University, Main Campus
            </li>
            <li className="card p-4">
              <strong>Venue:</strong> Science Hall
            </li>
            <li className="card p-4">
              <strong>Contact:</strong> conference@example.edu
            </li>
          </ul>
        </Section>
      </Container>
    </>
  );
}
