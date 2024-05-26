import React from 'react'
import {fridgeData  } from '../data/fridge'

const Fridge = () => {
    const firstFiveImages = fridgeData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Fridges</h2>
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

export default Fridge
