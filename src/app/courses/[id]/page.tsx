import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import Image from "next/image";
import { getCourses } from "@/app/lib/api/getCourses";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CourseDetailsPage = async ({ params }: Props) => {
  const { id } = await params;


  const courses = await getCourses();

  const course = courses.find((item) => item._id === id);

  if (!course) {
    return notFound();
  }

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Banner */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={1400}
            height={600}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Main */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          {/* Left */}
          <div className="lg:col-span-2">
            <span className="bg-[#FE7310] text-white px-4 py-2 rounded-full text-sm">
              {course.category}
            </span>

            <h1 className="text-4xl font-bold mt-5">
              {course.title}
            </h1>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-orange-100 text-[#FE7310] px-4 py-2 rounded-full">
                {course.courseLevel}
              </span>

              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {course.language}
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                {course.duration}
              </span>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Course Description
              </h2>

              <p className="text-gray-600 leading-8">
                {course.description}
              </p>
            </div>

            {/* Learn */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-5">
                What You will Learn
              </h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  ✅
                  <p>{course.whatLearn}</p>
                </div>

                <div className="flex gap-3">
                  ✅
                  <p>{course.whatLearn2}</p>
                </div>

                <div className="flex gap-3">
                  ✅
                  <p>{course.whatLearn3}</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-5">
                Requirements
              </h2>

              <div className="flex gap-3">
                ✔️
                <p>{course.requirements}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-5">
                Course Gallery
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {course.gallery.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt="gallery"
                    width={600}
                    height={350}
                    className="rounded-xl h-64 object-cover w-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="sticky top-28 rounded-2xl bg-white shadow-xl p-8">
              <h2 className="text-4xl font-bold text-[#FE7310]">
                ${course.discountPrice}
              </h2>

              <p className="line-through text-gray-400 text-xl">
                ${course.price}
              </p>

              <button className="mt-8 w-full py-4 rounded-xl bg-[#FE7310] text-white font-bold hover:bg-orange-600 transition">
                Enroll Now
              </button>

              <hr className="my-8" />

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Category</span>
                  <span>{course.category}</span>
                </div>

                <div className="flex justify-between">
                  <span>Level</span>
                  <span>{course.courseLevel}</span>
                </div>

                <div className="flex justify-between">
                  <span>Language</span>
                  <span>{course.language}</span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;