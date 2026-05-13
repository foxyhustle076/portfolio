export interface WorkItem {
  projectName: string;
  category: string;
  tools: string;
  video?: string;
  iframe?: string;
  image?: string;
  link?: string;
}

export const workData: WorkItem[] = [
  {
    projectName: "Sample Video Edit",
    category: "Motion Graphics",
    tools: "Premiere Pro, After Effects",
    video: "/videos/Sample Video Edit.mp4",
  },
  {
    projectName: "Documentry Edit",
    category: "YouTube Content",
    tools: "DaVinci Resolve, Color Grading",
    iframe: "https://www.youtube.com/embed/0Gp7j45ff7A",
  },
  {
    projectName: "Transition Edit",
    category: "Social Media",
    tools: "CapCut, Sound Design",
    video: "/videos/day 9.mp4",
  },
  {
    projectName: "Color Grading Edit",
    category: "Promo",
    tools: "Premiere Pro, Keyframing",
    video: "/videos/day 6.mp4",
  },
];
