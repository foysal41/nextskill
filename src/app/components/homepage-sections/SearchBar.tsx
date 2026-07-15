"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const SearchBar = (): React.ReactElement => {
  const router = useRouter();
  const [searching, setSearcing] = useState<string>("");
  const [cate, setCate] = useState<string>("")
  const [sort, setSort] = useState<string>("");


  return (
    <section className="px-[1rem]">
      <div className="max-w-[1500px] mx-auto bg-white shadow-lg rounded-2xl p-4 ">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5 ">
          {/* Search */}
          <input
            value={searching}
            onChange={(e) => setSearcing(e.target.value)}
            type="text"
            placeholder="Search Courses..."
            className="col-span-2 rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus: ring-blue-200"
          />

          {/* Category */}
          <select value={cate} onChange={(e) => setCate(e.target.value)} className="rounded-lg border border-gray-200 px-3 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option>Select Category</option>
            <option>Web Development</option>
            <option>UI/UX</option>
            <option>Security</option>
            <option>Digital Marketing</option>
            <option>App Development </option>
          </select>

         

          {/* Sort */}
          <select value={sort} onChange={(e) => setSort(e.target.value)} className=" col-span-2 md:col-span-1 border border-gray-200 px-4 py-3 rounded-lg transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
            <option>Sort By</option>
            <option>Newest</option>
            <option>Popular</option>
            <option>Highest Rated</option>
          </select>

          {/* Search Button */}
          <button
            onClick={() => {
              router.push(`/dislaysearchitems?search=${searching}&category=${cate}&sort=${sort}`);
            }}
            className="flex col-span-2 md:col-span-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700"
          >
            <FiSearch size={18} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
