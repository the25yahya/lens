import React from 'react'
import couple from '../Assets/couple.png'

const Home = () => {
  return (
    <div className='flex flex-col'>
     <section className='flex items-center justify-between border-b-2 border-black'>
        <div className='flex flex-col items-center pl-12 ml-12'>
            <img 
                className='ml-8 w-300'
                src='https://olaproducts.co.nz/cdn/shop/files/189-2303P_B_800x.jpg?v=1697763862'
            />
            <h2 className='text-3xl mb-10 font-bold'>OTIS DIVIDE X ECO AURORA</h2>
            <p className='text-sm w-400 text-center'>Enjoy big style in a streamlined frame. Divide X supersizes classic aesthetics with current techniques to create a stylish look that’s ultra comfortable to wear. Made in biodegradable Eco-Acetate, it’s ideal for those who want a timeless design with a little extra head room</p>
            <button className='mt-5 px-12 py-2 bg-black text-white cursor-pointer hover:bg-transparent hover:text-black transition'>BUY NOW</button>
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