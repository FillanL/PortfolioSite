import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../CSSfiles/footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <h2 className="Logo">
                    LOGO
                </h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                YouTube
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Inquires
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Last
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}
