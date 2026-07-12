import Image from "next/image";
import { Hero } from "./components/homepage-sections/Hero";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#F5F9FF] via-[#F8FAFD] to-[#EEF5FF]">
     <Hero></Hero>
    </div>
  );
}
