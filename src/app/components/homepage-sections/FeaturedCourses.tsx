import Image, { StaticImageData } from 'next/image';
import React from 'react'
import course1 from "@/images/course-1.png"
import course2 from "@/images/courses-2.jpg"
import course3 from "@/images/course-3.webp"
import course4 from "@/images/course-4.jpg"

import { BiStar, BiUser } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import instructorAvatar from "@/images/ins-avatar.png"



export interface Course{
  id:number;
  image: StaticImageData;
  title: string;
  instructor: string;
  instructorImage: StaticImageData;
  rating: number;
  students: number;
  duration: string;
  price: number;
}

export const coursesData: Course[] = [
  {
    id: 1,
    image: course1,
    title: "Full Stack Web Development",
    instructor: "John Doe",
    instructorImage: instructorAvatar,
    rating: 4.8,
    students: 1250,
    duration: "12 Weeks",
    price: 49.99,
  },
  {
    id: 2,
    image: course2,
    title: "UI/UX Design Masterclass",
    instructor: "Emily Johnson",
    instructorImage: instructorAvatar,
    rating: 4.7,
    students: 2100,
    duration: "8 Weeks",
    price: 39.99,
  },
  {
    id: 3,
    image: course3,
    title: "Data Science with Python",
    instructor: "Michael Smith",
     instructorImage: instructorAvatar,
    rating: 4.9,
    students: 3200,
    duration: "10 Weeks",
    price: 39.99,
  },
  {
    id: 4,
    image: course4,
    title: "Cyber Security Fundamentals",
    instructor: "David Brown",
     instructorImage: instructorAvatar,
    rating: 4.8,
    students: 5400,
    duration: "6 Weeks",
    price: 44.99,
  },
];
export const FeaturedCourses = ():React.ReactElement => {
  return (
    <div className='max-w-[1500px]  mx-auto py-[50px] px-[1rem]'>
      {/* Heading */}
      <div className='flex justify-between mb-4'>
        <h2 className="font-bold text-lg md:text-3xl">Featured Course</h2>
         <p>View All</p>
      </div>

      {/* Course Card */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4  gap-5'>

        {coursesData.map((course) => {
          return (
             <div key={course.id} className='bg-white p-2 space-y-2 rounded-md'>
          <Image src={course.image} alt='course 1' height={250} width={250} className='object-cover h-50 w-full rounded-t-md'></Image>
          
          {/* Card Content */}
          <div className='px-2 space-y-2'>
            <h3 className='text-lg md:text-xl font-bold'>{course.title}</h3>
            <div className='flex items-center justify-between gap-2'>
              <div className='flex gap-1'>
                  <Image src={course.instructorImage} alt='Name' height={30} width={30} className='rounded-full '></Image>
              <p>{course.instructor}</p>
              </div>



              <div className='flex items-center gap-1'>
                <BiStar className='text-yellow-400'></BiStar>
                <span>{course.rating}</span>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-1 mt-1'>               
                <BiUser></BiUser>
                <span>{course.students} Students</span>
              </div>

              <div className='flex items-center gap-1'>
                <BsClock></BsClock>
                 <span>{course.duration} week</span>                
              </div>
            </div>

             

              <h4 className='font-bold text-2xl'>${course.price}</h4>

              <button className='w-full bg-[#FE7310] px-6 py-3 text-white font-bold rounded-md'>
                View Details
              </button>
          </div>

        </div>  
          )
        })}
       


      </div>

      
    </div>
  )
}
