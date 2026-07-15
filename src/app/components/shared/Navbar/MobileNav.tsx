import Image from "next/image";
import React from "react";
import logo from "@/images/next-skill-logo.png";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import avatar from "@/images/avatar.webp";
import { NAVLINKS } from "../../../../../constant/Navlinks";
import { signOut, useSession } from "@/lib/auth-client";
interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

export const MobileNav = ({
  showNav,
  closeNav,
}: MobileNavProps): React.ReactElement => {
  const { data: session, isPending } = useSession();
  const user = session?.user;

   const filteredLinks = NAVLINKS.filter((link) => {
    if (link.private && !user) return false;
    return true;
  });

  const handleLogout = async() => {
    await signOut()
  }

  return (
    <div>
      {/* OVerlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0  z-40  bg-black/40 transition-all duration-300 ${showNav ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[80%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 px-[1rem] py-[2rem] ${showNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center  justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="NextSkill_Logo"
              height={100}
              width={100}
              className="cursor-pointer md:w-50 "
            ></Image>
          </Link>
          <CgClose
            onClick={closeNav}
            className="h-7 w-7 cursor-pointer text-gray-700 hover:text-[#FE7310] z-100"
          ></CgClose>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-2 py-5">
          {filteredLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className=" relative text-gray-700 transition-all duration-300 hover:text-[#FE710D] py-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="flex items-center gap-3  px-2 py-5">
          <Image
            src={avatar}
            alt="avatar"
            width={45}
            height={45}
            className="rounded-full border-[#FE7310]"
          ></Image>
          <div>
            {/* <h3 className="font-semibold">{user.name}</h3> */}
            <p className="text-sm text-gray-500">Welcome Back 👋</p>
          </div>
        </div>

        {user? (
            <div className='flex items-center justify-between gap-4'>
              
              <button onClick={handleLogout} className='bg-[#FE7310] w-full px-6 py-3 text-white font-bold rounded-md'>
                logout
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-between gap-3'>
              <Link href={"/auth/register"}><button className='bg-transprent border border-[#FE7310] px-6 py-3 text-[#FE7310] font-bold rounded-md'>
                SignUp
              </button></Link>

              <Link href={"/auth/login"}><button className='bg-[#FE7310] px-6 py-3 text-white font-bold rounded-md'>
                Login
              </button></Link>
              
            </div>
          )}
      </aside>
    </div>
  );
};

{
  /* <aside className={`fixed top-0 left-0 z-50 h-screen w-[80%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 px-[1rem] py-[2rem] ${showNav? "translate-x-0" : "-translate-x-full"}`} >
          <div className='flex items-center  justify-between'>
            
          </div>

      </aside> */
}
