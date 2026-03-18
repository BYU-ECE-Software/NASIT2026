import Container from "@/components/Container";
import HomepageHero from "@/components/HomepageHero";
import Section from "@/components/Section";

export const metadata = {
  title: "NASIT 2026 Conference",
  description:
    "Join researchers, engineers, and students for talks, posters, and community at the North American School of Information Theory 2026 Conference.",
};

export default function HomePage() {
  return (
    <>
      <HomepageHero
        title="North American School of Information Theory 2026 Conference"
        subtitle="Join researchers, engineers, and students for talks, posters, and community."
        image="/images/heroes/hero-default.jpg"
        heroText="2026 North American School of Information Theory"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />
      <Container wide>
        <Section title="">
          <p>
            The 2026 North American School of Information Theory (NASIT) will be held from <b> Monday, June 22nd to Friday, June 26th </b> at <b> Brigham Young University in Provo, UT, USA. </b> The school brings together graduate students and postdoctoral researchers for an immersive introduction to emerging research directions in information theory and its applications.
          </p>
          <p>
            NASIT 2026 will feature lectures by leading researchers and student poster presentations, creating a collaborative environment that supports both technical learning and community building. Participants will gain exposure to a broad spectrum of areas within information theory—ranging from classical coding and communication theory to modern developments in machine learning, data science, and networked systems.
          </p>
          <p>
            A central goal of the school is to foster connections among young researchers across universities worldwide. By combining high‑quality instruction with opportunities for informal interaction, NASIT 2026 continues the tradition of preparing the next generation of information theorists for impactful careers in research.
          </p>
          <p>
            All academic events will be held in the 2nd floor event space of the BYU Engineering Building in Provo, UT. The school will also feature an exciting excursion into the Wasatch mountains. Stay tuned for more information on speakers and schedule!
          </p>
        </Section>

        {/* Jamison Edit */}
        {/* <Section title="Key Info">
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
        </Section> */}

        <Section title = "Registration Info" >
          <p>
            Registration is almost open! Please see the table below for registration rates. Register by May 22, 2026 to receive the early rates.
          </p>
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Category</th>
                <th className="border-b p-2">Early (Before May 22) </th>
                <th className="border-b p-2">Late (After May 22) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b p-2">Student</td>
                <td className="border-b p-2">$90</td>
                <td className="border-b p-2">$130</td>
              </tr>
              <tr>
                <td className="border-b p-2">Non-Student</td>
                <td className="border-b p-2">$110</td>
                <td className="border-b p-2">$150</td>
              </tr>
              {/* <tr>
                <td className="border-b p-2">Academic</td>
                <td className="border-b p-2">$Placeholder</td>
                <td className="border-b p-2">$Placeholder</td>
              </tr>
              <tr>
                <td className="border-b p-2">Industry</td>
                <td className="border-b p-2">$Placeholder</td>
                <td className="border-b p-2">$Placeholder</td>
              </tr> */}
            </tbody>
          </table>
          <div className="text-center">
            <a
              href="https://ece.byu.edu"
              className="inline-block bg-[var(--byu-royal)] text-white px-6 py-3 rounded-md hover:bg-[var(--byu-navy)] transition"
            >
              Register Now
            </a>
          </div>
        </Section>
      </Container>
      <br></br>
    </>
  );
}
