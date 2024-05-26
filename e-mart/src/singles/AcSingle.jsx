import React from 'react'
import { acData } from '../stores/data/ac'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'



const AcSingle = () => {
    const { id } = useParams()
    const {addToCart,cartItems} = useCart()

    const product = acData.find((item) => item.id === id)

    return (
       <>
         <Navbar />
        <div className='ind-section'>
            <div className='ind-img'>
                <img src={product.image} />

            </div>
            <div class="ind-details  space">
                <div className='ind-company  space'>
                 <h2>{product.brand}</h2>
                </div>
                <div className='ind-model space'>
                    <h3>{product.model}</h3>
                </div>
                <div className='ind-prize space'>
                    <h2>{product.price}</h2>
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

export default AcSingle
