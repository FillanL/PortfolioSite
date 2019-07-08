import React, { Component } from 'react'
import Projects from './Projects'
// import ProjectsExplore from './ProjectsExplore'
import Resume from '../components/Resume'

export class main extends Component {
    render() {
        return (
            <div>
             
                <Projects/>
                <Resume/>
                {/* <ProjectsExplore/> */}
            </div>
        )
    }
}

export default main
