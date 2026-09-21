"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

interface Course {
  _id: string;
  title: string;
  description?: string;
  thumbnail: string;
  category?: string;
  courseLevel?: string;
  language?: string;
  duration?: string;

  enrollment: {
    id?: string;
    progress: number;
    status: string;
    paymentStatus: string;
    enrolledAt?: string;
  };
}

interface MyLearningResponse {
  success: boolean;
  count: number;
  courses: Course[];
  message?: string;
}

const MyLearningPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================
  // Fetch My Learning
  // =====================================

  useEffect(() => {
    const fetchMyLearning = async () => {
      try {
        setLoading(true);
        setError("");

        // Get logged-in user
        const { data: session } =
          await authClient.getSession();

        if (!session?.user) {
          setError(
            "Please login to view your learning."
          );
          return;
        }

        const userId = session.user.id;

        // Backend URL
        const serverURL =
          process.env.NEXT_SERVER_URL ||
          "http://localhost:5000";

        // API request
        const response = await fetch(
          `${serverURL}/api/my-learning?userId=${encodeURIComponent(
            userId
          )}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data: MyLearningResponse =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Failed to load your courses."
          );
        }

        setCourses(data.courses || []);
      } catch (error) {
        console.error(
          "My Learning Error:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMyLearning();
  }, []);

  // =====================================
  // Loading
  // =====================================

  if (loading) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-375 mx-auto px-4">
          {/* Heading Skeleton */}

          <div className="text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-gray-200" />

            <div className="mx-auto mt-4 h-5 w-96 max-w-full animate-pulse rounded bg-gray-200" />
          </div>

          {/* Card Skeleton */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="h-60 animate-pulse bg-gray-200" />

                <div className="p-6 space-y-4">
                  <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-full animate-pulse rounded-full bg-gray-200" />

                  <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =====================================
  // Error
  // =====================================

  if (error) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-375 mx-auto px-4">
          <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl text-red-500">
              !
            </div>

            <h1 className="mt-5 text-2xl font-bold text-gray-900">
              Something went wrong
            </h1>

            <p className="mt-3 text-gray-600">
              {error}
            </p>

            <Link
              href="/explore"
              className="mt-7 inline-block rounded-lg bg-[#FE7310] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // =====================================
  // Empty State
  // =====================================

  if (courses.length === 0) {
    return (
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-375 mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              My Learning
            </h1>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Courses you enroll in will appear here.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
              📚
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              No Courses Yet
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              You have not enrolled in any courses yet.
              Explore our courses and start your
              learning journey today.
            </p>

            <Link
              href="/explore"
              className="mt-7 inline-block rounded-lg bg-[#FE7310] px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // =====================================
  // Main UI
  // =====================================

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-375 mx-auto px-4">

        {/* ================================ */}
        {/* Heading */}
        {/* ================================ */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            My Learning
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Continue your learning journey and track
            your progress across enrolled courses.
          </p>
        </div>

        {/* ================================ */}
        {/* Stats */}
        {/* ================================ */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white p-5 text-center shadow-md">
            <p className="text-sm text-gray-500">
              Enrolled Courses
            </p>

            <p className="mt-2 text-3xl font-bold text-[#FE7310]">
              {courses.length}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-md">
            <p className="text-sm text-gray-500">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {
                courses.filter(
                  (course) =>
                    course.enrollment.progress > 0 &&
                    course.enrollment.progress < 100
                ).length
              }
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-md">
            <p className="text-sm text-gray-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {
                courses.filter(
                  (course) =>
                    course.enrollment.progress >= 100
                ).length
              }
            </p>
          </div>
        </div>

        {/* ================================ */}
        {/* Course Grid */}
        {/* ================================ */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
          {courses.map((course) => {
            const progress = Math.min(
              Math.max(
                course.enrollment.progress || 0,
                0
              ),
              100
            );

            return (
              <div
                key={course._id}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* ========================== */}
                {/* Thumbnail */}
                {/* ========================== */}

                <div className="relative">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={600}
                    height={350}
                    className="h-60 w-full object-cover"
                  />

                  {/* Category */}

                  {course.category && (
                    <span className="absolute top-4 left-4 rounded-full bg-[#FE7310] px-4 py-1 text-sm font-semibold text-white">
                      {course.category}
                    </span>
                  )}

                  {/* Progress Badge */}

                  <span className="absolute top-4 right-4 rounded-full bg-black/70 px-4 py-1 text-sm font-semibold text-white">
                    {progress}%
                  </span>
                </div>

                {/* ========================== */}
                {/* Body */}
                {/* ========================== */}

                <div className="p-6">
                  <h2 className="line-clamp-2 text-xl font-bold text-gray-900">
                    {course.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                    {course.description}
                  </p>

                  {/* ========================== */}
                  {/* Course Info */}
                  {/* ========================== */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.courseLevel && (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-[#FE7310]">
                        {course.courseLevel}
                      </span>
                    )}

                    {course.language && (
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                        {course.language}
                      </span>
                    )}

                    {course.duration && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                        {course.duration}
                      </span>
                    )}
                  </div>

                  {/* ========================== */}
                  {/* Progress */}
                  {/* ========================== */}

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">
                        Course Progress
                      </span>

                      <span className="text-sm font-bold text-[#FE7310]">
                        {progress}%
                      </span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-[#FE7310] transition-all duration-500"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* ========================== */}
                  {/* Payment Status */}
                  {/* ========================== */}

                  <div className="mt-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      ✓ Enrolled
                    </span>
                  </div>

                  {/* ========================== */}
                  {/* Button */}
                  {/* ========================== */}

                  <Link
                    href={`/courses/${course._id}`}
                    className="mt-6 block w-full rounded-lg bg-[#FE7310] py-3 text-center font-semibold text-white transition hover:bg-orange-600"
                  >
                    {progress === 100
                      ? "Review Course"
                      : progress > 0
                      ? "Continue Learning"
                      : "Start Learning"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyLearningPage;