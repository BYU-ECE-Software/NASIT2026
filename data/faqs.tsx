import { FAQ } from "@/utils/types";
import Link from "next/link";

export const faqs: FAQ[] = [
  {
    question: "Where will NASIT 2026 be held?",
    answer: <p>The 2026 North American School of Information Theory will be held at Brigham Young University in Provo, UT.</p>,
  },
  {
    question: "When will NASIT 2026 be held?",
    answer: <p>NASIT 2026 will be held on June 22-26, 2026.</p>,
  },
  {
    question: "Where on the BYU campus will the conference be held?",
    answer: (
      <p>
        All tutorials and poster presentations will be held in the Engineering Building (EB). 
        Meals will be provided at various venues around campus, including the Wilkenson Student Center (WSC) and the Cannon Center (CC). 
        The Wednesday excursion will be held in Provo canyon. 
      </p>
    ),
  },
  {
    question: "Which airport should I fly into?",
    answer: (
      <p>
        The closest major airport is Salt Lake City International Airport (SLC), which is about 50 miles from BYU. 
        Additionally, there is limited commercial service to Provo Municipal Airport (PVU) by American Airlines, Breeze Airways, and Allegiant Air. 
      </p>
    ),
  },
  {
    question: "How do I get from the SLC airport to BYU?",
    answer: (
      <>
        <p>
          There are three primary options for getting from the SLC airport to BYU: car rental, ride-share services, and public transportation.
          <ol>
            <li>
              <br>Car Rental. </br> The SLC airport has a large car rental center with many options, including major companies 
              like Hertz, Avis, Enterprise, and Budget. 
              The drive from SLC to BYU takes approximately one hour, with the most direct route being via I-15 South.
            </li>
            <li>
              <br>Ride-Share Services. </br> An Uber or Lyft ride from the SLC airport to BYU typically costs around $100, depending on the time of day and demand.
            </li>
            <li>
              <br>Public Transportation. </br> The Utah Transit Authority (UTA) operates a commuter train called the FrontRunner that connects the SLC airport to Provo.
              To take the FrontRunner, follow signs to ground transportation at the SLC airport and look for the TRAX Green Line. 
              Take the Green Line to the North Temple Bridge/Guadalupe station, then transfer to the FrontRunner southbound train to Provo station. 
              The total travel time is approximately 2 hours, and the cost is around $10.
            </li>
          </ol>
      </>
    ),
  },
  {
    question: "Where can I park on campus?",
    answer: (
      <p>
        There are two major visitor parking lots on campus: one near the Museum of Art (MoA) and one near the Wilkenson Student Center (WSC). 
         Both lots have ample parking spaces and are within walking distance of the Engineering Building (EB). 
         The visitor lot near the WSC may be more convenient for NASIT participants as it is closer to the EB.
         An official map of BYU campus may be found
        <Link
          href="https://map.byu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>.
      </p>
    ),
  },
  {
    question: "Where can I find a map of the BYU campus?",
    answer: (
      <p>
        An official map of the BYU campus may be found 
        <Link
          href="https://map.byu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>.
        The conference will be primary held in the Engineering Building (EB), which is located on the south side of campus.
      </p>
    ),
  },
  {
    question: "Will BYU provide housing for conference attendees?",
    answer: (
      <p>
        Unfortunately, BYU will not be able to provide on-campus housing for conference attendees. 
        Furthermore, no specific hotel blocks have been reserved for NASIT 2026.
        Participants should find their own accommodations within the greater Provo/Orem area. 
      </p>
    ),
  },
  {
    question:
      "What are some fun things to do in Provo during the summer?",
    answer: (
      <p>
        Whether you're interested in outdoor activities, cultural experiences, or just exploring the local area, Provo has something for everyone.
          For a comprehensive list of fun things to do in Provo, check out this guide from BYU's enrollment team:
        <Link
          href="https://enrollment.byu.edu/transfer-team/10-fun-things-to-do-in-provo"
          target="_blank"
          rel="noopener noreferrer"
        >
          10 Fun Things to Do in Provo
        </Link>.
      </p>
    ),
  },
];
