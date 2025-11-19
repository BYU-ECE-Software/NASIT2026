import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PresentationList from "@/components/lists/PresentationList";
import Calendar from "@/components/Calendar";
import { presentations } from "@/data/program";
import { schedule } from "@/data/schedule";

export default function ProgramPage() {
  return (
    <>
      <PageHero
        title="Program, Abstracts, Slides & Videos"
        subtitle="Explore the schedule and materials"
        image="/images/heroes/program-hero.jpg"
        height={480}
        position="center 30%"
      />

      <Container wide>
        <div className="space-y-8">
          {/* Calendar view (Mon–Fri) */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Schedule</h2>
            <Calendar
              days={["Mon", "Tue", "Wed", "Thu", "Fri"]}
              start="07:30"
              end="20:00"
              stepMinutes={30}
              events={schedule}
            />
          </section>

          {/* Detailed list with abstracts and links */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Talk Details, Abstracts & Materials
            </h2>
            <PresentationList items={presentations} />
          </section>
        </div>
      </Container>
      <br></br>
    </>
  );
}
