import React from 'react'
import { useStateContext } from '../Contexts/ContextProvider'
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const { toggleMenu,isMenuOpen,CloseMenu } = useStateContext();
  return (
    <div className={`element-to-slide absolute pt-10 flex flex-col items-center text-center bg-custom-color w-full h-full z-50 transition-div ${isMenuOpen ? '' : 'hidden'}`}>
      <p className='font-mono text-white mt-40 text-xl'>MENU</p>
      <div className='text-white'>
        <Link to='/Products'><p
        onClick={CloseMenu} 
        className='text-5xl mt-2 font-semibold hover:opacity-50 transition'>Products</p></Link>
        <Link to='/About'><p
        onClick={CloseMenu} 
         className=' hover:opacity-50 transition text-5xl mt-8 font-semibold'>About</p></Link>
        <Link to='/Men'><p
        onClick={CloseMenu} 
        className='text-5xl mt-8 font-semibold hover:opacity-50 transition'>Men eyewear</p></Link>
        <Link to='/Women'><p 
        onClick={CloseMenu} 
        className='text-5xl mt-8 font-semibold hover:opacity-50 transition'>Women eyewear</p></Link>
      </div>
      </div>
  )
}

export default Dropdown