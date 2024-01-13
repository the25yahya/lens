import { color } from 'framer-motion'
import React from 'react'

const BagProduct = (props) => {
  return (
        <div className='flex items-center justify-start mb-5'>
            <div className='border border-gray-300 w-16 rounded-lg mr-4'>
            <img
                    className='w-16 border rounded-lg border-gray-500'
                    src={props.img1}
                />
            </div>
            <div className='flex flex-col mr-16'>
                <h1 className=' font-semibold'>{props.name}</h1>
                <p className='text-sm'><span>{props.color} </span> / <span>{props.type}</span></p>
            </div>
            <p className='font-bold'>${props.price}</p>
        </div>
  )
}

export default BagProduct