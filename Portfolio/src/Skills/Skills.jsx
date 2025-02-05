import './skills.css'

function Skills() {
    return(<>
    <div className='skills'>
        <h1>My Skills & Experiences</h1>
        <div className="skills-container">
            <div className="skill">
                <h2>Web-Devlopment</h2>
                <hr />
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript(ES6+)</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>React.js</li>
                </ul>
            </div>
            <div className="skill">
                <h2>Programming Languages</h2>
                <hr />
                <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="skill">
                <h2>Graphic Designing</h2>
                <hr />
                <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>CorelDraw</li>
                    <li>Canva</li>
                </ul>
            </div>
        </div>
    </div>  
    </>)
}

export default Skills