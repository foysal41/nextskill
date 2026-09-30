import Image, { StaticImageData } from "next/image";
import React from "react";

import student1 from "@/images/ins-avatar.png";

import { BiStar } from "react-icons/bi";

export interface Testimonial {
  id: number;
  image: StaticImageData;
  name: string;
  course: string;
  rating: number;
  review: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    image: student1,
    name: "Sarah Johnson",
    course: "UI/UX Design",
    rating: 5,
    review:
      "The courses are well-structured and easy to follow. I improved my skills and got my dream job!",
  },
  {
    id: 2,
    image: student1,
    name: "James Williams",
    course: "Web Development",
    rating: 5,
    review:
      "Excellent platform! The instructors explain everything in a practical and simple way.",
  },
  {
    id: 3,
    image: student1,
    name: "Olivia Brown",
    course: "Data Science",
    rating: 5,
    review:
      "The best investment I've made. The content is top-notch and very beginner friendly.",
  },
];

export const Testimonials = (): React.ReactElement => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        {/* ================= HEADING ================= */}

        <div className="mb-7 flex items-center gap-3">
          <span className="h-8 w-1.5 rounded-full bg-orange-500" />

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Our Students Says
          </h2>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group
                rounded-xl
                border
                border-slate-100
                bg-white
                p-6
                shadow-[0_4px_18px_rgba(15,23,42,0.07)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-100
                hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]
                sm:p-7
              "
            >
              {/* ================= STUDENT INFO ================= */}

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={58}
                  height={58}
                  className="
                    h-14
                    w-14
                    shrink-0
                    rounded-full
                    object-cover
                    sm:h-16
                    sm:w-16
                  "
                />

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-500 sm:text-base">
                    {testimonial.course}
                  </p>
                </div>
              </div>

              {/* ================= RATING ================= */}

              <div className="my-5 flex gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <BiStar
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* ================= REVIEW ================= */}

              <p className="text-base leading-7 text-slate-600 italic sm:text-[17px] sm:leading-8">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;