import { Presentation } from "@/utils/types";

export const presentations: Presentation[] = [
  {
    id: "p1",
    title: "Opening Keynote: Systems for Science",
    speakers: ["Dr. Alex Johnson"],
    abstract:
      "An overview of systems research enabling rapid scientific discovery.",
    time: "Day 1 — 9:00–10:00",
    slides: "https://example.com/slides/p1.pdf",
    video: "https://example.com/videos/p1",
  },
  {
    id: "p2",
    title: "ML Pipelines at Scale",
    speakers: ["Priya Patel"],
    abstract: "Patterns for building resilient ML data pipelines.",
    time: "Day 1 — 10:30–11:00",
  },
];
