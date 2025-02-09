import React, { useState, useEffect } from "react"
import Navbar from "./Navbar/Navbar.jsx"
import Header from "./Header/Header.jsx"
import Education from "./Education/Education.jsx"
import Projects from "./Projects/Projects.jsx"
import Contact from "./Contact/Contact.jsx"
import About from "./About/About.jsx"
import Skills from "./Skills/Skills.jsx"
import './index.css'

function App() {
  const [showNavbar, setshowNavbar] = useState(false);

  useEffect(()=>{
    const handlescroll=()=>{
      const headerHeight = document.getElementById("header").offsetHeight;
      const scrollPosition = window.scrollY;
      setshowNavbar(scrollPosition>=headerHeight);
    };
    window.addEventListener("scroll", handlescroll);
    return()=> window.removeEventListener("scroll", handlescroll)
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar show={showNavbar}/>
      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/> 
    </div>
  )
}

export default App
