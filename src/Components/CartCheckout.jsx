import React from 'react'
import { Tooltip } from '@chakra-ui/react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";

const CartCheckout = () => {
  return (
    <div className='px-8 border-t w-full border-r pt-10 pl-100 border-b pb-12'>
     <div>
      <h2 className='text-2xl font-semibold'>Contact</h2>
      <input className='w-500 border pl-4 py-2 rounded-lg my-2' placeholder='Email' />
      <div className='flex items-center'>
        <input type='checkbox'/>
        <p className='ml-2'>Email me with news and offers</p>
      </div>
     </div>
     <div className='mt-10'>
      <h2 className='text-2xl font-semibold mb-2'>Delivery</h2>
      <select className='border w-500 py-2 pl-2 rounded-lg mt-2' value='Country / Region'>
        <option value="Country/Region">Country / Region</option>
        <option value="United States">United States</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Other">Other</option>
      </select>
      <div className='flex items-center mt-4'>
        <input className='w-240 border p-1 rounded-lg pl-4' placeholder='First name' />
        <input className='w-240 border ml-4 p-1 rounded-lg pl-4' placeholder='Last name' />
      </div>
      <input className='w-500 border pl-4 py-2 rounded-lg mt-4' placeholder='adress' />
      <div className='flex items-center mt-4'>
        <input placeholder='city' className='w-240 border p-1 rounded-lg placeholder:text-sm pl-4' />
        <input className='w-240 border ml-4 p-1 rounded-lg placeholder:text-sm pl-4' placeholder='zip code' />
      </div>
      <div className='relative'>
       <input  className='w-500 border mt-4 p-2 rounded-lg flex items-center justify-between' placeholder='Phone' />
       <Tooltip label='In case we need to contact you about your order'><span className='cursor-pointer absolute right-4 top-3.5'><FaRegCircleQuestion /></span></Tooltip>
      </div>
     </div>
     <div className='mt-10 flex flex-col items-start'>
      <h2 className='text-2xl font-semibold'>Payment</h2>
      <p className='text-sm text-gray-500 my-1'>All transactions are secure and encrypted.</p>
      <div className='bg-neutral-100 p-5 mt-2 rounded-sm'>
        <div className='flex items-center justify-center'>
          <img src='https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' className='w-10 mx-2'/>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' className='w-10 mx-2'/>
          <img src='https://venturebeat.com/wp-content/uploads/2023/05/blue.jpg?fit=2560%2C1440&strip=all' className='w-10 mx-2'/>
          <img src='https://www.shutterstock.com/image-vector/vinnytsia-ukraine-september-13-2023-260nw-2360990283.jpg' className='w-10 mx-2'/>
        </div>
        <div className='relative'>
         <input  className='w-500 border mt-4 p-2 rounded-lg flex items-center justify-between placeholder:text-sm' placeholder='Card number' />
         <span className='cursor-pointer absolute right-4 top-3.5'><MdLockOutline/></span>
       </div>
       <div className='flex items-center mt-4'>
        <input placeholder='Expiration date (MM / YY)' className='w-240 border p-1 rounded-lg placeholder:text-sm pl-4' />
        <input className='w-240 border ml-4 p-1 rounded-lg placeholder:text-sm pl-4' placeholder='Security code' />
       </div>
       <input  className='w-500 border mt-4 p-2 rounded-lg flex items-center justify-between placeholder:text-sm' placeholder='Name on card' />
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold'>Remember me</h2>
        <div className='w-500 flex items-center p-3 mt-4 border rounded-lg'>
          <input type='checkbox' />
          <p className='ml-2 text-sm'>Save my information for a faster checkout</p>
        </div>
        <button className='w-500 bg-black rounded-lg text-white hover:bg-transparent hover:text-black py-2 transition mt-4'>Pay Now</button>
      </div>
     </div>
    </div>
  )
}

export default CartCheckout