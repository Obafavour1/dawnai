"use client"

import { navItems } from "@/data"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";

const MobileTopbar = () => {
  const[open, isOpen] =useState(false)

  return (
    <nav className="flex items-center w-full justify-between md:hidden">
    <button onClick={()=>isOpen(!open)} className="flex align-center gap-3">
        <Image src="/menu.png" alt="Back" width={30} height={30}/>
          <div className={`${open ? "visible" : "invisible"}`}>
          <div className="absolute px-3 -top-8 right-0 bg-black md:flex md:flex-col h-screen  pt-3  w-[300px] items-center ml-[6px] mt-[35px]  text-[#ffffff] border-solid border-2 rounded-xl border-white">
            <div>
              <Image src="/logo.png" alt="DAWN LOGO" width={158} height={33} className="w-[120px]" />
            </div>

            <div className="flex flex-col py-2.5 items-start  gap-4 mt-5">
              {navItems.map((nav) =>(
                < Link key={nav.id} href={nav.href} className="flex items-center lg:gap-3.5 py-2 px-4  rounded-[15px]  hover:bg-gradient-to-r from-[#9A4FFF] to-[#A124B6]">
                  <div>
                    <img src={nav.img} alt={nav.img} className="w-[25px] h-[25px]" />
                  </div>
                    {nav.name}
                </ Link>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-2 items-center">
              <Image src='/ai.png' alt='AI Image' width={205} height={136} />
              <p>Dawn Teachers</p>
            </div>
          </div>
        </div>
      </button>
      <Image src='/logo.png' alt='logo' width={59} height={12} />
      <div className="flex gap-[5.9px] ">
        <button className="flex align-center gap-3">
            <Image src="/language.png" alt="Back" width={20} height={20}/>
        </button>
        <button className="flex align-center gap-3">
            <Image src="/profilemobile.png" alt="Back" width={20} height={20}/>
        </button>
        <button className="flex align-center gap-3">
            <Image src="/setting.png" alt="Back" width={20} height={20}/>
        </button>
      </div>
    </nav>
  )
}

export default MobileTopbar;