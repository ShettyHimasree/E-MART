import React from 'react'
import { useParams } from 'react-router-dom'
import { fridgeData } from '../stores/data/fridge'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const FridgeSingle = () => {
    const {id} = useParams()
    const {addToCart} = useCart()
    const product = fridgeData.find((item)=> item.id === id)
  return (

   <>
     <Navbar />
    <div className='ind-section'>
      <div className='ind-img'>
        <img  src={product.image} alt=''/>
      </div>
      <div className='ind-details '>
        <div className='ind-company'>
            <h2>{product.brand}</h2>
        </div>
        <div className='ind-model '>
            <h3>{product.model}</h3>
        </div>
        <div className='ind-prize '>
            <h2>{product.price}</h2>
        </div>
        <div className='ind-desc '> 
        <p>{product.description}
        </p>
        </div>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
    </div>
   </>
  )
}

export default FridgeSingle
