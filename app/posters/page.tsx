import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PosterCard from "@/components/cards/PosterCard";
import { posters } from "@/data/posters";

function StyledList() {
  const features = [
    'The student poster session will be held on Tuesday immediately following lunch. This is a fantastic opportunity to share your ongoing work and engage directly with leading experts and peers from across North America. Please note that posters are not peer-reviewed, and you are welcome to present on previously published work. Even if you don’t have anything novel to present, feel free to present a poster on an idea, a concept you find fascinating, or anything else related to information theory.',
        'Please indicate your interest in presenting a poster when you register. If you have already registered but would still like to present a poster, please email Jamison Ebert at jrebert@byu.edu.',
        'Please arrange to print your poster before you arrive, as we do not have the capabilities to print all posters during the school. We will provide all materials necessary to mount and display your posters (e.g. hard backing, push pins, etc).',
        'We recommend a poster size of 30" x 40"'
  ];

  return (
    <ol className="list-decimal list-inside space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="">
          {feature}
        </li>
      ))}
    </ol>
  );
}

export default function PostersPage() {
  return (
    <>
      <PageHero
        title="Posters"
        // subtitle="Explore posters from presenters"
        image="/images/heroes/posters-hero.jpg"
        heroText="2026 North American School of Information Theory"
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
        <h2 className="text-2xl font-semibold text-center mt-8 mb-4">
          Poster Session Details
        </h2>
        <StyledList/>
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
