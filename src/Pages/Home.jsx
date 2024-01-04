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
      <div className='absolute border top-128 left-10 border-gray-300 text-gray-300 px-5 font-mono text-xl py-1'>
       compact
      </div>
      <div className='absolute w-100 h-1 bg-gray-300 top-135 left-80'></div>
      <ProductDisplay
        img1='https://olaproducts.co.nz/cdn/shop/files/164-2201P_B_800x.jpg?v=1690501224'
        name='OTIS JAZMINE ECO BLACK/GREY POLAR'
        price='$359.95'
        description='Jazz up your retro vibe with a feminine take on our #1 fashion favourite. Jazmine takes the best selling Omar and refines it further with a subtle cate eye finish. Made from Eco-Acetate that`s better for the planet, this approachable design is both versatile and full of style.'
        img2='https://olaproducts.co.nz/cdn/shop/files/164-2201P_A_800x.jpg?v=1690501225'
      />
     </section>
    </div>
  )
}

export default Home