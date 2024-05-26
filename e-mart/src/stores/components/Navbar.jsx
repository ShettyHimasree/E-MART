import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

import {useCart} from '../context/CartContext'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {

    const {cartItems} = useCart()
    const handleMouseOver = () => {
        toast.info('Use the navigation bar to explore products', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    useEffect(() => {
        const isFirstLoad = localStorage.getItem('isFirstLoad');
        if (!isFirstLoad) {
            toast.info('Place your cursor on E-Mart to explore further.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('isFirstLoad', 'true');
        }
    }, []);
    
    return (
        <>
            <div className='navSection'>
                <Link to='/'>
                    <div className='title' onMouseOver={handleMouseOver}>
                        E-Mart
                    </div>
                </Link>
                <div className='search'>
                    <input placeholder='search...' type='text' />
                </div>
                <div className='user'>
                    <div className='user-detail'>Signin/Signup</div>
                    <Link to='/cart'>
                        <div className='cart'>Cart
                        <span>
                            {cartItems.length}
                        </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='subMenu'>
                <ul>
                    <Link to='/mobiles'>
                        <li>Moblies</li>
                    </Link>
                    <Link to='/computers'>
                        <li>Computers</li>
                    </Link>
                    <Link to='/fridges'>
                        <li>Fridges</li>
                    </Link>
                    <Link to='/television'>
                        <li>Television</li>
                    </Link>
                    <Link to='/men'>
                        <li>MenFashion</li>
                    </Link>
                    <Link to='/women'>
                        <li>WomenFashion</li>
                    </Link>
                    <Link to='/watches'>
                        <li>Watches</li>
                    </Link>
                    <Link to='/kitchen'>
                        <li>Kitchen</li>
                    </Link>
                    <Link to='/ac'>
                        <li>Air Conditioner</li>
                    </Link>
                    <Link to='/speakers'>
                        <li>Speakers</li>
                    </Link>
                    <Link to='/books'>
                        <li>Books</li>

                    </Link>
                    <Link to='/furniture'>
                        <li>Furniture</li>
                    </Link>
                </ul>
            </div>

        

        </>
    )
}

export default Navbar
