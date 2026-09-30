import React from "react";
import { IconType } from "react-icons";

import { FaReact } from "react-icons/fa";

import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiFigma,
  SiDocker,
} from "react-icons/si";

interface Technology {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

const technologiesData: Technology[] = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "text-cyan-500",
  },
  {
    id: 2,
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-slate-900",
  },
  {
    id: 3,
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-600",
  },
  {
    id: 4,
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    id: 6,
    name: "Python",
    icon: SiPython,
    color: "text-yellow-500",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    id: 8,
    name: "Figma",
    icon: SiFigma,
    color: "text-pink-500",
  },
  {
    id: 9,
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500",
  },
  {
    id: 10,
    name: "Python",
    icon: SiPython,
    color: "text-yellow-500",
  },
];

export const PopularTechnologies = (): React.ReactElement => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-12 sm:py-14 lg:py-16">
        {/* ================= HEADING ================= */}

        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-1.5 rounded-full bg-orange-500" />

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Popular Technologies
            </h2>
          </div>

          <button
            type="button"
            className="
              hidden
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:text-blue-700
              sm:flex
            "
          >
            View All
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* ================= TECHNOLOGY CARDS ================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            md:grid-cols-5
            lg:grid-cols-10
            lg:gap-5
          "
        >
          {technologiesData.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.id}
                className="
                  group
                  flex
                  min-h-[125px]
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  px-3
                  py-5
                  shadow-[0_4px_16px_rgba(15,23,42,0.07)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-100
                  hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)]
                  sm:min-h-[135px]
                  lg:min-h-[145px]
                "
              >
                {/* Icon */}

                <Icon
                  className={`
                    h-11
                    w-11
                    ${technology.color}
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    sm:h-12
                    sm:w-12
                  `}
                />

                {/* Technology Name */}

                <p
                  className="
                    mt-3
                    text-center
                    text-sm
                    font-semibold
                    text-slate-700
                    sm:text-base
                  "
                >
                  {technology.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile View All */}

        <div className="mt-5 flex justify-center sm:hidden">
          <button
            type="button"
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            View All
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularTechnologies;