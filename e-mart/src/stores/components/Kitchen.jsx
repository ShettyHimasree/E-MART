import React from 'react'
import { kitchenData } from '../data/kitchen'

const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
    return (
        <>
            <div class="proTitle">
                <h2>Kitchen Items</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='imageBox'>
                                <img src={item.image} alt={item.image} className='proImage' />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Kitchen
