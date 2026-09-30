import React from "react";
import { IconType } from "react-icons";
import {
  BiUserCheck,
  BiLaptop,
  BiTime,
  BiMedal,
} from "react-icons/bi";

export interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    icon: BiUserCheck,
    title: "Expert Mentors",
    description: "Learn from industry experts and professionals.",
  },
  {
    id: 2,
    icon: BiLaptop,
    title: "Flexible Learning",
    description: "Study at your own pace from anywhere.",
  },
  {
    id: 3,
    icon: BiTime,
    title: "Lifetime Access",
    description: "Access your courses forever, anytime.",
  },
  {
    id: 4,
    icon: BiMedal,
    title: "Certificates",
    description: "Earn certificates and boost your career.",
  },
];

export const WhyChooseUs = (): React.ReactElement => {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">

        {/* ================= HEADER ================= */}

        <div className="mb-7 flex items-center gap-3">
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
            Why Choose Us
          </h2>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {featuresData.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="
                  group
                  flex
                  min-h-[150px]
                  items-start
                  gap-4
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  px-5
                  py-6
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
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    className="
                      text-3xl
                      text-blue-600
                    "
                  />
                </div>

                {/* ================= CONTENT ================= */}

                <div className="min-w-0">
                  <h3
                    className="
                      text-base
                      font-bold
                      leading-6
                      text-slate-900
                      sm:text-[17px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-5
                      text-slate-500
                    "
                  >
                    {feature.description}
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

export default WhyChooseUs;