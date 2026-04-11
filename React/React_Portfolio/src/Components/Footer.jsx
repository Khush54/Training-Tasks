import React from 'react'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <>
    <footer>
      <hr/>
         <h2>KHUSHPREET KAUR</h2>
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
        <div class="social">
            <a href="https://github.com/Khush54"><img src={Github} alt="GitHub"></img></a>
            <a href="https://www.linkedin.com/in/khushpreet-kaur-325542325/"><img src={Linkedin} alt="LinkedIn"></img></a>
        </div>
        <p>&copy; 2026 Khushpreet Kaur. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer