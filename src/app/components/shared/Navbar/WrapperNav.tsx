import React from 'react'
import { Navbar } from './Navbar'
import { MobileNav } from './MobileNav'

export const WrapperNav = () => {
  return (
    <div>
        <Navbar></Navbar>
        <MobileNav></MobileNav>
    </div>
  )
}
