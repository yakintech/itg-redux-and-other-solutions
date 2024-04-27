import React, { useContext } from 'react'
import AuthUserProfile from './hocSample/UserProfile'
import LoadedDataDisplay from './hocSample/DataDisplay'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { CartContext } from './context/CartContext'

function App() {

  const { cart } = useContext(CartContext)

  let isLogin = false;

  return (<>
    {
      isLogin ?
        <>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/products'>Products</Link></li>

            <li><Link to='/cart'>Cart
              <span style={{ color: 'red' }}>({cart.length})</span>
            </Link></li>



          </ul>
          <hr />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />

          </Routes>
          <footer>Footer</footer>
        </> : <h1>Login Page</h1>
    
  }
  
  </>

  )
}

export default App