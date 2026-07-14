export interface Course {
  title: string;
  category: string;
  description: string;
  price: number;
  discountPrice: number;
  level: string;
  language: string;
  duration: string;
  requirements: string;
  outcomes: string[];
  thumbnail: string;
  gallery: string[];
  status: "Published" | "Draft";
}