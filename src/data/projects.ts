export interface Project {
  id: string;
  imageUrl?: string;
  title: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    imageUrl: "/images/projects/bonchai.png",
    title: "BonChai",
    description:
      "Bonchai BonChai คือเว็บไซต์ให้ความรู้เกี่ยวกับต้นไม้และพืชพรรณต่างๆ",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Docker"],
  },
  {
    id: "2",
    imageUrl: "/images/projects/portfoliov2.png",
    title: "Portfolio",
    description: "Portfolio คือเว็บไซต์สำหรับนำทำงานของผม",
    techStack: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: "3",
    imageUrl: "/images/projects/gameproject.png",
    title: "CarrotMania",
    description:
      "CarrotMania คือเกมที่สร้างขึ้นจาก Unity และ Blender และ Figma ในการออกแบบ",
    techStack: ["Unity", "C#", "Blender", "Figma"],
  },
];
