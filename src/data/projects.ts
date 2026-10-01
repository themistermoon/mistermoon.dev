import type { Paper } from "../components/papers";

// ─── Projects ─────────────────────────────────────────────────────────────────
//
// Each entry appears on the home page and gets its own page at /projects/<id>.
// To add a project, add an object here.

export interface Project {
  id:          string;
  title:       string;
  description: string;   // one line, shown on the home page
  body:        string[]; // paragraphs shown on the project page
  papers:      Paper[];  // optional PDFs, viewable inline on the project page
}

export const PROJECTS: Project[] = [
  {
    id:          "orion",
    title:       "Orion",
    description: "A minimal distributed operating system inspired by Plan 9 philosophies.",
    body: [
      "A minimal distributed operating system inspired by Plan 9 philosophies.",
    ],
    papers: [
      {
        id:          "orion-paper",
        title:       "Orion",
        description: "Dissertation write-up. Click View to read it here.",
        pdfPath:     "/Orion.pdf",
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
