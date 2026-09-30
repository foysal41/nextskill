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
    <section
      className="
        relative
        z-20
        w-full
        bg-white
        px-4
        -mt-8
        sm:-mt-10
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]
          overflow-hidden
          rounded-2xl
          border
          border-slate-100
          bg-white
          px-5
          py-7
          shadow-[0_8px_30px_rgba(15,23,42,0.08)]

          sm:px-8
          sm:py-8

          md:rounded-3xl
          md:px-10
          md:py-9

          lg:px-14
          lg:py-10
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-4
                  px-4
                  py-4

                  sm:min-h-[95px]
                  sm:px-6

                  md:min-h-[40px]
                  md:px-2
                  md:py-2

                  ${
                    index !== 0
                      ? "border-t border-blue-100 md:border-l md:border-t-0"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl

                    sm:h-14
                    sm:w-14

                    ${
                      stat.id === 3
                        ? "bg-orange-50 text-orange-500"
                        : "bg-blue-50 text-blue-600"
                    }
                  `}
                >
                  <Icon
                    className="
                      h-8
                      w-8
                      sm:h-9
                      sm:w-9
                    "
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-xl
                      font-extrabold
                      leading-none
                      text-blue-600

                      sm:text-2xl
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-xs
                      font-medium
                      text-slate-500

                      sm:text-sm
                    "
                  >
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