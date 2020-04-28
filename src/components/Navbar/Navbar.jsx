import React from 'react'
import './Navbar.css'
import Logo from '../../img/Logo.svg'

function Navbar () {
    return (
        <div className="navbar">
            <ul id="items">
                <li className="logo"><a href="#"><img src={Logo}/></a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Log in</a></li>
            </ul>
        </div>
    )
}

export default Navbar