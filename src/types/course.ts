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

export interface AllCourse {
  _id: string;
  title: string;
  category: string;
  description: string;

  price: string;
  discountPrice: string;

  courseLevel: string;
  language: string;
  duration: string;

  requirements: string;

  whatLearn: string;
  whatLearn2: string;
  whatLearn3: string;

  thumbnail: string;
  gallery: string[];

  status?: "Published" | "Draft";
}