export interface Hobby {
  id: string;
  name: string;
  imgUrl?: string;
  description: string;
  emoji?: string;
}

export const hobbies: Hobby[] = [
  {
    id: "1",
    name: "อ่านหนังสือ",
    imgUrl: "/images/mySelf/reading.jpg",
    description: "อ่านหนังสือ และชอบที่จะเรียนรู้สิ่งต่างๆ",
    emoji: "📚",
  },
  {
    id: "2",
    name: "เขียนโปรแกรม",
    imgUrl: "/images/mySelf/coding.jpg",
    description: "ชอบเขียนโปรแกรม และแก้โจทย์ปัญหาในเวลาว่าง",
    emoji: "💻",
  },
  {
    id: "3",
    name: "เล่นเกม",
    imgUrl: "/images/mySelf/game.jpg",
    description: "ชอบเล่นเกม roblox และ dont starve",
    emoji: "🎮",
  },
];
