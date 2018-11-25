import React, { Fragment } from 'react'

const Resume = () => {
    return (
        <Fragment>
        <div id="resume" className="resume">
            <section className="resumeSection">
                <h2>Bethany's Experience at a Glance</h2>
                <ul className="experience">
                    <li>Technologies: React.js, Vue.js, Node.js, Express.js, PostgreSQL, Firebase, Heroku, Postman, VSCode, Git, GitHub, HTML5/CSS3, and Flexbox
                    </li>
                    <li>Techniques: Pair Programming, API Integration, Time Management, Product Management, and Agile Methodologies</li>
                    <li>Soon-to-be Galvanize Web Immersive Grad</li>
                    <li>Rock Climbing Instructor</li>
                </ul>
            </section>
            <div className="resumeHolder">
                {/* <img src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552" alt="Resume"></img> */}
                <a href="https://drive.google.com/uc?export=download&id=1G2e6elyor3KQ8gs0pZrIRXNkXmL8NWjj">
                    <div className="resumeButton">Download Bethany's Resume</div>
                </a>
            </div>
        </div>
        </Fragment>
    )
}

export default Resume