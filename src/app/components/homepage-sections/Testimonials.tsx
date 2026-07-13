import Image, { StaticImageData } from "next/image";
import React from "react";

import student1 from "@/images/ins-avatar.png"

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
    <section className="max-w-[1500px] mx-auto py-[60px] px-4">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          What Our Students Say
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Top */}
            <div className="flex items-center gap-1">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={55}
                height={55}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold text-lg">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.course}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 my-4">
              {[...Array(testimonial.rating)].map((_, index) => (
                <BiStar
                  key={index}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-7 italic">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};