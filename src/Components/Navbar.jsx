import React from 'react'
import { MdOutlineMenu,MdOutlineClose } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useStateContext } from '../Contexts/ContextProvider';

const Navbar = () => {

  const { toggleMenu,isMenuOpen,CloseMenu,state,setProductDisplay } = useStateContext();

  return (
    <nav className='flex items-center justify-between p-12 absolute w-full'>
        <div onClick={toggleMenu} className='flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer'>
        {isMenuOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
        </div>
        <Link to='/'><h1 onClick={CloseMenu} className={`title text-6xl ${isMenuOpen ? 'text-white' : ''}`}>Lens</h1></Link>
        <Link to='/cart'><div onClick={CloseMenu}  className={`flex flex-col items-center bg-cyan-300 rounded-full p-3 hover:bg-transparent transition cursor-pointer relative ${state.cart.length > 0 ? 'pulsating-element' : ''}`}>
         <FaOpencart />
        </div></Link>
    </nav>
  )
}

export default Navbar