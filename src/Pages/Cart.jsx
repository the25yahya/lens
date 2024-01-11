import React,{useReducer} from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='pt-100 px-20 fade-in'>
      <div></div>
      <div className='font-mono'>
      <h2 className='font-semibold text-xl mb-5'>Your Cart</h2>
        <p>Your cart is empty</p>
        <p className='mt-2'>
         <span className='underline font-bold cursor-pointer'>sign in </span> 
         to retrieve your cart and view saved items or  
        <span className='underline font-bold cursor-pointer'> create an Account</span>
        </p>
        <button className='bg-black text-white px-5 py-2 mt-8 cursor-pointer hover:bg-transparent hover:text-black transition'><Link to='/'>Continue Shopping</Link></button>
      </div>
    </div>
  )
}

export default Cart