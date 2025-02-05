import './about.css'

function About(){
    return(<>
        <div id='about' className="about">
            <h1>About Me</h1>
            <div className='about-container'>
                <img className="profilePhoto" src="\src\assets\profile-photo.jpg" alt="profile-photo" />
                <div className="vertical-divider"></div>
                <div className="section">
                    <p >I'm Aakash Sharma, a passionate Full-Stack Developer and Graphic Designer with a strong background in Information Technology. My expertise spans full-stack web development and creative design, where I excel at building dynamic web applications and visually compelling designs. As a hackathon enthusiast and problem solver, I am committed to leveraging my skills in HTML, CSS, JavaScript, React, Node.js, and graphic design tools like Photoshop and Illustrator to craft innovative digital solutions. My drive for continuous learning keeps me at the forefront of the ever-evolving tech landscape.</p>
                    <a href="https://drive.google.com/file/d/1U4n6GkcGgXnvlzjBf9xNlbaDop5nJXkd/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><span>Resume <i className="fa-solid fa-arrow-up-right-from-square"></i></span></a>
                </div>
            </div>
        </div>
    </>)
}

export default About