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
                        <a href="/"><img src={Logo} alt=''/></a>
                    </li>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about-us">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">CONTACT US</Link>
                    </li>
                    <li>
                        <button id="log-in">Log in</button>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact={true} path="/">
                    <Home/>
                </Route>
                <Route path="/about-us">
                    <About/>
                </Route>
                <Route path="/contact-us">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar
