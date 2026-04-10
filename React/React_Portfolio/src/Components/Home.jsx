import React from 'react'
import Profile from '../assets/profile.jpg'

function Home() {
    return (
        <>
            <section id="home">
                <div>
                    <p id="intro">Hi I am</p>
                    <p id="name">Khushpreet Kaur</p>
                    <h1 id="web">WEB</h1>
                    <h1 id="developer">DEVELOPER</h1>
                    <p id="home-para">Passionate about creating clean, user-friendly, and visually appealing web interfaces with
                        modern technologies.</p>
                </div>
                <div>
                    <img src={Profile} alt="Khushpreet Kaur Profile"></img>
                </div>
            </section>
        </>
    )
}

export default Home