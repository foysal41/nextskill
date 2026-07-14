import React from "react";
import {
  BiBookOpen,
  BiLaptop,
  BiAward,
  BiUserCheck,
  BiSupport,
  BiInfinite,
} from "react-icons/bi";

const features = [
  {
    id: 1,
    icon: BiBookOpen,
    title: "Expert-Led Courses",
    description:
      "Learn from experienced instructors with real-world industry expertise.",
  },
  {
    id: 2,
    icon: BiLaptop,
    title: "Hands-on Projects",
    description:
      "Build practical projects to strengthen your portfolio and skills.",
  },
  {
    id: 3,
    icon: BiAward,
    title: "Certificate of Completion",
    description:
      "Receive industry-recognized certificates after completing courses.",
  },
  {
    id: 4,
    icon: BiUserCheck,
    title: "Career Focused",
    description:
      "Gain job-ready skills that help you stand out in the competitive market.",
  },
  {
    id: 5,
    icon: BiSupport,
    title: "Community Support",
    description:
      "Get guidance from mentors and connect with fellow learners.",
  },
  {
    id: 6,
    icon: BiInfinite,
    title: "Lifetime Access",
    description:
      "Access your purchased courses anytime, anywhere without limitations.",
  },
];

const WhyChoose = (): React.ReactElement => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE7310]">
            Why Choose NextSkill
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
            Learn Smarter.
            <span className="text-[#FE7310]"> Grow Faster.</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We provide everything you need to master in-demand skills,
            accelerate your career and achieve your learning goals through a
            modern online learning experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-[#FE7310] transition group-hover:bg-[#FE7310] group-hover:text-white">
                  <Icon size={34} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;