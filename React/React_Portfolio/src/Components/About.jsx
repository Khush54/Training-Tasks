import React from 'react'

function About() {
  return (
    <>
      <section id="about">
        <h1>About Me</h1>
        <div className="about-content">
            <p>Dynamic and results-driven intern with hands-on experience in responsive web design and UI/UX
                enhancement. Proficient in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. Passionate about creating
                clean, user-friendly, and visually appealing interfaces that deliver exceptional user experiences.</p>
            <div className="about-skills">
                <div className="html">
                    <p>HTML</p>
                    <progress value="90" max="100"></progress>
                </div>
                <div className="css">
                    <p>CSS</p>
                    <progress value="85" max="100"></progress>
                </div>
                <div className="javascript">
                    <p>JavaScript</p>
                    <progress value="50" max="100"></progress>
                </div>
                <div className="bootstrap">
                    <p>Bootstrap</p>
                    <progress value="90" max="100"></progress>
                </div>
                <div className="tailwind">
                    <p>Tailwind CSS</p>
                    <progress value="80" max="100"></progress>
                </div>
                <div className="sql">
                    <p>SQL</p>
                    <progress value="50" max="100"></progress>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About