export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "I love Monkeys",
    issuer: "Monkey",
    date: "2025-10-04",
    imageUrl: "/images/monkey-thinking.png",
  },
  {
    id: "2",
    title: "I love Monkeys",
    issuer: "Monkey",
    date: "2025-10-14",
    imageUrl: "/images/monkey-thinking.png",
  },
  {
    id: "3",
    title: "I love Monkeys",
    issuer: "Monkey",
    date: "2025-02-22 - 2025-02-23",
    imageUrl: "/images/monkey-thinking.png",
  },
  {
    id: "4",
    title: "I love Monkeys",
    issuer: "Monkey",
    date: "2024-07-22",
    imageUrl: "/images/monkey-thinking.png",
  },
];
