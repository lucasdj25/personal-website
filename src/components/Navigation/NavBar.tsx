import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        let list = document.getElementById("navlist")

    }
    let setCurrent = (event: any) => {
        let list = document.getElementById("navlist")
        let items = list?.getElementsByTagName("li")
        for (var i = 0; i < items!.length; ++i) {
            if (items![i].classList.contains("current")) {
                items![i].classList.remove("current")
                break
            }
        }
        event.target.parentElement.classList.add("current")
    }



    return (
        <nav id="navbar">
            <ul id="navlist">
                <li className='current'><a onClick={setCurrent} href="#home-section">HOME</a></li>
                <li><a onClick={setCurrent} href="#about-section">ABOUT</a></li>
                <li><a onClick={setCurrent} href="#resume-section">RESUME</a></li>
                <li><a onClick={setCurrent} href="#projects-section">PROJECTS</a></li>
                <li><a onClick={setCurrent} href="#contact-section">CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;