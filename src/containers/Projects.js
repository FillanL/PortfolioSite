import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../CSSfiles/home.scss'


class Projects extends Component {
    render() {
        const projects =  [{name:"datingapp"},{name:"which way"},{name:"lemede"},{name:"blogz"}]
        return (
            <div className="latest-projects">
                <h2>## Latest Projects </h2>
                <div style={{width:"100%", height:"300px"}}>
                    <div className="latest-project-container">
                        <div className="projects-container">
                            {projects.map(p=> 
                                <div className="project-box" key={p.name} style={{backgroundImage: "url(https://source.unsplash.com/random/250x250)"}}>
                                    <p style={{"color": "white"}}>
                                        {p.name}
                                    </p>
                                </div>)
                            }
                        </div>
                    </div>
                    <Link id="show-all" to="/projects">Show All</Link>
                </div>
            </div>
        )
    }
}

export default Projects
