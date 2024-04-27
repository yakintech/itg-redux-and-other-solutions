import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToFav } from '../store/favoritesSlice';

function Urunler() {

    const [products, setproducts] = useState([]);

    let dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    return (<>
    <h1>{favorites.length}</h1>
    <ul>
        {products.map(item => <><li>{item.name}</li>
        <button onClick={() => 
            dispatch({type:"favorites/addToFav", payload:item})}>Add</button>

{/* <button onClick={() => 
            dispatch(addToFav(item))}>Add</button> */}
        </>)}
    </ul>
    </>
    )
}

export default Urunler