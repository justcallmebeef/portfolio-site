import React, { Fragment } from 'react'
import '/Users/bethanymitch/portfolio-site/portfolio/src/assets/Resume.css'

const Resume = () => {
    return (
        <Fragment>
        <div id="resume" className="resume">
            <a href="https://drive.google.com/uc?export=download&id=1G2e6elyor3KQ8gs0pZrIRXNkXmL8NWjj">
            <div className="resumeButton">Download Bethany's Resume</div>
            </a>
                <img src="/Users/bethanymitch/portfolio-site/portfolio/src/assets/BethanyMitchResumeImage.jpg" alt="Resume"></img>
        </div>
        </Fragment>
    )
}

export default Resume