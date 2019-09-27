import React, { Component } from 'react'

import '../CSSfiles/project_explore.scss'


export class ProjectsExplore extends Component {
    render() {
        const projects =  [{name:"datingapp"},{name:"which way"},{name:"lemede"},{name:"blogz"}]

        console.log();
        
        return (
            <div>
                {/* ProjectsExplore */}
                <div className="projects-container">
                    {projects.map(p=> 
                        <div className="project-box-explore" key={p.name}>
                            <p>
                            {p.name}
                            </p>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsExplore
