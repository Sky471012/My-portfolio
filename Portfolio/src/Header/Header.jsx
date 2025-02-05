import React, {useState, useEffect} from 'react';
import './header.css'

function Header() {

  const texts = ['Web Developer', 'Graphic Designer']; // Texts to cycle through
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200); // Adjust speed for typing/backspacing

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % texts.length;
      const fullText = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      setTypingSpeed(isDeleting ? 100 : 200); // Speed up when deleting

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, loopNum, texts, typingSpeed]);

    return(
    <>
        <div id="header" className="header">
            <nav className="h-navbar">
                <div className="h-navdiv">
                    <div className="h-logo"><a href="index.html"><img src="\src\assets\logo.jpg" alt="logo" /></a></div>
                    <ul className="h-menu">
                        <li className="h-menu-item"><a href="#">Home</a></li>
                        <li className="h-menu-item"><a href="#about">About</a></li>
                        <li className="h-menu-item"><a href="#projects">Projects</a></li>
                        <li className="h-menu-item"><a href="#contact">Contact<img src="\src\assets\Arrow-up-right-06.png"></img></a></li>
                    </ul>
                </div>
            </nav>

            <div className="intro">
                <div className="introduction">
                    <img src="\src\assets\Arrow-down-right-06.png" alt="" />
                    <p>A versatile creator skilled in full-stack web development and graphic design. I craft dynamic, user-focused digital experiences and visually compelling designs that engage audiences and elevate brands.</p>
                </div>

                <div>
                    <div className='bioData'>
                        <span>Hi there! I'm<br></br></span>
                        <h1 className='name'>Aakash</h1>
                        <p className='bio'>A {currentText}<span className='blinking-text'>|</span></p>
                        <div className="link">
                            <a href="https://www.linkedin.com/in/aakash-sharma-a178062a7" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.github.com/Sky471012" className="github"><i className="fa-brands fa-square-github"></i></a>
                            <a href="https://www.instagram.com/sky_101247" className="instagram"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header;