import React from 'react'
import {booksData  } from '../data/books'

const Books = () => {
    const firstFiveImages = booksData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Books</h2>
        </div>
            <div className='proSection'>
            {
                firstFiveImages.map((item) => {
                    return (
                        <div className='imageBox'>
                            <img className='proImage' src={item.image} alt={item.name} />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Books
