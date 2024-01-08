import React from 'react'
import Dropdown from '../Components/Dropdown'
import { useStateContext } from '../Contexts/ContextProvider'
import Product from '../Components/Product'
import { propNames } from '@chakra-ui/react'



const Products = () => {
  const {glasses,setGlasses} = useStateContext();
  const Products = glasses.map((item) =>{
    return(
      <Product
        key={item.name}
        name={item.name}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        img4={item.img4}
        img5={item.img5}
        img6={item.img6}
        price={item.price}
        description={item.description}
        tag={item.tag}
        colors={item.colors}
      />
    )
  })
  return (
    <div className='flex justify-start pt-100 px-12'>
     <div className='ml-5 mr-8 font-mono'>
     <h1 className='text-3xl mb-5'>SHOP ALL</h1>
      <div className='flex flex-col items-start w-200 border-b border-gray-300 pb-4'>
        <h1 className='text-lg font-semibold mb-2'>FRAME WIDTH</h1>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>NARROW</p>
        </div>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>AVERAGE</p>
        </div>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>WIDE</p>
        </div>
      </div>
      <div className='flex flex-col items-start w-200 border-b border-gray-300 pb-4 mt-5'>
        <h1 className='text-lg font-semibold mb-2'>LENS TECHNOLOGY</h1>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>STANDARD</p>
        </div>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>POLARIZED</p>
        </div>
        <div className='flex items-center'>
        <input
          type="checkbox"
        />
        <p className='ml-2'>LIT LENS</p>
        </div>
      </div>
      <div className='flex flex-col items-start w-200 border-b border-gray-300 pb-4 mt-5'>
        <h1 className='text-lg font-semibold mb-2'>LENS COLOR</h1>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-blue-500 rounded-full'>
        </div>
        <p className='ml-2'>BLUE</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-yellow-500 rounded-full'>
        </div>
        <p className='ml-2'>YELLOW</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 border border-gray-400 bg-white rounded-full'>
        </div>
        <p className='ml-2'>CLEAR</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-gray-400 rounded-full'>
        </div>
        <p className='ml-2'>GRAY</p>
        </div>
      </div>
      <div className='flex flex-col items-start w-200 border-b border-gray-300 pb-4 mt-5'>
        <h1 className='text-lg font-semibold mb-2'>FRAME COLOR</h1>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-gray-400 rounded-full'>
        </div>
        <p className='ml-2'>GRAY</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-black rounded-full'>
        </div>
        <p className='ml-2'>BLACK</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 bg-amber-900 rounded-full'>
        </div>
        <p className='ml-2'>BROWN</p>
        </div>
        <div className='flex items-center'>
         <div className='bg-gradient-to-br from-gold to-black via-white via-amber w-5 h-5 border rounded-full'>
         </div>
         <p className='ml-2'>TORT</p>
        </div>
        <div className='flex items-center'>
        <div className='w-5 h-5 border border-gray-400 bg-white rounded-full'>
        </div>
        <p className='ml-2'>CLEAR</p>
        </div>
      </div>
     </div>
     <div className='flex flex-wrap'>
      {Products}
     </div>
    </div>
  )
}

export default Products