import React, { Fragment } from 'react'
import '/Users/bethanymitch/portfolio-site/portfolio/src/assets/Project.css'

const Project = () => {
    return (
        <Fragment>
        <div id="projects" className="projects">
        {/* <h1>Projects</h1> */}
            <div className="responsive">
                <div className="gallery">
                    <a target="_blank" href="https://github.com/justcallmebeef/travel-wish-list">
                        <img src="https://images.unsplash.com/photo-1519893578517-3252b77e8fdf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=360a6f43b0507da46c0a9259c42fa265&auto=format&fit=crop&w=1049&q=80" alt="project" width="300" height="200"></img>
                    </a>
                    <div className="desc"><h3>Project 1:</h3>
                        <p id="projectDesc">Travel Wish List</p>
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="https://github.com/justcallmebeef/react-inbox">
                        <img src="https://images.unsplash.com/photo-1519893578517-3252b77e8fdf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=360a6f43b0507da46c0a9259c42fa265&auto=format&fit=crop&w=1049&q=80" alt="project" width="300" height="200"></img>
                    </a>
                    <div className="desc"><h3>Project 2:</h3>
                        <p id="projectDesc">React Inbox</p>
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="https://github.com/justcallmebeef/vue-bookstore">
                        <img src="https://images.unsplash.com/photo-1519893578517-3252b77e8fdf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=360a6f43b0507da46c0a9259c42fa265&auto=format&fit=crop&w=1049&q=80" alt="project" width="300" height="200"></img>
                    </a>
                    <div className="desc"><h3>Project 3:</h3>
                        <p id="projectDesc">Vue Bookstore</p>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Project