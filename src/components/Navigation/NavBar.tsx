import { useEffect } from 'react';
import './NavBar.css';

interface NavBarProps {
    currentSection: string
}

function NavBar({currentSection}: NavBarProps) {

    function clearCurrent() {
        let list = document.getElementById("navlist")
        let items = list?.getElementsByTagName("li")
        for (var i = 0; i < items!.length; ++i) {
            if (items![i].classList.contains("current")) {
                items![i].classList.remove("current")
                break
            }
        }
    }

    useEffect(()=> {
        let list = document.getElementById("navlist")
        let items = list?.getElementsByTagName("a")
        for (var i = 0; i < items!.length; ++i) {
            if (items![i].getAttribute("href") === `#${currentSection}`) {
                clearCurrent()
                items![i].parentElement?.classList.add("current")
                break
            }
        }
    },[currentSection])



    return (
        <nav id="navbar">
            <ul id="navlist">
                <li className='current'><a href="#home-section">HOME</a></li>
                <li><a href="#about-section">ABOUT</a></li>
                <li><a href="#resume-section">RESUME</a></li>
                <li><a href="#projects-section">PROJECTS</a></li>
                <li><a href="#contact-section">CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;