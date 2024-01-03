import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-12 fixed w-full'>
        <div className='flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer'>
         <MdOutlineMenu />
        </div>
        <h1 className='title text-5xl'>Lens</h1>
        <div className='flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer'>
         <FaOpencart />
        </div>
    </nav>
  )
}

export default Navbar