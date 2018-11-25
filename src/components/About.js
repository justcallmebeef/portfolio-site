import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
        <div id="about" className="about">
            <h2>About Bethany</h2>
                <section className="section">
                <p>Hello! My name is Bethany, but everyone calls me Beef. 
                <ul>
                    <li>Born and raised in Wisconsin - a true cheesehead at heart</li>
                    <li>BA in Mass Communication with a minor in Computer Science</li>
                    <li>Studied abroad in Scotland</li>
                    <li>Lived in Minneapolis, MN while working in Advertising</li>
                    <li>Moved to Colorado to work for Avid 4 Adventure</li>
                    <li>After hours:
                        <ul>
                            <li>Rock Climbing</li>
                            <li>Ultimate Frisbee</li>
                            <li>Volleyball</li>
                            <li>Camping</li>
                            <li>Reading</li>
                        </ul>
                    </li>
                </ul>
                </p>
                </section>
        </div>
        </Fragment>
    )
}

export default About