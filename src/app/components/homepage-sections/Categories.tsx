import React from "react";
import { IconType } from "react-icons";
import {
  BiCodeAlt,
  BiPalette,
  BiBarChartAlt2,
  BiMobileAlt,
  BiShield,
  BiBullseye,
} from "react-icons/bi";

export interface Category {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const categoriesData: Category[] = [
  {
    id: 1,
    icon: BiCodeAlt,
    title: "Web Development",
    description: "Build modern websites and web applications.",
  },
  {
    id: 2,
    icon: BiPalette,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces.",
  },
  {
    id: 3,
    icon: BiBarChartAlt2,
    title: "Data Science",
    description: "Learn data analysis, machine learning and AI.",
  },
  {
    id: 4,
    icon: BiMobileAlt,
    title: "Mobile Apps",
    description: "Build Android and iOS mobile applications.",
  },
  {
    id: 5,
    icon: BiShield,
    title: "Cyber Security",
    description: "Protect systems and secure digital assets.",
  },
  {
    id: 6,
    icon: BiBullseye,
    title: "Digital Marketing",
    description: "Grow brands and reach the right audience.",
  },
];

export const Categories = ():React.ReactElement => {
  return (
    <div className="max-w-[1500px]  mx-auto py-[50px] px-[1rem]">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="font-bold text-lg md:text-3xl">Popular Categories</h2>
       
      </div>

      {/* icon card */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 ">
        {categoriesData.map((cate) => {
          const Icon = cate.icon;
          return (
            <div
              key={cate.id}
              className="shadow-lg p-4 rounded-lg text-center flex flex-col  items-center"
            >
              <Icon className="text-5xl text-blue-600" />
              <h3 className="text-black font-bold">{cate.title}</h3>
              <p className="text-gray-600">{cate.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
