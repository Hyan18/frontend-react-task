import React from 'react'
import './Navbar.css'
import Logo from '../../img/Logo.svg'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function Navbar () {
    return (
        <Router>
            <div className="navbar">
                <ul id="items">
                    <li className="logo">
                        <a href="#"><img src={Logo}/></a>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link>Log in</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact={true} path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
