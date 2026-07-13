'use client'
import Image from "next/image";
import React from "react";
import { FiPlus, FiUploadCloud } from "react-icons/fi";
import { GiChecklist } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "react-quill-new/dist/quill.snow.css";
import galleryImg from "@/images/course-1.png";
import { toast } from "react-toastify";

const galleryImages = [galleryImg, galleryImg, galleryImg, galleryImg];

const AddCourse = () => {


    const handleThumbUpload = async (e:React.ChangeEvent<HTMLInputElement> ) => {
        const thumb = e.target.files?.[0]
        
        if(!thumb) {
            toast.error("Something went wrong!");
            return;
        }
    }



  return (
    <section className="mt-24">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        {/* Heading */}
        <div className="text-left">
          <h1 className="font-bold text-lg md:text-3xl">Add New Course</h1>
          <p className="text-gray-600">
            Create a new course and publish it for students to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left side */}
          <div className=" lg:col-span-3 shadow-lg rounded-md p-4 md:p-6 mt-5">
            <div className="flex flex-wrap items-center gap-2">
              <GiChecklist
                size={40}
                className="text-white bg-blue-500 p-1  rounded-full"
              ></GiChecklist>
              <span className="font-bold text-xl">Course Information</span>
            </div>

            <form className="space-y-6 mt-5">
              <div className="space-y-5 md:col-span-2">
                <div className="space-y-5 md:col-span-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Course Title <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Course Title"
                      className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-500">
                      Make it clear, Specific and attractive
                    </span>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-5 ">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Category <span className="text-red-500 ">*</span>
                    </label>

                    <select
                      name="category"
                      className="h-12 w-full rounded-lg border border-gray-200 px-3 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      <option>Select Category</option>
                      <option>Web Development</option>
                      <option>UI/UX</option>
                      <option>Security</option>
                    </select>
                  </div>
                </div>

                {/* Short Description */}
                <div className="space-y-5 md:col-span-3 ">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Full Description <span className="text-red-500 ">*</span>
                    </label>

                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Write a detailed description about your course. What will students learn in this course?"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none resize-none placeholder:text-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    ></textarea>
                  </div>
                </div>

                {/* Price, discount, course label  */}
                <div className="col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Price */}
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Price (USD) <span className="text-red-500">*</span>
                      </label>

                      <input
                        name="price"
                        type="number"
                        placeholder="0.00"
                        className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Discount */}
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Discount Price (USD)
                      </label>

                      <input
                        name="discountPrice"
                        type="number"
                        placeholder="0.00"
                        className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-sm outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Course Level */}
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Course Level <span className="text-red-500">*</span>
                      </label>

                      <select
                        name="courseLevel"
                        className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option>Select level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>

                      <p className="mt-2 text-xs text-gray-500">
                        Beginner, Intermediate or Advanced
                      </p>
                    </div>
                  </div>
                </div>

                {/* Language */}
                <div className="col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Language <span className="text-red-500">*</span>
                      </label>

                      <select
                        name="language"
                        className="h-12 w-full rounded-md border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option>Select Language</option>
                        <option>English</option>
                        <option>Bangla</option>
                        <option>Hindi</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Duration <span className="text-red-500">*</span>
                      </label>

                      <input
                        name="duration"
                        type="text"
                        placeholder="e.g. 10 Hours"
                        className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <p className="mt-2 text-xs text-gray-500">
                        Total course length
                      </p>
                    </div>

                    {/* Requirements */}
                    <div className="w-full">
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Requirements
                      </label>

                      <input
                        name="requirements"
                        type="text"
                        placeholder="e.g. Basic HTML Knowledge"
                        className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <p className="mt-2 text-xs text-gray-500">
                        What students should know
                      </p>
                    </div>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="col-span-3">
                  <label className="mb-3 block text-sm font-bold text-gray-700">
                    What Will Students Learn?
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input
                        name="whatLearn"
                        type="text"
                        placeholder="Enter learning outcome 1"
                        className="h-11 flex-1 rounded-md border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <button
                        type="button"
                        className="text-red-500 text-xl hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        name="whatLearn2"
                        placeholder="Enter learning outcome 2"
                        className="h-11 flex-1 rounded-md border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <button
                        type="button"
                        className="text-red-500 text-xl hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        name="whatLearn3"
                        type="text"
                        placeholder="Enter learning outcome 3"
                        className="h-11 flex-1 rounded-md border border-gray-300 px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />

                      <button
                        type="button"
                        className="text-red-500 text-xl hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>

                    <button
                      type="button"
                      className="rounded-md border border-blue-500 px-5 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-50"
                    >
                      + Add Another Outcome
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </form>
          </div>

          {/* Right Side */}
          <div>
            <div className="space-y-6">
              {/* Thumbnail */}
              <div className="rounded-xl bg-white shadow-lg p-5">
                <h3 className="text-xl font-bold">
                  Course Thumbnail <span className="text-red-500">*</span>
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Upload a high-quality thumbnail for your course.
                </p>

                <div className="mt-5">
                  {/* Hidden Input */}
                  <input
                    name="thumbnail"
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    className="hidden"
                    onChange={handleThumbUpload}
                  />

                  {/* Upload Box */}
                  <label
                    htmlFor="thumbnail"
                    className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition"
                  >
                    <FiUploadCloud  className="text-5xl text-blue-600" />

                    <h4 className="mt-3 font-semibold">
                      Click to upload or drag and drop
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG or WEBP (Max. 5MB)
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      16:9 ratio recommended
                    </p>
                  </label>
                </div>

                {/* Preview */}

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Thumbnail Preview</h4>

                  <Image
                    src={galleryImg}
                    alt="Preview"
                    className="rounded-lg object-cover w-full h-56"
                  />
                </div>
              </div>

              {/* Gallery */}

              <div className="rounded-xl bg-white shadow-lg p-5">
                {/* Heading */}

                {/* Gallery Preview */}

                {/* Hidden Input এখানে */}
                <input
                  type="file"
                  id="gallery"
                  name="gallery"
                  accept="image/*"
                  multiple
                  className="hidden"
                />

                {/* Upload Button */}
                <label
                  htmlFor="gallery"
                  className="mt-5 w-full border-2 border-dashed border-gray-300 rounded-xl py-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition"
                >
                  <FiPlus className="text-2xl text-blue-600" />

                  <span className="font-semibold text-blue-600 mt-2">
                    Add More Images
                  </span>

                  <p className="text-xs text-gray-500 mt-1">
                    You can add up to 5 images
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCourse;
