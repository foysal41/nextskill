import React from "react";
import {
  BiBook,
  BiUser,
  BiAward,
  BiGlobe,
} from "react-icons/bi";

const statistics = [
  {
    id: 1,
    icon: BiUser,
    number: "15K+",
    title: "Active Students",
  },
  {
    id: 2,
    icon: BiBook,
    number: "250+",
    title: "Premium Courses",
  },
  {
    id: 3,
    icon: BiAward,
    number: "50+",
    title: "Expert Instructors",
  },
  {
    id: 4,
    icon: BiGlobe,
    number: "30+",
    title: "Countries Reached",
  },
];

const Statistics = (): React.ReactElement => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FE7310] to-orange-500">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        {/* Heading */}
        <div className="text-center text-white">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Our Achievements
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold">
            Trusted by Thousands of Learners
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-orange-100 leading-8">
            We are proud to help thousands of students develop real-world
            skills, achieve their career goals and learn from experienced
            instructors across multiple industries.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition duration-300 hover:bg-white hover:text-[#FE7310]"
              >
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#FE7310]">
                    <Icon size={34} />
                  </div>
                </div>

                <h3 className="mt-6 text-4xl font-bold">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;