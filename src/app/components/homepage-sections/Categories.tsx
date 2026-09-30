import React from "react";
import Link from "next/link";
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
  iconBg: string;
  iconColor: string;
}

export const categoriesData: Category[] = [
  {
    id: 1,
    icon: BiCodeAlt,
    title: "Web Development",
    description: "Build modern websites and web applications.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: BiPalette,
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    icon: BiBarChartAlt2,
    title: "Data Science",
    description: "Learn data analysis, machine learning and AI.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    icon: BiMobileAlt,
    title: "Mobile Apps",
    description: "Build Android and iOS mobile applications.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 5,
    icon: BiShield,
    title: "Cyber Security",
    description: "Protect systems and secure digital assets.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
  {
    id: 6,
    icon: BiBullseye,
    title: "Digital Marketing",
    description: "Grow brands and reach the right audience.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

export const Categories = (): React.ReactElement => {
  return (
    <section className="bg-gradient-to-b from-blue-50/60 to-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">

        {/* ================= HEADER ================= */}

        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Orange Accent */}
            <span className="h-8 w-1.5 rounded-full bg-orange-500" />

            <h2
              className="
                text-2xl
                font-extrabold
                tracking-tight
                text-slate-900
                sm:text-3xl
              "
            >
              Popular Categories
            </h2>
          </div>

          {/* Desktop View All */}

          <Link
            href="/categories"
            className="
              group
              hidden
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
              transition-colors
              hover:text-blue-700
              sm:flex
              sm:text-base
            "
          >
            View All

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* ================= CATEGORY GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
          "
        >
          {categoriesData.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                href={`/categories?category=${encodeURIComponent(
                  category.title
                )}`}
                key={category.id}
                className="group"
              >
                <div
                  className="
                    flex
                    h-full
                    min-h-[210px]
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-100
                    bg-white
                    px-5
                    py-7
                    text-center
                    shadow-[0_4px_18px_rgba(15,23,42,0.07)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-100
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]
                  "
                >

                  {/* ================= ICON ================= */}

                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${category.iconBg}
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon
                      className={`
                        text-4xl
                        ${category.iconColor}
                      `}
                    />
                  </div>

                  {/* ================= TITLE ================= */}

                  <h3
                    className="
                      mt-5
                      text-base
                      font-bold
                      leading-6
                      text-slate-900
                      transition-colors
                      group-hover:text-blue-600
                      sm:text-[17px]
                    "
                  >
                    {category.title}
                  </h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      mt-2
                      max-w-[190px]
                      text-sm
                      leading-5
                      text-slate-500
                    "
                  >
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ================= MOBILE VIEW ALL ================= */}

        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/categories"
            className="
              group
              inline-flex
              min-h-[44px]
              items-center
              gap-2
              rounded-lg
              border
              border-blue-100
              bg-white
              px-6
              py-2.5
              text-sm
              font-semibold
              text-blue-600
              shadow-sm
              transition-all
              duration-300
              hover:border-blue-200
              hover:bg-blue-50
            "
          >
            View All Categories

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};