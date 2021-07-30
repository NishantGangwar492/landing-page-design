import React from 'react';
import './Navbar.css'


function Navbar() {
    return (
            <div className="header">
                <div className="header__logo-container">
                    <img src="https://i.pinimg.com/736x/e8/e0/81/e8e081875b58aaf2e1721d7e37e00b37.jpg" alt="" className="header__logo" />
                </div>
                <div className="header__navbar">
                    <div class="header__navar-list">
                        <a href="#" class="header__navbar-list__item">Integration</a>
                        <a href="#" class="header__navbar-list__item">Price</a>
                        <a href="#" class="header__navbar-list__item">Blog</a>
                        <a href="#" class="header__navbar-list__item">About Us</a>
                    </div>
                </div>
                <div className="header__button">
                    <a href="#" className="btn btn--navbar">Get Early Access</a>
                </div>

            </div>
    )
}

export default Navbar 