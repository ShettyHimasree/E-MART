import { createContext, useContext , useState } from "react"
import { toast } from 'react-toastify';


const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([])



    const addToCart = (item) =>{
        if (cartItems.includes(item)) {
            toast.error("Item already added to cart")
            return;
        }
        setCartItems([...cartItems, item])
        // alert(`item added successfully!`);
        toast.success(`item added successfully!`);
    }
    const removeFromCart =(item) =>{
        setCartItems(cartItems.filter((prod) => prod !== item))
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    return useContext(CartContext)
}
