import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSSfiles/nav.scss'

export class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    <span className="spacer"></span>
                    <li>
                        <Link to='/projects'>
                        Projects
                        </Link>
                    </li>
                    <span className="spacer"></span>
                    <li>
                        <Link to='/resume'>
                        Resume
                        </Link>
                    </li>
                    <span className="spacer"></span>
                    <li>
                        <Link to="/contact">
                        Contact
                        </Link>
                    </li>
                </ul>
                
            </nav>
        )
    }
}

export default Nav
