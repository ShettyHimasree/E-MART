import React ,{useState}from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'


const WomenPage = () => {
    const [selectedProduct, setSelectedProduct ] = useState([])
    const companyHandler = (mango) => {

        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter(item => item !== mango))
        }
        else {
            setSelectedProduct([...selectedProduct, mango ])
        }

    }

    const filteredProduct = selectedProduct.length===0?
    womanData: womanData.filter(item => selectedProduct.includes(item.brand))
    return (
        <>
         <div class="proPage">
             <Navbar />
             <div className='fullPage'>
                <div className='pro-selected'>
                    {
                        womanData.map((phone) => {
                            return (
                                <div className='pro-input'>
                                    <label>
                                        <input type='checkbox' checked={selectedProduct.includes(phone.brand)} onChange={() => companyHandler(phone.brand)} />
                                        {phone.brand}
                                    </label>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='pageSection'>
                {
                    filteredProduct.map((item) => {
                        return (
                            <div>
                                <Link to={`/women/${item.id}`}>
                                    <div className='pageImage'>
                                        <img src={item.image} alt={item.image} />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                  {item.brand} , {item.model}
                                </div>
                            </div>
                        )
                    })
                }
                     </div>
         </div>
         </div>
        </>
    )
}

export default WomenPage
