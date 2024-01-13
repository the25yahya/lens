import React from 'react'
import BagProduct from './BagProduct'
import { useStateContext } from '../Contexts/ContextProvider'

const CartItems = () => {
    const {state} = useStateContext();
    console.log(state.cart);
    const AddedProducts = state.cart
    const CartProducts = AddedProducts.map((item) =>{
        return(
          <BagProduct 
            img1={item.img1}
            key={item.name}
            name={item.name}
            price={item.price}
            color={item.color}
            type={item.type}
          />
        )
      })
  return (
    <div className='w-full px-10 pt-5 border-t bg-zinc-100'>
        <div>{CartProducts}</div>
        <div>
            <input className='border p-2 w-300 placeholder:text-sm pl-3 rounded mr-4 border-gray-300' placeholder='Discount code or gift card' />
            <button className='bg-zinc-200 p-2.5 rounded text-sm border-gray-400 border hover:bg-transparent hover:border-transparent transition'>Apply</button>
        </div>
        <div className='mt-8'>
            <div className='flex items-center w-380 justify-between my-1'>
                <h3>Subtotal</h3>
                <p className='font-bold'>${state.subtotal}</p>
            </div>
            <div className='flex items-center w-380 justify-between my-1'>
                <h3>Shipping</h3>
                <input className='bg-zinc-100 placeholder:text-black text-sm' placeholder='Enter shipping adress' />
            </div>
            <div className='flex items-center w-380 justify-between my-1'>
               <h3 className='font-bold'>Total</h3>
               <p className='font-bold'>$329.95</p>
            </div>
        </div>
    </div>
  )
}

export default CartItems