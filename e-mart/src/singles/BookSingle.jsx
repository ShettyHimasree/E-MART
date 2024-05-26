import React from 'react'
import { booksData } from '../stores/data/books'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'



const BookSingle = () => {
    const { id } = useParams()
    const {addToCart,cartItems} = useCart()

    const product = booksData.find((item) => item.id === id)

    return (
       <>
         <Navbar />
        <div className='ind-section'>
            <div className='ind-img'>
                <img src={product.image} alt={product.image} />

            </div>
            <div class="ind-details  space">
                <div className='ind-company  space'>
                 <h2> Title-{product.title}</h2>
                </div>
                <div className='ind-model space'>
                    <h3> Author-{product.author}</h3>
                </div>
                <div className='ind-prize space'>
                    <h3>Price-{product.price}</h3>
                </div>
                <div  className='ind-cat space'>
                    <h3>Category-{product.category}</h3>
                </div>
                <div className='ind-desc space'>
                    <p>
                        Description-{product.description}
                    </p>
                </div>
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
        </div>
       </>
    )
}

export default BookSingle
