import React from 'react'
import { menData } from '../data/men'

const MenFashion = () => {
    const firstFiveImages = menData.slice(0, 5);
    return (
        <>
            <div class="proTitle">
                <h2>Men Fashion</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div>
                                <div className='imageBox'>
                                    <img className='proImage' src={item.image} alt={item.name} />
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MenFashion
