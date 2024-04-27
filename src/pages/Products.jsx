import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';

function Products() {

    const [products, setproducts] = useState([]);

    const { addItemToCart } = useContext(CartContext)


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then((data) => {
                setproducts(data)
            })

    }, [])


    const addToCart = (item) => {
        addItemToCart(item)
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => addToCart(item)}>Add to cart</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default Products