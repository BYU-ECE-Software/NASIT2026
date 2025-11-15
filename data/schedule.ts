import { ScheduleEvent } from "@/utils/types";

// Example Mon–Fri schedule
export const schedule: ScheduleEvent[] = [
  {
    id: "e1",
    dayIndex: 0,
    start: "09:00",
    end: "10:00",
    title: "Opening Keynote",
    speakers: ["Dr. Alex Johnson"],
    location: "Auditorium A",
    variant: "keynote",
  },
  {
    id: "e2",
    dayIndex: 0,
    start: "10:15",
    end: "11:00",
    title: "ML Pipelines at Scale",
    speakers: ["Priya Patel"],
    location: "Auditorium A",
    variant: "talk",
  },
  {
    id: "e3",
    dayIndex: 0,
    start: "11:15",
    end: "12:00",
    title: "Panel: Systems & Science",
    speakers: ["Various"],
    location: "Auditorium A",
    variant: "workshop",
  },
  {
    id: "e4",
    dayIndex: 1,
    start: "09:00",
    end: "10:00",
    title: "Invited Talk: HPC Caching",
    speakers: ["Q. Zhang"],
    location: "Room 210",
    variant: "talk",
  },
];
