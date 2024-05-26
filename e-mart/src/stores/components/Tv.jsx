import React from 'react'
import { tvData } from '../data/tv'

const Tv = () => {
    const firstFiveImages = tvData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Television</h2>
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

export default Tv
