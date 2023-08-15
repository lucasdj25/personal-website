import React, { useEffect, useRef, useState } from 'react';
import './MobileNavigationBar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileNavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState('home-section')
  const linksContainerRef = useRef<HTMLDivElement>(null);

  useEffect(()=> {
      window.addEventListener("scroll", handleScroll)

      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const containerHeight = linksContainerRef.current?.scrollHeight;
      linksContainerRef.current!.style.height = containerHeight + 'px';
    } else {
      linksContainerRef.current!.style.height = '0';
    }
  }, [isOpen]);

  useEffect(()=> {
    let list = document.getElementById("mobile-nav-list")
    let items = list?.getElementsByTagName("a")
    for (var i = 0; i < items!.length; ++i) {
        if (items![i].getAttribute("href") === `#${currentSection}`) {
            clearCurrent()
            items![i].classList.add("mobile-current")
            break
        }
    }
  },[currentSection])

  function handleScroll() {
    const sectionEls = document.querySelectorAll(".section") as NodeListOf<HTMLElement>
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= sectionEl.offsetTop - 275){
            setCurrentSection(sectionEl.id)
            if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
                setCurrentSection("contact-section")
            }
        }
    })
  }

  function clearCurrent() {
    let list = document.getElementById("mobile-nav-list")
    let items = list?.getElementsByTagName("a")
    for (var i = 0; i < items!.length; ++i) {
        if (items![i].classList.contains("mobile-current")) {
            items![i].classList.remove("mobile-current")
            break
        }
    }
  }

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : 'closed'}`}  onClick={toggleNav}>
      <div className="button-container">
        <FontAwesomeIcon icon={faBars} id='hamburger-icon'/>
      </div>
      <div 
        id='mobile-nav-list'
        ref={linksContainerRef}
        className={`links-container ${isOpen ? 'open' : 'closed'}`}
      >
          <a href="#home-section" className='mobile-current'>HOME</a>
          <a href="#about-section">ABOUT</a>
          <a href="#resume-section">RESUME</a>
          <a href="#projects-section">PROJECTS</a>
          <a href="#contact-section">CONTACT</a>
      </div>
    </div>
  );
};

export default MobileNavigationBar;

