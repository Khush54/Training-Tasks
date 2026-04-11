import React from 'react'
import LMS from '../assets/lms.png'
import Traveller from '../assets/traveller.png'

function Projects() {
  return (
    <>
      <section id="projects">
        <hr />
        <h1>My Projects</h1>
        <div className="project-list">
          <div className="project-card">
            <div className="left">
              <h3>Library Management System</h3>
              <p>A web-based application using PHP, MySQL, HTML, CSS, and JavaScript for managing books, students, issue/return records, and previous year questions.</p>
              <button><a href="https://lms-easy.infinityfreeapp.com/">Live Demo</a></button>
              <button><a href="https://github.com/Khush54/LMS">GitHub</a></button>
            </div>

            <div className="right">
              <img src={LMS} alt="Library Management System"></img>
            </div>
          </div>
          <div className="project-card">
            <div className="left">
              <h3>Traveller App</h3>
              <p>A responsive tourism website highlighting India's cultural diversity using HTML, CSS, and Bootstrap with beautiful layouts and animations.</p>
              <button><a href="https://traveller-easywaytoexplore.netlify.app/">Live Demo</a></button>
              <button><a href="https://github.com/Khush54/Traveller">GitHub</a></button>
            </div>

            <div className="right">
              <img src={Traveller} alt="Traveller App"></img>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Projects