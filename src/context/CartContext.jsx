import { createContext, useState } from "react";


export const CartContext = createContext(null)


export const CartProvider = ({children}) => {

    const [cart, setcart] = useState([])


    const addItemToCart = (item) => {

        //önce ürün sepette var mı?
        var productCheck = cart.find(q => q.id == item.id)

        console.log(productCheck)
        //sepette ürün varsa miktar arttır yoksa yeni ürün sepete at
        if(productCheck){
            productCheck.quantity = productCheck.quantity + 1;
            setcart([...cart])
        }
        else{
            let newCartItem = {
                id: item.id,
                quantity: 1,
                name: item.name,
                unitPrice: item.unitPrice
            }
            console.log("newCartItem", newCartItem)
            setcart([...cart, newCartItem])
        }

    }

    const removeFromCart = (item) => {

        var filteredCart = cart.filter(q => q.id != item.id)
        setcart([...filteredCart])

    }

    const emptyCart = () => {
        setcart([])
    }

    return <CartContext.Provider value={{cart, addItemToCart, removeFromCart, emptyCart}}>
        {children}
    </CartContext.Provider>

}