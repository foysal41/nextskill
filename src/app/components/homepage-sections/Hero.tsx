import Link from "next/link";
import React from "react";
import hero_right_bg from "@/images/hero-right-bg.webp"
import Image from "next/image";

export const Hero = () => {
  return (
    <section className=" h-[70vh] flex items-center max-w-[1500px] mx-auto px-[1rem] ">
      <div className=" flex flex-col md:flex-row  items-center ">
        {/* left content */}
        <div className="">
          <h1 className="text-2xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Learn Smarter.
            <br />
            Build Your <span className="text-orange-500">Future.</span>
          </h1>

           <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore expert-led online courses, track your
            progress and achieve your learning goals from
            anywhere.
          </p>

            <div className="mt-8 flex flex-col md:flex-row  gap-4">
            <Link
              href="/explore"
              className="rounded-lg  text-center bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Courses
            </Link>

            <Link
              href="/become-instructor"
              className="rounded-lg text-center  bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Become Instructor
            </Link>
            
          </div>
        </div>


        {/* Right Content  */}
        <div className="">
          <Image
            src={hero_right_bg}
            alt="Hero Image"
            className="w-full max-w-6xl"
          />
          
        </div>
      </div>
    </section>
  );
};
