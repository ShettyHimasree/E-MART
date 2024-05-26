import React from 'react'
import {speakerData  } from '../data/speaker'

const Speaker = () => {
    const firstFiveImages = speakerData.slice(0,5);
    return (
        <>
        <div class="proTitle">
            <h2>Speakers</h2>
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

export default Speaker
