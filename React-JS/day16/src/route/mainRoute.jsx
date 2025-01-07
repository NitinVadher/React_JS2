import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Home from '../pages/Home'
import Aboute from '../pages/Aboute'
import Cart from '../pages/Cart'
import Conatct from '../pages/Conatct'
import Prodauct from '../pages/Prodauct'


function MainRoute() {
    return (
        <div>
            <Link to="/Home"><h1>Home</h1></Link>
            <Link to="/Aboute"><h1>About</h1></Link>
            <Link to="/Cart"><h1>Cart</h1></Link>
            <Link to="/Constct"><h1>Contact</h1></Link>
            <Link to="/Product"><h1>Product</h1></Link>


            <Routes>

                <Route path='/Home'   element={<Home/>} ></Route>
                <Route path='/Aboute'   element={<Aboute/>} ></Route>
                <Route path='/Cart'   element={<Cart/>} ></Route>
                <Route path='/Constct'   element={<Conatct/>} ></Route>
                <Route path='/Product'   element={<Prodauct/>} ></Route>

            </Routes>

        </div>
    )
}

export default MainRoute
