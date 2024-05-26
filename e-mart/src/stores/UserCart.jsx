import React from 'react'
import { useCart } from './context/CartContext'

const UserCart = () => {
    const  {cartItems, addToCart ,removeFromCart} = useCart()
  return (
     <div>
      <h2 className='cart-title'>CART SECTION</h2>
        {
            cartItems.map((item) => {
                return(
                    <div className='cart-section' >
                   
                    <div className='cart-img '>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className='cart-details '>
                     <h3> PRODUCT-{item.product}</h3>
                     <h3>
                        PRICE-{item.price}

                     </h3>
                     <h3> MODEL-{item.model}</h3>
                      </div>
                      <button  onClick={()=>removeFromCart(item)}>Remove From Cart</button>
                     </div>
                )
            })
        }
     </div>
  )
}

export default UserCart
