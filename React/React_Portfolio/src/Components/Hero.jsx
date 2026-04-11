import React from 'react'
import Profile from '../assets/profile.jpg'

function Hero() {
    return (
        <>
            <section id="hero">
                <div>
                    <p id="intro">Hi I am</p>
                    <p id="name">Khushpreet Kaur</p>
                    <h1 className="gradient-title">Web  Developer</h1>
                    <p id="home-para">Passionate about creating clean, user-friendly, and visually appealing web interfaces with
                        modern technologies.</p>
                    <div class="hero-btns">
                        <a href="#projects"><button className="primary">View Projects</button></a>
                    </div>
                </div>
                <div>
                    <img src={Profile} alt="Khushpreet Kaur Profile"></img>
                </div>
            </section>
        </>
    )
}

export default Hero