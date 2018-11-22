import React from 'react'
import '/Users/bethanymitch/portfolio-site/portfolio/src/assets/NavBar.css'

const Home = () => {
    return (
        <div>
        <nav>
            <ul className="topnav">
            <li><a className="active" href="#top">Bethany Mitch</a></li>
            <li className="right"><a href="#contact">Contact</a></li>
            <li className="right"><a href="#about">About</a></li>
            <li className="right"><a href="#resume">Resume</a></li>
            <li className="right"><a href="#projects">Projects</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Home