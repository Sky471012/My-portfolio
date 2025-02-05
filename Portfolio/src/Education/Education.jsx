import './education.css'

function Education() {
    return (
    <>
        <div className="education">
                <h1>EDUCATION</h1>
            <div className="qualificationdiv">

                <div className="qualification left">
                    <img src=".\src\assets\circle.png" alt="circle" />
                    <div className='qualificationtext'>
                        <h2>Secondary Education</h2>
                        <hr />
                        <div>
                            <p>
                                School: <b>Government Boys Senior Secondary School</b><br></br>
                                Completion Year: <b>2020</b><br></br>
                                Percentage: <b>92.8</b><br></br>
                            </p>
                            <div className="left-arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="qualification right">
                <img src=".\src\assets\circle.png" alt="circle" />
                    <div className=' qualificationtext'>
                        <h2>Senior Secondary Education</h2>
                        <hr />
                        <div>
                            <p>
                                School: <b>Government Boys Senior Secondary School</b><br></br>
                                Completion Year: <b>2022</b><br></br>
                                Percentage: <b>90.0</b><br></br>
                            </p>
                            <div className="right-arrow"></div>
                        </div>
                    </div>
                    
                </div>
                <div className="qualification left">
                    <img src=".\src\assets\circle.png" alt="circle" />
                    <div className=' qualificationtext'>
                        <h2>Graduation</h2>
                        <hr />
                        <div>
                            <p>
                                Institute: <b>Maharaja Surajmal Institute of Technology</b><br></br>
                                University: <b>Guru Gobind Singh Indraprastha University</b><br></br>
                                Completion Year: <b>2027</b><br></br>
                                CGPA: <b>9.08</b><br></br>
                            </p>
                            <div className="left-arrow"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Education;