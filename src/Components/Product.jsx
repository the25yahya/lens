import React from 'react'
import { FaRegHeart } from "react-icons/fa";


const Product = (props) => {
  return (
    <div className='border border-gray-300 shadow-lg w-320 flex flex-col items-center p-1 h-fit px-3 fade-in m-3'>

        <img 
            className='w-200 border border-black'
            src={props.img1}
        />
        <div className='w-full flex justify-between items-center mb-4'>
            <div className='ml-3 bg-pink-200 px-1'><p className='text-sm font-mono'>{props.tag}</p></div>
            <div className='mr-3 cursor-pointer'><FaRegHeart /></div>
        </div>
        <div className='w-full'>
            <p className='font-mono font-bold text-lg my-1'>{props.name}</p>
            <div className='w-full flex items-center justify-between my-1'>
              <p className='font-bold'>${props.price}</p>
              <div className='bg-purple-200 px-1'><p>{props.colors}</p></div>
            </div>
            <button className='w-full text-orange-500 border py-1 mt-4  border-orange-500 font-semibold hover:bg-orange-500 hover:border-transparent hover:text-white transition mb-1'>More Details</button>
        </div>
    </div>
  )
}

export default Product