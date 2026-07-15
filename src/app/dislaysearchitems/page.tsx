import Image from "next/image";
import Link from "next/link";
import { getFilterCourses } from "../lib/api/getFilterCourses";

interface Props {
  searchParams: Promise<{
    search?: string;
    category?:string;
    sort?:string;
  }>;
}

const DisplaySearchItems = async ({ searchParams }: Props) => {
  const { search, category, sort } = await searchParams;
//   console.log(category)

  const courses = await getFilterCourses(search || "" , category || "", sort || "");

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Search Results
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {courses.length > 0
              ? `${courses.length} course(s) found for "${search}"`
              : `No courses found for "${search}"`}
          </p>
        </div>

        {/* No Course Found */}
        {courses.length === 0 ? (
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Course Found
            </h2>

            <p className="mt-3 text-gray-500">
              Try searching with another keyword.
            </p>

            <Link href="/explore">
              <button className="mt-6 rounded-lg bg-[#FE7310] px-6 py-3 text-white font-semibold hover:bg-orange-600 transition">
                Browse All Courses
              </button>
            </Link>
          </div>
        ) : (
          /* Course Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
            {courses.map((course) => (
              <div
                key={course._id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={600}
                    height={350}
                    className="h-60 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 rounded-full bg-[#FE7310] px-4 py-1 text-sm font-semibold text-white">
                    {course.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h2 className="line-clamp-2 text-xl font-bold text-gray-900">
                    {course.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                    {course.description}
                  </p>

                  {/* Info */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-[#FE7310]">
                      {course.courseLevel}
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                      {course.language}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {course.duration}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#FE7310]">
                      ${course.discountPrice}
                    </span>

                    <span className="text-lg text-gray-400 line-through">
                      ${course.price}
                    </span>
                  </div>

                  {/* Button */}
                  <Link href={`/courses/${course._id}`}>
                    <button className="mt-6 w-full rounded-lg bg-[#FE7310] py-3 font-semibold text-white transition hover:bg-orange-600">
                      View Course
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DisplaySearchItems;