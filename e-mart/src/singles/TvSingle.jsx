import React from 'react'
import { useParams } from 'react-router-dom'
import { tvData } from '../stores/data/tv'
import Navbar from '../stores/components/Navbar'
import {useCart} from '../stores/context/CartContext'

const TvSingle = () => {
    const { id } = useParams()
    const {addToCart,cartItems} = useCart()

    const product = tvData.find((item) => item.id === id)
    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <div className='ind-img'>
                    <img src={product.image} alt='' />
                </div>

                <div className='ind-details  space'>
                    <div className='ind-company space'>
                        <h2>
                            {product.brand}
                        </h2>
                    </div>
                    <div className='ind-model space'>
                        <h3>{product.model}</h3>
                    </div>
                    <div className='ind-prize space'>
                        <h2>{product.price}</h2>
                    </div>
                    <div className='ind-desc space'>
                        <p>{product.description}</p>
                    </div>
                    <button onClick={()=>addToCart(product)}> Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default TvSingle
