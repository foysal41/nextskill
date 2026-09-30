import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsClock, BsStarFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

import { AllCourse } from "@/types/course";
import { getCourses } from "@/app/lib/api/getCourses";

export const FeaturedCourses =
  async (): Promise<React.ReactElement> => {
    const coursesData: AllCourse[] = await getCourses();

    return (
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">

          {/* ================= HEADER ================= */}

          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-orange-500" />

              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Featured Courses
              </h2>
            </div>

            <Link
              href="/courses"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-600
                transition-colors
                hover:text-blue-700
                sm:text-base
              "
            >
              <span>View All</span>

              <FiArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* ================= COURSE GRID ================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {coursesData.slice(0, 4).map((course) => (
              <article
                key={course._id}
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-[0_4px_15px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)]
                "
              >

                {/* ================= IMAGE ================= */}

                <Link
                  href={`/courses/${course._id}`}
                  className="block"
                >
                  <div
                    className="
                      relative
                      h-[220px]
                      w-full
                      overflow-hidden
                      bg-slate-100
                      sm:h-[205px]
                      lg:h-[190px]
                      xl:h-[205px]
                    "
                  >
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </Link>

                {/* ================= CONTENT ================= */}

                <div className="p-5">

                  {/* Category */}

                  <div className="mb-3">
                    <span
                      className="
                        inline-flex
                        rounded-md
                        bg-blue-50
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-blue-600
                      "
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}

                  <Link href={`/courses/${course._id}`}>
                    <h3
                      className="
                        line-clamp-2
                        min-h-[52px]
                        text-base
                        font-bold
                        leading-6
                        text-slate-900
                        transition-colors
                        group-hover:text-blue-600
                        sm:text-[17px]
                      "
                    >
                      {course.title}
                    </h3>
                  </Link>

                  {/* Duration + Rating */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-between
                      gap-3
                      text-xs
                      text-slate-500
                      sm:text-sm
                    "
                  >

                    {/* Duration */}

                    <div className="flex items-center gap-1.5">
                      <BsClock className="shrink-0 text-blue-500" />

                      <span>
                        {course.duration} Weeks
                      </span>
                    </div>

                    {/* Rating */}

                    <div className="flex items-center gap-1">
                      <BsStarFill className="text-yellow-400" />

                      <span className="font-semibold text-slate-600">
                        4.8
                      </span>

                      <span className="text-slate-400">
                        (210)
                      </span>
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="my-4 border-t border-slate-100" />

                  {/* Price */}

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Course Price
                      </p>

                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        ${course.price}
                      </p>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-600
                        transition-all
                        duration-300
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <FiArrowRight size={18} />
                    </div>
                  </div>

                  {/* View Course */}

                  <Link
                    href={`/courses/${course._id}`}
                    className="
                      mt-5
                      flex
                      min-h-[46px]
                      w-full
                      items-center
                      justify-center
                      rounded-lg
                      bg-orange-500
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-orange-600
                      hover:shadow-md
                      hover:shadow-orange-200
                    "
                  >
                    View Course
                  </Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };