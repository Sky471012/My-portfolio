import './navbar.css'

function Navbar({show}) {

    return (<>
        <nav className={`navbar ${show ? "navbar-visible" : ""}`}>
            <div className="navdiv">
                <div className="logo"><a href="index.html"><img src="\src\assets\logo.jpg" alt="logo" /></a></div>
                <ul className="menu">
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#about">About</a></li>
                    <li className="menu-item"><a href="#projects">Projects</a></li>
                    <li className="menu-item"><a href="#contact">
                        Contact<img src="\src\assets\Arrow-up-right-06.png"/></a></li>
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar;