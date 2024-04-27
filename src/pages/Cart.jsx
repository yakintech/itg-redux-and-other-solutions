import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {

    const { cart, emptyCart, removeFromCart } = useContext(CartContext)


    let totalPrice = 0;


    cart.forEach(element => {
        totalPrice = totalPrice + (element.unitPrice * element.quantity)
    });

    return (<>
    <h1>Total: {totalPrice}</h1>
    <button onClick={emptyCart}>Empty Cart</button>
    <ul>
        {
            cart.map(item => {
                return <>
                    <li>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {((item.unitPrice) * (item.quantity)).toFixed(2)}</li>
                    <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
                </>
            })
        }
    </ul>
    </>)
}

export default Cart