import { useEffect, useState } from 'react';
import './NavBar.css';


function NavBar() {

    const [scrolled, setScrolled] = useState(false)
    const [currentSection, setCurrentSection] = useState('home-section')

    const sectionEls = document.querySelectorAll(".section") as NodeListOf<HTMLElement>

    window.addEventListener("scroll", ()=> {
        sectionEls.forEach(sectionEl => {
            if(window.scrollY >= sectionEl.offsetTop - 90){
                setCurrentSection(sectionEl.id)
                if(sectionEl.id !== "home-section"){
                    setScrolled(true)
                }else{
                    setScrolled(false)
                }
            }
        })
    })

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
        <nav id="navbar" className={scrolled ? "navbar-scrolled" : ''}>
            <ul id="navlist">
                <li className='current'><a href="#home-section">HOME</a></li>
                <li><a href="#about-section" className='navlink'>ABOUT</a></li>
                <li><a href="#resume-section"className='navlink'>RESUME</a></li>
                <li><a href="#projects-section"className='navlink'>PROJECTS</a></li>
                <li><a href="#contact-section"className='navlink'>CONTACT</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;