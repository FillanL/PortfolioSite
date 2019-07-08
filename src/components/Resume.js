import React, { Component } from 'react'

export class Resume extends Component {
    render() {
        return (
            <div>
               
                <h2>## Experience</h2>
                <ul>
                    <li>Durante Rentals</li>
                </ul>

                <h2>## Education</h2>
                <ul>
                    <li>Flatiron School</li>
                    <li>Youngstown State University</li>
                    <ul>
                        <li>Accounting</li>
                    </ul> 
                </ul>
                <h2>## Skills</h2>
                <ul>
                    <li>Stock options</li>
                </ul>

            </div>
        )
    }
}

export default Resume
