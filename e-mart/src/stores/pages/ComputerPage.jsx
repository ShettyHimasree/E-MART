import React,{useState} from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ComputerPage = () => {
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
    computerData: computerData.filter(item => selectedProduct.includes(item.company))
    return (
        <>
        <div class="proPage">
            <Navbar />
            <div className='fullPage'>
                <div className='pro-selected'>
                    {
                        computerData.map((phone) => {
                            return (
                                <div className='pro-input'>
                                    <label>
                                        <input type='checkbox' checked={selectedProduct.includes(phone.company)} onChange={() => companyHandler(phone.company)} />
                                        {phone.company}
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
                                    <Link to={`/computers/${item.id}`}>
                                        <div className='pageImage'>
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                    </Link>
                                    <div className='proModel'>
                                        {item.company},{item.model}
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

export default ComputerPage
