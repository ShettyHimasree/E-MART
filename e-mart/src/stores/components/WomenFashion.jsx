import React from 'react'
import { womanData } from '../data/woman'

const WomenFashion = () => {
    const firstFiveImages = womanData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Woman Fashion</h2>
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

export default WomenFashion
