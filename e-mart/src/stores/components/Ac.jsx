import React from 'react'
import {acData  } from '../data/ac'

const Ac = () => {
    const firstFiveImages = acData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Air Conditioner</h2>
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

export default Ac
