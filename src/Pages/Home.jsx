import React from 'react'
import couple from '../Assets/couple.png'
import { useStateContext } from '../Contexts/ContextProvider'
import ProductDisplay from '../Components/ProductDisplay'

const Home = () => {

  const { toggleMenu,isMenuOpen } = useStateContext();
  console.log(isMenuOpen);
  return (
    <div className='flex flex-col'>
     <div className={`absolute pt-10 flex flex-col items-center text-center bg-custom-color w-full h-full z-10 transition-div ${isMenuOpen ? '' : 'hidden'}`}>
      <p className='font-mono text-white mt-40 text-xl'>MENU</p>
      <div className='text-white'>
        <p className='text-5xl mt-2 font-semibold'>Products</p>
        <p className='font-semibold text-5xl mt-5'>Brands</p>
        <p className='text-5xl mt-5 font-semibold'>About</p>
        <p className='text-5xl mt-5 font-semibold'>Sale</p>
      </div>
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
     <section className='relative'>
      <div className='absolute border top-128 left-10 border-gray-300 text-gray-300 px-5 font-mono text-xl py-1 opacity-65'>
       compact
      </div>
      <div className='absolute border top-135 right-12 border-gray-300 text-gray-300 px-5 font-mono text-xl py-1 opacity-65'>
       classic
      </div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-140 right-44'></div>
      <div className='absolute w-40 h-0.5 opacity-55 bg-gray-300 top-140 -right-0'></div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-135 left-80'></div>
      <div className='absolute w-100 h-0.5 opacity-55 bg-gray-300 top-135 -left-16'></div>
      <ProductDisplay
        img1='https://us.otiseyewear.com/cdn/shop/products/26-2106P-JT_2_1800x1800.jpg?v=1659971442'
        name='Omar - Overkill'
        price='$259.95'
        description='A crowd-favorite on overdrive. This OTIS Bestseller just got even better with Jamie Thomas’s signature touch. This version of Omar is made with sleek Matte Black frames, grey polarized lenses and other key accents. Temple detailing features Jamies signature matte black cross.'
        img2='https://us.otiseyewear.com/cdn/shop/products/26-2106P-JT_1_83633802-c18c-4e92-891e-b1610c4a625c_1800x1800.jpg?v=1659971442'
        img3="https://us.otiseyewear.com/cdn/shop/products/26-2106P-JT_3_1800x1800.jpg?v=1659971442"
        img4='https://us.otiseyewear.com/cdn/shop/products/26-2106P-JT_4_1800x1800.jpg?v=1659971442'
        img5='https://us.otiseyewear.com/cdn/shop/products/JT_OTIS_OMAR_04_1800x1800.jpg?v=1659971442'
        img6='https://us.otiseyewear.com/cdn/shop/products/dsc2609_1800x1800.jpg?v=1659971442'
      />
     </section>
     <section className='mt-20'>
      <div className='flex items-center justify-center relative'>
        <img className='w-400' src='https://i.pinimg.com/736x/ac/6c/9f/ac6c9fec24303d2a8fc04d3aec1bf0c2.jpg'/>
        <div className='p-10 text-center'>
         <h1 className='font-mono text-5xl font-thin mb-10'>The difference is in the lens</h1>
         <p>through endeless reasearch with physical photo filters and digital manipulation techniques we discoverd our perfect lens. We found a way to use natural sunlight to transform the world around you into a vivid picture; an experience full of clarity and coulour making everyday life look ten times better</p>
        </div>
        <img className='w-380' src='https://i.pinimg.com/736x/55/1f/2f/551f2fbd4081135020d26b3d874f0399.jpg' />
      </div>
      <div className='mt-100 flex items-center'>
      <img
          className='absolute -bottom-100 w-250'
          src='https://i.pinimg.com/originals/5d/a2/3b/5da23b45565e70f656b50c4d4409e46c.jpg'
        />
      </div>
     </section>
    </div>
  )
}

export default Home