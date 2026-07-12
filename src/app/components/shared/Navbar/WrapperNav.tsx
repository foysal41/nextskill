'use client'
import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { MobileNav } from './MobileNav'

export const WrapperNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false)
  return (
    
    <div>
        <Navbar openNav = {openNavHandler}></Navbar>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}></MobileNav>
    </div>
  )
}
