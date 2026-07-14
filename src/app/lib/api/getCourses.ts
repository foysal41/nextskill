import { Course } from "@/types/course";

const serverURL = process.env.NEXT_SERVER_URL;

export const getCourses = async():Promise<Course[]> => {
    const res = await fetch(`${serverURL}/api/courses` , {
        cache: 'no-cache',
    })
    console.log("get course status: ", res)
    return res.json()

}