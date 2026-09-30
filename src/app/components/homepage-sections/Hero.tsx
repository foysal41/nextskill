import Link from "next/link";
import React from "react";
import Image from "next/image";

import heroRightBg from "@/images/hero-right-bg.webp";

export const Hero = (): React.ReactElement => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 hidden h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl sm:block" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 hidden h-[400px] w-[400px] rounded-full bg-orange-100/40 blur-3xl sm:block" />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Learn • Practice • Grow
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-5 max-w-[700px] text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:mt-6 sm:text-5xl md:text-6xl lg:mx-0 lg:text-[60px] xl:text-[64px]">
              Build In-Demand
              <br />

              Skills for a{" "}
              <span className="text-orange-500">
                Brighter Future.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg lg:leading-8">
              Explore expert-led online courses, learn practical skills,
              track your progress and build your career from anywhere.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">

              {/* Explore */}
              <Link
                href="/explore"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 sm:w-auto sm:px-7"
              >
                Explore Courses
                <span>→</span>
              </Link>

              {/* Become Instructor */}
              <Link
                href="/become-instructor"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-orange-500 bg-white px-6 py-3 text-sm font-semibold text-orange-500 transition hover:bg-orange-50 sm:w-auto sm:px-7"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-xs text-orange-500">
                  ▶
                </span>

                Become Instructor
              </Link>
            </div>

            {/* Students */}
            <div className="mt-8 flex items-center justify-center gap-3 sm:mt-9 sm:gap-4 lg:justify-start">

              {/* Avatars */}
              <div className="flex -space-x-2 sm:-space-x-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-200 text-xs font-bold text-blue-700 sm:h-10 sm:w-10 sm:text-sm">
                  S
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-orange-200 text-xs font-bold text-orange-700 sm:h-10 sm:w-10 sm:text-sm">
                  J
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700 sm:h-10 sm:w-10 sm:text-sm">
                  A
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-bold text-blue-600 sm:h-10 sm:w-10 sm:text-sm">
                  +
                </div>

              </div>

              <div className="text-left">
                <p className="text-xl font-bold leading-none text-slate-900 sm:text-2xl">
                  25K+
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">
                  Students are learning
                  <br />
                  with NextSkill
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[400px] lg:min-h-[500px]">

            {/* Main Hero Image */}
            <div className="relative z-10 w-full max-w-[330px] sm:max-w-[500px] lg:max-w-[650px]">

              <Image
                src={heroRightBg}
                alt="Students learning with NextSkill"
                priority
                width={700}
                height={550}
                className="h-auto w-full object-contain"
              />

            </div>

            {/* ================= FLOATING CARDS ================= */}

            {/* Live Classes */}
            <div className="absolute left-0 top-[15%] z-20 hidden rounded-xl border border-blue-50 bg-white px-3 py-2.5 shadow-lg sm:block lg:left-2 lg:px-4 lg:py-3">

              <div className="flex items-center gap-2.5">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  🎓
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-900 lg:text-xs">
                    Live Classes
                  </p>

                  <p className="text-[9px] text-slate-500">
                    Expert Instructors
                  </p>
                </div>

              </div>

            </div>

            {/* Certificate */}
            <div className="absolute right-0 top-[10%] z-20 hidden rounded-xl border border-orange-50 bg-white px-3 py-2.5 shadow-lg sm:block lg:right-0 lg:px-4 lg:py-3">

              <div className="flex items-center gap-2.5">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                  🏆
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-900 lg:text-xs">
                    Certificate
                  </p>

                  <p className="text-[9px] text-slate-500">
                    Boost Your Career
                  </p>
                </div>

              </div>

            </div>

            {/* Practical Projects */}
            <div className="absolute bottom-[20%] left-0 z-20 hidden rounded-xl bg-white px-3 py-2.5 shadow-lg lg:block">

              <div className="flex items-center gap-2.5">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
                  💡
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Practical Projects
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Real-world Skills
                  </p>
                </div>

              </div>

            </div>

            {/* Progress */}
            <div className="absolute bottom-[8%] right-0 z-20 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block lg:right-2 lg:px-5 lg:py-4">

              <div className="flex items-center justify-between gap-5">

                <div>
                  <p className="text-[9px] text-slate-500">
                    Your Progress
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    75%
                  </p>
                </div>

                <div className="text-blue-600">
                  📊
                </div>

              </div>

              <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-slate-100 lg:w-28">
                <div className="h-full w-[75%] rounded-full bg-blue-600" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};