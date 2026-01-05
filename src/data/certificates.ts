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
    title: "Coding Box - High School Edition 2025",
    issuer: "สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่",
    date: "2025-10-04",
    imageUrl: "/images/certificates/CPECodingBox.png",
  },
  {
    id: "2",
    title: "ToBeIT (ทูบีไอที)",
    issuer: "ผู้จัดกิจกรรม : สจล. | คณะเทคโนโลยีสารสนเทศ",
    date: "2025-10-14",
    imageUrl: "/images/certificates/ToBeIT.png",
  },
  {
    id: "3",
    title: "Innovators ' Camp : Explore Robotics and AI Frontiers 2025 On-site",
    issuer: "ผู้จัดกิจกรรม : สจล. | คณะวิศวกรรมศาสตร์",
    date: "2025-02-22 - 2025-02-23",
    imageUrl: "/images/certificates/RAI.png",
  },
  {
    id: "4",
    title: "ChulaMooc : Basic Calculus",
    issuer: "ChulaMooc",
    date: "2024-07-22",
    imageUrl: "/images/certificates/chulaMooc.png",
  },
];
