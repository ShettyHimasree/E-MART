import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {
  const firstFiveImages = computerData.slice(0, 5)

  return (
    <>
      <div class="proTitle">
        <h2>Computers</h2>
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

export default Computers
