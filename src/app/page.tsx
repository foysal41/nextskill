import Image from "next/image";
import { Hero } from "./components/homepage-sections/Hero";
import { SearchBar } from "./components/homepage-sections/SearchBar";
import { Categories } from "./components/homepage-sections/Categories";
import { FeaturedCourses } from "./components/homepage-sections/FeaturedCourses";
import Statistics from "./components/homepage-sections/Statistics";
import { WhyChooseUs } from "./components/homepage-sections/WhyChooseUs";
import { Testimonials } from "./components/homepage-sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#F5F9FF] via-[#F8FAFD] to-[#EEF5FF]">
     <Hero></Hero>
     <SearchBar></SearchBar>
     <Categories></Categories>
     <FeaturedCourses></FeaturedCourses>
     <Statistics></Statistics>
     <WhyChooseUs></WhyChooseUs>
     <Testimonials></Testimonials>
     
    </div>
  );
}
