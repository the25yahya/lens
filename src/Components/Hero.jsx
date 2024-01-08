import { isMotionComponent } from 'framer-motion'
import React from 'react'
import couple from '../Assets/couple.png'
import { useStateContext } from '../Contexts/ContextProvider'

const Hero = (props) => {
    const {hero,setHero,changeHero0,changeHero1,changeHero2,changeHero3,dot,setDot} = useStateContext();
  return (
    <section className='flex items-center justify-between border-b border-gray-200'>
    <div className='flex flex-col items-center pl-12 ml-12 mt-10 relative w-1/2'>
        <div className='absolute flex rotate-90 -left-8 top-60'>
        <div onClick={changeHero0} className={`cursor-pointer font-bold text-5xl ${dot === 0 ? 'text-black' : 'text-gray-400'} ml-1`}>.</div>
         <div onClick={changeHero1} className={`cursor-pointer font-bold text-5xl ${dot === 1 ? 'text-black' : 'text-gray-400'} ml-1`}>.</div>
         <div onClick={changeHero2} className={`cursor-pointer font-bold text-5xl ${dot === 2 ? 'text-black' : 'text-gray-400'} ml-1`}>.</div>
         <div onClick={changeHero3} className={`cursor-pointer font-bold text-5xl ${dot === 3 ? 'text-black' : 'text-gray-400'} ml-1`}>.</div>
        </div>
        <img 
            className='ml-8 w-250'
            src={props.img1}
        />
        <h2 className='text-2xl mb-10 font-mono'>{props.name}</h2>
        <p className='text-sm w-400 text-center font-mono mb-2'>{props.description}</p>
        <button className='mt-5 px-12 py-3 bg-black text-white cursor-pointer hover:bg-transparent hover:text-black transition'>BUY NOW</button>
    </div>
    <img 
        className='w-1/2'
        src={couple}
    />
 </section>
  )
}

export default Hero