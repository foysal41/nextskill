import React from 'react'
import Image from "next/image";
import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { getCourses } from '@/app/lib/api/getCourses';
import { AllCourse } from '@/types/course';



const ManageCourses = async() => {
  const courses: AllCourse[] = await getCourses();
  return (
   <section className="mt-24">
    <div className="max-w-[1500px] mx-auto px-[1rem]">
       <div className="mt-8 rounded-xl bg-white shadow-lg overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="px-6 py-4">Thumbnail</th>
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>            
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course:AllCourse, idx) => (
            <tr
              key={idx}
              className=" hover:bg-gray-50 transition"
            >
              {/* Thumbnail */}
              <td className="px-6 py-4">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={70}
                  height={50}
                  className="rounded-md object-cover"
                />
              </td>

              {/* Title */}
              <td className="px-6 py-4 font-semibold">
                {course.title}
              </td>

              {/* Category */}
              <td className="px-6 py-4 text-gray-600">
                {course.category}
              </td>

              {/* Price */}
              <td className="px-6 py-4 font-medium">
                ${course.price}
              </td>
           

              {/* Status */}
              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    course.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {course.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                    <FiEye size={18} />
                  </button>

                  <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-500 hover:text-white transition">
                    <FiEdit2 size={18} />
                  </button>

                  <button className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-600 hover:text-white transition">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
   </section>
  );
}

export default ManageCourses