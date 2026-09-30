import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FiArrowRight,
  FiPlay,
  FiUserCheck,
  FiBriefcase,
  FiClock,
  FiAward,
} from "react-icons/fi";

import learningJourneyImage from "@/images/learning-journey.webp";

const journeyFeatures = [
  {
    id: 1,
    icon: FiUserCheck,
    title: "Expert Guidance",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: FiBriefcase,
    title: "Practical Projects",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    icon: FiClock,
    title: "Lifetime Access",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 4,
    icon: FiAward,
    title: "Earn Certificate",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export const LearningJourney = (): React.ReactElement => {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-12 sm:py-16">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-blue-100
          bg-gradient-to-r
          from-blue-50
          via-white
          to-blue-50
          shadow-sm
        "
      >
        {/* ================= BACKGROUND DECORATION ================= */}

        {/* Left bottom circle */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-20
            h-72
            w-72
            rounded-full
            border-[35px]
            border-blue-100/60
          "
        />

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            relative
            z-10
            grid
            min-h-[340px]
            items-center
            lg:grid-cols-[1.1fr_0.9fr_0.7fr]
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-20 px-6 py-12 sm:px-10 lg:px-12">
            <h2
              className="
                max-w-xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-4xl
              "
            >
              Ready to Start Your{" "}
              <span className="text-blue-600">
                Learning Journey?
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-lg
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              Join thousands of students and build your future
              with NextSkill.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  shadow-blue-200
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                "
              >
                Get Started
                <FiArrowRight size={17} />
              </Link>

              <Link
                href="/courses"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border-2
                  border-orange-500
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-orange-500
                  transition-all
                  duration-300
                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                  "
                >
                  <FiPlay
                    size={11}
                    className="fill-orange-500"
                  />
                </span>

                View All Courses
              </Link>
            </div>
          </div>

          {/* ================= CENTER IMAGE ================= */}

          <div
            className="
              relative
              hidden
              min-h-[340px]
              items-end
              justify-center
              lg:flex
            "
          >
            {/* ONLY ONE CIRCLE BEHIND THE GIRL */}

            <div
              className="
                absolute
                bottom-[-45px]
                left-1/2
                h-[340px]
                w-[340px]
                -translate-x-1/2
                rounded-full
                border-[25px]
                border-blue-100
                bg-blue-50/40
              "
            />

            {/* Girl Image */}

            <div
              className="
                absolute
                bottom-[-55px]
                left-1/2
                z-10
                h-150
                w-120
                -translate-x-1/2
                
                
              "
            >
              <Image
                src={learningJourneyImage}
                alt="Student learning with NextSkill"
                fill
                priority={false}
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* ================= RIGHT FEATURES ================= */}

          <div
            className="
              relative
              z-20
              px-6
              pb-10
              sm:px-10
              lg:px-8
              lg:py-10
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-white
                bg-white/85
                p-5
                shadow-lg
                shadow-slate-200/50
                backdrop-blur-md
              "
            >
              <div className="space-y-2">
                {journeyFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.id}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        transition-colors
                        duration-200
                        hover:bg-blue-50
                      "
                    >
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          ${feature.iconBg}
                        `}
                      >
                        <Icon
                          className={feature.iconColor}
                          size={18}
                        />
                      </div>

                      <p className="text-sm font-semibold text-slate-800">
                        {feature.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;