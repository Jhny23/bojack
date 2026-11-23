export type Season = {
  number: number;
  year: number;
  blurb: string;
  standout: { code: string; title: string; note: string };
};

// Original descriptions written for this fan site.
export const seasons: Season[] = [
  {
    number: 1,
    year: 2014,
    blurb:
      "A washed-up sitcom star decides the way back to relevance is a memoir, and hires a ghostwriter to help.",
    standout: {
      code: "S1E1",
      title: "BoJack Horseman: The BoJack Horseman Story, Chapter One",
      note: "The pilot that sets the tone: glossy comedy with a bruise underneath.",
    },
  },
  {
    number: 2,
    year: 2015,
    blurb:
      "A comeback role, a road trip, and the slow realisation that a new gig doesn't fix an old problem.",
    standout: {
      code: "S2E11",
      title: "Escape from L.A.",
      note: "A bleak, funny detour that leaves everyone a little worse for wear.",
    },
  },
  {
    number: 3,
    year: 2016,
    blurb:
      "Awards-season buzz arrives, and with it the question of what success is actually supposed to feel like.",
    standout: {
      code: "S3E4",
      title: "Fish Out of Water",
      note: "Almost entirely wordless, and one of the most inventive episodes of the run.",
    },
  },
  {
    number: 4,
    year: 2017,
    blurb:
      "Family history comes to the surface, tracing where the damage started and who it keeps landing on.",
    standout: {
      code: "S4E11",
      title: "Time's Arrow",
      note: "A fractured, memory-driven episode told from a very unusual angle.",
    },
  },
  {
    number: 5,
    year: 2018,
    blurb:
      "A new show-within-a-show, a lot of self-justification, and consequences that stop being avoidable.",
    standout: {
      code: "S5E6",
      title: "Free Churro",
      note: "A single long monologue that holds the room, and the viewer, completely still.",
    },
  },
  {
    number: 6,
    year: 2020,
    blurb:
      "The final stretch: accountability, repair, and what it takes to keep trying.",
    standout: {
      code: "S6E15",
      title: "The View from Halfway Down",
      note: "A quiet, haunting penultimate chapter that people still talk about.",
    },
  },
];

export type Character = {
  name: string;
  role: string;
  voice: string;
  line: string;
  accent: string; // tailwind text/border color class stem
  glyph: string;
};

export const cast: Character[] = [
  {
    name: "BoJack Horseman",
    role: "Former sitcom star",
    voice: "Will Arnett",
    line: "Charming in public, a mess in private, and painfully aware of both.",
    accent: "sunset",
    glyph: "B",
  },
  {
    name: "Princess Carolyn",
    role: "Talent agent",
    voice: "Amy Sedaris",
    line: "Relentless, resourceful, and always one phone call from the next crisis.",
    accent: "amber",
    glyph: "PC",
  },
  {
    name: "Todd Chavez",
    role: "Perpetual houseguest",
    voice: "Aaron Paul",
    line: "Chaotic optimism with a surprising amount of heart.",
    accent: "pool",
    glyph: "T",
  },
  {
    name: "Diane Nguyen",
    role: "Writer",
    voice: "Alison Brie",
    line: "Thoughtful, principled, and still figuring out what she wants.",
    accent: "pool",
    glyph: "D",
  },
  {
    name: "Mr. Peanutbutter",
    role: "Sitcom star & eternal optimist",
    voice: "Paul F. Tompkins",
    line: "Relentlessly upbeat, which is sometimes a gift and sometimes a shield.",
    accent: "amber",
    glyph: "MP",
  },
];

export const themes = [
  "Fame & its aftertaste",
  "Addiction & recovery",
  "Second chances",
  "Accountability",
  "Found family",
  "Loneliness in a crowd",
  "Grief",
  "Trying again",
];
