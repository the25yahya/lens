import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../Contexts/ContextProvider'

const Footer = () => {
  
  const {scrollToTop} = useStateContext();
  return (
    <footer className='bg-pink-100 flex items-center justify-around mt-100 p-20'>
     <h1 onClick={scrollToTop} className='title text-3xl cursor-pointer'>Lens</h1>
     <div className='flex flex-col items-start'>
      <Link onClick={scrollToTop} to='/Faq'><p className='mb-3 font-mono font-thin text-lg cursor-pointer'>FAQ</p></Link>
      <p className='mb-3 font-mono font-thin text-lg cursor-pointer'>PRIVACY POLICY</p>
      <p className='mb-3 font-mono font-thin text-lg cursor-pointer'>TERMS & CONDITIONS</p>
      <p className='mb-3 font-mono font-thin text-lg cursor-pointer'>DELIVERY</p>
      <p className='mb-3 font-mono font-thin text-lg cursor-pointer'>CONACT US</p>
     </div>
     <div className='flex flex-col items-start'>
      <p className='mb-5 font-mono'>MAILING LIST</p>
      <input className='w-400 px-12 py-4 bg-gray-100 font-mono font-thin mb-4 opacity-90' placeholder='ENTER YOUR NAME'/>
      <button className='w-400 px-12 py-4 text-white bg-black font-mono font-thin'>SIGN UP FOR DISCOUNTS</button>
     </div>
    </footer>
  )
}

export default Footer