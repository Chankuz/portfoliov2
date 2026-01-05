export interface LearnPathItem {
  id: string;
  period: string;
  side: "left" | "right";
  title: string;
  description?: string;
  techIcons?: string[];
  images?: string[];
}

export const learnPathData: LearnPathItem[] = [
  {
    id: "1",
    period: "Month 1-2 (Lv.1)",
    side: "left",
    title: "I love Monkeys 🍌🍌🍌",
  },
  {
    id: "2",
    period: "Month 2-3 (Lv.2)",
    side: "right",
    title: "I love Monkeys 🍌🍌🍌",
  },
  {
    id: "3",
    period: "Month 3-4 (Lv.3)",
    side: "left",
    title: "I love Monkeys 🍌🍌🍌",
  },
  {
    id: "4",
    period: "Month 5-6 (Lv.4)",
    side: "right",
    title: "I love Monkeys 🍌🍌🍌",
  },
];
