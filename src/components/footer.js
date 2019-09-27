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
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>
                            <Link to="/">
                                Next
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Next
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Next
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Next
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
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
