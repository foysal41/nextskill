'use server'

import { Course } from "@/types/course";

const serverURL = process.env.NEXT_SERVER_URL;
export const createCourse = async(newCourseData:Course) => {
    const res = await fetch(`${serverURL}/api/add-course`, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(newCourseData),
    });

    // console.log('status', res.status)

    return res.json();
}