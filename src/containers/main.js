import React, { Component } from 'react'
import Projects from './Projects'
// import ProjectsExplore from './ProjectsExplore'
import Resume from '../components/Resume'
import '../CSSfiles/home.scss'

export class main extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="greeting">
                   <h3>Fillan Lee</h3>
                   <p>student for life</p>
                </div>
                <Projects/>
                <Resume/>
                {/* <ProjectsExplore/> */}
            </div>
        )
    }
}

export default main
