import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PosterCard from "@/components/cards/PosterCard";
import { posters } from "@/data/posters";

export default function PostersPage() {
  return (
    <>
      <PageHero
        title="Posters"
        // subtitle="Explore posters from presenters"
        image="/images/heroes/posters-hero.jpg"
        heroText="2026 NASIT"
        heroSubtext="June 22-26, 2026 | Brigham Young University, Provo, UT"
      />
      <Container wide>
        <p>
          As part of NASIT 2026, graduate students and postdoctoral researchers
          will have the opportunity to share their ongoing work and engage
          directly with faculty and peers through multiple poster sessions.
          Designed to encourage discussion, feedback, and collaboration, these
          sessions will bring together participants from diverse research areas
          within information theory and related fields. Presenters will have the
          opportunity to showcase their ideas in an informal, interactive
          setting, while attendees can explore emerging directions, meet
          potential collaborators, and strengthen connections across
          institutions. This session is an integral part of the school’s mission
          to support early‑career researchers and foster a vibrant,
          interconnected community.
        </p>
        <br></br>
        <p>
          Poster results are not peer-reviewed, and previously published work is
          welcome.
        </p>
        <h2 className="text-2xl font-semibold text-center mt-8 mb-4">
          Abstract Submission
        </h2>
        <p>Details Coming Soon!</p>
        <h2 className="text-2xl font-semibold text-center mt-8 mb-4">
          Poster Format
        </h2>
        <p>Details Coming soon!</p>
        <br></br>
      </Container>
      <Container wide>
        <div className="grid gap-4">
          {posters.map((p, i) => {
            const prev = posters[i - 1];
            const showDivider = i === 0 || p.session !== prev?.session;

            return (
              <div key={p.id}>
                {showDivider && (
                  <div className="flex items-center gap-4 my-8">
                    <h2 className="text-xl font-semibold tracking-tight">
                      {p.session}
                    </h2>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>
                )}

                <PosterCard poster={p} />
              </div>
            );
          })}
        </div>
      </Container>
      <br></br>
    </>
  );
}
