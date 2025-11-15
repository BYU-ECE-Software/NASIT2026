export type Speaker = {
  id: string;
  name: string;
  image?: string;
  affiliation?: string;
  bio?: string;
};

export type Organizer = {
  id: string;
  name: string;
  affiliation?: string;
  role?: string;
  image?: string;
};

export type Presentation = {
  id: string;
  title: string;
  speakers: string[]; // names
  abstract?: string;
  slides?: string; // URL
  video?: string; // URL
  time?: string; // e.g., "Day 1 — 10:30–11:00"
};

export type ScheduleEvent = {
  id: string;
  dayIndex: number; // 0=Mon ... 4=Fri
  start: string; // "HH:MM"
  end: string; // "HH:MM"
  title: string;
  speakers?: string[];
  location?: string;
  variant?: "talk" | "keynote" | "workshop";
};

export type Poster = {
  id: string;
  title: string;
  authors: string[];
  pdf?: string; // URL
};

export type Sponsor = {
  id: string;
  name: string;
  logo?: string; // image path
};

export type ThingToDo = {
  title: string;
  url?: string;
  note?: string;
};
