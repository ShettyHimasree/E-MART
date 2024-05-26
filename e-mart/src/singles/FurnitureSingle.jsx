import React from 'react'
import { furnitureData } from '../stores/data/furniture'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'



const FurnitureSingle = () => {
    const { id } = useParams()
    const {addToCart} = useCart()

    const product = furnitureData.find((item) => item.id === id)

    return (
       <>
         <Navbar />
        <div className='ind-section'>
            <div className='ind-img'>
                <img src={product.image} />

            </div>
            <div class="ind-details  space">
                <div className='ind-company  space'>
                 <h2>Brand-{product.brand}</h2>
                </div>
                <div className='ind-model space'>
                    <h3>Model-{product.model}</h3>
                </div>
                <div className='ind-prize space'>
                    <h2>Price-{product.price}</h2>
                </div>
                <div className='ind-desc space'>
                    <p>
                        {product.description}
                    </p>
                </div>
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
        </div>
       </>
    )
}

export default FurnitureSingle
