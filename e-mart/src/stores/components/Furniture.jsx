import React from 'react'
import {furnitureData  } from '../data/furniture'

const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Furniture</h2>
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

export default Furniture
