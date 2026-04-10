import React from 'react'
import LMS from '../assets/lms.png'
import Traveller from '../assets/traveller.png'

function Projects() {
  return (
    <>
      <section id="projects">
        <h1>My Projects</h1>
        <div className="project-list">
            <div className="project-item">
                <img src={LMS} alt="Library Management System"></img>
                <h2>Library Management System</h2>
                <p>A web-based application using PHP, MySQL, HTML, CSS, and JavaScript for managing books, students, issue/return records, and previous year questions.</p>
            </div>
            <div className="project-item">
                <img src={Traveller} alt="Traveller App"></img>
                <h2>Traveller App</h2>
                <p>A responsive tourism website highlighting India's cultural diversity using HTML, CSS, and Bootstrap with beautiful layouts and animations.</p>
            </div>
        </div>
    </section>

    </>
  )
}

export default Projects