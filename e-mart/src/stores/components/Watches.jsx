import React from 'react'
import { watchData } from '../data/watch'

const Watches = () => {
    const firstFiveImages = watchData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Watches</h2>
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

export default Watches
