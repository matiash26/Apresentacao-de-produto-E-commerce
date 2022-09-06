import React from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import MenuIcon from '@mui/icons-material/Menu';

import backgroundTop from "../assets/backgroundTop.png"
import Logo from "../assets/logo.png";

import "../styles/Navbar.css"
import "../styles/Home.css"


export function Navbar() {
    // Expandir o men
    function menuMobile() {
        const menu_bar = document.querySelector(".menu-bar")
        if (menu_bar.style.display == "none") {
            menu_bar.style.display = "flex"
        } else {
            menu_bar.style.display = "none"
        }
    }

    //scroll
    const menuItems = document.querySelectorAll(".menu-bar a[href^='#']")
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })
    function scrollToIdOnClick(item) {
        item.preventDefault();
        const element = item.target;
        const id = element.getAttribute("href");
        const to = document.querySelector(id).offsetTop;
        console.log(to)
        window.scroll({
            top: to,
            behavior: "smooth"
        })
    }
    return (
        <header
            style={{ backgroundImage: `url(${backgroundTop})` }}>
            <div className="navbar">
                <div className="menu-bar">
                    <img src={Logo} alt="Logo" />
                    <a href="#home">HOME</a>
                    <a href="#products">OUR PRODUCTS</a>
                    <a href="#about">ABOUT US</a>
                    <a href="#shop">SHOP</a>
                    <a href="#new">NEW PRODUCTS</a>
                </div>
                <div className="menuMobile" onClick={menuMobile}>
                    <MenuIcon/>
                </div>
                <div className="profileIcon">
                    <AccountCircleIcon />
                    <ShoppingCartIcon />
                    <DensityMediumIcon />
                </div>
            </div>
            <div className="home" id="home">
                <form action="#" method="GET">
                    <div className="search">
                        <span className="searchIcon"><SearchIcon /></span>
                        <input type="text" name="search" className="inputSearch" placeholder="search - categories" />
                    </div>
                </form>
                <div className="homeInfo">
                    <div className="infoLeft">
                        <h1>World’s Best Lakadang<br />Turmeric Powder</h1>
                        <p>8 - 10% CURCUMIN</p>
                        <a href="#">SHOP</a>
                    </div>
                    <div className="infoRight">
                        <h1>WHY SATWA?</h1>
                        <p>
                            This is a 100% vegetarian product.
                            Also known as Red Turmeric. Lakadong
                            Turmeric Powder has up to 8-10% Curcumin
                            proven content. Lakadong Turmeric Powder is
                            sourced directly from the farmers in Jaintia
                            Hills of Meghalaya.
                        </p>
                    </div>
                </div>
            </div>
        </header >
    )
}