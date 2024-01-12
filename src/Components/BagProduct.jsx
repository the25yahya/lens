import { color } from 'framer-motion'
import React from 'react'

const BagProduct = (props) => {
  return (
        <div className='flex items-center justify-start'>
            <div className='border p-2 mr-4'>
                <img
                    className='w-12'
                    src={props.img1}
                />
            </div>
            <div className='flex flex-col mr-8'>
                <h1>{props.name}</h1>
                <p><span>{props.color} </span>/<span>{props.type}</span></p>
            </div>
            <p>{props.price}</p>
        </div>
  )
}

export default BagProduct