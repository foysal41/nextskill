import Image from "next/image";

import storyImage from "@/images/about-story.jpg";

const OurStory = (): React.ReactElement => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="relative">
            <Image
              src={storyImage}
              alt="Our Story"
              className="w-full rounded-2xl object-cover shadow-xl"
            />

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#FE7310] px-8 py-5 text-white shadow-xl">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE7310]">
              Our Story
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building the Future of
              <span className="text-[#FE7310]"> Online Learning</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              NextSkill was created with one clear mission — making
              high-quality, career-focused education accessible to everyone.
              We believe learning should be practical, engaging and affordable
              regardless of where you live.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Our platform connects experienced instructors with motivated
              learners through interactive courses, hands-on projects and
              real-world skill development. Whether you want to become a web
              developer, UI/UX designer, digital marketer or data scientist,
              NextSkill helps you learn with confidence.
            </p>

            {/* Timeline */}
            <div className="mt-10 space-y-6">
              {/* Item */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-[#FE7310]">
                  01
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Our Beginning
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Started with a vision to provide industry-ready online
                    education for everyone.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-[#FE7310]">
                  02
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Growing Community
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Thousands of students joined NextSkill and started learning
                    practical skills for their careers.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-lg font-bold text-[#FE7310]">
                  03
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Looking Ahead
                  </h4>

                  <p className="mt-1 text-gray-600">
                    We continue expanding our course library, expert mentors and
                    learning experience to empower learners worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 rounded-lg bg-[#FE7310] px-8 py-3 font-semibold text-white transition hover:bg-orange-600">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;