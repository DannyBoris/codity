import React from 'react';
import {Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './Header.css'
const Header = () => {
    return ( 
        <div className="header flex align-center space-between">
            <div className="logo-container">
                <a href="/">
                    <img src={logo} alt="" className="logo-img"/>
                </a>
            </div>
            <div className="links-container">
                <ul className="flex space-between">
                    <li> <a href="">About</a></li>
                    <li> <a href="">Timer</a></li>
                    <li> <a href="">Profile</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;