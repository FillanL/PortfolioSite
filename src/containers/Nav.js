import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSSfiles/nav.css'

export class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                        Logo
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects'>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/resume'>
                        Resume
                        </Link>
                    </li>
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
