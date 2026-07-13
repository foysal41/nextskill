import React from "react";
import { IconType } from "react-icons";
import {
  BiGroup,
  BiBookOpen,
  BiBadgeCheck,
} from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";


export interface Stat {
  id: number;
  icon: IconType;
  value: string;
  label: string;
}

export const statsData: Stat[] = [
  {
    id: 1,
    icon: BiGroup,
    value: "25K+",
    label: "Students",
  },
  {
    id: 2,
    icon: BiBookOpen,
    value: "320+",
    label: "Courses",
  },
  {
    id: 3,
    icon: FaGraduationCap,
    value: "120+",
    label: "Instructors",
  },
  {
    id: 4,
    icon: BiBadgeCheck,
    value: "98%",
    label: "Completion Rate",
  },
];

export const Statistics = (): React.ReactElement => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 -mt-10 relative z-20">
      <div className="rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] px-6 py-8 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="flex items-center justify-center gap-4"
              >
                <Icon className="text-5xl text-white" />

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="text-blue-100 text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;