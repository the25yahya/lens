import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useStateContext } from '../Contexts/ContextProvider';

const Navbar = () => {

  const { toggleMenu } = useStateContext();

  return (
    <nav className='flex items-center justify-between p-12 fixed w-full'>
        <div onClick={toggleMenu} className='flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer'>
         <MdOutlineMenu />
        </div>
        <Link to='/'><h1 className='title text-6xl'>Lens</h1></Link>
        <Link to='/cart'><div className='flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer'>
         <FaOpencart />
        </div></Link>
    </nav>
  )
}

export default Navbar