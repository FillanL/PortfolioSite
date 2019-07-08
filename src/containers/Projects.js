import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../CSSfiles/home.css'

class Projects extends Component {
    render() {
        // console.log(this.props, this.props.match);
        
        return (
            <div>
                <h2>## Latest Projects </h2>
                <div style={{backgroundColor:"green",width:"100%", height:"300px"}}>
                    <div className="latest-project-container">
                      
                    </div>
                    <Link to="/projects">Show All</Link>
                </div>
            </div>
        )
    }
}

export default Projects
