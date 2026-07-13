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
    <section className="max-w-[1500px] mx-auto py-[50px] px-4">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Why Choose Us
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <Icon className="text-3xl text-[#2563EB]" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};