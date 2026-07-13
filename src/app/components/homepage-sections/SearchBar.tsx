import React from 'react'
import { FiSearch } from 'react-icons/fi'

export const SearchBar = () => {
  return (
    <section className='px-[1rem]'>
      <div className='max-w-[1500px] mx-auto bg-white shadow-lg rounded-2xl p-4 '>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-6 '>
          {/* Search */}
          <input type="text" placeholder='Search Courses...' 
          className='col-span-2 rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus: ring-blue-200' />
          
          {/* Category */}
          <select className='rounded-lg border border-gray-200 px-3 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
            <option>Rating</option>
            <option>5 Stars</option>
            <option>4 Stars & Up</option>
            <option>3 Stars & Up</option>
          </select>

          {/* Price */}
          <select className='rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-blue-500 focus:ring-2 focus: ring-blue-200' >
            <option>Price</option>
            <option>Free</option>
            <option>Paid</option>
          </select>

          {/* Sort */}
          <select className=' col-span-2 md:col-span-1 border border-gray-200 px-4 py-3 rounded-lg transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200'>
            <option>Sort By</option>
            <option>Newest</option>
            <option>Popular</option>
            <option>Highest Rated</option>
          </select>

          {/* Search Button */}
          <button className='flex col-span-2 md:col-span-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700'>
            <FiSearch size={18} />
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
