import React from 'react'
import couple from '../Assets/couple.png'
import { useStateContext } from '../Contexts/ContextProvider'

const Home = () => {

  const { toggleMenu,isMenuOpen } = useStateContext();
  console.log(isMenuOpen);
  return (
    <div className='flex flex-col'>
     <div className={`absolute bg-custom-color w-full h-full z-10 ${isMenuOpen ? '' : 'hidden'}`}>
     </div>
     <section className='flex items-center justify-between border-b-2 border-black'>
        <div className='flex flex-col items-center pl-12 ml-12 mt-10 relative'>
            <div className='absolute flex rotate-90 -left-8 top-60'>
             <div className='font-bold text-5xl text-gray-400 cursor-pointer'>.</div>
             <div className='cursor-pointer font-bold text-5xl text-black ml-1'>.</div>
             <div className='font-bold text-5xl text-gray-400 cursor-pointer ml-1'>.</div>
             <div className='font-bold text-5xl text-gray-400 cursor-pointer ml-1'>.</div>
            </div>
            <img 
                className='ml-8 w-250'
                src='https://olaproducts.co.nz/cdn/shop/files/189-2303P_B_800x.jpg?v=1697763862'
            />
            <h2 className='text-2xl mb-10 font-mono'>OTIS DIVIDE X ECO AURORA</h2>
            <p className='text-sm w-400 text-center font-mono mb-2'>Enjoy big style in a streamlined frame. Divide X supersizes classic aesthetics with current techniques to create a stylish look that’s ultra comfortable to wear.</p>
            <button className='mt-5 px-12 py-3 bg-black text-white cursor-pointer hover:bg-transparent hover:text-black transition'>BUY NOW</button>
        </div>
        <img 
            className='w-700'
            src={couple}
        />
     </section>
    </div>
  )
}

export default Home