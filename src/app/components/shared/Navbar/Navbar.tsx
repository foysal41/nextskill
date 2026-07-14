'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import logo from "@/images/next-skill-logo.png"
import Link from 'next/link';
import { NAVLINKS } from '../../../../../constant/Navlinks';
import avatar from "@/images/avatar.webp"
import { HiBars3BottomRight } from 'react-icons/hi2'
import { signOut, useSession } from '@/lib/auth-client';



interface NavProps {
  openNav: () => void;
}

export const Navbar = ({openNav}:NavProps):React.ReactElement => {

  const [navBg, setNavBg] = useState<boolean>(false)
  const {data:session, isPending} = useSession()
  const user = session?.user

const handleLogout = async () => {
  await signOut()
}
 useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 80) {
      setNavBg(true);
    }else{
      setNavBg(false)
    }
  };

  window.addEventListener("scroll" , handleScroll);
  return() => {
    window.removeEventListener("scroll" , handleScroll)
  }
 }, [])

  return (
    <header className={`fixed top-0 left-0 z-50 md:h-[12vh] w-full transition-all ${navBg?"bg-white shadow-md" : "bg-transparent"} `}>
      <div className='flex items-center justify-between gap-3 max-w-[1500px] mx-auto my-[1rem] md:my-[2rem] px-[1rem] '>
        <div className=''>
            <Link href={'/'}><Image src={logo} alt='NextSkill_Logo' height={100} width={100} className='cursor-pointer md:w-50 '></Image></Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex space-x-5 '>
          {NAVLINKS.map((link) => (
            <Link key={link.id} href={link.url} className='relative text-gray-700 transition-all duration-300 hover:text-[#FE710D] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FE710D] after:transition-all after:duration-300 hover:after:w-full '> {link.label}</Link>
          ))}
        </nav>


        {/* Right  */}
        <div >
          <div className='hidden lg:block'>
            {user? (
            <div className='flex items-center justify-between gap-4'>
              <Image src={avatar} alt={user.name} height={42} width={42} className='rounded-full border-3 border-[#FE7310] object-cover'></Image>
              <button onClick={handleLogout} className='bg-[#FE7310] px-6 py-3 text-white font-bold rounded-md'>
                logout
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-between gap-3'>
              <Link href={"/auth/signup"}><button className='bg-transprent border border-[#FE7310] px-6 py-3 text-[#FE7310] font-bold rounded-md'>
                SignUp
              </button></Link>

              <Link href={"auth/login"}><button className='bg-[#FE7310] px-6 py-3 text-white font-bold rounded-md'>
                Login
              </button></Link>
              
            </div>
          )}
          </div>

          <HiBars3BottomRight size={30} onClick={openNav} className='lg:hidden text-black'></HiBars3BottomRight>
        </div>
      </div>
    </header>
  )
}
