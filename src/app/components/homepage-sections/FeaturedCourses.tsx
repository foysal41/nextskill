import Image from 'next/image';
import React from 'react'
import { BsClock } from 'react-icons/bs';
import { AllCourse } from '@/types/course';
import { getCourses } from '@/app/lib/api/getCourses';
import Link from 'next/link';



export const FeaturedCourses = async (): Promise<React.ReactElement> => {
  const coursesData: AllCourse[] = await getCourses();
  return (
    <div className='max-w-[1500px]  mx-auto py-[50px] px-[1rem]'>
      {/* Heading */}
      <div className='flex justify-between mb-4'>
        <h2 className="font-bold text-lg md:text-3xl">Featured Course</h2>
         <p>View All</p>
      </div>

      {/* Course Card */}
      <div className='grid  md:grid-cols-2 lg:grid-cols-4  gap-5'>

        {coursesData?.map((course) => {
          return (
             <div key={course._id} className='bg-white p-2 space-y-2 rounded-md'>
          <Image src={course.thumbnail} alt='course 1' height={250} width={250} className='object-cover h-50 w-full rounded-t-md'></Image>
          
          {/* Card Content */}
          <div className='px-2 space-y-2'>
            <h3 className='text-lg md:text-xl font-bold'>{course.title}</h3>
            <div className='flex items-center justify-between gap-2'>
  
            </div>

            <div className='flex items-center justify-between'>
              

              <div className='w-full flex items-center gap-1 justify-between'>
                
                 <span className='flex items-center gap-2'><BsClock></BsClock> {course.duration} week</span>   
                  <h4 className='font-bold text-2xl'>${course.price}</h4>             
              </div>
            </div>


               {/* Button */}
                <Link href={`/courses/${course._id}`}>
                  <button className="mt-6 w-full rounded-lg bg-[#FE7310] py-3 font-semibold text-white transition hover:bg-orange-600">
                    View Course
                  </button>
                </Link>
          </div>

        </div>  
          )
        })}
       


      </div>

      
    </div>
  )
}
