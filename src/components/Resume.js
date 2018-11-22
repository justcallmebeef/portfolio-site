import React, { Fragment } from 'react'
import '/Users/bethanymitch/portfolio-site/portfolio/src/assets/Resume.css'

const Resume = () => {
    return (
        <Fragment>
        <div id="resume" className="resume">
            <h1>Resume</h1>
            <a target="_blank" href="src/assets/BethanyMitchResumeImage.jpg">
                <img src="data:image/png;base64,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" alt="Resume"></img>
            </a>
        </div>
        </Fragment>
    )
}

export default Resume