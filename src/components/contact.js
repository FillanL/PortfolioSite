import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                add contact 

                <form>
                    <label>email</label>
                    <br></br>
                    <input type="email"></input>
                    <br></br>
                    <label> Message</label>
                    <br></br>
                    <input type="textarea"></input>
                </form>
                
            </div>
        )
    }
}
