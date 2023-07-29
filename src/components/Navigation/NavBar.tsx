import { useEffect, useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

    // TODO - Add transition in mobile screen

    const [scrolled, setScrolled] = useState(true)
    const [currentSection, setCurrentSection] = useState('home-section')
    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 610 ? true : false)
    const [navDisplayed, setNavDisplayed] = useState(false)

    function handleScroll() {
        const sectionEls = document.querySelectorAll(".section") as NodeListOf<HTMLElement>
        sectionEls.forEach(sectionEl => {
            if(window.scrollY >= sectionEl.offsetTop - 275){
                setCurrentSection(sectionEl.id)
                if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
                    setCurrentSection("contact-section")
                }
                if(sectionEl.id !== "home-section"){
                    setScrolled(true)
                }else{
                    // eslint-disable-next-line eqeqeq
                    if(window.scrollY == 0){
                        setScrolled(true)
                    }else{
                        setScrolled(false)
                    }
                }
            }
        })
    }

    function handleResize(){
        if(window.innerWidth <= 610){
            setSmallScreen(true)
        }else{
            setSmallScreen(false)
        }
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])


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
            {smallScreen && 
                <div className='icon-div'>
                    <FontAwesomeIcon icon={faBars} id='hamburger-icon' onClick={()=> {setNavDisplayed(!navDisplayed)}}/>
                </div>
            }
                <ul id="navlist" className={navDisplayed && smallScreen ? 'nav-opened' : ''}>
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