import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="North American School of Information Theory 2026 Conference"
        subtitle="Join researchers, engineers, and students for talks, posters, and community."
        image="/images/heroes/hero-default.jpg"
      />
      <Container wide>
        <Section title="Welcome">
          <p>
            The Annual NASIT Conference brings together academia and
            industry to share advances in computing research and education.
            Explore the program, meet the speakers, and enjoy our campus and
            city.
          </p>
        </Section>
        <Section title="Key Info">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="card p-4">
              <strong>Dates:</strong> June 22-26, 2026
            </li>
            <li className="card p-4">
              <strong>Location:</strong> Brigham Young University, Provo, UT
            </li>
            <li className="card p-4">
              <strong>Venue:</strong> Engineering Building Event Space
            </li>
            <li className="card p-4">
              <strong>Contact:</strong> romanv7@byu.edu
            </li>
          </ul>
        </Section>
        <Section title = "Registration Info">
          <p>
            Registration opens soon! Stay tuned for updates on rates
            and deadlines.
          </p>
          <a
            href="https://ece.byu.edu"
            className="inline-block bg-[var(--byu-royal)] text-white px-6 py-3 rounded-md hover:bg-[var(--byu-navy)] transition"
          >
            Register Now
          </a>
        </Section>
      </Container>
      <br></br>
    </>
  );
}
