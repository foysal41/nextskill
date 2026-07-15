import { AllCourse } from "@/types/course";


const serverURL = process.env.NEXT_SERVER_URL;
export const getFilterCourses = async(searchInput:string, category:string, sort:string):Promise<AllCourse[]>=> {
    const res = await fetch(`${serverURL}/api/filtercourses?search=${searchInput}&category=${category}&sort=${sort}`)
    const data = await res.json();
    return data;
}





