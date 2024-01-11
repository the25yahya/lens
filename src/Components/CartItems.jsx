import React from 'react'
import BagProduct from './BagProduct'
import { useStateContext } from '../Contexts/ContextProvider'

const CartItems = () => {
    const {state} = useStateContext();
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
    <div>
        <div>{CartProducts}</div>
        <div>
            <input placeholder='Discount code or gift card' />
            <button>Apply</button>
        </div>
        <div>
            <div>
                <h3>Subtotal</h3>
                <p>$329.95</p>
            </div>
            <div>
                <h3>Shipping</h3>
                <p>Enter shipping adress</p>
            </div>
            <div>
               <h3>Total</h3>
               <p>$329.95</p>
            </div>
        </div>
    </div>
  )
}

export default CartItems